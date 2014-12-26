
document.writeln("<script src='http://www.ourunix.org/zb_system/admin/ueditor/third-party/SyntaxHighlighter/shCore.pack.js' type='text/javascript'></script><link rel='stylesheet' type='text/css' href='http://www.ourunix.org/zb_system/admin/ueditor/third-party/SyntaxHighlighter/shCoreDefault.pack.css'/>");

var bloghost="http://www.ourunix.org/";
var cookiespath="/";
var str00="http://www.ourunix.org/";
var str01="名称不能为空";
var str02="名称或邮箱,网址格式不对";
var str03="留言不能为空或过长";
var str06="显示UBB表情>>";
var intMaxLen="1000";
var strFaceName="neutral|grin|happy|slim|smile|tongue|wink|surprised|confuse|cool|cry|evilgrin|fat|mad|red|roll|unhappy|waii|yell";
var strFaceSize="16";
var strFaceType="png";
var strBatchView="";
var strBatchInculde="";
var strBatchCount="";

$(document).ready(function(){ 
	$("img[src*='zb_system/function/c_validcode.asp?name=commentvalid']").css("cursor","pointer").click( function(){$(this).attr("src","http://www.ourunix.org/zb_system/function/c_validcode.asp?name=commentvalid"+"&amp;random="+Math.random());});
	sidebarloaded.add(function(){
		if(GetCookie("username")!=""&&GetCookie("password")!=""){$.getScript("http://www.ourunix.org/zb_system/function/c_html_js.asp?act=autoinfo")}
		try{eval("document.getElementById(\"pCalendar_\"+(new Date()).getFullYear()+\"_\"+((new Date()).getMonth()+1)+\"_\"+(new Date()).getDate()).className+=\" cd\"");}catch(e){};
	});
	$.getScript("http://www.ourunix.org/zb_system/function/c_html_js.asp?act=batch"+unescape("%26")+"view=" + escape(strBatchView)+unescape("%26")+"inculde=" + escape(strBatchInculde)+unescape("%26")+"count=" + escape(strBatchCount));

		//为了在编辑器之外能展示高亮代码
    	 SyntaxHighlighter.highlight();
    	 //调整左右对齐
    	 for(var i=0,di;di=SyntaxHighlighter.highlightContainers[i++];){
         	   var tds = di.getElementsByTagName('td');
            	for(var j=0,li,ri;li=tds[0].childNodes[j];j++){
                	ri = tds[1].firstChild.childNodes[j];
                	ri.style.height = li.style.height = ri.offsetHeight + 'px';
            	}
    	 }

});

$(document).ready(function(){ $("head").append("<link rel='stylesheet' type='text/css' href='http://www.ourunix.org/zb_users/plugin/gbook_gravatar/css/gbook_gravatar.css'/>");});document.write("<link rel=\"stylesheet\" href=\"http://www.ourunix.org/zb_users/PLUGIN/FlickrASP/Flickr.css\" />");document.write("<script type=\"text/javascript\" src=\"http://www.ourunix.org/zb_users/PLUGIN/FlickrASP/Flickr.js\"></script>");