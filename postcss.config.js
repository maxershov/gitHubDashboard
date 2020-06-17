module.exports = {
    plugins: {
        "cssnano": { preset: 'default' },
        "postcss-preset-env": {
            stage: 1,
            autoprefixer: { grid: true },
            browsers: [">1%", "not IE 11", "not OperaMini all"]
        }
    }
};
