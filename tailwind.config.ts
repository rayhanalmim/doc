import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ["var(--font-inter)", "sans-serif"],
            },
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            typography: {
                DEFAULT: {
                    css: {
                        maxWidth: 'none',
                        color: 'inherit',
                        a: {
                            color: 'inherit',
                            textDecoration: 'underline',
                            fontWeight: '500',
                        },
                        '[class~="lead"]': {
                            color: 'inherit',
                        },
                        strong: {
                            color: 'inherit',
                            fontWeight: '600',
                        },
                        'ol[type="A"]': {
                            '--list-counter-style': 'upper-alpha',
                        },
                        'ol[type="a"]': {
                            '--list-counter-style': 'lower-alpha',
                        },
                        'ol[type="A" s]': {
                            '--list-counter-style': 'upper-alpha',
                        },
                        'ol[type="a" s]': {
                            '--list-counter-style': 'lower-alpha',
                        },
                        'ol[type="I"]': {
                            '--list-counter-style': 'upper-roman',
                        },
                        'ol[type="i"]': {
                            '--list-counter-style': 'lower-roman',
                        },
                        'ol[type="I" s]': {
                            '--list-counter-style': 'upper-roman',
                        },
                        'ol[type="i" s]': {
                            '--list-counter-style': 'lower-roman',
                        },
                        'ol[type="1"]': {
                            '--list-counter-style': 'decimal',
                        },
                        'ol > li': {
                            position: 'relative',
                        },
                        'ol > li::before': {
                            content: 'counter(list-item, var(--list-counter-style, decimal)) "."',
                            position: 'absolute',
                            fontWeight: '400',
                            color: 'inherit',
                        },
                        'ul > li': {
                            position: 'relative',
                        },
                        'ul > li::before': {
                            content: '""',
                            position: 'absolute',
                            backgroundColor: 'currentColor',
                            borderRadius: '50%',
                        },
                        hr: {
                            borderColor: 'inherit',
                            borderTopWidth: 1,
                            marginTop: '3em',
                            marginBottom: '3em',
                        },
                        blockquote: {
                            fontWeight: '500',
                            fontStyle: 'italic',
                            color: 'inherit',
                            borderLeftWidth: '0.25rem',
                            borderLeftColor: 'inherit',
                            quotes: '"\\201C""\\201D""\\2018""\\2019"',
                            marginTop: '1.6em',
                            marginBottom: '1.6em',
                            paddingLeft: '1em',
                        },
                        h1: {
                            color: 'inherit',
                            fontWeight: '800',
                            fontSize: '2.25em',
                            marginTop: '0',
                            marginBottom: '0.8888889em',
                            lineHeight: '1.1111111',
                        },
                        h2: {
                            color: 'inherit',
                            fontWeight: '700',
                            fontSize: '1.5em',
                            marginTop: '2em',
                            marginBottom: '1em',
                            lineHeight: '1.3333333',
                        },
                        h3: {
                            color: 'inherit',
                            fontWeight: '600',
                            fontSize: '1.25em',
                            marginTop: '1.6em',
                            marginBottom: '0.6em',
                            lineHeight: '1.6',
                        },
                        h4: {
                            color: 'inherit',
                            fontWeight: '600',
                            marginTop: '1.5em',
                            marginBottom: '0.5em',
                            lineHeight: '1.5',
                        },
                        'figure figcaption': {
                            color: 'inherit',
                            fontSize: '0.875em',
                            lineHeight: '1.4285714',
                            marginTop: '0.8571429em',
                        },
                        code: {
                            color: 'inherit',
                            fontWeight: '600',
                            fontSize: '0.875em',
                        },
                        'code::before': {
                            content: '"`"',
                        },
                        'code::after': {
                            content: '"`"',
                        },
                        'a code': {
                            color: 'inherit',
                        },
                        pre: {
                            color: 'inherit',
                            backgroundColor: 'rgba(55, 65, 81, 1)',
                            overflowX: 'auto',
                            fontSize: '0.875em',
                            lineHeight: '1.7142857',
                            marginTop: '1.7142857em',
                            marginBottom: '1.7142857em',
                            borderRadius: '0.375rem',
                            paddingTop: '0.8571429em',
                            paddingRight: '1.1428571em',
                            paddingBottom: '0.8571429em',
                            paddingLeft: '1.1428571em',
                        },
                        'pre code': {
                            backgroundColor: 'transparent',
                            borderWidth: '0',
                            borderRadius: '0',
                            padding: '0',
                            fontWeight: '400',
                            color: 'inherit',
                            fontSize: 'inherit',
                            fontFamily: 'inherit',
                            lineHeight: 'inherit',
                        },
                        'pre code::before': {
                            content: 'none',
                        },
                        'pre code::after': {
                            content: 'none',
                        },
                        table: {
                            width: '100%',
                            tableLayout: 'auto',
                            textAlign: 'left',
                            marginTop: '2em',
                            marginBottom: '2em',
                            fontSize: '0.875em',
                            lineHeight: '1.7142857',
                        },
                        thead: {
                            color: 'inherit',
                            fontWeight: '600',
                            borderBottomWidth: '1px',
                            borderBottomColor: 'inherit',
                        },
                        'thead th': {
                            verticalAlign: 'bottom',
                            paddingRight: '0.5714286em',
                            paddingBottom: '0.5714286em',
                            paddingLeft: '0.5714286em',
                        },
                        'tbody tr': {
                            borderBottomWidth: '1px',
                            borderBottomColor: 'inherit',
                        },
                        'tbody tr:last-child': {
                            borderBottomWidth: '0',
                        },
                        'tbody td': {
                            verticalAlign: 'top',
                            paddingTop: '0.5714286em',
                            paddingRight: '0.5714286em',
                            paddingBottom: '0.5714286em',
                            paddingLeft: '0.5714286em',
                        },
                    },
                },
            },
        },
    },
    plugins: [],
};

export default config; 