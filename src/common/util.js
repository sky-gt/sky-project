// import zepto from 'zepto'
import 'zepto'
const host = 'https://api.weixin.qq.com'

const Util = {
	ajax (ajaxParam) {
			let Xhr = $.ajax({
				url : host + ajaxParam.url,
		        timeout : ajaxParam.timeout,
		        headers: {
		        	'Access-Control-Allow-Origin': '*',
		        },
		        data: ajaxParam.data,
		        dataType: ajaxParam.dataType || 'json',
		        type: ajaxParam.type || 'GET',
		        success: (data) => {
		        	 ajaxParam.success(data, ajaxParam);
		        },
		        error : (xhr, status) => {
		        	setTimeout(function() {
	                    // timeout && abort
	                    if (xhr.isAbort) return;
	                    if (status == 'timeout') {
	                    	// 网络请求超时
	                    }else {
	                    	//服务器异常
	                    }
	                    ajaxParam.error(xhr, status);
	                }, 0);
		        }
		})
		// return xhr
        if (typeof ajaxParam.getXhrObj === 'function') {
            ajaxParam.getXhrObj(Xhr);
        }
	}
}

export default Util