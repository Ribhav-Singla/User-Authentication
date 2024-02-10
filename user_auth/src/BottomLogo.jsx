/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function BottomLogo({ width, height }) {
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
                <path fill="url(#gradient)" d="M43,-57.6C58,-57.2,74.1,-49.2,76.6,-37C79.1,-24.7,68,-8.3,59.3,4.1C50.6,16.4,44.3,24.7,37.9,33.9C31.6,43.2,25.1,53.4,14.9,61.1C4.7,68.8,-9.2,73.9,-24.9,74.2C-40.6,74.5,-58,69.9,-63.2,58.1C-68.4,46.2,-61.5,27,-59.7,11.2C-57.9,-4.7,-61.4,-17.2,-59.7,-29.9C-58,-42.7,-51.2,-55.8,-40.3,-58.1C-29.5,-60.4,-14.8,-51.9,-0.4,-51.3C14,-50.7,27.9,-57.9,43,-57.6Z" transform="translate(100 100)" />
            </svg>
        </>
    );
}
