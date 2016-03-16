define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var Baas = justep.Baas;

	require("$UI/system/lib/cordova/cordova");
	require("cordova!org.apache.cordova.device");
	require("cordova!com.justep.cordova.plugin.weixin.v3");
	require("css!$UI/medicine/plugin/sweetalert").load();
	require("$UI/medicine/plugin/sweetalert.min");


	var cir;
	var time = 1800;
	var min = Math.floor(time / 60);
	var ss = +time % 60;
	var d = 0;
	var Model = function() {
		this.callParent();
		this._userID = "user";
		this._userDefaultName = "新用户";
		this._userDefaultAddress = "";
		this._userPhotoURL = "";
	};
	// https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf7e99c474fcc59f7&redirect_uri=http%3A%2F%2Ftianruits.imwork.net%2Fx5%2FUI2%2Fv_%2Fmedicine%2Fchicken.w&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect
	Model.prototype.modelLoad = function(event) {

		if (ss < 10) {
			ss = "0" + ss;
		}
		$(".time").html(min + ": " + ss);
	};
	Model.prototype.click = function(event) {
		if ($(".start").html() == "结束") {
			swal({
				title : "是否要重新计时?",
				type : "warning",
				showCancelButton : true,
				confirmButtonColor : "#DD6B55",
				confirmButtonText : "重新计时!",
				cancelButtonText : "不了，谢谢!",
				closeOnConfirm : true,
				closeOnCancel : true
			}, function(isConfirm) {
				if (isConfirm) {
					time = 1800;
					d = 0;
					$(".start").html("开始");
					$(".time").html("30.00");
					$(".pie1").css("-o-transform", "rotate(0deg)");
					$(".pie1").css("-moz-transform", "rotate(0deg)");
					$(".pie1").css("-webkit-transform", "rotate(0deg)");
					$(".pie2").css("-o-transform", "rotate(0deg)");
					$(".pie2").css("-moz-transform", "rotate(0deg)");
					$(".pie2").css("-webkit-transform", "rotate(0deg)");
					$(".pie1").css("backgroundColor", "white");
					$(".pie2").css("backgroundColor", "white");
				} else {
					$(".start").html("结束")
				}
			});
		}
		if ($("#time").attr("con") == 0 && time > 0) {
			cir = setInterval(function() {
				time = time - 1;
				min = Math.floor(time / 60);
				ss = +time % 60;
				if (ss < 10) {
					ss = "0" + ss;
				}
				$(".time").html(min + ": " + ss);
				d = d + 360 / 1800;
				if (d <= 180) { // 一半的角度 90s 为 450
					// $(".bg").css("backgroundColor", "rgb(255, " + 255 * (1 -
					// (d /
					// 360)) + ", " + 255 * (1 - (d / 360)) + ")");
					$(".pie1").css("-o-transform", "rotate(" + d + "deg)");
					$(".pie1").css("-moz-transform", "rotate(" + d + "deg)");
					$(".pie1").css("-webkit-transform", "rotate(" + d + "deg)");
				} else {
					$(".pie1").css("backgroundColor", "white");
					// $(".pie2").css("backgroundColor", "rgb(255, " + 255 * (1
					// - (d / 360)) + ", " + 255 * (1 - (d / 360)) + ")");
					// $(".bg").css("backgroundColor", "rgb(255, " + 255 * (1 -
					// (d / 360)) + ", " + 255 * (1 - (d / 360)) + ")");
					$(".pie2").css("-webkit-transform", "rotate(180deg)");
					$(".pie2").css("backgroundColor", "rgb(254, 107, 91)");
					$(".pie2").css("-o-transform", "rotate(" + d + "deg)");
					$(".pie2").css("-moz-transform", "rotate(" + d + "deg)");
					$(".pie2").css("-webkit-transform", "rotate(" + d + "deg)");
				}
				if (time == 0) {
					clearInterval(cir);
					time = 0;
					$(".time").html(min + ": " + ss);
					$(".pie2").css("backgroundColor", "rgb(254, 107, 91)");
					$(".bg").css("backgroundColor", "rgb(254, 107, 91)");
					$(".start").html("结束")
					/*
					 * $(".time").css("background-color", "rgb(254, 107, 91)");
					 * $(".time").css("color", "white");
					 */
				}
			}, 10);
			$("#time").attr("con", "1");
			$(".start").html("暂停")
		} else {
			clearInterval(cir);
			$(".time").html(min + ": " + ss);
			$("#time").attr("con", "0");
			$(".start").html("开始")
		}

	}
	Model.prototype.csscontrol = function(event) {
		$(".context").html(
				"第一步，揉入少许水份，让肉肉吸的饱饱的；<br><br>" + "第二步，加入少许蛋清，将吸收了水份的鸡肉裹起来，放入焯水或者油炸时候水份析出；<br><br>" + "第三步，裹淀粉，会使口感更加滑嫩，水份更加牢固地锁入。<br><br>"
						+ "现在看图来学习处理鸡肉，使鸡肉滑嫩的秘诀就是上浆，这个上浆的顺序是有讲究的，按照顺序来，才能让鸡胸肉更加滑嫩。<br><br>" + "1、鸡胸肉薄片中加入少许水，用手不停摔打，使水分浸入肉片中，至有粘性。<br><br>" + "2、加入一颗蛋清，将水分裹住，同样用手不按摩，让蛋清裹住鸡片。")
		$(".x-panel-content").css("height", window.innerHeight);
		$(".start").html("开始")
		$(".game_time").css("right", window.innerWidth * 0.05 + 50);
		$(".context").css("height", window.innerHeight * 0.54 - 50);
	}

	Model.prototype.shake = function(event) {
		if (window.DeviceMotionEvent) {
			window.addEventListener('devicemotion', deviceMotionHandler, false);
		}
		var SHAKE_THRESHOLD = 1700;
		var last_update = 0;
		var x, y, z, last_x, last_y, last_z;
		function deviceMotionHandler(eventData) {
			var acceleration = eventData.accelerationIncludingGravity;
			var curTime = new Date().getTime();
			if ((curTime - last_update) > 100) {
				var diffTime = curTime - last_update;
				last_update = curTime;
				x = acceleration.x;
				y = acceleration.y;
				z = acceleration.z;
				var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
				if (speed > SHAKE_THRESHOLD) {
					alert("shaked!");
				}
				last_x = x;
				last_y = y;
				last_z = z;
			}
		}
	}
	Model.prototype.jump2 = function(event) {
		this.comp("contents1").to("delContent")
	};

	Model.prototype.modelModelConstruct = function(event) {
		this.csscontrol();
		this.shake();
	};

	return Model;
});