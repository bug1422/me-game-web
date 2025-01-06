import api from "@/api/axios"
import { useEffect, useState } from "react"
import Card from "../components/Card"
import { useNavigate } from "react-router-dom"
import { getMockGames } from "@/mock/game"
import GameHolder from "@/components/GameHolder"

const GameList = () => {
    let navigate = useNavigate()
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
            console.log(res)
            setGames(res.data.response.game_list)
        }).catch((err) => setError(err))
    }

    function toGame(id) {
        navigate(`/games/${id}`)
    }

    return (
        <>
            <div className="text-4xl">Bug1422's games</div>
            <div className="grid grid-cols-4 gap-4 mx-5 my-6">
                {
                    error ?
                        <>
                            <div className="text-center text-5xl font-medium my-8 text-red-500 col-span-5">{error.message}</div>
                        </> :
                        <>
                            {games.map((v, i) => (
                                <div className="hover:scale-105" onClick={() => toGame(v.id)}>
                                    <GameHolder className={"bg-sky-300"} game={v} />
                                </div>
                            ))}
                        </>
                }
            </div>
        </>
    )
}
export default GameList