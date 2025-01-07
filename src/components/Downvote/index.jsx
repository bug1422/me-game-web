const DownvoteIcon = ({size  = 10}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-arrow-down"
        >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="5 12 12 19 19 12"></polyline>
        </svg>
    )
}

export default DownvoteIcon