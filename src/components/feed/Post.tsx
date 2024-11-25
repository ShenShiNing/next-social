import Image from "next/image"
import Comments from "@/components/feed/Comments"
import { Post as PostType, User } from "@prisma/client"
import PostInteraction from "./PostInteraction"
import { Suspense } from "react"
import PostInfo from "./PostInfo"
import { auth } from "@clerk/nextjs/server"

type FeedPostType = PostType & { user: User } & { likes: [{ userId: string }] } & { _count: { comments: number } }

const Post = async ({ post }: { post: FeedPostType }) => {

    const {userId} = await auth()

    return (
        <div className='flex flex-col gap-4'>
            {/* USER */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image
                        src={post.user.avatar || "/noAvatar.png"}
                        alt=""
                        className="w-10 h-10 rounded-full"
                        width={40}
                        height={40}
                    />
                    <span className="font-medium">{(post.user.name && post.user.surname) ? post.user.name + " " + post.user.surname : post.user.username}</span>
                </div>
                {userId === post.user.id && <PostInfo postId={post.id}/>}
            </div>
            {/* DESCRIPTION */}
            <div className="flex flex-col gap-4">
                {post.image && <div className="w-full min-h-96 relative">
                    <Image
                        src={post.image}
                        alt=""
                        fill
                        className="object-cover rounded-md"
                    />
                </div>}
                <p>{post.description}</p>
            </div>
            {/* INTERACTION */}
            <Suspense fallback="Loading...">
                <PostInteraction postId={post.id} likes={post.likes.map(like => like.userId)} comments={post._count.comments} />
                <Comments postId={post.id} />
            </Suspense>

        </div>
    )
}

export default Post