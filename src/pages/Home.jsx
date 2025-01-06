import Card from "@/components/Card"
import GameList from "@/pages/GameList"
import { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import * as THREE from 'three'
import WallpaperHomeBanner from "@/components/HomeBanner/Wallpaper"
import api from "@/api/axios"
import { getMockGames } from "@/mock/game"
import GameHolder from "@/components/GameHolder"


const HomePage = () => {
    const navigate = useNavigate()
    const [games, setGames] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {

        GetTopGames()

    }, [])

    async function GetTopGames() {
        if (import.meta.env.VITE_ENV == 'TESTING') {
            setGames(await getMockGames())
            return
        }
        api.get("/games/get-game-list").then((res) => {
            setGames(res.data.response.game_list)
        }).catch((err) => setError(err))
    }

    function toGame(id) {
        navigate(`/games/${id}`)
    }

    return (
        <>
            <div className="min-w-full h-40">
                <WallpaperHomeBanner />
            </div>
            <div className="my-3">
                <div className="grid grid-cols-3">
                    <div></div>
                    <div className="text-center text-4xl font-medium">My Top Game</div>
                    <div className="text-right text-md text-slate-500 underline hover:text-blue-300 hover:no-underline">
                        <Link to="/Games">See more</Link>
                    </div>
                </div>
                <div className="grid grid-cols-5 gap-4 mx-5 my-6">
                    {
                        error ?
                            <>
                                <div className="text-center text-5xl font-medium my-8 text-red-500 col-span-5">{error.message}</div>
                            </> :
                            <>
                                {
                                    games.slice(0, 5).map((v, i) => (
                                        <div className="" onClick={() => toGame(v.id)}>
                                            <GameHolder className={"bg-sky-300"} game={v} />
                                        </div>
                                    ))
                                }
                            </>
                    }
                </div>
            </div>
        </>
    )
}

export default HomePage