# Ymi UI 快速上手

感觉uniapp官方的uni-ui不太好用，所以打算自己写个uniapp的UI组件库，第一次写npm组件库有点紧张......


### 安装

#### 方式一 ：通过 npm 安装

``` js
// # Using npm
npm install ymiui-uni
// # Using pnpm
pnpm i ymiui-uni
```

### 如何使用

按照以下的方式使用组件，以 `Button` 为例。

在 `pages.json` 中 添加配置：

``` js
// 下载安装时配置
"easycom": {
		"autoscan": true,
		"custom": {
			"ym-(.*)": "@/components/ymiui-uni/ym-$1/ym-$1.vue"
		}
	}

// 使用npm安装时配置（配置完成后重新编译运行）
"easycom": {
		"autoscan": true,
		"custom": {
			"ym-(.*)": "ymiui-uni/firstui/ym-$1/ym-$1.vue"
		}
	}
```

</div>

### 使用组件

引入组件后，可以在 页面 中直接使用组件

``` html
<ym-button text="默认按钮"></ym-button>
```

### 更新日志

#### V0.0.1（2023-05-12）

- 第一次开发npm组件库。