import { ModuleOptions } from "webpack"
import { BuildOptions } from "./type/types"
import MiniCssExtractPlugin from "mini-css-extract-plugin"

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  const isDev = options.mode === "development"

  const assetLoader = {
    test: /\.(jpg|png|svg|gif)$/,
    type: "asset/resource",
  }

  const cssLoader = {
    test: /\.css$/i,
    use: [
      // MiniCssExtractPlugin.loader в разработке
      isDev ? MiniCssExtractPlugin.loader : "style-loader",
      "css-loader",
      "postcss-loader",
    ],
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  }

  return [assetLoader, cssLoader, tsLoader]
}
