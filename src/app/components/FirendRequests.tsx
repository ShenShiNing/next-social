import Link from "next/link"
import Image from "next/image"

const FirendRequests = () => {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">Friend Requests</span>
                <Link href="/" className="text-blue-500 text-xs">See all</Link>
            </div>
            {/* USER */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image
                        src="https://images.pexels.com/photos/20466388/pexels-photo-20466388.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        className="w-10 h-10 rounded-full object-cover"
                        width={40}
                        height={40}
                    />
                    <span className="font-semibold">Wayne Burton</span>
                </div>
                <div className="flex gap-3 justify-end">
                    <Image
                        src="/accept.png"
                        alt=""
                        className="cursor-pointer"
                        width={20}
                        height={20}
                    />
                    <Image
                        src="/reject.png"
                        alt=""
                        className="cursor-pointer"
                        width={20}
                        height={20}
                    />
                </div>
            </div>
            {/* USER */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image
                        src="https://images.pexels.com/photos/20466388/pexels-photo-20466388.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        className="w-10 h-10 rounded-full object-cover"
                        width={40}
                        height={40}
                    />
                    <span className="font-semibold">Wayne Burton</span>
                </div>
                <div className="flex gap-3 justify-end">
                    <Image
                        src="/accept.png"
                        alt=""
                        className="cursor-pointer"
                        width={20}
                        height={20}
                    />
                    <Image
                        src="/reject.png"
                        alt=""
                        className="cursor-pointer"
                        width={20}
                        height={20}
                    />
                </div>
            </div>
            {/* USER */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image
                        src="https://images.pexels.com/photos/20466388/pexels-photo-20466388.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        className="w-10 h-10 rounded-full object-cover"
                        width={40}
                        height={40}
                    />
                    <span className="font-semibold">Wayne Burton</span>
                </div>
                <div className="flex gap-3 justify-end">
                    <Image
                        src="/accept.png"
                        alt=""
                        className="cursor-pointer"
                        width={20}
                        height={20}
                    />
                    <Image
                        src="/reject.png"
                        alt=""
                        className="cursor-pointer"
                        width={20}
                        height={20}
                    />
                </div>
            </div>
        </div>
    )
}

export default FirendRequests