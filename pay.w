<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:422px;top:145px;"
    onLoad="modelLoad" onParamsReceive="modelParamsReceive"> 
    <div component="$UI/system/components/justep/data/baasData" autoLoad="false"
      xid="meddata" saveAction="saveInformation" queryAction="queryInformation" tableName="information"
      url="/medicine/med_action" idColumn="id"> 
      <filter name="idd" xid="filter1">id = :idd</filter>  
      <column label="id" name="id" type="String" xid="default8"/>  
      <column label="userid" name="userid" type="String" xid="default9"/>  
      <column label="username" name="username" type="String" xid="default10"/>  
      <column label="state" name="state" type="String" xid="default11"/>  
      <column label="picture" name="picture" type="String" xid="default12"/>  
      <column label="number" name="number" type="Integer" xid="default13"/>  
      <column label="consignee" name="consignee" type="String" xid="default14"/>  
      <column label="telephone" name="telephone" type="String" xid="default15"/>  
      <column label="area" name="area" type="String" xid="default16"/>  
      <column label="address" name="address" type="String" xid="default17"/>  
      <column label="remarks" name="remarks" type="String" xid="default18"/>  
      <column label="medprice" name="medprice" type="Float" xid="default19"/>  
      <column label="transportprice" name="transportprice" type="Float" xid="default20"/>  
      <column label="dealnumber" name="dealnumber" type="String" xid="default21"/>  
      <column label="logistics" name="logistics" type="String" xid="default22"/>  
      <column label="logisticsnumber" name="logisticsnumber" type="String" xid="default23"/>  
      <column label="dealtime" name="dealtime" type="DateTime" xid="default24"/> 
    </div> 
  </div>  
  <div class="main"> 
    <div class="title">商品信息</div>  
    <div class="image"> 
      <img/> 
    </div>  
    <div class="logistics"> 
      <div id="logisticstitle">收货信息</div>  
      <div> 
        <span class="letter">收货人:</span>  
        <span id="consignee"/> 
      </div>  
      <div>联系电话：
        <span id="telephone"/> 
      </div>  
      <div id="logisticsth">收货地址：
        <span id="address"/> 
      </div> 
    </div>  
    <div class="payment"> 
      <div id="paymenttitle">商品信息</div>  
      <div class="price">单价：
        <span id="price"/>  
        <span class="numer">数量:</span>  
        <span id="number"/>  
        <span class="transport">运费:</span>  
        <span id="transportprice"/> 
      </div>  
      <div id="total">合计：
        <span class="total"/> 
      </div> 
    </div>  
    <div class="button"> 
      <div class="success" bind-click="div1Click">确认付款</div>  
      <div class="fail" bind-click="div2Click">取消交易</div> 
    </div>  
    <div class="bottom"/> 
  </div> 
</div>
