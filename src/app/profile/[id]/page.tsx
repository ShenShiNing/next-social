import LeftMenu from "@/app/components/LeftMenu"
import RightMenu from "@/app/components/RightMenu"
import Feed from "@/app/components/Feed"
import Image from "next/image"

const ProfilePage = () => {
  return (
    <div className='flex gap-6 pt-6'>
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image src="https://images.pexels.com/photos/29027756/pexels-photo-29027756.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                alt="" 
                fill 
                className="object=cover rounded-md" 
              />
              <Image 
                src="https://images.pexels.com/photos/23017586/pexels-photo-23017586.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                alt="" 
                width={128}
                height={128}
                className="w-32 h-32 rounded-full absolute left-0 ring-0 m-auto object-cover -bottom-16 right-4 ring-white" 
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">Elva Weaver</h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">123</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">1.2K</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">13K</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="test"/>
      </div>
    </div>
  )
}

export default ProfilePage