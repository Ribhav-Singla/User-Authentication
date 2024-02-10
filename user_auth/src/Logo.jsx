/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function Logo({ width, height }) {
    return (
        <>
            <svg width={width} height={height} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                {/* Define the linear gradient from left to right */}
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: '#08AEEA', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#2AF598', stopOpacity: 1 }} />
                    </linearGradient>
                </defs>

                {/* Use the linear gradient for the fill */}
                <path fill="url(#gradient)" d="M39,-49.6C53.8,-42.9,71.4,-35.9,73.9,-24.8C76.5,-13.6,64.2,1.6,55.3,14.5C46.4,27.5,40.9,38.1,32.2,51.4C23.6,64.8,11.8,80.8,0.9,79.6C-10,78.3,-20,59.8,-33.5,48C-46.9,36.3,-63.8,31.3,-72.3,20C-80.7,8.8,-80.7,-8.7,-76.7,-26.1C-72.7,-43.5,-64.7,-60.8,-51.3,-68C-37.8,-75.2,-18.9,-72.4,-3.4,-67.7C12.1,-62.9,24.2,-56.4,39,-49.6Z" transform="translate(100 100)" />
            </svg>
        </>
    );
}
