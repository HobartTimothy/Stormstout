/**
 * 向文档中插入文本
 * @param text - 要插入的文本内容
 * @returns Promise<void> - 异步操作结果
 */
export async function insertText(text: string) {
    try {
        // 在Word文档上下文中执行操作
        await Word.run(async (context) => {
            // 获取文档主体部分
            let body = context.document.body;
            // 在文档末尾插入段落
            body.insertParagraph(text, Word.InsertLocation.end);
            // 同步上下文，确保更改生效
            await context.sync();
        });

    } catch (error) {
        // 捕获并输出错误信息
        console.log("向文档中插入文本: " + error);
    }
}
