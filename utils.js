/**
 * @description 生成随机颜色
 */
function generateRandomHexColor(){
	return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`
}

/**
 * @description 复制到剪切板
 * @param { String | Number } text
 */
function copyToClipboard(text){
	navigator.clipboard && navigator.clipboard.writeText && navigator.clipboard.writeText(text)
}

/**
 * @description 检测是否是暗色主题
 */
function isDarkMode(){
	return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
}

/**
 * @description 滚动
 * @param { Element } ele 
 * @@param { start | end }  block
 */
function scrollTo(ele, block = "start"){
	element.scrollIntoView({ behavior: "smooth", block });
}

/**
 * @description 检测设备
 */
function detectDeviceType(){
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) ? "Mobile" : "Desktop";
}

/**
 * @description 获取URL中的参数
 * @param { String } key  
 */
function getParamByUrl(key){
	const url = new URL(location.url)
	return url.searchParams.get(key)
}

export default{
	getParamByUrl,
	detectDeviceType,
	scrollTo,
	isDarkMode,
	copyToClipboard,
	generateRandomHexColor
}
