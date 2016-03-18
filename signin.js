define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	require("css!$UI/medicine/plugin/sweetalert").load();
	require("$UI/medicine/plugin/sweetalert.min");

	var Model = function() {
		this.callParent();
	};

	Model.prototype.div1Click = function(event) {
		if ($(".username").val() == "") {
			swal("用户名不能为空!", "请输入用户名!", "warning");
			return;
		}
		if ($(".password").val() == "") {
			swal("密码不能为空!", "请输入密码!", "warning")
			return;
		}
		justep.Baas.sendRequest({
			"url" : "/medicine/med_action",
			"action" : "queryPassword",
			"async" : false,
			"params" : {
				"username" : $(".username").val(),
				"password" : $(".password").val()
			},
			"success" : function(data) {
				if (data.result == "fail") {
					swal("登陆失败!", "请检查您的登陆信息!", "error")
				} else {
					sessionStorage.setItem("key", data.result);
					window.location.href = "../medicine/frame.w"
				}
			}
		});
	};
	Model.prototype.modelLoad = function(event) {
		var self = this;
		document.onkeydown = function(event) {
			var e = event || window.event || arguments.callee.caller.arguments[0];
			if (e && e.keyCode == 27) {
				$(".password").val("");
				$(".username").val("");
			}
			if (e && e.keyCode == 13) {
				self.div1Click();
			}
		};

	};

	return Model;
});