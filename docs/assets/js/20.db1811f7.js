(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{464:function(s,t,a){s.exports=a.p+"assets/img/2-15.89d0af83.png"},465:function(s,t,a){s.exports=a.p+"assets/img/2-16.0a86cf44.png"},466:function(s,t,a){s.exports=a.p+"assets/img/2-17.e56b6689.png"},467:function(s,t,a){s.exports=a.p+"assets/img/2-18.9f54d13a.png"},701:function(s,t,a){"use strict";a.r(t);var e=a(62),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"_2-6-资源管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-资源管理"}},[s._v("#")]),s._v(" 2.6 资源管理")]),s._v(" "),e("p",[s._v("Flutter APP 安装包中会包含代码和 assets（资源）两部分。Assets 是会打包到程序安装包中的，可在运行时访问。常见类型的 assets 包括静态数据（例如JSON文件）、配置文件、图标和图片等。")]),s._v(" "),e("h2",{attrs:{id:"_2-6-1-指定-assets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-1-指定-assets"}},[s._v("#")]),s._v(" 2.6.1 指定 assets")]),s._v(" "),e("p",[s._v("和包管理一样，Flutter 也使用"),e("a",{attrs:{href:"https://www.dartlang.org/tools/pub/pubspec",target:"_blank",rel:"noopener noreferrer"}},[e("code",[s._v("pubspec.yaml")]),e("OutboundLink")],1),s._v("文件来管理应用程序所需的资源，举个例子:")]),s._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("flutter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("assets")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" assets/my_icon.png\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" assets/background.png\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[e("code",[s._v("assets")]),s._v("指定应包含在应用程序中的文件， 每个 asset 都通过相对于"),e("code",[s._v("pubspec.yaml")]),s._v("文件所在的文件系统路径来标识自身的路径。asset 的声明顺序是无关紧要的，asset的实际目录可以是任意文件夹（在本示例中是assets 文件夹）。")]),s._v(" "),e("p",[s._v("在构建期间，Flutter 将 asset 放置到称为 "),e("em",[s._v("asset bundle")]),s._v(" 的特殊存档中，应用程序可以在运行时读取它们（但不能修改）。")]),s._v(" "),e("h2",{attrs:{id:"_2-6-2-asset-变体-variant"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-2-asset-变体-variant"}},[s._v("#")]),s._v(" 2.6.2 Asset 变体（variant）")]),s._v(" "),e("p",[s._v("构建过程支持“asset变体”的概念：不同版本的 asset 可能会显示在不同的上下文中。 在"),e("code",[s._v("pubspec.yaml")]),s._v("的assets 部分中指定 asset 路径时，构建过程中，会在相邻子目录中查找具有相同名称的任何文件。这些文件随后会与指定的 asset 一起被包含在 asset bundle 中。")]),s._v(" "),e("p",[s._v("例如，如果应用程序目录中有以下文件:")]),s._v(" "),e("ul",[e("li",[s._v("…/pubspec.yaml")]),s._v(" "),e("li",[s._v("…/graphics/my_icon.png")]),s._v(" "),e("li",[s._v("…/graphics/background.png")]),s._v(" "),e("li",[s._v("…/graphics/dark/background.png")]),s._v(" "),e("li",[s._v("…etc.")])]),s._v(" "),e("p",[s._v("然后"),e("code",[s._v("pubspec.yaml")]),s._v("文件中只需包含:")]),s._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("flutter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("assets")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" graphics/background.png\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("那么这两个"),e("code",[s._v("graphics/background.png")]),s._v("和"),e("code",[s._v("graphics/dark/background.png")]),s._v(" 都将包含在您的 asset bundle中。前者被认为是_main asset_ （主资源），后者被认为是一种变体（variant）。")]),s._v(" "),e("p",[s._v("在选择匹配当前设备分辨率的图片时，Flutter会使用到 asset 变体（见下文）。")]),s._v(" "),e("h2",{attrs:{id:"_2-6-3-加载-assets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-3-加载-assets"}},[s._v("#")]),s._v(" 2.6.3 加载 assets")]),s._v(" "),e("p",[s._v("您的应用可以通过"),e("a",{attrs:{href:"https://docs.flutter.io/flutter/services/AssetBundle-class.html",target:"_blank",rel:"noopener noreferrer"}},[e("code",[s._v("AssetBundle")]),e("OutboundLink")],1),s._v("对象访问其 asset 。有两种主要方法允许从 Asset bundle 中加载字符串或图片（二进制）文件。")]),s._v(" "),e("h3",{attrs:{id:"_1-加载文本assets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-加载文本assets"}},[s._v("#")]),s._v(" 1. 加载文本assets")]),s._v(" "),e("ul",[e("li",[s._v("通过"),e("a",{attrs:{href:"https://docs.flutter.io/flutter/services/rootBundle.html",target:"_blank",rel:"noopener noreferrer"}},[e("code",[s._v("rootBundle")]),e("OutboundLink")],1),s._v(" 对象加载：每个Flutter应用程序都有一个"),e("a",{attrs:{href:"https://docs.flutter.io/flutter/services/rootBundle.html",target:"_blank",rel:"noopener noreferrer"}},[e("code",[s._v("rootBundle")]),e("OutboundLink")],1),s._v("对象， 通过它可以轻松访问主资源包，直接使用"),e("code",[s._v("package:flutter/services.dart")]),s._v("中全局静态的"),e("code",[s._v("rootBundle")]),s._v("对象来加载asset即可。")]),s._v(" "),e("li",[s._v("通过 "),e("a",{attrs:{href:"https://docs.flutter.io/flutter/widgets/DefaultAssetBundle-class.html",target:"_blank",rel:"noopener noreferrer"}},[e("code",[s._v("DefaultAssetBundle")]),e("OutboundLink")],1),s._v(" 加载：建议使用 "),e("a",{attrs:{href:"https://docs.flutter.io/flutter/widgets/DefaultAssetBundle-class.html",target:"_blank",rel:"noopener noreferrer"}},[e("code",[s._v("DefaultAssetBundle")]),e("OutboundLink")],1),s._v(" 来获取当前 BuildContext 的AssetBundle。 这种方法不是使用应用程序构建的默认 asset bundle，而是使父级 widget 在运行时动态替换的不同的 AssetBundle，这对于本地化或测试场景很有用。")])]),s._v(" "),e("p",[s._v("通常，可以使用"),e("code",[s._v("DefaultAssetBundle.of()")]),s._v("在应用运行时来间接加载 asset（例如JSON文件），而在widget 上下文之外，或其他"),e("code",[s._v("AssetBundle")]),s._v("句柄不可用时，可以使用"),e("code",[s._v("rootBundle")]),s._v("直接加载这些 asset，例如：")]),s._v(" "),e("div",{staticClass:"language-dart line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dart:async'")])]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Future")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'package:flutter/services.dart'")])]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" rootBundle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Future")]),e("span",{pre:!0,attrs:{class:"token generics"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("loadAsset")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" rootBundle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("loadString")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'assets/config.json'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h3",{attrs:{id:"_2-加载图片"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-加载图片"}},[s._v("#")]),s._v(" 2. 加载图片")]),s._v(" "),e("p",[s._v("类似于原生开发，Flutter也可以为当前设备加载适合其分辨率的图像。")]),s._v(" "),e("h4",{attrs:{id:"_1-声明分辨率相关的图片-assets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-声明分辨率相关的图片-assets"}},[s._v("#")]),s._v(" 1）声明分辨率相关的图片 assets")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://docs.flutter.io/flutter/painting/AssetImage-class.html",target:"_blank",rel:"noopener noreferrer"}},[e("code",[s._v("AssetImage")]),e("OutboundLink")],1),s._v(" 可以将asset的请求逻辑映射到最接近当前设备像素比例（dpi）的asset。为了使这种映射起作用，必须根据特定的目录结构来保存asset：")]),s._v(" "),e("ul",[e("li",[s._v("…/image.png")]),s._v(" "),e("li",[s._v("…/"),e("strong",[s._v("M")]),s._v("x/image.png")]),s._v(" "),e("li",[s._v("…/"),e("strong",[s._v("N")]),s._v("x/image.png")]),s._v(" "),e("li",[s._v("…etc.")])]),s._v(" "),e("p",[s._v("其中 M 和 N 是数字标识符，对应于其中包含的图像的分辨率，也就是说，它们指定不同设备像素比例的图片。")]),s._v(" "),e("p",[s._v("主资源默认对应于1.0倍的分辨率图片。看一个例子：")]),s._v(" "),e("ul",[e("li",[s._v("…/my_icon.png")]),s._v(" "),e("li",[s._v("…/2.0x/my_icon.png")]),s._v(" "),e("li",[s._v("…/3.0x/my_icon.png")])]),s._v(" "),e("p",[s._v("在设备像素比率为1.8的设备上，"),e("code",[s._v(".../2.0x/my_icon.png")]),s._v(" 将被选择。对于2.7的设备像素比率，"),e("code",[s._v(".../3.0x/my_icon.png")]),s._v("将被选择。")]),s._v(" "),e("p",[s._v("如果未在"),e("code",[s._v("Image")]),s._v(" widget上指定渲染图像的宽度和高度，那么"),e("code",[s._v("Image")]),s._v(" widget将占用与主资源相同的屏幕空间大小。 也就是说，如果"),e("code",[s._v(".../my_icon.png")]),s._v("是72px乘72px，那么"),e("code",[s._v(".../3.0x/my_icon.png")]),s._v("应该是216px乘216px; 但如果未指定宽度和高度，它们都将渲染为72像素×72像素（以逻辑像素为单位）。")]),s._v(" "),e("p",[e("code",[s._v("pubspec.yaml")]),s._v("中asset部分中的每一项都应与实际文件相对应，但主资源项除外。当主资源缺少某个资源时，会按分辨率从低到高的顺序去选择 ，也就是说1x中没有的话会在2x中找，2x中还没有的话就在3x中找。")]),s._v(" "),e("h4",{attrs:{id:"_2-加载图片-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-加载图片-2"}},[s._v("#")]),s._v(" 2）加载图片")]),s._v(" "),e("p",[s._v("要加载图片，可以使用 "),e("a",{attrs:{href:"https://docs.flutter.io/flutter/painting/AssetImage-class.html",target:"_blank",rel:"noopener noreferrer"}},[e("code",[s._v("AssetImage")]),e("OutboundLink")],1),s._v("类。例如，我们可以从上面的asset声明中加载背景图片：")]),s._v(" "),e("div",{staticClass:"language-dart line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Widget")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("build")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BuildContext")]),s._v(" context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DecoratedBox")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    decoration"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BoxDecoration")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n      image"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DecorationImage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        image"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AssetImage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'graphics/background.png'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("注意，"),e("code",[s._v("AssetImage")]),s._v(" 并非是一个widget， 它实际上是一个"),e("code",[s._v("ImageProvider")]),s._v("，有些时候你可能期望直接得到一个显示图片的widget，那么你可以使用"),e("code",[s._v("Image.asset()")]),s._v("方法，如：")]),s._v(" "),e("div",{staticClass:"language-dart line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Widget")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("build")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BuildContext")]),s._v(" context"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("asset")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'graphics/background.png'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("使用默认的 asset bundle 加载资源时，内部会自动处理分辨率等，这些处理对开发者来说是无感知的。 (如果使用一些更低级别的类，如 "),e("a",{attrs:{href:"https://docs.flutter.io/flutter/painting/ImageStream-class.html",target:"_blank",rel:"noopener noreferrer"}},[e("code",[s._v("ImageStream")]),e("OutboundLink")],1),s._v("或 "),e("a",{attrs:{href:"https://docs.flutter.io/flutter/painting/ImageCache-class.html",target:"_blank",rel:"noopener noreferrer"}},[e("code",[s._v("ImageCache")]),e("OutboundLink")],1),s._v(" 时你会注意到有与缩放相关的参数)")]),s._v(" "),e("h4",{attrs:{id:"_3-依赖包中的资源图片"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-依赖包中的资源图片"}},[s._v("#")]),s._v(" 3）依赖包中的资源图片")]),s._v(" "),e("p",[s._v("要加载依赖包中的图像，必须给"),e("code",[s._v("AssetImage")]),s._v("提供"),e("code",[s._v("package")]),s._v("参数。")]),s._v(" "),e("p",[s._v("例如，假设您的应用程序依赖于一个名为“my_icons”的包，它具有如下目录结构：")]),s._v(" "),e("ul",[e("li",[s._v("…/pubspec.yaml")]),s._v(" "),e("li",[s._v("…/icons/heart.png")]),s._v(" "),e("li",[s._v("…/icons/1.5x/heart.png")]),s._v(" "),e("li",[s._v("…/icons/2.0x/heart.png")]),s._v(" "),e("li",[s._v("…etc.")])]),s._v(" "),e("p",[s._v("然后加载图像，使用:")]),s._v(" "),e("div",{staticClass:"language-dart line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AssetImage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'icons/heart.png'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" package"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'my_icons'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("或")]),s._v(" "),e("div",{staticClass:"language-dart line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("asset")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'icons/heart.png'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" package"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string-literal"}},[e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'my_icons'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("blockquote",[e("p",[s._v("注意：包在使用本身的资源时也应该加上"),e("code",[s._v("package")]),s._v("参数来获取。")])]),s._v(" "),e("p",[e("strong",[s._v("打包包中的 assets")])]),s._v(" "),e("p",[s._v("如果在"),e("code",[s._v("pubspec.yaml")]),s._v("文件中声明了期望的资源，它将会打包到相应的package中。特别是，包本身使用的资源必须在"),e("code",[s._v("pubspec.yaml")]),s._v("中指定。")]),s._v(" "),e("p",[s._v("包也可以选择在其"),e("code",[s._v("lib/")]),s._v("文件夹中包含未在其"),e("code",[s._v("pubspec.yaml")]),s._v("文件中声明的资源。在这种情况下，对于要打包的图片，应用程序必须在"),e("code",[s._v("pubspec.yaml")]),s._v("中指定包含哪些图像。 例如，一个名为“fancy_backgrounds”的包，可能包含以下文件：")]),s._v(" "),e("ul",[e("li",[s._v("…/lib/backgrounds/background1.png")]),s._v(" "),e("li",[s._v("…/lib/backgrounds/background2.png")]),s._v(" "),e("li",[s._v("…/lib/backgrounds/background3.png")])]),s._v(" "),e("p",[s._v("要包含第一张图像，必须在"),e("code",[s._v("pubspec.yaml")]),s._v("的assets部分中声明它：")]),s._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("flutter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("assets")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" packages/fancy_backgrounds/backgrounds/background1.png\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("code",[s._v("lib/")]),s._v("是隐含的，所以它不应该包含在资产路径中。")]),s._v(" "),e("h3",{attrs:{id:"_3-特定平台-assets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-特定平台-assets"}},[s._v("#")]),s._v(" 3. 特定平台 assets")]),s._v(" "),e("p",[s._v("上面的资源都是flutter应用中的，这些资源只有在Flutter框架运行之后才能使用，如果要给我们的应用设置APP图标或者添加启动图，那我们必须使用特定平台的assets。")]),s._v(" "),e("h4",{attrs:{id:"_1-设置app图标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-设置app图标"}},[s._v("#")]),s._v(" 1）设置APP图标")]),s._v(" "),e("p",[s._v("更新Flutter应用程序启动图标的方式与在本机Android或iOS应用程序中更新启动图标的方式相同。")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("Android")]),s._v(" "),e("p",[s._v("在 Flutter 项目的根目录中，导航到"),e("code",[s._v(".../android/app/src/main/res")]),s._v("目录，里面包含了各种资源文件夹（如"),e("code",[s._v("mipmap-hdpi")]),s._v("已包含占位符图像 “ic_launcher.png”，见图2-15）。 只需按照"),e("a",{attrs:{href:"https://developer.android.com/guide/practices/ui_guidelines/icon_design_launcher.html#size",target:"_blank",rel:"noopener noreferrer"}},[s._v("Android开发人员指南"),e("OutboundLink")],1),s._v("中的说明， 将其替换为所需的资源，并遵守每种屏幕密度（dpi）的建议图标大小标准。")]),s._v(" "),e("p",[e("img",{attrs:{src:a(464),alt:"图2-15"}})]),s._v(" "),e("blockquote",[e("p",[e("strong",[s._v("注意:")]),s._v(" 如果您重命名.png文件，则还必须在您"),e("code",[s._v("AndroidManifest.xml")]),s._v("的"),e("code",[s._v("<application>")]),s._v("标签的"),e("code",[s._v("android:icon")]),s._v("属性中更新名称。")])])]),s._v(" "),e("li",[e("p",[s._v("iOS")]),s._v(" "),e("p",[s._v("在Flutter项目的根目录中，导航到"),e("code",[s._v(".../ios/Runner")]),s._v("。该目录中"),e("code",[s._v("Assets.xcassets/AppIcon.appiconset")]),s._v("已经包含占位符图片（见图2-16）， 只需将它们替换为适当大小的图片，保留原始文件名称。")]),s._v(" "),e("p",[e("img",{attrs:{src:a(465),alt:"图2-16"}})])])]),s._v(" "),e("h4",{attrs:{id:"_2-更新启动页"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-更新启动页"}},[s._v("#")]),s._v(" 2）更新启动页")]),s._v(" "),e("p",[e("img",{attrs:{src:a(466),alt:"图2-17"}})]),s._v(" "),e("p",[s._v("在 Flutter 框架加载时，Flutter 会使用本地平台机制绘制启动页。此启动页将持续到Flutter渲染应用程序的第一帧时。")]),s._v(" "),e("blockquote",[e("p",[e("strong",[s._v("注意:")]),s._v(" 这意味着如果您不在应用程序的"),e("code",[s._v("main()")]),s._v("方法中调用"),e("a",{attrs:{href:"https://docs.flutter.io/flutter/widgets/runApp.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("runApp"),e("OutboundLink")],1),s._v(" 函数 （或者更具体地说，如果您不调用"),e("a",{attrs:{href:"https://docs.flutter.io/flutter/dart-ui/Window/render.html",target:"_blank",rel:"noopener noreferrer"}},[e("code",[s._v("window.render")]),e("OutboundLink")],1),s._v("去响应"),e("a",{attrs:{href:"https://docs.flutter.io/flutter/dart-ui/Window/onDrawFrame.html",target:"_blank",rel:"noopener noreferrer"}},[e("code",[s._v("window.onDrawFrame")]),e("OutboundLink")],1),s._v("）的话， 启动屏幕将永远持续显示。")])]),s._v(" "),e("ul",[e("li",[s._v("Android")])]),s._v(" "),e("p",[s._v("要将启动屏幕（splash screen）添加到您的Flutter应用程序， 请导航至"),e("code",[s._v(".../android/app/src/main")]),s._v("。在"),e("code",[s._v("res/drawable/launch_background.xml")]),s._v("，通过自定义drawable来实现自定义启动界面（你也可以直接换一张图片）。")]),s._v(" "),e("ul",[e("li",[s._v("iOS")])]),s._v(" "),e("p",[s._v("要将图片添加到启动屏幕（splash screen）的中心，请导航至"),e("code",[s._v(".../ios/Runner")]),s._v("。在"),e("code",[s._v("Assets.xcassets/LaunchImage.imageset")]),s._v("， 拖入图片，并命名为"),e("code",[s._v("LaunchImage.png")]),s._v("、"),e("code",[s._v("LaunchImage@2x.png")]),s._v("、"),e("code",[s._v("LaunchImage@3x.png")]),s._v("。 如果你使用不同的文件名，那您还必须更新同一目录中的"),e("code",[s._v("Contents.json")]),s._v("文件，图片的具体尺寸可以查看苹果官方的标准。")]),s._v(" "),e("p",[s._v("您也可以通过打开Xcode完全自定义storyboard。在Project Navigator中导航到"),e("code",[s._v("Runner/Runner")]),s._v("然后通过打开"),e("code",[s._v("Assets.xcassets")]),s._v("拖入图片，或者通过在LaunchScreen.storyboard中使用Interface Builder进行自定义，如图2-18所示。")]),s._v(" "),e("p",[e("img",{attrs:{src:a(467),alt:"图2-18"}})]),s._v(" "),e("h2",{attrs:{id:"_2-6-4-平台共享-assets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-4-平台共享-assets"}},[s._v("#")]),s._v(" 2.6.4 平台共享 assets")]),s._v(" "),e("p",[s._v("如果我们采用的是Flutter+原生的开发模式，那么可能会存Flutter和原生需要共享资源的情况，比如Flutter项目中已经有了一张图片A，如果原生代码中也要使用A，我们可以将A拷贝一份到原生项目的特定目录，这样的话虽然功能可以实现，但是最终的应用程序包会变大，因为包含了重复的资源，为了解决这个问题，Flutter 提供了一种Flutter和原生之间共享资源的方式，由于实现上需要涉及平台相关的原生代码，故本书不做展开，读者有需要可以自行查阅"),e("a",{attrs:{href:"https://flutter.cn/docs/development/ui/assets-and-images#sharing-assets-with-the-underlying-platform",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),e("OutboundLink")],1),s._v("。")])])}),[],!1,null,null,null);t.default=n.exports}}]);