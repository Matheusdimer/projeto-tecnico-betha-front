System.config({
    /* . . . */
    map: {
        /* . . . */
        '@angular/core': 'npm:@angular/core/fesm2015/core.mjs',
        '@angular/common': 'npm:@angular/common/fesm2015/common.mjs',
        '@angular/common/http': 'npm:@angular/common/fesm2015/http.mjs',
        '@angular/compiler': 'npm:@angular/compiler/fesm2015/compiler.mjs',
        '@angular/platform-browser': 'npm:@angular/platform-browser/fesm2015/platform-browser.mjs',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.mjs',
        '@angular/router': 'npm:@angular/router/fesm2015/router.mjs',
        '@angular/router/upgrade': 'npm:@angular/router/fesm2015/upgrade.mjs',
        '@angular/forms': 'npm:@angular/forms/fesm2015/forms.mjs',
        'tslib': 'npm:tslib/tslib.js',
        'plugin-babel': 'npm:systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': 'npm:systemjs-plugin-babel/systemjs-babel-browser.js',
        '@angular/upgrade/static': 'npm:@angular/upgrade/fesm2015/static.mjs',
        /* . . . */
    },
    transpiler: 'plugin-babel',
    /* . . . */
    packages: {
        /* . . . */
        'meta': {
            '*.mjs': {
                babelOptions: {
                    es2015: false
                }
            }
        }
    }
});