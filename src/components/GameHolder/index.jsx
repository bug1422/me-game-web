import DownvoteIcon from "../Downvote"
import UpvoteIcon from "../Upvote"

const GameHolder = ({ game, className }) => {
    return (
        <div
            className={className + " w-full md:w-60 md:h-60 md:aspect-square flex flex-col justify-end max-w-xs rounded overflow-hidden shadow-lg group"}>
            <div className="md:absolute w-full md:w-60 aspect-square md:rounded-md overflow-hidden">
                <img className="transition ease-in-out group-hover:scale-150 w-full h-full object-fill" src={`data:image/png;base64,${game.thumbnail}`} alt="Thumbnail"></img>
            </div>
            <div className=" pb-2 w-full h-1/4 md:translate-y-20 group-hover:translate-y-0 transition ease-in-out bg-sky-300 md:bg-transparent">
                <div className="w-full h-full md:h-14 flex flex-col md:flex-row text-xs px-4 md:pb-3 justify-between md:bg-gradient-to-b from-white from-80% via-transparent to-transparent">
                    <h2 className=" md:w-2/3 h-14 md:h-full font-semibold text-wrap content-center md:text-[16px] text-gray-800 truncate mb-1 md:mb-0 md:pe-5">
                        {game.title}
                    </h2>
                    <div className="w-fill grid grid-cols-2 md:text-md items-center">
                        <div className="flex items-center">
                            <UpvoteIcon /><span className="ms-1">{game.upvote}</span>
                        </div>
                        <div className="flex items-center ms-2">
                            <DownvoteIcon /><span className="ms-1">{game.downvote}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default GameHolder