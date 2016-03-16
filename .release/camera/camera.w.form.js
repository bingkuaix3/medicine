define(function(require){
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/popOver/popOver');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/medicine/camera'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cuA3m2m';
	this._flag_='35046ffa84db15e2b0132f187428e5e3';
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"address":{"define":"address","label":"address","name":"address","relation":"address","type":"String"},"area":{"define":"area","label":"area","name":"area","relation":"area","type":"String"},"consignee":{"define":"consignee","label":"consignee","name":"consignee","relation":"consignee","type":"String"},"dealnumber":{"define":"dealnumber","label":"dealnumber","name":"dealnumber","relation":"dealnumber","type":"String"},"dealtime":{"define":"dealtime","label":"dealtime","name":"dealtime","relation":"dealtime","rules":{"datetime":true},"type":"DateTime"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"logistics":{"define":"logistics","label":"logistics","name":"logistics","relation":"logistics","type":"String"},"logisticsnumber":{"define":"logisticsnumber","label":"logisticsnumber","name":"logisticsnumber","relation":"logisticsnumber","type":"String"},"medprice":{"define":"medprice","label":"medprice","name":"medprice","relation":"medprice","rules":{"number":true},"type":"Float"},"number":{"define":"number","label":"number","name":"number","relation":"number","rules":{"integer":true},"type":"Integer"},"ordertime":{"define":"ordertime","label":"ordertime","name":"ordertime","relation":"ordertime","rules":{"datetime":true},"type":"DateTime"},"picture":{"define":"picture","label":"picture","name":"picture","relation":"picture","type":"String"},"remarks":{"define":"remarks","label":"remarks","name":"remarks","relation":"remarks","type":"String"},"state":{"define":"state","label":"state","name":"state","relation":"state","type":"String"},"telephone":{"define":"telephone","label":"telephone","name":"telephone","relation":"telephone","type":"String"},"transportprice":{"define":"transportprice","label":"transportprice","name":"transportprice","relation":"transportprice","rules":{"number":true},"type":"Float"},"userid":{"define":"userid","label":"userid","name":"userid","relation":"userid","type":"String"},"username":{"define":"username","label":"username","name":"username","relation":"username","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","limit":20,"queryAction":"queryInformation","saveAction":"saveInformation","tableName":"information","url":"/medicine/med_action","xid":"informationdata"});
}}); 
return __result;});