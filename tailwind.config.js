const colors = require("tailwindcss/colors");

module.exports = {
    purge: {
        enabled: true,
        content: ["src/**/*.js", "src/**/*.jsx", "public/**/*.html"],
    },
    presets: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",

            black: colors.black,
            white: colors.white,
            gray: colors.coolGray,
            red: colors.red,
            yellow: colors.amber,
            emerald: colors.emerald,
            green: colors.green,
            blue: colors.blue,
            indigo: colors.indigo,
            purple: colors.violet,
            pink: colors.pink,
            teal: colors.teal,
            steel: {
                50: "#f5f7f8",
                100: "#eef2f3",
                200: "#dce4e8",
                300: "#c4d0d9",
                400: "#9aafc3",
                500: "#7289a9",
                600: "#59658c",
                700: "#4b4e71",
                800: "#3e3e59",
                900: "#333347",
            },
            manatee: {
                50: "#f5f7f8",
                100: "#edf2f4",
                200: "#dbe4e9",
                300: "#c1d0dc",
                400: "#96afc8",
                500: "#6d88b1",
                600: "#556594",
                700: "#494e78",
                800: "#3c3e5d",
                900: "#32334a",
            },
            turquoise: {
                50: "#edf9f9",
                100: "#d3f7f5",
                200: "#a2f1e9",
                300: "#64e6dd",
                400: "#21d3c9",
                500: "#0ab9ae",
                600: "#099d91",
                700: "#008080",
                800: "#11635b",
                900: "#105049",
            },
            limegreen: {
                50: "#eff9f6",
                100: "#dbf8ed",
                200: "#b2f3d3",
                300: "#76eab2",
                400: "#50c878",
                500: "#0cc551",
                600: "#0bac39",
                700: "#118d35",
                800: "#146d32",
                900: "#13582d",
            },
            tan: {
                50: "#fafaf9",
                100: "#f8f7f0",
                200: "#f0ecd8",
                300: "#e5d8b3",
                400: "#cfb377",
                500: "#b38c43",
                600: "#896629",
                700: "#634d26",
                800: "#473a24",
                900: "#362e20",
            },
            pacific: {
                50: "#eff9fa",
                100: "#d9f7f7",
                200: "#adeeef",
                300: "#76e1e7",
                400: "#30cada",
                500: "#11abc9",
                600: "#0e8bb0",
                700: "#136f8d",
                800: "#15566a",
                900: "#134554",
            },
            denim: {
                50: "#f3fafc",
                100: "#dff7fa",
                200: "#b6ebf6",
                300: "#84dbf3",
                400: "#42bcef",
                500: "#1b96ea",
                600: "#1473db",
                700: "#175bb8",
                800: "#164588",
                900: "#143868",
            },
            royalblue: {
                50: "#f6fbfd",
                100: "#e7f7fd",
                200: "#c3e7fb",
                300: "#9bd0fb",
                400: "#64a5fa",
                500: "#2464eb",
                600: "#2253f4",
                700: "#1e41de",
                800: "#1932ac",
                900: "#152984",
            },
            indigo: {
                50: "#f5f8fc",
                100: "#e9f1fc",
                200: "#cfdafb",
                300: "#b3befa",
                400: "#9091fa",
                500: "#6a63fa",
                600: "#4f43f6",
                700: "#3f35e4",
                800: "#322bb9",
                900: "#282492",
            },
            flamingo: {
                50: "#f7f5fa",
                100: "#f2e8fa",
                200: "#e6caf8",
                300: "#dca9f6",
                400: "#d57af5",
                500: "#ce4ef4",
                600: "#b532ee",
                700: "#8c27d6",
                800: "#6a22ab",
                900: "#541e86",
            },
            cerise: {
                50: "#fcf9f9",
                100: "#fdeff4",
                200: "#fbcfe9",
                300: "#faa6d8",
                400: "#fb6cb9",
                500: "#fc4196",
                600: "#f6266e",
                700: "#da1d56",
                800: "#ad1942",
                900: "#881534",
            },
            tomato: {
                50: "#fcf8f6",
                100: "#fcefed",
                200: "#fad7d7",
                300: "#f9b4b3",
                400: "#f9807c",
                500: "#f9554e",
                600: "#f23533",
                700: "#d3282f",
                800: "#a7212b",
                900: "#841b25",
            },
            chocolate: {
                50: "#faf6ee",
                100: "#fbefd7",
                200: "#f8dfaa",
                300: "#f5c76a",
                400: "#f2a02e",
                500: "#f17914",
                600: "#e4540d",
                700: "#c23f12",
                800: "#9c3217",
                900: "#7e2917",
            },
            mango: {
                50: "#fbf7f0",
                100: "#fbefde",
                200: "#f9deb8",
                300: "#f6c37d",
                400: "#f4993d",
                500: "#f3701d",
                600: "#e74d13",
                700: "#c53916",
                800: "#9d2d1b",
                900: "#7d251a",
            },
            orange: {
                50: "#faf8ee",
                100: "#faf4d2",
                200: "#f6ea98",
                300: "#f0d752",
                400: "#e6b71c",
                500: "#db950a",
                600: "#c27006",
                700: "#9b540a",
                800: "#77400f",
                900: "#5e3411",
            },
            sunglow: {
                50: "#fafaf3",
                100: "#f9f8db",
                200: "#f3f09f",
                300: "#eae058",
                400: "#d5c41e",
                500: "#b9a40a",
                600: "#938006",
                700: "#6f6109",
                800: "#52490d",
                900: "#3f390e",
            },
            shamrock: {
                50: "#f2f9f8",
                100: "#e3f8f0",
                200: "#c2f1dc",
                300: "#8fe6c2",
                400: "#40d196",
                500: "#19b768",
                600: "#13994b",
                700: "#197b41",
                800: "#195e39",
                900: "#174b30",
            },
            cerulean: {
                50: "#f1fafb",
                100: "#dcf7f9",
                200: "#b0eef3",
                300: "#7adfef",
                400: "#35c4e8",
                500: "#14a2dd",
                600: "#0f81c9",
                700: "#1466a4",
                800: "#144e79",
                900: "#123f5d",
            },
        },
        spacing: {
            px: "1px",
            0: "0px",
            0.5: "0.125rem",
            1: "0.25rem",
            1.5: "0.375rem",
            2: "0.5rem",
            2.5: "0.625rem",
            3: "0.75rem",
            3.5: "0.875rem",
            4: "1rem",
            5: "1.25rem",
            6: "1.5rem",
            7: "1.75rem",
            8: "2rem",
            9: "2.25rem",
            10: "2.5rem",
            11: "2.75rem",
            12: "3rem",
            14: "3.5rem",
            16: "4rem",
            20: "5rem",
            24: "6rem",
            28: "7rem",
            32: "8rem",
            36: "9rem",
            40: "10rem",
            44: "11rem",
            48: "12rem",
            52: "13rem",
            56: "14rem",
            60: "15rem",
            64: "16rem",
            72: "18rem",
            80: "20rem",
            96: "24rem",
        },
        animation: {
            none: "none",
            spin: "spin 1s linear infinite",
            ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
            pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            bounce: "bounce 1s infinite",
        },
        backgroundColor: (theme) => theme("colors"),
        backgroundImage: {
            none: "none",
            "gradient-to-t":
                "linear-gradient(to top, var(--tw-gradient-stops))",
            "gradient-to-tr":
                "linear-gradient(to top right, var(--tw-gradient-stops))",
            "gradient-to-r":
                "linear-gradient(to right, var(--tw-gradient-stops))",
            "gradient-to-br":
                "linear-gradient(to bottom right, var(--tw-gradient-stops))",
            "gradient-to-b":
                "linear-gradient(to bottom, var(--tw-gradient-stops))",
            "gradient-to-bl":
                "linear-gradient(to bottom left, var(--tw-gradient-stops))",
            "gradient-to-l":
                "linear-gradient(to left, var(--tw-gradient-stops))",
            "gradient-to-tl":
                "linear-gradient(to top left, var(--tw-gradient-stops))",
        },
        backgroundOpacity: (theme) => theme("opacity"),
        backgroundPosition: {
            bottom: "bottom",
            center: "center",
            left: "left",
            "left-bottom": "left bottom",
            "left-top": "left top",
            right: "right",
            "right-bottom": "right bottom",
            "right-top": "right top",
            top: "top",
        },
        backgroundSize: {
            auto: "auto",
            cover: "cover",
            contain: "contain",
        },
        borderColor: (theme) => ({
            ...theme("colors"),
            DEFAULT: theme("colors.gray.200", "currentColor"),
        }),
        borderOpacity: (theme) => theme("opacity"),
        borderRadius: {
            none: "0px",
            sm: "0.125rem",
            DEFAULT: "0.25rem",
            md: "0.375rem",
            lg: "0.5rem",
            xl: "0.75rem",
            "2xl": "1rem",
            "3xl": "1.5rem",
            full: "9999px",
        },
        borderWidth: {
            DEFAULT: "1px",
            0: "0px",
            2: "2px",
            4: "4px",
            8: "8px",
        },
        boxShadow: {
            sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            DEFAULT:
                "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
            md:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            lg:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            xl:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
            none: "none",
        },
        container: {},
        cursor: {
            auto: "auto",
            default: "default",
            pointer: "pointer",
            wait: "wait",
            text: "text",
            move: "move",
            "not-allowed": "not-allowed",
        },
        divideColor: (theme) => theme("borderColor"),
        divideOpacity: (theme) => theme("borderOpacity"),
        divideWidth: (theme) => theme("borderWidth"),
        fill: { current: "currentColor" },
        flex: {
            1: "1 1 0%",
            auto: "1 1 auto",
            initial: "0 1 auto",
            none: "none",
        },
        flexGrow: {
            0: "0",
            DEFAULT: "1",
        },
        flexShrink: {
            0: "0",
            DEFAULT: "1",
        },
        fontFamily: {
            sans: [
                "ui-sans-serif",
                "system-ui",
                "-apple-system",
                "BlinkMacSystemFont",
                '"Segoe UI"',
                "Roboto",
                '"Helvetica Neue"',
                "Arial",
                '"Noto Sans"',
                "sans-serif",
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"',
            ],
            serif: [
                "ui-serif",
                "Georgia",
                "Cambria",
                '"Times New Roman"',
                "Times",
                "serif",
            ],
            mono: [
                "ui-monospace",
                "SFMono-Regular",
                "Menlo",
                "Monaco",
                "Consolas",
                '"Liberation Mono"',
                '"Courier New"',
                "monospace",
            ],
        },
        fontSize: {
            xs: ["0.75rem", { lineHeight: "1rem" }],
            sm: ["0.875rem", { lineHeight: "1.25rem" }],
            base: ["1rem", { lineHeight: "1.5rem" }],
            lg: ["1.125rem", { lineHeight: "1.75rem" }],
            xl: ["1.25rem", { lineHeight: "1.75rem" }],
            "2xl": ["1.5rem", { lineHeight: "2rem" }],
            "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
            "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
            "5xl": ["3rem", { lineHeight: "1" }],
            "6xl": ["3.75rem", { lineHeight: "1" }],
            "7xl": ["4.5rem", { lineHeight: "1" }],
            "8xl": ["6rem", { lineHeight: "1" }],
            "9xl": ["8rem", { lineHeight: "1" }],
        },
        fontWeight: {
            thin: "100",
            extralight: "200",
            light: "300",
            normal: "400",
            medium: "500",
            semibold: "600",
            bold: "700",
            extrabold: "800",
            black: "900",
        },
        gap: (theme) => theme("spacing"),
        gradientColorStops: (theme) => theme("colors"),
        gridAutoColumns: {
            auto: "auto",
            min: "min-content",
            max: "max-content",
            fr: "minmax(0, 1fr)",
        },
        gridAutoRows: {
            auto: "auto",
            min: "min-content",
            max: "max-content",
            fr: "minmax(0, 1fr)",
        },
        gridColumn: {
            auto: "auto",
            "span-1": "span 1 / span 1",
            "span-2": "span 2 / span 2",
            "span-3": "span 3 / span 3",
            "span-4": "span 4 / span 4",
            "span-5": "span 5 / span 5",
            "span-6": "span 6 / span 6",
            "span-7": "span 7 / span 7",
            "span-8": "span 8 / span 8",
            "span-9": "span 9 / span 9",
            "span-10": "span 10 / span 10",
            "span-11": "span 11 / span 11",
            "span-12": "span 12 / span 12",
            "span-full": "1 / -1",
        },
        gridColumnEnd: {
            auto: "auto",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10",
            11: "11",
            12: "12",
            13: "13",
        },
        gridColumnStart: {
            auto: "auto",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10",
            11: "11",
            12: "12",
            13: "13",
        },
        gridRow: {
            auto: "auto",
            "span-1": "span 1 / span 1",
            "span-2": "span 2 / span 2",
            "span-3": "span 3 / span 3",
            "span-4": "span 4 / span 4",
            "span-5": "span 5 / span 5",
            "span-6": "span 6 / span 6",
            "span-full": "1 / -1",
        },
        gridRowStart: {
            auto: "auto",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
        },
        gridRowEnd: {
            auto: "auto",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
        },
        transformOrigin: {
            center: "center",
            top: "top",
            "top-right": "top right",
            right: "right",
            "bottom-right": "bottom right",
            bottom: "bottom",
            "bottom-left": "bottom left",
            left: "left",
            "top-left": "top left",
        },
        gridTemplateColumns: {
            none: "none",
            1: "repeat(1, minmax(0, 1fr))",
            2: "repeat(2, minmax(0, 1fr))",
            3: "repeat(3, minmax(0, 1fr))",
            4: "repeat(4, minmax(0, 1fr))",
            5: "repeat(5, minmax(0, 1fr))",
            6: "repeat(6, minmax(0, 1fr))",
            7: "repeat(7, minmax(0, 1fr))",
            8: "repeat(8, minmax(0, 1fr))",
            9: "repeat(9, minmax(0, 1fr))",
            10: "repeat(10, minmax(0, 1fr))",
            11: "repeat(11, minmax(0, 1fr))",
            12: "repeat(12, minmax(0, 1fr))",
        },
        gridTemplateRows: {
            none: "none",
            1: "repeat(1, minmax(0, 1fr))",
            2: "repeat(2, minmax(0, 1fr))",
            3: "repeat(3, minmax(0, 1fr))",
            4: "repeat(4, minmax(0, 1fr))",
            5: "repeat(5, minmax(0, 1fr))",
            6: "repeat(6, minmax(0, 1fr))",
        },
        height: (theme) => ({
            auto: "auto",
            ...theme("spacing"),
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            full: "100%",
            screen: "100vh",
        }),
        inset: (theme, { negative }) => ({
            auto: "auto",
            ...theme("spacing"),
            ...negative(theme("spacing")),
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            full: "100%",
            "-1/2": "-50%",
            "-1/3": "-33.333333%",
            "-2/3": "-66.666667%",
            "-1/4": "-25%",
            "-2/4": "-50%",
            "-3/4": "-75%",
            "-full": "-100%",
        }),
        keyframes: {
            spin: {
                to: {
                    transform: "rotate(360deg)",
                },
            },
            ping: {
                "75%, 100%": {
                    transform: "scale(2)",
                    opacity: "0",
                },
            },
            pulse: {
                "50%": {
                    opacity: ".5",
                },
            },
            bounce: {
                "0%, 100%": {
                    transform: "translateY(-25%)",
                    animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
                },
                "50%": {
                    transform: "none",
                    animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
                },
            },
        },
        letterSpacing: {
            tighter: "-0.05em",
            tight: "-0.025em",
            normal: "0em",
            wide: "0.025em",
            wider: "0.05em",
            widest: "0.1em",
        },
        lineHeight: {
            none: "1",
            tight: "1.25",
            snug: "1.375",
            normal: "1.5",
            relaxed: "1.625",
            loose: "2",
            3: ".75rem",
            4: "1rem",
            5: "1.25rem",
            6: "1.5rem",
            7: "1.75rem",
            8: "2rem",
            9: "2.25rem",
            10: "2.5rem",
        },
        listStyleType: {
            none: "none",
            disc: "disc",
            decimal: "decimal",
        },
        margin: (theme, { negative }) => ({
            auto: "auto",
            ...theme("spacing"),
            ...negative(theme("spacing")),
        }),
        maxHeight: (theme) => ({
            ...theme("spacing"),
            full: "100%",
            screen: "100vh",
        }),
        maxWidth: (theme, { breakpoints }) => ({
            none: "none",
            0: "0rem",
            xs: "20rem",
            sm: "24rem",
            md: "28rem",
            lg: "32rem",
            xl: "36rem",
            "2xl": "42rem",
            "3xl": "48rem",
            "4xl": "56rem",
            "5xl": "64rem",
            "6xl": "72rem",
            "7xl": "80rem",
            full: "100%",
            min: "min-content",
            max: "max-content",
            prose: "65ch",
            ...breakpoints(theme("screens")),
        }),
        minHeight: {
            0: "0px",
            full: "100%",
            screen: "100vh",
        },
        minWidth: {
            0: "0px",
            full: "100%",
            min: "min-content",
            max: "max-content",
        },
        objectPosition: {
            bottom: "bottom",
            center: "center",
            left: "left",
            "left-bottom": "left bottom",
            "left-top": "left top",
            right: "right",
            "right-bottom": "right bottom",
            "right-top": "right top",
            top: "top",
        },
        opacity: {
            0: "0",
            5: "0.05",
            10: "0.1",
            20: "0.2",
            25: "0.25",
            30: "0.3",
            40: "0.4",
            50: "0.5",
            60: "0.6",
            70: "0.7",
            75: "0.75",
            80: "0.8",
            90: "0.9",
            95: "0.95",
            100: "1",
        },
        order: {
            first: "-9999",
            last: "9999",
            none: "0",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "10",
            11: "11",
            12: "12",
        },
        outline: {
            none: ["2px solid transparent", "2px"],
            white: ["2px dotted white", "2px"],
            black: ["2px dotted black", "2px"],
        },
        padding: (theme) => theme("spacing"),
        placeholderColor: (theme) => theme("colors"),
        placeholderOpacity: (theme) => theme("opacity"),
        ringColor: (theme) => ({
            DEFAULT: theme("colors.blue.500", "#3b82f6"),
            ...theme("colors"),
        }),
        ringOffsetColor: (theme) => theme("colors"),
        ringOffsetWidth: {
            0: "0px",
            1: "1px",
            2: "2px",
            4: "4px",
            8: "8px",
        },
        ringOpacity: (theme) => ({
            DEFAULT: "0.5",
            ...theme("opacity"),
        }),
        ringWidth: {
            DEFAULT: "3px",
            0: "0px",
            1: "1px",
            2: "2px",
            4: "4px",
            8: "8px",
        },
        rotate: {
            "-180": "-180deg",
            "-90": "-90deg",
            "-45": "-45deg",
            "-12": "-12deg",
            "-6": "-6deg",
            "-3": "-3deg",
            "-2": "-2deg",
            "-1": "-1deg",
            0: "0deg",
            1: "1deg",
            2: "2deg",
            3: "3deg",
            6: "6deg",
            12: "12deg",
            45: "45deg",
            90: "90deg",
            180: "180deg",
        },
        scale: {
            0: "0",
            50: ".5",
            75: ".75",
            90: ".9",
            95: ".95",
            100: "1",
            105: "1.05",
            110: "1.1",
            125: "1.25",
            150: "1.5",
        },
        skew: {
            "-12": "-12deg",
            "-6": "-6deg",
            "-3": "-3deg",
            "-2": "-2deg",
            "-1": "-1deg",
            0: "0deg",
            1: "1deg",
            2: "2deg",
            3: "3deg",
            6: "6deg",
            12: "12deg",
        },
        space: (theme, { negative }) => ({
            ...theme("spacing"),
            ...negative(theme("spacing")),
        }),
        stroke: {
            current: "currentColor",
        },
        strokeWidth: {
            0: "0",
            1: "1",
            2: "2",
        },
        textColor: (theme) => theme("colors"),
        textOpacity: (theme) => theme("opacity"),
        transitionDuration: {
            DEFAULT: "150ms",
            75: "75ms",
            100: "100ms",
            150: "150ms",
            200: "200ms",
            300: "300ms",
            500: "500ms",
            700: "700ms",
            1000: "1000ms",
        },
        transitionDelay: {
            75: "75ms",
            100: "100ms",
            150: "150ms",
            200: "200ms",
            300: "300ms",
            500: "500ms",
            700: "700ms",
            1000: "1000ms",
        },
        transitionProperty: {
            none: "none",
            all: "all",
            DEFAULT:
                "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
            colors: "background-color, border-color, color, fill, stroke",
            opacity: "opacity",
            shadow: "box-shadow",
            transform: "transform",
        },
        transitionTimingFunction: {
            DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
            linear: "linear",
            in: "cubic-bezier(0.4, 0, 1, 1)",
            out: "cubic-bezier(0, 0, 0.2, 1)",
            "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
        },
        translate: (theme, { negative }) => ({
            ...theme("spacing"),
            ...negative(theme("spacing")),
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            full: "100%",
            "-1/2": "-50%",
            "-1/3": "-33.333333%",
            "-2/3": "-66.666667%",
            "-1/4": "-25%",
            "-2/4": "-50%",
            "-3/4": "-75%",
            "-full": "-100%",
        }),
        width: (theme) => ({
            auto: "auto",
            ...theme("spacing"),
            "1/2": "50%",
            "1/3": "33.333333%",
            "2/3": "66.666667%",
            "1/4": "25%",
            "2/4": "50%",
            "3/4": "75%",
            "1/5": "20%",
            "2/5": "40%",
            "3/5": "60%",
            "4/5": "80%",
            "1/6": "16.666667%",
            "2/6": "33.333333%",
            "3/6": "50%",
            "4/6": "66.666667%",
            "5/6": "83.333333%",
            "1/12": "8.333333%",
            "2/12": "16.666667%",
            "3/12": "25%",
            "4/12": "33.333333%",
            "5/12": "41.666667%",
            "6/12": "50%",
            "7/12": "58.333333%",
            "8/12": "66.666667%",
            "9/12": "75%",
            "10/12": "83.333333%",
            "11/12": "91.666667%",
            full: "100%",
            screen: "100vw",
            min: "min-content",
            max: "max-content",
        }),
        zIndex: {
            auto: "auto",
            0: "0",
            10: "10",
            20: "20",
            30: "30",
            40: "40",
            50: "50",
        },
    },
    variantOrder: [
        "first",
        "last",
        "odd",
        "even",
        "visited",
        "checked",
        "group-hover",
        "group-focus",
        "focus-within",
        "hover",
        "focus",
        "focus-visible",
        "active",
        "disabled",
    ],
    variants: {
        accessibility: ["responsive", "focus-within", "focus"],
        alignContent: ["responsive"],
        alignItems: ["responsive"],
        alignSelf: ["responsive"],
        animation: ["responsive"],
        appearance: ["responsive"],
        backgroundAttachment: ["responsive"],
        backgroundClip: ["responsive"],
        backgroundColor: [
            "responsive",
            "dark",
            "group-hover",
            "focus-within",
            "hover",
            "focus",
        ],
        backgroundImage: ["responsive"],
        backgroundOpacity: [
            "responsive",
            "group-hover",
            "focus-within",
            "hover",
            "focus",
        ],
        backgroundPosition: ["responsive"],
        backgroundRepeat: ["responsive"],
        backgroundSize: ["responsive"],
        borderCollapse: ["responsive"],
        borderColor: [
            "responsive",
            "dark",
            "group-hover",
            "focus-within",
            "hover",
            "focus",
        ],
        borderOpacity: [
            "responsive",
            "group-hover",
            "focus-within",
            "hover",
            "focus",
        ],
        borderRadius: ["responsive"],
        borderStyle: ["responsive"],
        borderWidth: ["responsive"],
        boxShadow: [
            "responsive",
            "group-hover",
            "focus-within",
            "hover",
            "focus",
        ],
        boxSizing: ["responsive"],
        clear: ["responsive"],
        container: ["responsive"],
        cursor: ["responsive"],
        display: ["responsive"],
        divideColor: ["responsive", "dark"],
        divideOpacity: ["responsive"],
        divideStyle: ["responsive"],
        divideWidth: ["responsive"],
        fill: ["responsive"],
        flex: ["responsive"],
        flexDirection: ["responsive"],
        flexGrow: ["responsive"],
        flexShrink: ["responsive"],
        flexWrap: ["responsive"],
        float: ["responsive"],
        fontFamily: ["responsive"],
        fontSize: ["responsive"],
        fontSmoothing: ["responsive"],
        fontStyle: ["responsive"],
        fontVariantNumeric: ["responsive"],
        fontWeight: ["responsive"],
        gap: ["responsive"],
        gradientColorStops: ["responsive", "dark", "hover", "focus"],
        gridAutoColumns: ["responsive"],
        gridAutoFlow: ["responsive"],
        gridAutoRows: ["responsive"],
        gridColumn: ["responsive"],
        gridColumnEnd: ["responsive"],
        gridColumnStart: ["responsive"],
        gridRow: ["responsive"],
        gridRowEnd: ["responsive"],
        gridRowStart: ["responsive"],
        gridTemplateColumns: ["responsive"],
        gridTemplateRows: ["responsive"],
        height: ["responsive"],
        inset: ["responsive"],
        justifyContent: ["responsive"],
        justifyItems: ["responsive"],
        justifySelf: ["responsive"],
        letterSpacing: ["responsive"],
        lineHeight: ["responsive"],
        listStylePosition: ["responsive"],
        listStyleType: ["responsive"],
        margin: ["responsive"],
        maxHeight: ["responsive"],
        maxWidth: ["responsive"],
        minHeight: ["responsive"],
        minWidth: ["responsive"],
        objectFit: ["responsive"],
        objectPosition: ["responsive"],
        opacity: [
            "responsive",
            "group-hover",
            "focus-within",
            "hover",
            "focus",
        ],
        order: ["responsive"],
        outline: ["responsive", "focus-within", "focus"],
        overflow: ["responsive"],
        overscrollBehavior: ["responsive"],
        padding: ["responsive"],
        placeContent: ["responsive"],
        placeItems: ["responsive"],
        placeSelf: ["responsive"],
        placeholderColor: ["responsive", "dark", "focus"],
        placeholderOpacity: ["responsive", "focus"],
        pointerEvents: ["responsive"],
        position: ["responsive"],
        resize: ["responsive"],
        ringColor: ["responsive", "dark", "focus-within", "focus"],
        ringOffsetColor: ["responsive", "dark", "focus-within", "focus"],
        ringOffsetWidth: ["responsive", "focus-within", "focus"],
        ringOpacity: ["responsive", "focus-within", "focus"],
        ringWidth: ["responsive", "focus-within", "focus"],
        rotate: ["responsive", "hover", "focus"],
        scale: ["responsive", "hover", "focus"],
        skew: ["responsive", "hover", "focus"],
        space: ["responsive"],
        stroke: ["responsive"],
        strokeWidth: ["responsive"],
        tableLayout: ["responsive"],
        textAlign: ["responsive"],
        textColor: [
            "responsive",
            "dark",
            "group-hover",
            "focus-within",
            "hover",
            "focus",
        ],
        textDecoration: [
            "responsive",
            "group-hover",
            "focus-within",
            "hover",
            "focus",
        ],
        textOpacity: [
            "responsive",
            "group-hover",
            "focus-within",
            "hover",
            "focus",
        ],
        textOverflow: ["responsive"],
        textTransform: ["responsive"],
        transform: ["responsive"],
        transformOrigin: ["responsive"],
        transitionDelay: ["responsive"],
        transitionDuration: ["responsive"],
        transitionProperty: ["responsive"],
        transitionTimingFunction: ["responsive"],
        translate: ["responsive", "hover", "focus"],
        userSelect: ["responsive"],
        verticalAlign: ["responsive"],
        visibility: ["responsive"],
        whitespace: ["responsive"],
        width: ["responsive"],
        wordBreak: ["responsive"],
        zIndex: ["responsive", "focus-within", "focus"],
    },
    plugins: [],
};
