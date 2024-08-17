import { Configuration } from "webpack"
import { BuildOptions } from "./type/types"

export function buildResolvers(options: BuildOptions): Configuration["resolve"] {
  return {
    extensions: [".tsx", ".ts", ".js"],
  }
}
