"use client"

import Image from "next/image"
import { Story, User } from "@prisma/client"
import { useOptimistic, useState } from "react"
import { useUser } from "@clerk/nextjs"
import { CldUploadWidget } from "next-cloudinary"
import { addStory } from "@/lib/actions"

type StoryWithUser = Story & { user: User }

const StoryList = ({ stories, userId }: { stories: StoryWithUser[], userId: string }) => {
    const [storyListState, setStoryListState] = useState(stories)
    const [imageState, setImageState] = useState<any>()

    const { user, isLoaded } = useUser()

    const add = async () => {
        if (!imageState?.secure_url) return;
        setOptimisticStory({
            id: Math.random(),
            image: imageState.secure_url, 
            createdAt: new Date(Date.now()),
            expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
            userId: userId,
            user: {
                id: userId,
                username: "Sending...",
                avatar: user?.imageUrl || "/noAvatar.png",
                cover: "",
                description: "",
                name: "",
                surname: "",
                city: "",
                work: "",
                school: "",
                website: "",
                createdAt: new Date(Date.now()),
            }
        })

        try {
            const createdStory =  await addStory(imageState.secure_url)
            setStoryListState(prev=>[createdStory!, ...prev])
            setImageState(null)
        } catch (error) {
            
        }
    }

    const [optimisticStories, setOptimisticStory] = useOptimistic(
        storyListState,
        (state, value: StoryWithUser) => [value, ...state]
    )

    return (
        <>
            <CldUploadWidget
                uploadPreset="social"
                onSuccess={(result, { widget }) => {
                    setImageState(result.info)
                    widget.close
                }}
            >
                {({ open }) => {
                    return (
                        <div className="flex flex-col items-center gap-2 cursor-pointer relative">
                            <Image src={imageState?.secure_url || user?.imageUrl || "/noAvatar.png"} alt="avatar" width={80} height={80} className="w-20 h-20 rounded-full ring-2 object-cover" onClick={() => open()} />
                            {imageState ? (
                                <form action={add}>
                                    <button className="text-xs bg-blue-500 p-1 rounded-md text-white">Send</button>
                                </form>
                            ) : (<span className="font-medium">Add a story</span>)}
                            <div className="absolute text-6xl text-gray-200 top-1">+</div>
                        </div>
                    )
                }}
            </CldUploadWidget>


            {optimisticStories.map(story => (
                <div className="flex flex-col items-center gap-2 cursor-pointer" key={story.id}>
                    <Image src={story.user.avatar || "/noAvatar.png"} alt="avatar" width={80} height={80} className="w-20 h-20 rounded-full ring-2" />
                    <span className="font-medium">{story.user.name && story.user.surname ? story.user.name + " " + story.user.surname : story.user.username}</span>
                </div>
            ))}
        </>
    )
}

export default StoryList