define(function(require){
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