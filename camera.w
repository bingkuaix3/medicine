<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;"
  xid="window" class="window" style="background-color:rgb(238, 239, 244);">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:255px;top:147px;"
    onLoad="modelLoad"> 
    <div component="$UI/system/components/justep/data/baasData" autoLoad="true"
      xid="informationdata" idColumn="id" saveAction="saveInformation" queryAction="queryInformation"
      tableName="information" url="/medicine/med_action"> 
      <column label="id" name="id" type="String" xid="default22"/>  
      <column label="userid" name="userid" type="String" xid="default23"/>  
      <column label="username" name="username" type="String" xid="default24"/>  
      <column label="state" name="state" type="String" xid="default25"/>  
      <column label="picture" name="picture" type="String" xid="default26"/>  
      <column label="number" name="number" type="Integer" xid="default27"/>  
      <column label="consignee" name="consignee" type="String" xid="default28"/>  
      <column label="telephone" name="telephone" type="String" xid="default29"/>  
      <column label="area" name="area" type="String" xid="default30"/>  
      <column label="address" name="address" type="String" xid="default31"/>  
      <column label="remarks" name="remarks" type="String" xid="default32"/>  
      <column label="medprice" name="medprice" type="Float" xid="default33"/>  
      <column label="transportprice" name="transportprice" type="Float" xid="default34"/>  
      <column label="dealnumber" name="dealnumber" type="String" xid="default35"/>  
      <column label="logistics" name="logistics" type="String" xid="default36"/>  
      <column label="logisticsnumber" name="logisticsnumber" type="String" xid="default37"/>  
      <column label="dealtime" name="dealtime" type="DateTime" xid="default38"/>  
      <column label="ordertime" name="ordertime" type="DateTime" xid="default39"/>
    </div> 
  </div>  
  <div component="$UI/system/components/justep/popOver/popOver" class="x-popOver"
    xid="popOver2" position="top"> 
    <div class="x-popOver-overlay" xid="div3"/>  
    <div class="x-popOver-content" xid="div4"> 
      <div class="popover-head">拍方样例</div>  
      <div class="popover-body"> 
        <div class="prompt">正确示例：</div>  
        <div class="prompt-picture"/> 
      </div>  
      <div class="popover-foot" bind-click="determine">确定</div> 
    </div> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel2"> 
    <div class="x-panel-top" xid="top1"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar center-block"
        xid="titleBar1" title="拍方抓药"> 
        <div class="x-titlebar-left" xid="left1"/>  
        <div class="x-titlebar-title" xid="title1">拍方抓药</div>  
        <div class="x-titlebar-right reverse" xid="right1"/> 
      </div> 
    </div>  
    <div class="x-panel-content clearfix" xid="content1" bind-load="content1Load"> 
      <div class="picture"> 
        <div class="instruction">上传处方单
          <span>（仅限1个处方）</span>  
          <a bind-click="a1Click">查看拍方样例</a> 
        </div>  
        <div class="up"> 
          <div class="frame"> 
            <img src="../medicine/image/sz.jpg" class="sz" change="0" bind-click="image1Click"> 
              <i xid="i2" class="icon-close-circled" style="color:red" bind-click="deleteClick"/> 
            </img> 
          </div>  
          <div class="warning picture">* 请上传处方单</div> 
        </div> 
      </div>  
      <div class="number">剂数
        <span>（根据处方的剂数填写）</span>  
        <div class="block" bind-click="add"> 
          <i id="i4" class="icon-android-add"/> 
        </div>  
        <div class="block n">1</div>  
        <div class="block" bind-click="remove"> 
          <i id="i3" class="icon-android-remove"/> 
        </div> 
      </div>  
      <div class="datadiv"> 
        <div class="data" id="data">收货信息</div>  
        <div class="border"/>  
        <div class="data name">收货人
          <input id="name" type="test" placeholder="请输入收货人"/> 
        </div>  
        <div class="border"/>  
        <div class="data telephone">联系电话
          <input id="telephone" type="test" placeholder="请输入联系电话"/> 
        </div>  
        <div class="border"/>  
        <div class="data city">地区
          <select id="city"/>  
          <select id="province" bind-change="select1Change"/> 
        </div>  
        <div class="border"/>  
        <div class="data address">详细地址
          <input id="address" type="test" placeholder="请输入详细地址"/> 
        </div> 
      </div>  
      <div class="attention">备注留言
        <textarea id="attention" placeholder="请输入要注意的地方..."/> 
      </div>  
      <div class="confirm" bind-click="div2Click">确定下单</div> 
    </div> 
  </div> 
</div>
