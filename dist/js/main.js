
//配置文件
require.config({
	paths: {
		"jquery": "jquery-1.9.1",
		"jquery-cookie": "jquery.cookie",
		"index": "homepage",
		"parabola": "parabola"
	},
	//设置，模块之间的依赖关系
	shim: {
		//保证，先加载JQuery，再加载
		"jquery-cookie": ["jquery"],
		/*
			定义不遵从AMD规范的js文件

		 */
		"parabola": {
			exports: "_"
		}
	}
})

require(["index"], function(index){
	index.main();
	
})

