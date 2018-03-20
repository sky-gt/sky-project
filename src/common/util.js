// import zepto from 'zepto'
import 'zepto'
const host = 'https://api.weixin.qq.com'

const Util = {
	ajax (ajaxParam) {
		$.ajax({
			url : host + ajaxParam.url,
	        timeout : ajaxParam.timeout,
	        headers: {
	        	'Access-Control-Allow-Origin': '*',
	        },
	        data: ajaxParam.data,
	        dataType: ajaxParam.dataType || 'json',
	        type: ajaxParam.type || 'GET',
	        success: (data) => {
	        	console.log('success',data)
	        },
	        error : (xhr, status) => {
	        	console.log('error',xhr)
	        }
		})
	}
}

export default Util