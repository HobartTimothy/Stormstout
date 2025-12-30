/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global global, Office, self, window */

Office.onReady(() => {
  // 如果需要初始化，可以在这里添加代码
});

/**
 * 处理"反馈"按钮的点击事件
 * 打开 GitHub Issues 页面，让用户提交反馈。
 * @param event
 */
function actionFeedback(event: Office.AddinCommands.Event) {
  const feedbackUrl = "https://github.com/HobartTimothy/Stormstout/issues";
  
  // 在新窗口打开 GitHub Issues 页面
  window.open(feedbackUrl, "_blank");

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
Office.actions.associate("actionFeedback", actionFeedback);
Office.actions.associate("actionContactSupport", actionContactSupport);
