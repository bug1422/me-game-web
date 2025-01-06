const Comment = ({ comment }) => {
    return (
        <div className="flex flex-row my-3 bg-neutral-400/20 rounded-sm">
            <div className="w-[32px] flex align-self-start">
                <img className="object-fit" src="https://placehold.co/600x400" />
            </div>
            <div className="ms-2 grid grid-rows-3 space-y-1">
                <div className="font-medium">
                    {comment.nickname} -
                    <span className="font-normal italic font-slate-300 text-md">
                        {comment.email}
                    </span>
                </div>
                <div>
                    {comment.content}
                </div>
                <div className="flex flex-row space-x-4">
                    <div>
                        upvote - {comment.upvote}
                    </div>
                    <div>
                        downvote - {comment.upvote}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment