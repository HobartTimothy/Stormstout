/**
 * 关于页面组件
 * 显示产品信息、版本、二维码和操作按钮
 */

import * as React from "react";
import {makeStyles, Image} from "@fluentui/react-components";

const useStyles = makeStyles({
    container: {
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0",
        boxSizing: "border-box",
    },
    header: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 20px",
        marginBottom: "10px",
    },
    title: {
        fontSize: "24px",
        fontWeight: "600",
        color: "#333333",
        margin: 0,
    },
    chevronIcon: {
        fontSize: "20px",
        color: "#666666",
        cursor: "pointer",
    },
    logoContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "25px",
    },
    logo: {
        width: "100px",
        height: "100px",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "20px",
        boxShadow: "0 4px 12px rgba(255, 107, 53, 0.3)",
        transform: "perspective(200px) rotateX(-8deg) rotateY(8deg)",
        position: "relative",
        overflow: "hidden",
    },
    logoImage: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
    },
    productName: {
        fontSize: "28px",
        fontWeight: "600",
        color: "#333333",
        margin: "0 0 12px 0",
    },
    versionInfo: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "20px",
    },
    versionDate: {
        fontSize: "16px",
        color: "#666666",
    },
    updateButton: {
        backgroundColor: "#333333",
        color: "#ffffff",
        border: "none",
        padding: "6px 16px",
        borderRadius: "4px",
        fontSize: "14px",
        cursor: "pointer",
        fontWeight: "500",
    },
    latestUpdate: {
        backgroundColor: "#90EE90",
        color: "#333333",
        padding: "6px 12px",
        borderRadius: "4px",
        fontSize: "14px",
        fontWeight: "500",
    },
    description: {
        fontSize: "16px",
        color: "#666666",
        lineHeight: "1.6",
        textAlign: "center",
        maxWidth: "400px",
        marginBottom: "30px",
    },
    qrCodeContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "20px",
    },
    qrCode: {
        width: "180px",
        height: "180px",
        backgroundColor: "#ffffff",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "12px",
        position: "relative",
        backgroundImage: "repeating-linear-gradient(0deg, #000 0, #000 1px, transparent 1px, transparent 10px), repeating-linear-gradient(90deg, #000 0, #000 1px, transparent 1px, transparent 10px)",
        backgroundSize: "20px 20px",
    },
    qrCodePlaceholder: {
        fontSize: "12px",
        color: "#999999",
        position: "absolute",
        zIndex: 1,
    },
    qrCodeCaption: {
        fontSize: "14px",
        color: "#666666",
        textAlign: "center",
    },
    buttonsContainer: {
        display: "flex",
        gap: "12px",
        flexWrap: "wrap",
        justifyContent: "center",
        width: "100%",
        maxWidth: "500px",
    },
    actionButton: {
        flex: "1",
        minWidth: "100px",
        border: "2px solid #0066CC",
        backgroundColor: "transparent",
        color: "#0066CC",
        padding: "10px 16px",
        borderRadius: "4px",
        fontSize: "14px",
        fontWeight: "500",
        cursor: "pointer",
        transition: "all 0.2s",
    },
    actionButtonHover: {
        backgroundColor: "#0066CC",
        color: "#ffffff",
    },
});

const About: React.FC = () => {
    const styles = useStyles();
    const [hoveredButton, setHoveredButton] = React.useState<string | null>(null);

    const handleOfficialWebsite = () => {
        // 打开官网
        window.open("https://www.example.com", "_blank");
    };

    const handlePluginDirectory = () => {
        // 打开插件目录
        // 这里可以添加打开插件目录的逻辑
        console.log("打开插件目录");
    };

    const handleErrorLog = () => {
        // 打开错误日志
        // 这里可以添加打开错误日志的逻辑
        console.log("打开错误日志");
    };

    return (
        <div className={styles.container}>

            {/* Logo */}
            <div className={styles.logoContainer}>
                <div className={styles.logo}>
                    <Image src="/assets/logo-filled.png" alt="StormeWord Logo" className={styles.logoImage} />
                </div>
                <h2 className={styles.productName}>StormeWord</h2>

                {/* 版本信息 */}
                <div className={styles.versionInfo}>
                    <span className={styles.versionDate}>2025.09.09</span>
                    <button className={styles.updateButton}>点击更新</button>
                    <span className={styles.latestUpdate}>2025.12.28</span>
                </div>
            </div>

            {/* 产品描述 */}
            <p className={styles.description}> 一款支持Office三件套的插件，拓展Office原有功能、简化操作流程，帮助大家提高工作效率。</p>

            {/* 操作按钮 */}
            <div className={styles.buttonsContainer}>
                <button
                    className={`${styles.actionButton} ${hoveredButton === 'website' ? styles.actionButtonHover : ''}`}
                    onClick={handleOfficialWebsite}
                    onMouseEnter={() => setHoveredButton('website')}
                    onMouseLeave={() => setHoveredButton(null)}
                >
                    进入官网
                </button>
                <button
                    className={`${styles.actionButton} ${hoveredButton === 'directory' ? styles.actionButtonHover : ''}`}
                    onClick={handlePluginDirectory}
                    onMouseEnter={() => setHoveredButton('directory')}
                    onMouseLeave={() => setHoveredButton(null)}
                >
                    插件目录
                </button>
                <button
                    className={`${styles.actionButton} ${hoveredButton === 'log' ? styles.actionButtonHover : ''}`}
                    onClick={handleErrorLog}
                    onMouseEnter={() => setHoveredButton('log')}
                    onMouseLeave={() => setHoveredButton(null)}
                >
                    错误日志
                </button>
            </div>
        </div>
    );
};

export default About;

