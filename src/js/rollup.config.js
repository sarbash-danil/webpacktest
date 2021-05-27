const extensions = [
    '.js', '.jsx', '.ts', '.tsx',
];

const name = 'RollupTypeScriptBabel';

export default {
    input: './src/index.ts',

    // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
    // https://rollupjs.org/guide/en#external-e-external
    external: [...Object.keys(pkg.dependencies || {})],

    plugins: [
        // Allows node_modules resolution
        resolve({extensions}),

        // Allow bundling cjs modules. Rollup doesn't understand cjs
        commonjs(),

        // Compile TypeScript/JavaScript files
        babel({extensions, include: ['src/**/*'], runtimeHelpers: true}),
    ],

    output: [{
        file: pkg.main,
        format: 'cjs',
    }, {
        file: pkg.module,
        format: 'es',
    }],
};
