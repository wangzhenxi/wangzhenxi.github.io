(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{522:function(s,a,t){"use strict";t.r(a);var e=t(19),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"shell-script"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shell-script"}},[s._v("#")]),s._v(" Shell Script")]),s._v(" "),a("h2",{attrs:{id:"转换为可执行脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转换为可执行脚本"}},[s._v("#")]),s._v(" 转换为可执行脚本")]),s._v(" "),a("p",[s._v("新建了可读写文件后，需赋予可执行权限")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("touch test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sh\nchmod "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("755")]),s._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sh\n")])])]),a("h2",{attrs:{id:"注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注释"}},[s._v("#")]),s._v(" 注释")]),s._v(" "),a("p",[a("strong",[s._v("单行注释")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这是一行注释")]),s._v("\n")])])]),a("p",[a("strong",[s._v("多行注释")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v(":"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("tip\n这是多行注释\ntip")]),s._v("\n")])])]),a("h2",{attrs:{id:"变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[s._v("#")]),s._v(" 变量")]),s._v(" "),a("p",[s._v("变量名需遵循以下规则：")]),s._v(" "),a("ol",[a("li",[s._v("命名只能使用英文字母，数字和下划线，首个字符不能以数字开头。")]),s._v(" "),a("li",[s._v("中间不能有空格，可以使用下划线（_）。")]),s._v(" "),a("li",[s._v("不能使用标点符号。")]),s._v(" "),a("li",[s._v("不能使用bash里的关键字（可用help命令查看保留关键字）。")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("username")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("josh\n")])])]),a("p",[a("strong",[s._v("可输入变量")])]),s._v(" "),a("p",[s._v("用户输入的值为变量值")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" username\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username: '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$username")]),s._v('"')]),s._v("\n")])])]),a("p",[a("strong",[s._v("使用变量")])]),s._v(" "),a("p",[s._v("用花括号包起来是好习惯")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" hello "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$username")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" hello "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${username}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 花括号可识别变量边界")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("skill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" Ada Coffe Action Java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"I am good at '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${skill}")]),s._v('Script"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])])]),a("p",[a("strong",[s._v("拼接字符串")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("username")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("josh\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("say")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello ${username}'")]),s._v("\n")])])]),a("p",[a("strong",[s._v("只读变量")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("username")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("josh\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("readonly")]),s._v(" username\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("username")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("wong   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# error")]),s._v("\n")])])]),a("p",[a("strong",[s._v("删除变量")])]),s._v(" "),a("p",[s._v("将非只读变量的值置空")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("unset")]),s._v(" username\n")])])]),a("p",[a("strong",[s._v("获取字符串长度")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("username")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("joshwong\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("first_name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${username"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("4"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("4}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 类似substr")]),s._v("\n")])])]),a("p",[a("strong",[s._v("数组")])]),s._v(" "),a("p",[s._v("括号代表数组，空格进行分隔")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("users")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("josh kevin linus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kevin")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v("users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回数组长度")]),s._v("\n")])])]),a("h2",{attrs:{id:"运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运算符"}},[s._v("#")]),s._v(" 运算符")]),s._v(" "),a("p",[a("strong",[s._v("算数运算符")])]),s._v(" "),a("p",[s._v("反引号包含expr + 表达式")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("expr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" + "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("expr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("* "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 乘法要加反斜杠")]),s._v("\n")])])]),a("p",[a("strong",[s._v("关系运算符")])]),s._v(" "),a("p",[s._v("-eq -ne -gt -lt -ge -le")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-eq")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'is true'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'is false'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])])]),a("p",[a("strong",[s._v("布尔运算符")])]),s._v(" "),a("p",[s._v("!取反 -o或 -a且")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-eq")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-eq")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'true'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'false'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])])]),a("p",[a("strong",[s._v("逻辑运算符")])]),s._v(" "),a("p",[s._v("||或 &&且")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-eq")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-eq")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'true'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'false'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])])]),a("p",[a("strong",[s._v("字符串运算符")])]),s._v(" "),a("p",[s._v("= != -z长度为0 -n长度不为0")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("username")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("test\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-z")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$username")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'empty'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" username: "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${username}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])])]),a("p",[a("strong",[s._v("文件测试运算符")])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("操作符")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("举例")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("-b file")]),s._v(" "),a("td",[s._v("检测文件是否是块设备文件，如果是，则返回 true。")]),s._v(" "),a("td",[s._v("[ -b $file ] 返回 false。")])]),s._v(" "),a("tr",[a("td",[s._v("-c file")]),s._v(" "),a("td",[s._v("检测文件是否是字符设备文件，如果是，则返回 true。")]),s._v(" "),a("td",[s._v("[ -c $file ] 返回 false。")])]),s._v(" "),a("tr",[a("td",[s._v("-d file")]),s._v(" "),a("td",[s._v("检测文件是否是目录，如果是，则返回 true。")]),s._v(" "),a("td",[s._v("[ -d $file ] 返回 false。")])]),s._v(" "),a("tr",[a("td",[s._v("-f file")]),s._v(" "),a("td",[s._v("检测文件是否是普通文件（既不是目录，也不是设备文件），如果是，则返回 true。")]),s._v(" "),a("td",[s._v("[ -f $file ] 返回 true。")])]),s._v(" "),a("tr",[a("td",[s._v("-g file")]),s._v(" "),a("td",[s._v("检测文件是否设置了 SGID 位，如果是，则返回 true。")]),s._v(" "),a("td",[s._v("[ -g $file ] 返回 false。")])]),s._v(" "),a("tr",[a("td",[s._v("-k file")]),s._v(" "),a("td",[s._v("检测文件是否设置了粘着位(Sticky Bit)，如果是，则返回 true。")]),s._v(" "),a("td",[s._v("[ -k $file ] 返回 false。")])]),s._v(" "),a("tr",[a("td",[s._v("-p file")]),s._v(" "),a("td",[s._v("检测文件是否是有名管道，如果是，则返回 true。")]),s._v(" "),a("td",[s._v("[ -p $file ] 返回 false。")])]),s._v(" "),a("tr",[a("td",[s._v("-u file")]),s._v(" "),a("td",[s._v("检测文件是否设置了 SUID 位，如果是，则返回 true。")]),s._v(" "),a("td",[s._v("[ -u $file ] 返回 false。")])]),s._v(" "),a("tr",[a("td",[s._v("-r file")]),s._v(" "),a("td",[s._v("检测文件是否可读，如果是，则返回 true。")]),s._v(" "),a("td",[s._v("[ -r $file ] 返回 true。")])]),s._v(" "),a("tr",[a("td",[s._v("-w file")]),s._v(" "),a("td",[s._v("检测文件是否可写，如果是，则返回 true。")]),s._v(" "),a("td",[s._v("[ -w $file ] 返回 true。")])]),s._v(" "),a("tr",[a("td",[s._v("-x file")]),s._v(" "),a("td",[s._v("检测文件是否可执行，如果是，则返回 true。")]),s._v(" "),a("td",[s._v("[ -x $file ] 返回 true。")])]),s._v(" "),a("tr",[a("td",[s._v("-s file")]),s._v(" "),a("td",[s._v("检测文件是否为空（文件大小是否大于0），不为空返回 true。")]),s._v(" "),a("td",[s._v("[ -s $file ] 返回 true。")])]),s._v(" "),a("tr",[a("td",[s._v("-e file")]),s._v(" "),a("td",[s._v("检测文件（包括目录）是否存在，如果是，则返回 true。")]),s._v(" "),a("td",[s._v("[ -e $file ] 返回 true。")])])])]),s._v(" "),a("h2",{attrs:{id:"函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[s._v("#")]),s._v(" 函数")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("echoName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name is: '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nechoName josh\n")])])]),a("h2",{attrs:{id:"echo命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#echo命令"}},[s._v("#")]),s._v(" echo命令")]),s._v(" "),a("p",[a("strong",[s._v("保存至文件")])]),s._v(" "),a("p",[s._v("将字符串保存至某文件里")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" 某项目打包时间："),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" logs\n")])])]),a("h2",{attrs:{id:"引入shell脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入shell脚本"}},[s._v("#")]),s._v(" 引入shell脚本")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" 现在要引入脚本了！\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" ./pack.sh\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" 执行完成！\n")])])]),a("h2",{attrs:{id:"expect实现shell自动登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expect实现shell自动登录"}},[s._v("#")]),s._v(" expect实现shell自动登录")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("expect")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n    set timeout '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$timeout")]),s._v(";\n    spawn ssh "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$IP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$command")]),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(";\n    expect {\n        *yes/no* {send -- yes"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[s._v("\\r")]),s._v(";exp_continue;}\n        *password:* {send -- "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PSW")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\r"}},[s._v("\\r")]),s._v(';exp_continue;}\n        eof {exit 0;}\n    }\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h2",{attrs:{id:"内网穿透"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内网穿透"}},[s._v("#")]),s._v(" 内网穿透")]),s._v(" "),a("p",[s._v("先在nginx配置端口代理，然后")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(":127.0.0.1:2000 root@10.1.2.3\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);