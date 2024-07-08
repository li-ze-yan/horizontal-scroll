import React, {useRef} from "react";
import ImageContainer from '../ImageContainer/ImageContainer'
import './horizontalscroll.css'
import {useScroll, motion} from 'framer-motion'
import One from '../../images/item 01.png'
import Two from '../../images/item 02.png'
import Three from '../../images/item 03.png'
import Four from '../../images/item 04.png'
import { useTransform } from "framer-motion";

const HorizontalScroll = () => {
    const targetRef = useRef(null)
    const {scrollYProgress} = useScroll({
        target: targetRef
    })
    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-55%'])

    return <div className="carousel" ref={targetRef}>
        <div className="contentContainer">
            <motion.div className="images" style={{
                x
            }}
            >
                <motion.div className="imageItem" initial={{
                    opacity: 0,
                    y: 150
                }} whileInView={{
                    opacity: 1,
                    y: 0, threshold: 0.99
                }} transition={{
                    duration: 0.5,
                    ease: 'easeOut'
                }}>
                    <ImageContainer imageSource={One} description={'June 2024'} />
                </motion.div>
                <motion.div className="imageItem" initial={{
                    opacity: 0,
                    y: 150
                }} whileInView={{
                    opacity: 1,
                    y: 0, threshold: 0.99
                }} transition={{
                    duration: 0.5,
                    ease: 'easeOut'
                }}>
                    <ImageContainer imageSource={Two} description={'June 2024'} />
                </motion.div>
                <motion.div className="imageItem" initial={{
                    opacity: 0,
                    y: 150
                }} whileInView={{
                    opacity: 1,
                    y: 0, threshold: 0.99
                }} transition={{
                    duration: 0.5,
                    ease: 'easeOut'
                }}>
                    <ImageContainer imageSource={Three} description={'June 2024'} />
                </motion.div>
                <motion.div className="imageItem" initial={{
                    opacity: 0,
                    y: 150
                }} whileInView={{
                    opacity: 1,
                    y: 0, threshold: 0.99
                }} transition={{
                    duration: 0.5,
                    ease: 'easeOut'
                }}>
                    <ImageContainer imageSource={Four} description={'June 2024'} />
                </motion.div>
            </motion.div>
        </div>
    </div>;
};

export default HorizontalScroll;
