// import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import sass from 'rollup-plugin-sass';
export default [{
    input: 'src/index.js',
    output: {
        file: 'dist/ripple.esm.js',
        format: 'es'
    },
    plugins: [
        resolve({
            jsnext: true,
            module: true
        }),
        // commonjs(),
        sass({
            output: 'dist/ripple.css'
        }),
        babel({
            runtimeHelpers: true,
            exclude: 'node_modules/**' // 只编译我们的源代码
        }),
    ]
}, {
    input: 'src/index.js',
    output: {
        name: 'Ripple',
        file: 'dist/ripple.umd.js',
        format: 'umd'
    },
    plugins: [
        resolve({
            jsnext: true,
            module: true
        }),
        // commonjs(),
        sass({
            output: 'dist/ripple.css'
        }),
        babel({
            runtimeHelpers: true,
            exclude: 'node_modules/**' // 只编译我们的源代码
        }),
        // uglify()
    ]
}];