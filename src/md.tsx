import React, { useState } from "react";
import { Editor, Viewer } from '@bytemd/react';
import breaks from '@bytemd/plugin-breaks';
import gfmZhHans from "@bytemd/plugin-gfm/locales/zh_Hans.json";
import frontmatter from '@bytemd/plugin-frontmatter';
import gemoji from '@bytemd/plugin-gemoji';
import gfm from '@bytemd/plugin-gfm';
import highlight from '@bytemd/plugin-highlight';
import highlightSsr from '@bytemd/plugin-highlight-ssr';
import math from '@bytemd/plugin-math';
import mathSsr from '@bytemd/plugin-math-ssr';
import mediumZoom from '@bytemd/plugin-medium-zoom';
import mermaid from '@bytemd/plugin-mermaid';
import 'bytemd/dist/index.css';
import "highlight.js/styles/atom-one-dark.min.css";

import "./md.css";
import "./juejin.scss"


const plugins = [
    gfm({ locale: gfmZhHans }),
    breaks(),
    frontmatter(),
    gemoji(),
    gfm(),
    highlight(),
    highlightSsr(),
    math(),
    mathSsr(),
    mediumZoom(),
    mermaid()
]



const App = () => {



    const [value, setValue] = useState("## 22222222222222\n### 333333333\n*阿萨大大*   \n\n> 大撒大撒\n\n[百度]('https://www.baidu.com/index.htm')\n\n\n| 222 |  222|\n| --- | --- |\n| 111 | 111 |\n\n\n```js\nnpm install highlight.js -S\nnpm install rehype-highlight -S\n\nnpm install highlight.js -S\nnpm install rehype-highlight -S\n\nnpm install highlight.js -S\nnpm install rehype-highlight -S\n\n```\n~~321321~~\n\n- [ ] 21321\n- [ ] 大撒大撒\n\n"
    )

    return (
        <div>
            {/* <Viewer value={value}></Viewer> */}
            <Editor
                value={value}
                plugins={plugins}
                onChange={(v) => {
                    console.log(JSON.stringify(v))
                    setValue(v)
                }}
            />
        </div>
    )
}

export default App;