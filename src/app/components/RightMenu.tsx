import Ad from "./Ad"
import Birthdays from "./Birthdays"
import FirendRequests from "./FirendRequests"
import UserInfoCard from "./UserInfoCard"
import UserMediaCard from "./UserMediaCard"

const RightMenu = ({userId}: {userId?: string}) => {
  return (
    <div className='flex flex-col gap-6'>
      {userId ? (
        <>
          <UserInfoCard userId={userId} />
          <UserMediaCard userId={userId} />
        </>
      ) : null}
      <FirendRequests />
      <Birthdays />
      <Ad size="md"/>
    </div>
  )
}

export default RightMenu