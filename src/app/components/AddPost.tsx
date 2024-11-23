import Image from "next/image"
import Link from "next/link"

const AddPost = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATAR */}
      <Image
        src="https://images.pexels.com/photos/27940276/pexels-photo-27940276.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="avatar"
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* POST */}
      <div className="flex-1">
        {/* TEXT INPUT */}
        <div className="flex gap-4">
          <textarea placeholder="What's on your mind?" className="flex-1 bg-slate-100 rounded-lg p-2"></textarea>
          <Image
            src="/emoji.png"
            alt="emoji"
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end"
          />
        </div>
        {/* POST OPTIONS */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addimage.png" alt="addImage" width={20} height={20}/>
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="addVideo" width={20} height={20}/>
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="poll" width={20} height={20}/>
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="addEvent" width={20} height={20}/>
            Event
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPost