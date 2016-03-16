define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var singledata;
	var id;
	require("css!$UI/medicine/plugin/sweetalert").load();
	require("$UI/medicine/plugin/sweetalert.min");
	var Model = function() {
		this.callParent();
		this._userid;
	};
	Model.prototype.hide = function(event) {
		$(".over").hide()
		$(".jt").hide()
	}
	Model.prototype.extend = function(event) {
		$(".submenu").slideToggle(function() {
			if ($("#extend").attr("change") == 0) {
				$("#extend").attr("change", "1");
				$("#add").removeClass("icon-android-add");
				$("#add").addClass("icon-android-remove");
			} else {
				$("#extend").attr("change", "0");
				$("#add").removeClass("icon-android-remove");
				$("#add").addClass("icon-android-add");
			}
		});
	}
	Model.prototype.jumc = function(event) {
		window.location.href = "../medicine/completed.w"
	}
	Model.prototype.jump = function(event) {
		window.location.href = "../medicine/paid.w"
	}
	Model.prototype.jumu = function(event) {
		window.location.href = "../medicine/frame.w"
	}
	Model.prototype.jumd = function(event) {
		window.location.href = "../medicine/processed.w"
	}
	Model.prototype.css = function(event) {
		$("#medprice").blur(function() {
			if ($("#medprice").val() != parseFloat($("#medprice").val())) {
				swal("请输入正确金额", "", "error")
			}
			$(".totalleft").html(($("#medprice").val() * $(".number").html()).toFixed(2));
			$(".totalleft").slideDown();
		})
		$("#medprice").click(function() {
			$(".totalleft").slideUp();
			$(".totalmoney").slideUp();
		})
		$("#transportprice").click(function() {
			$(".totalmoney").slideUp();
		})
		$("#transportprice").blur(function() {
			if ($("#transportprice").val() != parseFloat($("#transportprice").val()) || $("#medprice").val() != parseFloat($("#medprice").val())) {
				swal("请输入正确金额", "", "error")
			} else {
				$(".totalmoney").html((parseFloat($(".totalleft").html()) + parseFloat($("#transportprice").val())).toFixed(2));
				$(".totalmoney").show();
			}
		})
		$(".sendcontent i").click(function() {
			$(".sendcontent").slideUp(function() {
				$(".success").html("发送(内容无误)")
			});
		})
	}
	Model.prototype.success = function(event) {
		var self = this;
		if ($(".success").html() == "发送(提示内容)") {
			$(".totalmoney").html(0);
			if ($(".sendcontent textarea").val() == "") {
				swal("请输入提示内容", "", "warning")
			} else {
				justep.Baas.sendRequest({
					"url" : "/weixin/weixin",
					"action" : "ts",
					"async" : false,
					"params" : {
						"id" : self._userid,
						"medprice" : 0,
						"transportprice" : 0,
						"doctors_recommend" : $(".sendcontent textarea").val()
					},
					"success" : function(data) {
						data = self.comp("meddata");
						data.setValue("state", "5")
						data.saveData({
							"onSuccess" : function() {
								window.location.href = "../medicine/frame.w"
							}
						})
					}
				});
			}
		} else {
			if ($("#transportprice").val() != parseFloat($("#transportprice").val()) || $("#medprice").val() != parseFloat($("#medprice").val())) {
				swal("请输入正确的金额", "", "warning")
			} else {
				var data = self.comp("meddata");
				justep.Baas.sendRequest({
					"url" : "/weixin/weixin",
					"action" : "ts",
					"async" : false,
					"params" : {
						"id" : self._userid,
						"orderid" : data.getCurrentRow().val("id"),
						"medprice" : ($("#medprice").val() * $(".number").html()).toFixed(2),
						"transportprice" : $("#transportprice").val(),
						"doctors_recommend" : ""
					},
					"success" : function(data) {
						data = self.comp("meddata");
						data.setValue("state", "1")
						data.setValue("medprice", ($("#medprice").val() * $(".number").html()).toFixed(2))
						data.setValue("transportprice", parseFloat($("#transportprice").val()))
						data.saveData({
							"onSuccess" : function() {

								window.location.href = "../medicine/frame.w"
							}
						})

					}
				});
			}
		}
	}
	Model.prototype.fail = function(event) {
		$(".sendcontent").slideDown(function() {
			$(".success").html("发送(提示内容)")
		});
	}
	Model.prototype.menu = function(event) {
		$(".over").show()
		$(".jt").show()
	};
	Model.prototype.modelLoad = function(event) {
		this.css();
	};

	Model.prototype.modelParamsReceive = function(event) {
		id = this.getContext().getRequestParameter("id")
		var data = this.comp("meddata");
		data.filters.setVar("idd", id);
		data.refreshData();
		singledata = data;
		this._userid = data.getCurrentRow().val("userid");
		$(".phototitle").html("来自" + data.getCurrentRow().val("username") + "的订单信息");
		$("#photo").attr("src", "http://www.jianhaola.com/img/" + data.getCurrentRow().val("picture") + ".jpg");
		$(".consignee").html("<div class='photoicon'><i xid='i9' class='icon-person'/></div>" + data.getCurrentRow().val("consignee"));
		$(".telephone").html("<div class='photoicon'><i xid='i10' class='icon-android-call'/></div>" + data.getCurrentRow().val("telephone"));
		$(".adress").html("<div class='photoicon'><i xid='i11' class='icon-android-location'/></div>" + data.getCurrentRow().val("area") + "&nbsp&nbsp&nbsp" + data.getCurrentRow().val("address"));
		$(".remarkstitle").html("来自" + data.getCurrentRow().val("username") + "的备注信息");
		$(".number").html(data.getCurrentRow().val("number"));
		if (data.getCurrentRow().val("remarks") == "") {
			$(".remarkscontent").html("这位顾客没有留下备注信息");
		} else {
			$(".remarkscontent").html(data.getCurrentRow().val("remarks"));
		}
	};

	return Model;
});