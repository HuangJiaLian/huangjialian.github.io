(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{405:function(t,a,s){"use strict";s.r(a);var e=s(19),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"小工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小工具"}},[t._v("#")]),t._v(" 小工具")]),t._v(" "),s("p",[t._v("视频压缩")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://superuser.com/questions/624563/how-to-resize-a-video-to-make-it-smaller-with-ffmpeg",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://superuser.com/questions/624563/how-to-resize-a-video-to-make-it-smaller-with-ffmpeg"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("ffmpeg -i input.avi -vf "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("scale")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iw/1:ih/2"')]),t._v(" output.avi\n")])])]),s("p",[t._v("下载视频缩略图")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("youtube-dl --get-thumbnail "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("https://youtu.be/4LXLwtqO4zY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("https://youtu.be/4LXLwtqO4zY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("查看有哪些字幕")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("youtube-dl --list-subs "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("https://youtu.be/rwnS_8weey8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("https://youtu.be/rwnS_8weey8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("下载视频保存字幕")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("youtube-dl --write-srt --sub-lang zh-HK "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("https://youtu.be/rwnS_8weey8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("https://youtu.be/rwnS_8weey8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("视频格式转换")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 无损转化mkv到mp4")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[t._v("i")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" *.mkv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" ffmpeg -i "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$i")]),t._v('"')]),t._v(" -codec copy "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(".*}")]),t._v('.mp4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 快速转换LRV到mov")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[t._v("i")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" *.LRV"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" ffmpeg -i "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$i")]),t._v('"')]),t._v(" -codec copy "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(".*}")]),t._v('.mov"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 视频转换成gif, 按比例缩放")]),t._v("\nffmpeg -i cube.mov -r "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" -vf "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("scale")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("640")]),t._v(":-1 cube.gif\n\n")])])]),s("h1",{attrs:{id:"快捷键"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快捷键"}},[t._v("#")]),t._v(" 快捷键")]),t._v(" "),s("p",[t._v("M 标记，卡点")]),t._v(" "),s("p",[t._v("Ctrl + shift +R 全部渲染")]),t._v(" "),s("p",[t._v("Motion 可以用来做解释视频")]),t._v(" "),s("p",[t._v("在片头使用摄像头，用全景。 视频中只需要要使用录屏功能就可以了")]),t._v(" "),s("h1",{attrs:{id:"视频制作流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#视频制作流"}},[t._v("#")]),t._v(" 视频制作流")]),t._v(" "),s("h2",{attrs:{id:"录制视频"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#录制视频"}},[t._v("#")]),t._v(" 录制视频")]),t._v(" "),s("p",[t._v("制作开场: 使用相机")]),t._v(" "),s("p",[t._v("录屏软件: Quick Time Player 全屏录制, 隐藏Docker")]),t._v(" "),s("p",[t._v("放大镜功能: alt + cmd +8 和神奇的cmd")]),t._v(" "),s("p",[t._v("使用OBS也是可以录制视频的")]),t._v(" "),s("h2",{attrs:{id:"视频编辑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#视频编辑"}},[t._v("#")]),t._v(" 视频编辑")]),t._v(" "),s("p",[t._v("分辨率自定义设置 2560 × 1600 这样就是全屏幕了")]),t._v(" "),s("p",[t._v("快捷键A 选择")]),t._v(" "),s("p",[t._v("快捷键B ✂️")]),t._v(" "),s("p",[t._v("快捷键 cmd + C 同时可以赋值这个片段的属性")]),t._v(" "),s("p",[t._v("Option + G 合并多个片段")]),t._v(" "),s("p",[t._v("局部模糊:1. 剪刀留下需要片断 2. 高斯效果拖到片段里 3. 高斯效果里右边，添加形状遮罩。")]),t._v(" "),s("p",[t._v("添加文字: 1. 剪刀留下需要片断 2. Edit→Connect To Title→Basic Title 3. 右上角编辑文字。")]),t._v(" "),s("p",[t._v("快速播放: 1. Retime pop-up menu below the viewer 2. choose Slow or Fast")]),t._v(" "),s("h2",{attrs:{id:"音频编辑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#音频编辑"}},[t._v("#")]),t._v(" 音频编辑")]),t._v(" "),s("p",[t._v("导出音频: 右上角 Share → Master File → Settings → Format[Audio Only] MP3 Format")]),t._v(" "),s("p",[t._v("静音片段: Choose Modify → Adjust Volume → Silence (–∞)")]),t._v(" "),s("p",[t._v("淡入淡出: Modify → Adjust Audio Fades → Fade In or Out")]),t._v(" "),s("h2",{attrs:{id:"制作字幕"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#制作字幕"}},[t._v("#")]),t._v(" 制作字幕")]),t._v(" "),s("p",[t._v("上传到音频到 "),s("a",{attrs:{href:"https://jianwai.netease.com/index/0",target:"_blank",rel:"noopener noreferrer"}},[t._v("网易见外工作台"),s("OutboundLink")],1),t._v(" 导出 srt 文件")]),t._v(" "),s("p",[t._v("Final Cut Pro中识别的srt文件里面的标号不能从0开始，必须从1开始。")]),t._v(" "),s("p",[t._v("我尝试将网易见外生成的srt文件中的第0项合并到第1项，然后删除第0项后，便可成功导入Final Cut Pro了。")]),t._v(" "),s("p",[t._v("修改srt文件，使其编号从1开始，而不是从0.")]),t._v(" "),s("h1",{attrs:{id:"将srt文件转化成-xml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#将srt文件转化成-xml"}},[t._v("#")]),t._v(" 将srt文件转化成 "),s("a",{attrs:{href:"https://crossub.xiaowude.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("xml"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("B站中文可以AI生成字幕了")]),t._v(" "),s("h2",{attrs:{id:"混合字幕"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#混合字幕"}},[t._v("#")]),t._v(" 混合字幕")]),t._v(" "),s("p",[t._v("导入字幕文件 File→ Import → Captions")]),t._v(" "),s("h2",{attrs:{id:"导出视频"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导出视频"}},[t._v("#")]),t._v(" 导出视频")]),t._v(" "),s("p",[t._v("右上角 Share → Master File → Settings → Fomat[Computer] [H264-Better Quality][2560 × 1600]")]),t._v(" "),s("p",[t._v("Roles → Caption[English]")]),t._v(" "),s("p",[t._v("Next就可以了")]),t._v(" "),s("ol",[s("li",[t._v("苹果电脑录屏，剪辑工作流使什么？参数如何设置？")]),t._v(" "),s("li",[t._v("确定是否要Round Corner ？ 不需要")]),t._v(" "),s("li",[t._v("如何做缩略图")]),t._v(" "),s("li",[t._v("是否需要配乐？")])]),t._v(" "),s("h2",{attrs:{id:"导出某一个片段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导出某一个片段"}},[t._v("#")]),t._v(" 导出某一个片段")]),t._v(" "),s("p",[t._v("用cmd+R选中对应的片段，然后cmd+E导出； 或者先使用cmd+B分割，然后执行选中会更方便。")]),t._v(" "),s("h2",{attrs:{id:"导出某一张图片"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导出某一张图片"}},[t._v("#")]),t._v(" 导出某一张图片")]),t._v(" "),s("p",[t._v("File → Share → Save current frame")]),t._v(" "),s("h2",{attrs:{id:"绿幕去背-chromakey"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#绿幕去背-chromakey"}},[t._v("#")]),t._v(" 绿幕去背 Chromakey")]),t._v(" "),s("h1",{attrs:{id:"open-broadcaster-software-obs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#open-broadcaster-software-obs"}},[t._v("#")]),t._v(" Open Broadcaster Software (OBS)")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://youtu.be/sqkwHUyV-YY?t=309",target:"_blank",rel:"noopener noreferrer"}},[t._v("OBS:Remove background setting"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://youtu.be/p2hH0FlKwcQ?t=201",target:"_blank",rel:"noopener noreferrer"}},[t._v("Use OBS with Davinchi"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);