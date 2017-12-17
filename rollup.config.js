export default {
	entry: 'dist/index.js',
	dest: 'dist/bundles/angularx-youtube.umd.js',
	sourceMap: false,
	format: 'umd',
	moduleName: 'ng.angularx-youtube',
	globals: {
		'@angular/core': 'ng.core',
		'@angular/common': 'ng.common',
		'rxjs/Observable': 'Rx',
	}
}
