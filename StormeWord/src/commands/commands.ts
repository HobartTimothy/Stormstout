/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global global, Office, self, window */

Office.onReady(() => {
  // 如果需要初始化，可以在这里添加代码
});

/**
 * 处理"返回"按钮的点击事件
 * 注意：Ribbon 上的按钮与 Taskpane 是分离的。通常这里的"返回"可能是指：
 * 1. 关闭 Taskpane
 * 2. 或者仅仅是一个占位符，因为很难直接控制 Taskpane 内部的 React 路由（除非使用 Shared Runtime）。
 * 这里我们演示打印日志并通知完成。
 * @param event
 */
function actionBack(event: Office.AddinCommands.Event) {
  // 示例逻辑：在控制台打印日志
  console.log("用户点击了返回按钮");

  // 如果你想让这个按钮关闭任务窗格，可以使用:
  // Office.addin.hide(); // 注意：这通常需要 Shared Runtime 支持

  // 必须调用 completed 来告诉 Office 按钮动作已结束
  event.completed();
}

/**
 * 处理"联系支持人员"按钮的点击事件
 * 打开一个外部网页。
 * @param event
 */
function actionContactSupport(event: Office.AddinCommands.Event) {
  // 替换为你实际的支持页面 URL
  const supportUrl = "https://www.google.com/search?q=help"; 
  
  // 在新窗口打开 URL
  window.open(supportUrl, "_blank");

  event.completed();
}

// 注册函数名称，使其与 manifest.xml 中的 <FunctionName> 对应
// 这一步至关重要，否则点击按钮会报错
Office.actions.associate("actionBack", actionBack);
Office.actions.associate("actionContactSupport", actionContactSupport);
