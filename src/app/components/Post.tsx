import Image from "next/image"
import Comments from "./Comments"

const Post = () => {
    return (
        <div className='flex flex-col gap-4'>
            {/* USER */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image
                        src="https://images.pexels.com/photos/27555584/pexels-photo-27555584.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        className="w-10 h-10 rounded-full"
                        width={40}
                        height={40}
                    />
                    <span className="font-medium">Jesse</span>
                </div>
                <Image
                    src="/more.png"
                    alt=""
                    width={16}
                    height={16}
                    className="cursor-pointer"
                />
            </div>
            {/* DESCRIPTION */}
            <div className="flex flex-col gap-4">
                <div className="w-full min-h-96 relative">
                    <Image
                        src="https://images.pexels.com/photos/28833016/pexels-photo-28833016.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        fill
                        className="object-cover rounded-md"
                    />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, est eos mollitia rem eius id beatae corrupti aperiam? Laboriosam rem distinctio ducimus doloribus recusandae reprehenderit blanditiis est nam quae earum!</p>
            </div>
            {/* INTERACTION */}
            <div className="flex items-center justify-between text-sm my-4">
                <div className="flex gap-8">
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image
                            src="/like.png"
                            alt=""
                            width={16}
                            height={16}
                            className="cursor-pointer"
                        />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">
                            123
                            <span className="hidden md:inline"> Likes</span>
                        </span>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image
                            src="/comment.png"
                            alt=""
                            width={16}
                            height={16}
                            className="cursor-pointer"
                        />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">
                            123
                            <span className="hidden md:inline"> Comments</span>
                        </span>
                    </div>
                </div>
                <div className="">
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image
                            src="/share.png"
                            alt=""
                            width={16}
                            height={16}
                            className="cursor-pointer"
                        />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">
                            123
                            <span className="hidden md:inline"> Shares</span>
                        </span>
                    </div>
                </div>
            </div>
            <Comments />
        </div>
    )
}

export default Post