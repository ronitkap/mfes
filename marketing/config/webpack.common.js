module.exports = {
  module: {
    rules: [
      {
        // will process .m or .js files via babel
        test: /\.m?js$/,
        // do not run node module via babel
        exclude: /node_module/,
        use: {
          loader: "babel-loader",
          options: {
            //babel will process all the jsx and second arument will convert es5
            presets: ["@babel/preset-react", "@babel/preset-env"],
            // will add extra code support for project
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
