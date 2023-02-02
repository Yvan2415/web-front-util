import path from 'path'
import { fileURLToPath } from 'url'

/**
 * @description 返回当前文件的地址
 * @why 在import导入的时候， 是没有__dirname, __filename，
 * module这些属性的，所以需要手动去获取
 */
function fileName() {
	return fileURLToPath(import.meta.url)
}

/**
 * @description 返回当前文件夹的地址
 */
function dirname(){
	return path.dirname(fileName())
}

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

/**
 * @description 随机生成一个字符串
 * @param { Numebr } length
 */
function randString (length, chars = '0123456789'){
	let maxPos = chars.length
	let target  = ''
	for(let i = 0; i < length; i ++){
		target += chars.charAt(Math.floor(Math.random() * maxPos))
	}
	return target
}

// 注释
export default{
	getParamByUrl,
	detectDeviceType,
	scrollTo,
	isDarkMode,
	copyToClipboard,
	generateRandomHexColor,
	randString,
	fileName,
	dirname
}
