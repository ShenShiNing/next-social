"use client"

import { acceptFollowRequest, declineFollowRequest } from "@/lib/actions"
import { User, FollowRequest } from "@prisma/client"
import Image from "next/image"
import { useOptimistic, useState } from "react"

type ReuqestWithUser = FollowRequest & {
    sender: User
}

const FriendRequestList = ({ requests }: { requests: ReuqestWithUser[] }) => {

    const [requestState, setRequestState] = useState(requests)

    const accept = async (requestId: number, userId: string) => {
        removeOptimisticRequest(requestId)
        try {
            await acceptFollowRequest(userId)
            setRequestState(prev => prev.filter((request) => request.id !== requestId))
        } catch (error) {

        }
    }

    const decline = async (requestId: number, userId: string) => {
        removeOptimisticRequest(requestId)
        try {
            await declineFollowRequest(userId)
            setRequestState(prev => prev.filter((request) => request.id !== requestId))
        } catch (error) {

        }
    }

    const [optimisticRequests, removeOptimisticRequest] = useOptimistic(
        requestState,
        (state, value: number) => state.filter((request) => request.id !== value)
    )
    return (
        <>
            {optimisticRequests.map(request => (
                <div className="flex items-center justify-between" key={request.id}>
                    <div className="flex items-center gap-4">
                        <Image
                            src={request.sender.avatar || "/noAvatar.png"}
                            alt=""
                            className="w-10 h-10 rounded-full object-cover"
                            width={40}
                            height={40}
                        />
                        <span className="font-semibold">{request.sender.name && request.sender.surname ? request.sender.name + " " + request.sender.surname : request.sender.username}</span>
                    </div>
                    <div className="flex gap-3 justify-end">
                        <form action={() => accept(request.id, request.senderId)}>
                            <button>
                                <Image
                                    src="/accept.png"
                                    alt=""
                                    className="cursor-pointer"
                                    width={20}
                                    height={20}
                                />
                            </button>
                        </form>

                        <form action={() => decline(request.id, request.senderId)}>
                            <button>
                                <Image
                                    src="/reject.png"
                                    alt=""
                                    className="cursor-pointer"
                                    width={20}
                                    height={20}
                                />
                            </button>
                        </form>

                    </div>
                </div>
            ))}
        </>
    )
}

export default FriendRequestList