define(function(require){
require('$model/UI2/system/components/justep/pagerLimitSelect/pagerLimitSelect');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/windowContainer/windowContainer');
require('$model/UI2/system/components/justep/select/select');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
require('$model/UI2/system/components/bootstrap/pagination/pagination');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/output/output');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/medicine/control'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cZzIfmm';
	this._flag_='d2a411121c4cf71f9fbcfd8d7457817b';
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"address":{"define":"address","label":"address","name":"address","relation":"address","type":"String"},"area":{"define":"area","label":"area","name":"area","relation":"area","type":"String"},"consignee":{"define":"consignee","label":"consignee","name":"consignee","relation":"consignee","type":"String"},"dealnumber":{"define":"dealnumber","label":"dealnumber","name":"dealnumber","relation":"dealnumber","type":"String"},"dealtime":{"define":"dealtime","label":"dealtime","name":"dealtime","relation":"dealtime","rules":{"datetime":true},"type":"DateTime"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"logistics":{"define":"logistics","label":"logistics","name":"logistics","relation":"logistics","type":"String"},"logisticsnumber":{"define":"logisticsnumber","label":"logisticsnumber","name":"logisticsnumber","relation":"logisticsnumber","type":"String"},"money":{"define":"money","label":"money","name":"money","relation":"money","rules":{"number":true},"type":"Float"},"number":{"define":"number","label":"number","name":"number","relation":"number","rules":{"integer":true},"type":"Integer"},"picture":{"define":"picture","label":"picture","name":"picture","relation":"picture","type":"String"},"remarks":{"define":"remarks","label":"remarks","name":"remarks","relation":"remarks","type":"String"},"state":{"define":"state","label":"state","name":"state","relation":"state","type":"String"},"telephone":{"define":"telephone","label":"telephone","name":"telephone","relation":"telephone","type":"String"},"username":{"define":"username","label":"username","name":"username","relation":"username","type":"String"}},"directDelete":false,"events":{},"filters":{"statee":"state = :statee"},"idColumn":"id","limit":20,"queryAction":"queryInformation","saveAction":"saveInformation","tableName":"information","url":"/medicine/information_action","xid":"medicinedata"});
}}); 
return __result;});