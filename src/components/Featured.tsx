import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
function Featured() {

    const featuredSection = useRef<HTMLDivElement>(null)
    const featuredRight = useRef<HTMLDivElement>(null)
    const [isPinned, setIsPinned] = useState(0)
    const [isIntersecting, setIsIntersecting] = useState(false)
    const featuredPhoto = useRef(null)
    const pinnedImage = useRef(null)
    useEffect(() => {
        const photos: HTMLElement[] = gsap.utils.toArray(".pin-image")
        // photos.forEach((photo, idx) => {
        //     gsap.from(photo, {
        //         width: 0,
        //     })
        // })
        const details: HTMLElement[] = gsap.utils.toArray(".left")
        // const details = gsap.utils.toArray(".left:not(:first-child)")

        details.forEach((detail, idx) => {
            const headline = detail.querySelector("h2") as HTMLHeadingElement
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: headline,
                    start: "top center",
                    end: "bottom top",
                    scrub: 2,
                    onUpdate: () => {
                        setIsPinned(idx)
                    },

                }
            })
        })
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: featuredSection.current,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                pin: featuredRight.current,
                markers: false,
            }
        })
        console.log(pinnedImage.current)


    }, [pinnedImage])
    // useEffect(() => {
    //     gsap.to(featuredPhoto.current, {
    //         scale: 1.2,
    //         duration: 1,
    //         ease: "power3.out"
    //     })
    // }, [featuredPhoto])
    const images = [
        "https://images.unsplash.com/photo-1618436917352-cd3d11ea4d15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=975&q=80",
        "https://images.unsplash.com/photo-1550270428-27e40d58bb7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1593939535589-8356e421b3cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1923&q=80"
    ]
    function ImageElement(props: { src: string, idx: number }) {
        gsap.fromTo(".pin-image.is-pinned", {
            width: "0",

        }, {
            width: "100%",
            duration: 1,
            ease: "power3.out"
        })
        return (
            <img
                className={`w-full h-full object-cover pin-image absolute top-0 left-0 ${isPinned === props.idx ? 'is-pinned' : ''}`} ref={featuredPhoto}
                src={props.src} />
        )
    }
    return (
        <section className="featured-section grid grid-cols-2 mt-[300px]" ref={featuredSection}>
            <div className="featured-text-con">
                <div className="left left-1 w-[60%] h-screen mx-auto flex flex-col gap-10">
                    <h2 className="text-5xl text-black  font-fugaz">COMPLETE CONTROL</h2>
                    <p className="text-black ">Every decision, from how you monetize your story to how long it stays online, is up to you.</p>
                </div>
                <div className="left left-2 w-[60%] h-screen mx-auto flex flex-col gap-10">
                    <h2 className="text-5xl text-black  font-fugaz">ON BRAND</h2>
                    <p className="text-black">With the ability to command every pixel, each story can be designed to fit your brand.</p>
                </div>
                <div className="left left-3 w-[60%] h-screen mx-auto flex flex-col gap-10">
                    <h2 className="text-5xl text-black  font-fugaz">IMMERSIVE</h2>
                    <p className="text-black">Web Stories allow you to feature full screen video, photos, and audio, seamlessly.</p>
                </div>
            </div>
            <div className="right w-full relative h-screen overflow-hidden" ref={featuredRight}>
                {
                    images.map((url, idx) => (
                            <div key={idx} className={`pin-image absolute top-0 left-0 w-full h-full bg-cover bg-[70%] bg-no-repeat  ${isPinned === idx ? 'is-pinned opacity-100 scale-[1]' : 'opacity-0 scale-[1.2]'}`} style={{ backgroundImage: `url(${url})` }} ref={pinnedImage}></div>

                    ))
                }
            </div>
        </section>
    )
}

export default Featured