window.__justep.__ResourceEngine.loadCss([{url: '/v_81ebe6c1b43442e4b181ab2b4d5f15fal_zh_CNs_desktopd_/system/components/pc.addon.min.css', include: '$model/system/components/justep/cellLayout/css/cellLayout,$model/system/components/justep/pagerLimitSelect/css/pagerLimitSelect,$model/system/components/justep/widgets/css/widgets,$model/system/components/justep/smartContainer/css/smartContainer,$model/system/components/justep/absoluteLayout/css/absoluteLayout,$model/system/components/justep/pagerBar/css/pagerBar'},{url: '/v_2a75a4e2128e4b9e915dea189738465el_zh_CNs_desktopd_/system/components/comp.min.css', include: '$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/justep/panel/css/panel,$model/system/components/justep/common/css/scrollable,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/contents/css/contents,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/menu/css/menu,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/common/css/forms,$model/system/components/justep/bar/css/bar'},{url: '/v_33da7d0ad0f7480a82d723deb1c57032l_zh_CNs_desktopd_/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'}]);window.__justep.__ResourceEngine.loadJs(['/v_3f3870a23771457a9adceae7fb7e7f90l_zh_CNs_desktopd_/system/components/pc.addon.min.js','/v_1df5b0717c0e479ca9e44702f0f73a61l_zh_CNs_desktopd_/system/components/comp2.min.js','/v_822a86238c4d40f58b11b0b2b8045e9cl_zh_CNs_desktopd_/system/components/comp.min.js','/v_61c503cec83143cfbf3bd3c6afb3d212l_zh_CNs_desktopd_/system/common.min.js','/v_51288fe1c6ae403f9ec583fa3b394756l_zh_CNs_desktopd_/system/core.min.js']);define(function(require){
require('$model/UI2/system/components/justep/pagerLimitSelect/pagerLimitSelect');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/pagerBar/pagerBar');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/select/select');
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
require('$model/UI2/system/components/bootstrap/pagination/pagination');
require('$model/UI2/system/components/justep/output/output');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/medicine/completed'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cFfEVNb';
	this._flag_='7f86fe873ae82afa4e05764938581f63';
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"address":{"define":"address","label":"address","name":"address","relation":"address","type":"String"},"area":{"define":"area","label":"area","name":"area","relation":"area","type":"String"},"consignee":{"define":"consignee","label":"consignee","name":"consignee","relation":"consignee","type":"String"},"dealnumber":{"define":"dealnumber","label":"dealnumber","name":"dealnumber","relation":"dealnumber","type":"String"},"dealtime":{"define":"dealtime","label":"dealtime","name":"dealtime","relation":"dealtime","rules":{"datetime":true},"type":"DateTime"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"logistics":{"define":"logistics","label":"logistics","name":"logistics","relation":"logistics","type":"String"},"logisticsnumber":{"define":"logisticsnumber","label":"logisticsnumber","name":"logisticsnumber","relation":"logisticsnumber","type":"String"},"logisticstelephone":{"define":"logisticstelephone","label":"logisticstelephone","name":"logisticstelephone","relation":"logisticstelephone","type":"String"},"managetime":{"define":"managetime","label":"managetime","name":"managetime","relation":"managetime","rules":{"datetime":true},"type":"DateTime"},"medprice":{"define":"medprice","label":"medprice","name":"medprice","relation":"medprice","rules":{"number":true},"type":"Float"},"number":{"define":"number","label":"number","name":"number","relation":"number","rules":{"integer":true},"type":"Integer"},"ordertime":{"define":"ordertime","label":"ordertime","name":"ordertime","relation":"ordertime","rules":{"datetime":true},"type":"DateTime"},"picture":{"define":"picture","label":"picture","name":"picture","relation":"picture","type":"String"},"remarks":{"define":"remarks","label":"remarks","name":"remarks","relation":"remarks","type":"String"},"state":{"define":"state","label":"state","name":"state","relation":"state","type":"String"},"telephone":{"define":"telephone","label":"telephone","name":"telephone","relation":"telephone","type":"String"},"transportprice":{"define":"transportprice","label":"transportprice","name":"transportprice","relation":"transportprice","rules":{"number":true},"type":"Float"},"userid":{"define":"userid","label":"userid","name":"userid","relation":"userid","type":"String"},"username":{"define":"username","label":"username","name":"username","relation":"username","type":"String"}},"directDelete":false,"events":{},"filters":{"statee":"state = :statee"},"idColumn":"id","limit":20,"queryAction":"queryInformation","saveAction":"saveInformation","tableName":"information","url":"/medicine/med_action","xid":"meddata"});
}}); 
return __result;});
