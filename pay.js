define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var Baas = justep.Baas
	require("css!$UI/medicine/plugin/sweetalert").load();
	require("$UI/medicine/plugin/sweetalert.min");
	require("$UI/system/lib/cordova/cordova");
	require("cordova!org.apache.cordova.device");
	require("cordova!com.justep.cordova.plugin.weixin.v3");
	var Model = function() {
		this.callParent();
	};
	// https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxdaceea00f5e0f79d&redirect_uri=http%3A%2F%2F353637syf.imwork.net%2Fx5%2FUI2%2Fv_%2Fmedicine%2Fpay.w??&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect
	// http%3A%2F%2F353637syf.imwork.net%2Fx5%2FUI2%2Fv_%2Fmedicine%2Fpay.w

	Model.prototype.modelLoad = function(event) {
		// document.write(require.toUrl("../medicine/pay.w"))
		var self = this;
		// 获取url上的code参数 - 微信授权code，用于获取微信用户信息
		var weixinCode = this.getContext().getRequestParameter("code");
		if (weixinCode !== "") {
			if (justep.Browser.isWeChat) {
				this.wxApi = new navigator.WxApi("wxdaceea00f5e0f79d");
			}
			Baas.sendRequest({
				"url" : "/weixin/weixin",
				"action" : "userinfo",
				"async" : false,
				"params" : {
					code : weixinCode
				},
				"success" : function(weixinUser) {
				}
			});
		}
	};

	Model.prototype.modelParamsReceive = function(event) {
		id = this.getContext().getRequestParameter("state");
		// id="C6FB359F6B0000013D4F7127F1B86200";
		var data = this.comp("meddata");
		data.filters.setVar("idd", id);
		data.refreshData();
		$(".image img").attr("src", "http://www.jianhaola.com/img/" + data.getCurrentRow().val("picture") + ".jpg");
		// $(".image img").attr("src",
		// "http://localhost:8080/img/R143rN8scL9K7G7CkUttKFIB0aHWdD6UI9YmlYqBZUwIhqBPb03Oh9UvxvUQbele.jpg");
		$("#consignee").html(data.getCurrentRow().val("consignee"));
		$("#telephone").html(data.getCurrentRow().val("telephone"));
		$("#address").html(data.getCurrentRow().val("area") + "&nbsp&nbsp&nbsp" + data.getCurrentRow().val("address"));
		$("#price").html(data.getCurrentRow().val("medprice") / data.getCurrentRow().val("number"));
		$("#number").html(data.getCurrentRow().val("number"));
		$("#transportprice").html(data.getCurrentRow().val("transportprice"));
		$(".total").html((data.getCurrentRow().val("transportprice") + data.getCurrentRow().val("medprice")).toFixed(2));
	};

	Model.prototype.div1Click = function(event) {
		var self = this;
		data = self.comp("meddata");
		if (data.getCurrentRow().val("state") == "1") {
			var payDtd = $.Deferred();
			if (!navigator.WxApi) {
				payDtd.reject(-33);
				return;
			}
			var tradeNo = justep.UUID.createUUID();
			var notifyUrl = location.origin + "/baas/weixin/weixin/notify";
			var total = ($(".total").html()) * 100;
			this.wxApi.chooseWXPay({
				body : "913447439",
				mchId : "1229437602",
				notifyUrl : notifyUrl,
				outTradeNo : tradeNo,
				totalFee : total
			}).done(function() {
				payDtd.resolve(2);
				data.setValue("state", "2");
				data.setValue("dealnumber", tradeNo);
				data.setValue("dealtime", new Date());
				data.saveData({
					"onSuccess" : function() {
						self.wxApi.exec().done(function(wx) {
							wx.closeWindow();
						});
					}
				})
			}).fail(function() {
				payDtd.reject(-20);
			});
		} else {
			swal({
				title : "您已支付过此订单",
				text : "",
				type : "warning",
				showCancelButton : false,
				closeOnConfirm : false
			}, function() {
				self.wxApi.exec().done(function(wx) {
					wx.closeWindow();
				});
			});
		}

	};

	Model.prototype.div2Click = function(event) {
		if (this.wxApi) {
			this.wxApi.exec().done(function(wx) {
				wx.closeWindow();
			});
		}
	};

	return Model;
});