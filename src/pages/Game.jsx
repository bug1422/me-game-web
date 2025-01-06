import api from "@/api/axios"
import Breadcrumbs from "@/components/Breadcrumb"
import Comment from "@/components/Comment"
import Loading from "@/components/Loading"
import { getGamePath, getMockGameDetail, getMockGames } from "@/mock/game"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const GamePage = () => {
    const [isLoading, setLoading] = useState(true)
    const [game, setGame] = useState()
    const { id } = useParams()

    useEffect(() => {
        getGameDetail(id)
    }, [])

    useEffect(() => {
        if (game !== null)
            setLoading(false)
    }, [game])

    async function getGameDetail(id) {
        if (import.meta.env.VITE_ENV == 'TESTING') {
            setGame(await getMockGameDetail())
            return
        }
        api.get(`games/detail/${id}`)
            .then((res) => {
                setGame(res.data.response)
                setLoading(false)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    return (
        <div className="grid grid-cols-1">
            <div className="w-full">
                <Breadcrumbs />
            </div>
            <div className="bg-zinc-700 grid justify-items-center rounded-md">
                <div className="">
                    <div className="w-[640px] h-[640px]">
                        <Loading isLoading={isLoading}>
                            <iframe frameBorder="0" src={game?.embedded_link} allowFullScreen="" width="640" height="640"><a href={game?.ref_link}>Play Snake game on itch.io</a></iframe>
                        </Loading>
                        {/* <img className="object-fit" src="https://placehold.co/600x400" /> */}
                    </div>
                </div>
            </div>
            <div className="min-h-24 bg-red-100">
                game controls
            </div>
            <div className="mt-4 grid grid-cols-7 gap-3">
                <div className="col-span-5 flex flex-col">
                    {/* Description */}
                    <div className="bg-white rounded-md pt-2 px-5 min-h-64">
                        <div className="flex justify-between ">
                            <div className="text-3xl font-bold">
                                Game Description
                            </div>
                            <div>
                                {!isLoading && <div className="flex flex-row space-x-4">
                                    <div>
                                        upvote - {game?.upvote}
                                    </div>
                                    <div>
                                        downvote - {game?.downvote}
                                    </div>
                                </div>}
                            </div>
                        </div>

                        <div className="ms-5">
                            <Loading isLoading={isLoading}>
                                {game?.description}
                            </Loading>
                        </div>
                    </div>
                    {/* Comment */}
                    <div className="bg-white rounded-md mt-3 pb-3 divide-y-2">
                        <div className="text-3xl font-bold mt-2 ms-5">
                            Comments
                        </div>
                        <div className="px-4">
                            <Loading isLoading={isLoading}>
                                <div className="overflow-hidden overflow-y-scroll min-h-[180px] max-h-[350px]">
                                    {
                                        game?.comments?.map((v, i) => (
                                            <Comment key={i} comment={v} />
                                        ))
                                    }
                                </div>
                            </Loading>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="bg-white rounded-md">
                        <div className="text-3xl font-bold m-2 ms-5">
                            My Other Games
                        </div>
                        {[1, 2, 3, 4, 5].map((v, i) => (
                            <div className="flex flex-row m-4">
                                <div className="w-[32px] h-[32px]">
                                    <img className="object-fit" src="https://placehold.co/600x400" />
                                </div>
                                <div className="ms-2">
                                    #{v} game
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-white rounded-md mt-3">
                        <div className="text-3xl font-bold m-2 ms-5">
                            Report
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default GamePage