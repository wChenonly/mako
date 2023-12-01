/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export interface JsHooks {
  onCompileLess?: (filePath: string) => Promise<string>;
  onBuildComplete?: (data: {
    isFirstCompile: boolean;
    time: number;
    stats: {
      startTime: number;
      endTime: number;
    };
  }) => void;
  onGenerateFsWrite?: (path: string, content: Buffer) => Promise<void>;
}
export interface BuildParams {
  root: string;
  config: {
    entry?: Record<string, string>;
    output?: {
      path: string;
      mode: 'bundle' | 'bundless';
      esVersion?: string;
      meta?: boolean;
      preserveModules?: boolean;
      preserveModulesRoot?: string;
      asciiOnly?: boolean;
    };
    resolve?: {
      alias?: Record<string, string>;
      extensions?: string[];
    };
    manifest?: boolean;
    manifestConfig?: {
      fileName: string;
      basePath: string;
    };
    mode?: 'development' | 'production';
    define?: Record<string, string>;
    devtool?: 'source-map' | 'inline-source-map' | 'none';
    externals?: Record<
      string,
      | string
      | {
          root: string;
          script?: string;
          subpath?: {
            exclude?: string[];
            rules: {
              regex: string;
              target: string | '$EMPTY';
              targetConverter?: 'PascalCase';
            }[];
          };
        }
    >;
    copy?: string[];
    code_splitting?: 'auto' | 'none';
    providers?: Record<string, string[]>;
    publicPath?: string;
    inlineLimit?: number;
    targets?: Record<string, number>;
    platform?: 'node' | 'browser';
    hmr?: boolean;
    hmrPort?: string;
    hmrHost?: string;
    px2rem?: boolean;
    px2remConfig?: {
      root: number;
      propBlackList: string[];
      propWhiteList: string[];
      selectorBlackList: string[];
      selectorWhiteList: string[];
    };
    stats?: boolean;
    hash?: boolean;
    autoCssModules?: boolean;
    ignoreCSSParserErrors?: boolean;
    dynamicImportToRequire?: boolean;
    umd?: string;
    transformImport?: {
      libraryName: string;
      libraryDirectory?: string;
      style?: boolean | string;
    }[];
    clean?: boolean;
    nodePolyfill?: boolean;
    ignores?: string[];
    minify?: boolean;
    _minifish?: {
      mapping: Record<string, string>;
      metaPath?: string;
      inject?: Record<
        string,
        | { from: string; exclude?: string }
        | { from: string; named: string; exclude?: string }
        | { from: string; namespace: true; exclude?: string }
      >;
    };
  };
  hooks: JsHooks;
  watch: boolean;
}
export function build(buildParams: BuildParams): Promise<void>;
