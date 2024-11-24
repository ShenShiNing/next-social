import { User } from "@prisma/client"
import Ad from "@/components/Ad"
import Birthdays from "@/components/rightMenu/Birthdays"
import FirendRequests from "@/components/rightMenu/FirendRequests"
import UserInfoCard from "@/components/rightMenu/UserInfoCard"
import UserMediaCard from "@/components/rightMenu/UserMediaCard"
import { Suspense } from "react"

const RightMenu = ({user}: {user: User}) => {
  return (
    <div className='flex flex-col gap-6'>
      {user ? (
        <>
          <Suspense fallback="loading...">
            <UserInfoCard user={user} />
          </Suspense>
          <Suspense fallback="loading...">
            <UserMediaCard user={user} />
          </Suspense>
        </>
      ) : null}
      <FirendRequests />
      <Birthdays />
      <Ad size="md"/>
    </div>
  )
}

export default RightMenu