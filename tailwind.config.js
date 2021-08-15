module.exports = {
    purge: [
        "./dist/**/*.html",
        "./dist/**/*.js",
        "./src/**/*.html",
        "./src/**/*.js",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: "#0F044C",
                hover: "#141E61"
            }
        },
    },
    variants: {},
    plugins: [],
}