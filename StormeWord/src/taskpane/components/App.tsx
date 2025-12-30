/**
 * Office Word 插件的主应用组件.负责渲染插件的整体布局和主要功能模块
 */

import * as React from "react";
// 导入关于页面组件
import About from "./About";
// 导入 Fluent UI 样式工具
import {makeStyles} from "@fluentui/react-components";

/**
 * App 组件的属性接口
 */
interface AppProps {
    title: string; // 应用标题
}

/**
 * 使用 Fluent UI 的 makeStyles 创建样式
 * 定义根容器的样式，确保最小高度为视口高度
 */
const useStyles = makeStyles({
    root: {
        // 最小高度为 100% 视口高度
        minHeight: "100vh",
    },
});

/**
 * App 主组件，负责渲染关于页面
 * @param props - 组件属性，包含应用标题
 * @returns 渲染的应用界面
 */
const App: React.FC<AppProps> = (_props: AppProps) => {
    // 应用样式
    const styles = useStyles();

    return (
        <div className={styles.root}>
            {/* 关于页面组件 */}
            <About />
        </div>
    );
};


export default App;
