const GameHolder = ({ game, className }) => {
    return (
        <div
            className={className + " w-60 h-60 max-w-xs rounded overflow-hidden shadow-lg group"}>
            <div className="absolute w-60 h-60 rounded-md overflow-hidden">
                <img className="transition ease-in-out group-hover:scale-150 w-full h-full object-stretch" src={`data:image/png;base64,${game.thumbnail}`} alt="Thumbnail"></img>
            </div>
            <div className="h-full flex items-end translate-y-10 group-hover:translate-y-0 transition ease-in-out">
                <div className="w-full flex px-4 pb-3 justify-between bg-gradient-to-b from-white from-80% via-transparent to-transparent">
                    <h2 className="w-2/3 text-xl font-semibold text-gray-800 truncate pe-5">{game.title} asdklfjlksajflksdjlfksdjalkfjsdaklfjskadfjskaldfj</h2>
                    <div className="flex flex-row gap-x-4">
                        <div>
                            u-{game.upvote}
                        </div>
                        <div>
                            d-{game.downvote}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameHolder