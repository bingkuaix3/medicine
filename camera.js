define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var Baas = justep.Baas;

	require("$UI/system/lib/cordova/cordova");
	require("cordova!org.apache.cordova.device");
	require("cordova!com.justep.cordova.plugin.weixin.v3");
	require("css!$UI/medicine/plugin/sweetalert").load();
	require("$UI/medicine/plugin/sweetalert.min");
	var Model = function() {
		this.callParent();
		this._userID = "user";
		this._userDefaultName = "新用户";
		this._userDefaultAddress = "";
		this._userPhotoURL = "";
		this._localIds = "";
	};
	// https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf7e99c474fcc59f7&redirect_uri=http%3A%2F%2F353637syf.imwork.net%2Fx5%2FUI2%2Fv_%2Fmedicine%2FIndex.w&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect
	// http%3A%2F%2F353637syf.imwork.net%2Fx5%2FUI2%2Fv_%2Fmedicine%2FIndex.w
	var where = new Array(35);

	function comefrom(loca, locacity) {
		this.loca = loca;
		this.locacity = locacity;
	}

	where[0] = new comefrom("请选择省份名", "请选择城市名");
	where[1] = new comefrom("北京", "|东城|西城|崇文|宣武|朝阳|丰台|石景山|海淀|门头沟|房山|通州|顺义|昌平|大兴|平谷|怀柔|密云|延庆");
	where[2] = new comefrom("上海", "|黄浦|卢湾|徐汇|长宁|静安|普陀|闸北|虹口|杨浦|闵行|宝山|嘉定|浦东|金山|松江|青浦|南汇|奉贤|崇明");
	where[3] = new comefrom("天津", "|和平|东丽|河东|西青|河西|津南|南开|北辰|河北|武清|红挢|塘沽|汉沽|大港|宁河|静海|宝坻|蓟县");
	where[4] = new comefrom("重庆", "|万州|涪陵|渝中|大渡口|江北|沙坪坝|九龙坡|南岸|北碚|万盛|双挢|渝北|巴南|黔江|长寿|綦江|潼南|铜梁|大足|荣昌|壁山|梁平|城口|丰都|垫江|武隆|忠县|开县|云阳|奉节|巫山|巫溪|石柱|秀山|酉阳|彭水|江津|合川|永川|南川");
	where[5] = new comefrom("河北", "|石家庄|邯郸|邢台|保定|张家口|承德|廊坊|唐山|秦皇岛|沧州|衡水");
	where[6] = new comefrom("山西", "|太原|大同|阳泉|长治|晋城|朔州|吕梁|忻州|晋中|临汾|运城");
	where[7] = new comefrom("内蒙古", "|呼和浩特|包头|乌海|赤峰|呼伦贝尔盟|阿拉善盟|哲里木盟|兴安盟|乌兰察布盟|锡林郭勒盟|巴彦淖尔盟|伊克昭盟");
	where[8] = new comefrom("辽宁", "|沈阳|大连|鞍山|抚顺|本溪|丹东|锦州|营口|阜新|辽阳|盘锦|铁岭|朝阳|葫芦岛");
	where[9] = new comefrom("吉林", "|长春|吉林|四平|辽源|通化|白山|松原|白城|延边");
	where[10] = new comefrom("黑龙江", "|哈尔滨|齐齐哈尔|牡丹江|佳木斯|大庆|绥化|鹤岗|鸡西|黑河|双鸭山|伊春|七台河|大兴安岭");
	where[11] = new comefrom("江苏", "|南京|镇江|苏州|南通|扬州|盐城|徐州|连云港|常州|无锡|宿迁|泰州|淮安");
	where[12] = new comefrom("浙江", "|杭州|宁波|温州|嘉兴|湖州|绍兴|金华|衢州|舟山|台州|丽水");
	where[13] = new comefrom("安徽", "|合肥|芜湖|蚌埠|马鞍山|淮北|铜陵|安庆|黄山|滁州|宿州|池州|淮南|巢湖|阜阳|六安|宣城|亳州");
	where[14] = new comefrom("福建", "|福州|厦门|莆田|三明|泉州|漳州|南平|龙岩|宁德");
	where[15] = new comefrom("江西", "|南昌市|景德镇|九江|鹰潭|萍乡|新馀|赣州|吉安|宜春|抚州|上饶");
	where[16] = new comefrom("山东", "|济南|青岛|淄博|枣庄|东营|烟台|潍坊|济宁|泰安|威海|日照|莱芜|临沂|德州|聊城|滨州|菏泽");
	where[17] = new comefrom("河南", "|郑州|开封|洛阳|平顶山|安阳|鹤壁|新乡|焦作|濮阳|许昌|漯河|三门峡|南阳|商丘|信阳|周口|驻马店|济源");
	where[18] = new comefrom("湖北", "|武汉|宜昌|荆州|襄樊|黄石|荆门|黄冈|十堰|恩施|潜江|天门|仙桃|随州|咸宁|孝感|鄂州");
	where[19] = new comefrom("湖南", "|长沙|常德|株洲|湘潭|衡阳|岳阳|邵阳|益阳|娄底|怀化|郴州|永州|湘西|张家界");
	where[20] = new comefrom("广东", "|广州|深圳|珠海|汕头|东莞|中山|佛山|韶关|江门|湛江|茂名|肇庆|惠州|梅州|汕尾|河源|阳江|清远|潮州|揭阳|云浮");
	where[21] = new comefrom("广西", "|南宁|柳州|桂林|梧州|北海|防城港|钦州|贵港|玉林|南宁地区|柳州地区|贺州|百色|河池");
	where[22] = new comefrom("海南", "|海口|三亚");
	where[23] = new comefrom("四川", "|成都|绵阳|德阳|自贡|攀枝花|广元|内江|乐山|南充|宜宾|广安|达川|雅安|眉山|甘孜|凉山|泸州");
	where[24] = new comefrom("贵州", "|贵阳|六盘水|遵义|安顺|铜仁|黔西南|毕节|黔东南|黔南");
	where[25] = new comefrom("云南", "|昆明|大理|曲靖|玉溪|昭通|楚雄|红河|文山|思茅|西双版纳|保山|德宏|丽江|怒江|迪庆|临沧");
	where[26] = new comefrom("西藏", "|拉萨|日喀则|山南|林芝|昌都|阿里|那曲");
	where[27] = new comefrom("陕西", "|西安|宝鸡|咸阳|铜川|渭南|延安|榆林|汉中|安康|商洛");
	where[28] = new comefrom("甘肃", "|兰州|嘉峪关|金昌|白银|天水|酒泉|张掖|武威|定西|陇南|平凉|庆阳|临夏|甘南");
	where[29] = new comefrom("宁夏", "|银川|石嘴山|吴忠|固原");
	where[30] = new comefrom("青海", "|西宁|海东|海南|海北|黄南|玉树|果洛|海西");
	where[31] = new comefrom("新疆", "|乌鲁木齐|石河子|克拉玛依|伊犁|巴音郭勒|昌吉|克孜勒苏柯尔克孜|博尔塔拉|吐鲁番|哈密|喀什|和田|阿克苏");
	where[32] = new comefrom("香港", "");
	where[33] = new comefrom("澳门", "");
	where[34] = new comefrom("台湾", "|台北|高雄|台中|台南|屏东|南投|云林|新竹|彰化|苗栗|嘉义|花莲|桃园|宜兰|基隆|台东|金门|马祖|澎湖");
	where[35] = new comefrom("其它", "|北美洲|南美洲|亚洲|非洲|欧洲|大洋洲");
	Model.prototype.init = function(event) {

		$("#city").append("<option>" + where[0].locacity + "</option>")
		for (var i = 0; i < where.length; i++) {
			$("#province").append("<option>" + where[i].loca + "</option>")
		}
	}
	Model.prototype.select1Change = function(event) {
		$("#province").css("color", "black");
		$("#city").css("color", "black");
		$("#city").empty();
		for (var i = 0; i < where.length; i++) {
			if ($("#province").val() == where[i].loca) {
				var locacity = (where[i].locacity).split("|");
				locacity.splice(0, 1);
			}
		}
		for (var j = 0; j < locacity.length; j++) {
			$("#city").append("<option>" + locacity[j] + "</option>")
		}
	};
	Model.prototype.csscontrol = function(event) {
		$("input").focus(function() {
			if ($(this).css("color") == "rgb(255, 0, 0)") {
				$(this).val("");
				$(this).css("color", "black")
			}
		})
	}
	Model.prototype.modelLoad = function(event) {

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
					self._userID = weixinUser.openid;
					self._userDefaultName = weixinUser.nickname + "（微信昵称）";
					self._userDefaultAddress = weixinUser.country + weixinUser.province + weixinUser.city;
					self._userPhotoURL = weixinUser.headimgurl;
				}
			});
		}
		this.init();
		this.csscontrol();
	};

	Model.prototype.a1Click = function(event) {
		this.comp("popOver2").show();
	};
	Model.prototype.determine = function(event) {
		this.comp("popOver2").hide();
	}
	Model.prototype.deleteClick = function(event) {
		$(".sz").attr("src", "../medicine/image/sz.jpg");
		$(".sz").attr("change", "0");
		$(".icon-close-circled").hide();
	}
	Model.prototype.add = function(event) {
		$(".block.n").html(parseInt($(".block.n").html()) + 1)
	}
	Model.prototype.remove = function(event) {
		if ($(".block.n").html() > 1)
			$(".block.n").html($(".block.n").html() - 1)
	}
	Model.prototype.image1Click = function(event) {
		var self = this;
		$(".warning").hide();
		if (this.wxApi) {
			this.wxApi.exec().done(function(wx) {
				wx.chooseImage({
					count : 1, // 默认9
					sizeType : [ 'original', 'compressed' ], // 可以指定是原图还是压缩图，默认二者都有
					sourceType : [ 'album', 'camera' ], // 可以指定来源是相册还是相机，默认二者都有
					success : function(res) {
						self._localIds = res.localIds;
						$(".sz").attr("src", res.localIds);
						$(".sz").attr("change", "1");
						$(".icon-close-circled").show();
					}
				});

			});
		}
	};

	Model.prototype.content1Load = function(event) {
		$(".x-panel").css("height", "1000px");
	};

	Model.prototype.div2Click = function(event) {
		var self = this;
		if ($("#telephone").val() == "" || $("#name").val() == "" || $(".sz").attr("change") == 0 || $("#province").val() == "请选择省份名" || $("#address").val() == "") {
			swal("您有信息没有填写!", "请输入完成信息!", "warning");
			if ($("#telephone").val() == "") {
				$("#telephone").val("*请输入联系电话");
				$("#telephone").css("color", "red");
			}
			if ($(".sz").attr("change") == 0) {
				$(".warning").show();
			}
			if ($("#province").val() == "请选择省份名") {
				$("#province").css("color", "red");
				$("#city").css("color", "red");
			}
			if ($("#address").val() == "") {
				$("#address").val("*请输入详细地址");
				$("#address").css("color", "red");
			}
			if ($("#name").val() == "") {
				$("#name").val("*请输入收货人姓名");
				$("#name").css("color", "red");
			}
		} else {
			if (!/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i.test(parseInt($("#telephone").val()))) {
				swal("您输入的电话有误!", "请输入正确的电话号码!", "error")
			} else {
				if (self.wxApi) {
					self.wxApi.exec().done(function(wx) {
						wx.uploadImage({
							localId : self._localIds[0], // 需要上传的图片的本地ID，由chooseImage接口获得
							isShowProgressTips : 1, // 默认为1，显示进度提示
							success : function(res) {
								var serverId = res.serverId; // 返回图片的服务器端ID
								justep.Baas.sendRequest({
									"url" : "/weixin/weixin",
									"action" : "weixin",
									"async" : false,
									"params" : {
										"id" : serverId
									},
									"success" : function(data) {
										var data = self.comp("informationdata");
										data.newData({
											"defaultValues" : [ {
												"id" : justep.UUID.createUUID(),
												"userid" : self._userID,
												"username" : self._userDefaultName,
												"state" : "0",
												"picture" : serverId,
												"number" : $(".block.n").html(),
												"consignee" : $("#name").val(),
												"telephone" : $("#telephone").val(),
												"area" : $("#province").val() + $("#city").val(),
												"address" : $("#address").val(),
												"remarks" : $("#attention").val(),
												"ordertime" : new Date()
											} ]
										})
										data.saveData({
											"onSuccess" : function() {
												swal({
													title : "下单成功",
													text : "我们会在第一时间处理您的订单",
													type : "success",
													showCancelButton : false,
													closeOnConfirm : false
												}, function() {
													wx.closeWindow();
												});
											}
										})
									}
								});
							}
						});
					});
				}
			}
		}
	};

	return Model;
});
