// window 沒有的物件
interface Window {
    ONEAD: string
}
window.ONEAD = '';

// ambient declaration 周圍環境宣告 已存在 window 裡的 第三方 lib

// 可透過 npm install @types/jquery --save-dev 安裝


$("#ONEAD");
jQuery("Guoshi");
