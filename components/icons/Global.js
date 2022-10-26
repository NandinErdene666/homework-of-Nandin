import * as React from "react"

const GlobalIcon = (props) => (
    <svg
        width={19}
        height={19}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M9.972 1.064v17.072M18.508 9.601H1.436M17.117 4.59H2.92M17.117 14.425H2.92"
            stroke="#fff"
            strokeWidth={0.8}
        />
        <circle cx={9.972} cy={9.508} r={8.6} stroke="#fff" strokeWidth={0.8} />
        <path
            d="M9.973.879c-3.774 2.598-9.056 9.686 0 17.258"
            stroke="#fff"
            strokeWidth={0.8}
        />
        <path
            d="M9.972.879c3.773 2.598 9.056 9.686 0 17.258"
            stroke="#fff"
            strokeWidth={0.8}
        />
    </svg>
);

export default GlobalIcon;