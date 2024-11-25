"use client"

import prisma from "@/lib/client"
import { useUser } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import { CldUploadWidget } from "next-cloudinary"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import AddPostButton from "./AddPostButton"
import { addPost } from "@/lib/actions"

const AddPost = () => {
  const { user, isLoaded } = useUser()
  const [description, setDescription] = useState("")
  const [image, setImage] = useState<any>()

  if (!isLoaded) {
    return "Loading..."
  }

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATAR */}
      <Image
        src={user?.imageUrl || "/noAvatar.png"}
        alt="avatar"
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* POST */}
      <div className="flex-1">
        {/* TEXT INPUT */}
        <form action={(formData) => addPost(formData, image?.secure_url || "")} className="flex gap-4">
          <textarea placeholder="What's on your mind?" className="flex-1 bg-slate-100 rounded-lg p-2" name="description" onChange={(event) => { setDescription(event.target.value) }}></textarea>
          <div className="">
            <Image
              src="/emoji.png"
              alt="emoji"
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer self-end"
            />
            <AddPostButton />
          </div>
        </form>
        {/* POST OPTIONS */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">

          <CldUploadWidget
            uploadPreset="social"
            onSuccess={(result, { widget }) => {
              setImage(result.info)
              widget.close
            }}
          >
            {({ open }) => {
              return (
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => open()}>
                  <Image src="/addimage.png" alt="addImage" width={20} height={20} />
                  Photo
                </div>
              )
            }}
          </CldUploadWidget>

          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="addVideo" width={20} height={20} />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="poll" width={20} height={20} />
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="addEvent" width={20} height={20} />
            Event
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPost