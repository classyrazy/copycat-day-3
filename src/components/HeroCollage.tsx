
import { useEffect } from "react"
import { pageData } from "../composables/pageData"
import { gsap } from "gsap"
function VideoElement(props:{src: string}) {
    return (
        <div className="hero-element w-[8rem] h-[20rem] rounded-lg relative">
            <video
                className="collage-element video-element  overflow-hidden w-full h-full rounded-lg object-cover"
                playsInline
                loop
                autoPlay
                muted
                >
                    <source src={props.src} type="video/mp4"></source>
            </video>
        </div>
    )
}

function ImageElement(props: {src: string}) {
    return (
        <div className="hero-element relative w-[8rem] h-[20rem] rounded-lg">
            <img
                className="collage-element image-element overflow-hidden w-full h-full rounded-lg object-cover"
                src={props.src} />
        </div>
    )
}
function HeroCollage() {
    const { left, right } = pageData.hero.collage
    useEffect(() => {
        const tl = gsap.timeline({
            delay: 0.5,
        })
        tl.fromTo(".hero-element",{
            opacity: 0,
            y: 300
        }, {
            opacity: 1,
            y: 0,
            duration: 2,
            stagger: 0.3,
            ease: "power3.out"

        })
    })
    return (
        <div className="hero-collage w-full px-8 flex justify-between">
            <div className="left-column grid grid-cols-3 gap-3 w-[35%]">
                {left.map((url, idx) => (
                    url.type === "image" ?
                    <ImageElement src={url.url} key={idx} /> :   <VideoElement src={url.url} key={idx} />
                ))}

            </div>
            <div className="right-column grid grid-cols-3 w-[35%] gap-4">
                {right.map((url, idx) => (
                    url.type === "image" ?
                    <ImageElement src={url.url} key={idx} /> :   <VideoElement src={url.url} key={idx} />
                ))}

            </div>
        </div>
    )
}

export default HeroCollage