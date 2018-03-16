import zepto from 'zepto'
const host = 'http://www.doumi.com/api/v1/client'

const Util = {
	ajax (ajaxParam) {
		$.ajax({
			url : host + ajaxParam.url,
	        timeout : ajaxParam.timeout,
	        headers: headersJson,
	        data: ajaxParam.data,
	        dataType: ajaxParam.dataType || 'json',
	        type: ajaxParam.type || 'GET',
	        success: (data) => {

	        },
	        error : (xhr, status) => {

	        }
		})
	}
}

export default Util