define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	require("css!$UI/medicine/plugin/sweetalert").load();
	require("$UI/medicine/plugin/sweetalert.min");
	var userid;
	var Model = function() {
		this.callParent();
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
	Model.prototype.menu = function(event) {
		$(".over").show()
		$(".jt").show()
	};

	Model.prototype.modelLoad = function(event) {
		if (sessionStorage.getItem("key") == null) {
			window.location.href = "../medicine/signin.w"
		}
		var id = this.getContext().getRequestParameter("id");
		var data = this.comp("meddata");
		data.filters.setVar("idd", id);
		data.refreshData();
		userid = data.getCurrentRow().val("userid");
		$(".image img").attr("src", "http://www.jianhaola.com/img/" + data.getCurrentRow().val("picture") + ".jpg");
		// $(".image img").attr("src",
		// "http://localhost:8080/img/R143rN8scL9K7G7CkUttKFIB0aHWdD6UI9YmlYqBZUwIhqBPb03Oh9UvxvUQbele.jpg");
		$(".image img").load(function() {
			$(".menu").height(document.body.clientHeight * 0.055 + $(".main").height())
		});
		$("#conconsignee").html(data.getCurrentRow().val("consignee"))
		$(".address span").html(data.getCurrentRow().val("area") + "&nbsp&nbsp&nbsp" + data.getCurrentRow().val("address"))
		$(".con.dealtime span").html(data.getCurrentRow().val("dealtime"))
		$(".con.telephone span").html(data.getCurrentRow().val("telephone"))

		if (data.getCurrentRow().val("remarks") == "") {
			$(".remarks span").html("此用户没有留下备注信息")
		} else {
			$(".remarks span").html(data.getCurrentRow().val("remarks"))
		}
		$("#conmoney").html(data.getCurrentRow().val("medprice") + data.getCurrentRow().val("transportprice"))
	};

	Model.prototype.div1Click = function(event) {
		var self = this;
		if ($("#a").val() == "" || $("#b").val() == "" || $("#c").val() == "") {
			swal("请输入完整信息", "", "warning")
		} else {
			justep.Baas.sendRequest({
				"url" : "/weixin/weixin",
				"action" : "ts",
				"async" : false,
				"params" : {
					"id" : userid,
					"logisticstelephone" : $("#b").val(),
					"logistics" : $("#a").val(),
					"logisticsnumber" : $("#c").val(),
					"doctors_recommend" : "1",
					"orderid" : "1",
					"medprice" : "1",
					"transportprice" : "1"
				},
				"success" : function(data) {
					var data = self.comp("meddata");
					data.setValue("logisticstelephone", $("#b").val())
					data.setValue("logistics", $("#a").val())
					data.setValue("logisticsnumber", $("#c").val())
					data.setValue("managetime", new Date())
					data.setValue("state", "3")
					data.saveData({
						"onSuccess" : function() {
							window.location.href = "../medicine/paid.w"
						}
					})
				}
			});
		}
	};

	return Model;
});