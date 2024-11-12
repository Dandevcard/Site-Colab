'use client'
import React, { useState, useEffect } from 'react';

const Star = ({ size }: any) => {
    const [animate, setAnimate] = useState(false)
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });
    const randomDelay = Math.floor(Math.random() * 1000);

    useEffect(() => {
        const randomX = Math.floor(Math.random() * window.innerWidth);
        const randomY = Math.floor(Math.random() * window.innerHeight);
        setPosition({ x: randomX, y: randomY });
        setTimeout(() => {
            setAnimate(true);
        }, randomDelay);
    }, []);
    return (
        <svg viewBox="0 0 28 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={(`${animate ? 'animate-ping' : ' animate-pulse '} `) + ' text-green-500 dark:text-green-200 rounded-full absolute  '}
            style={{ left: position.x, top: position.y, width: 7, height: 7 }}>
            <path d="M0.62915 10.5358L11.7323 12.0663L14.2197 20.766L16.707 12.0663L27.8102 10.5089L16.7431 8.52202L14.2197 0.278809L11.6963 8.52202L0.62915 10.5358Z" fill="curreColor" />
        </svg>
    );
};

export default Star;