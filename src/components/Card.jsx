import Tag from "./Tag"

const Card = ({ game, className }) => {
    return (
        <div className={className + " w-36 max-w-xs rounded overflow-hidden shadow-lg"}>
            {/* <img className="absolute rounded-md object-fill" src={`data:image/png;base64,${game.thumbnail}`} alt="Thumbnail"></img> */}
            <div className="z-10">
                <div className="px-6 mt-2 grid grid-rows-2">
                    <div className="flex justify-between">
                        <h2 className="text-xl font-semibold text-gray-800">{game.title}</h2>
                        <h2>{game.created_at.substring(0, 10)}</h2>
                    </div>
                    <div className="py-1 mb-1 font-medium flex gap-x-2 divide-x-2">
                        <div>
                            {game.game_engine}
                        </div>
                        <div className="ps-2">
                            {
                                game.tags.map((v, i) => (
                                    <Tag key={i}>{v}</Tag>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card