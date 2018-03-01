import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
export default {
    input: 'src/ripple.js',
    output: {
        file: 'dist/ripple.min.js',
        format: 'cjs'
    },
    plugins: [ 
        resolve(),
        commonjs(),
        babel({
            exclude: 'node_modules/**' // 只编译我们的源代码
          })
    ]
};