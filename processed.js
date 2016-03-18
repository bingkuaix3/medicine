define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	require("css!$UI/medicine/plugin/sweetalert").load();
	require("$UI/medicine/plugin/sweetalert.min");
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
	Model.prototype.menu = function(event) {
		$(".over").show()
		$(".jt").show()
	};
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
	Model.prototype.del = function(event) {
		var row = event.bindingContext.$object;
		var data = this.comp("meddata");
		row.val("state", "4");
		data.saveData();
		data.deleteData(row)
	}
	Model.prototype.search = function(event) {
		// alert($(".serach input").val())
		if ($(".serach input").val() == "") {
			swal("请输入搜索内容", "", "warning")
			return;
		}
		var data = this.comp("meddata");
		var rowa = data.find([ 'consignee' ], [ $(".serach input").val() ], false, true, true, true);
		var rowb = data.find([ 'telephone' ], [ $(".serach input").val() ], false, true, true, true);
		if (rowa.length == 0) {
			if (rowb.length == 0) {
				data.clear();
			} else {
				data.clear();
				for (var i = 0; i < rowb.length; i++) {
					data.loadData({
						rows : [ {
							id : rowb[i].val("id"),
							number : rowb[i].val("number"),
							telephone : rowb[i].val("telephone"),
							area : rowb[i].val("area"),
							address : rowb[i].val("address"),
							consignee : rowb[i].val("consignee"),
						} ]
					}, true);
				}
			}
		} else {
			data.clear();
			for (var i = 0; i < rowa.length; i++) {
				data.loadData({
					rows : [ {
						id : rowa[i].val("id"),
						number : rowa[i].val("number"),
						telephone : rowa[i].val("telephone"),
						area : rowa[i].val("area"),
						address : rowa[i].val("address"),
						consignee : rowa[i].val("consignee"),
					} ]
				}, true);
			}
		}

	}
	Model.prototype.css = function(event) {
		$(".main").height(document.body.scrollHeight * 0.92);
		$(".menu").height(document.body.scrollHeight * 0.89);
		$(".xxxxx").css("height", "520px");
	}
	Model.prototype.modelLoad = function(event) {
		if (sessionStorage.getItem("key") == null) {
			window.location.href = "../medicine/signin.w"
		}
		this.css();
		var self = this;
		var data = this.comp("meddata");
		data.filters.setVar("statee", "1");
		data.refreshData();
		document.onkeydown = function(event) {
			var e = event || window.event || arguments.callee.caller.arguments[0];
			if (e && e.keyCode == 13) {
				self.search();
			}
		};

		// data.each(function(params) {
		// $(".table").append(
		// "<div id=" + params.row.val("id") + "
		// style='width:96%;height:40px;border-bottom:1px solid
		// rgb(238,238,238);margin-left:2%;'><div
		// style='float:left;height:40px;width:15%'>"
		// + params.row.val("ordertime") + "</div><div
		// style='float:left;height:40px;width:10%'>" +
		// params.row.val("consignee")
		// + "</div><div style='float:left;height:40px;width:15%'>" +
		// params.row.val("telephone") + "</div><div
		// style='float:left;height:40px;width:15%'>" + params.row.val("area")
		// + "</div><div style='float:left;height:40px;width:40%'>" +
		// params.row.val("address")
		// + "</div><div style='float:left;height:40px;width:5%'><i
		// class='icon-android-close'/ id=" + params.row.val("id") +
		// "></div></div>")
		// })
		// $(".icon-android-close").click(function() {
		// var row = self.comp("meddata").find([ "id" ], [ $(this).attr("id")
		// ]);
		// row[0].val("state", "已放弃");
		// self.comp("meddata").saveData();
		// self.comp("meddata").refreshData();
		// $("#" + row[0].val("id")).remove();
		// })
	};
	return Model;
});
