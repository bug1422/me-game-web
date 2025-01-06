import { useEffect, useRef } from "react"



const HomeBanner = () => {
    const bannerRef = useRef(null)
    function createHomeBanner() {
        const existingCanvas = bannerRef.current.querySelector('canvas')
        if (existingCanvas) {
            bannerRef.current.removeChild(existingCanvas)
        }
        const canvas = document.createElement("canvas")
        const width = bannerRef.current.offsetWidth
        const height = bannerRef.current.offsetHeight
        canvas.width = width
        canvas.height = height
        bannerRef.current.appendChild(canvas)
        const context = canvas.getContext("2d")
        context.fillStyle = 'black'
        context.fillRect(0, 0, width, height)
    }

    useEffect(()=>{
        createHomeBanner()
    },[])
    return (
        <div ref={bannerRef} className="w-full h-full"></div>
    )
}
export default HomeBanner