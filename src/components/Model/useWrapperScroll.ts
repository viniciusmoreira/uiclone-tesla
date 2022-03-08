import { useMotionValue } from "framer-motion"
import { useContext, useEffect } from "react"
import ModelsContext from "./ModelsContext";

export default function useWrapperScroll() {
    const { wrapperRef } = useContext(ModelsContext);

    const scrollY = useMotionValue(0);
    const scrollYProgress = useMotionValue(0);

    useEffect(() => {
        const element = wrapperRef?.current;

        if(element){

            const updateScrollValue = () => {
                console.log('Dentro do updateScroll')

                if(element){
                    console.log('Dentro do if updateScroll')

                    const { scrollTop, scrollHeight, offsetHeight } = element;

                    const fullScroll = scrollHeight - offsetHeight;

                    console.log('scrollTop / fullScroll', scrollTop / fullScroll)

                    scrollY.set(scrollTop);
                    scrollYProgress.set(scrollTop / fullScroll)
                }

            }

            element.addEventListener('scroll', updateScrollValue);

            return () => element.removeEventListener('scroll', updateScrollValue)
        }
    }, [scrollY, scrollYProgress, wrapperRef])

    return { scrollY, scrollYProgress }
}
