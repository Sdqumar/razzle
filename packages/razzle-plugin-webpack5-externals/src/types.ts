import {
  Webpack5RazzleConfigInt,
  Webpack5RazzlePluginInt,
  Webpack5RazzleContextInt,
  Webpack5OptionsInt,
  Webpack5RazzlePathNames,
  Webpack5DefinePluginDefines,
} from "razzle-plugin-webpack5/types";

export interface Webpack5ExternalsRazzleContextInt<T extends string>
  extends Webpack5RazzleContextInt<T> {}

export interface Webpack5ExternalsOptionsInt<T extends string>
  extends Webpack5OptionsInt<T> {}

export interface Webpack5ExternalsPluginOptions {
  useEsm: boolean;
}

export type Webpack5ExternalsRazzlePathNames =
  | Webpack5RazzlePathNames
  | "externals";

export type Webpack5ExternalsRazzleContext =
  Webpack5ExternalsRazzleContextInt<Webpack5ExternalsRazzlePathNames>;

export type Webpack5ExternalsDefinePluginDefines =
  | Webpack5DefinePluginDefines
  | "process.env.something";

export type Webpack5ExternalsOptions =
  Webpack5ExternalsOptionsInt<Webpack5ExternalsDefinePluginDefines>;

export type Webpack5ExternalsConfig = Webpack5RazzleConfigInt<
  Webpack5ExternalsConfig,
  Webpack5ExternalsRazzleContext,
  Webpack5ExternalsOptions
>;

export type Webpack5ExternalsPlugin = Webpack5RazzlePluginInt<
  Webpack5ExternalsPluginOptions,
  Webpack5ExternalsConfig,
  Webpack5ExternalsRazzleContext,
  Webpack5ExternalsOptions
>;