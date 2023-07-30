import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import SplitType from 'split-type'
function VisualStories() {
    const ref = useRef<HTMLElement>(null)
    const textRef = useRef<HTMLElement>(null)
    useEffect(() => {
        const mainText = new SplitType(".visual-stories-sec-text", {
            types: 'lines',
        })
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ref.current,
                start: "top center",
                scrub: true,
                toggleActions: "play none none reverse",
            }
        })
        tl.to("body", {
            backgroundColor: "white",
            duration: 1,
            ease: "power4.out"
        }, "-=0.5")
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                gsap.fromTo(mainText.lines, {
                    // height: "0",
                    y: 100,
                    opacity: 0

                }, {
                    y: 0,
                    opacity: 1,
                    // height: "100%",
                    duration: 1,
                    stagger: 0.1,
                    ease: "power4.out"
                })
            }
            // observer.disconnect()
        }, {
            threshold: 0.5
        })
        observer.observe(textRef.current)
        return () => {
            observer.disconnect(textRef.current); // *** Use the same element
        }
        // tl.fromTo(mainText.lines, {
        //     // height: "0",
        //     y: 100,
        //     opacity: 0

        // },{
        //     y: 0,
        //     opacity: 1,
        //     // height: "100%",
        //     duration: 1,
        //     stagger: 0.1,
        //     ease: "power4.out"
        // })

    }, [])

    return (
        <section className="h-screen grid justify-center items-center visual-stories-sec" ref={ref}>
            <h2 className="text-6xl text-black w-[800px] mx-auto text-center visual-stories-sec-text font-bold" ref={textRef}>
                Visual stories that feel like yours,<br/> because they are yours.
            </h2>
        </section>
    )
}

export default VisualStories