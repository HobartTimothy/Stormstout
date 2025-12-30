/**
 * Office Word 插件的主应用组件.负责渲染插件的整体布局和主要功能模块
 */

import * as React from "react";
// 导入子组件
import Header from "./Header";
import HeroList, {HeroListItem} from "./HeroList";
import TextInsertion from "./TextInsertion";
// 导入 Fluent UI 样式工具
import {makeStyles} from "@fluentui/react-components";
// 导入 Fluent UI 图标组件
import {Ribbon24Regular, LockOpen24Regular, DesignIdeas24Regular} from "@fluentui/react-icons";
// 导入文本插入功能函数
import {insertText} from "../taskpane";


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
 * App 主组件，负责渲染插件的整体布局和主要功能模块
 * @param props - 组件属性，包含应用标题
 * @returns 渲染的应用界面
 */
const App: React.FC<AppProps> = (props: AppProps) => {
    // 应用样式
    const styles = useStyles();

    // 功能列表项配置
    // 这些列表项是静态的，运行时不会改变，所以使用普通常量而不是状态
    const listItems: HeroListItem[] = [
        {
            icon: <Ribbon24Regular/>,
            primaryText: "Achieve more with Office integration",
        },
        {
            icon: <LockOpen24Regular/>,
            primaryText: "Unlock features and functionality",
        },
        {
            icon: <DesignIdeas24Regular/>,
            primaryText: "Create and visualize like a pro",
        },
    ];

    return (
        <div className={styles.root}>
            {/* 头部组件：显示 Logo、标题和欢迎信息 */}
            <Header logo="assets/logo-filled.png" title={props.title} message="Welcome"/>

            {/* 功能列表组件：展示插件的主要功能特性 */}
            <HeroList message="Discover what this add-in can do for you today!" items={listItems}/>

            {/* 文本插入组件：提供文本插入功能 */}
            <TextInsertion insertText={insertText}/>
        </div>
    );
};


export default App;
