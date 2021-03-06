<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:pc">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:321px;top:175px;"
    onLoad="modelLoad" onParamsReceive="modelParamsReceive"> 
    <div component="$UI/system/components/justep/data/baasData" autoLoad="false"
      xid="meddata" saveAction="saveInformation" queryAction="queryInformation" tableName="information"
      url="/medicine/med_action" idColumn="id"> 
      <filter name="idd" xid="filter1"><![CDATA[id = :idd]]></filter>  
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
  <div class="head"> 
    <div class="company">碾子科技</div>  
    <div class="serach"> 
      <input type="text" placeholder="搜索..."/>  
      <div class="icon"/> 
    </div>  
    <div class="portraitdiv"> 
      <div class="email"> 
        <i xid="i1" class="icon-android-social-user"/> 
      </div>  
      <div class="notice"> 
        <i xid="i2" class="icon-android-mail"/> 
      </div>  
      <div class="portrait" bind-click="menu"> 
        <div class="img"> 
          <img class="portraitimg" src="../medicine/image/loggeduser.png"/>  
          <img class="jt" src="../medicine/image/jt.jpg"/> 
        </div>  
        <div class="name">国安药业</div>  
        <div class="triangle"> 
          <img src="../medicine/image/sj.jpg"/> 
        </div> 
      </div> 
    </div> 
  </div>  
  <div class="menu"> 
    <div class="menudiv"> 
      <div class="i"> 
        <i xid="i7" class="icon-home"/> 
      </div>  
      <span>首页</span> 
    </div>  
    <div class="menudiv" id="extend" bind-click="extend" change="1"> 
      <div class="i"> 
        <i xid="i8" class="icon-compose"/> 
      </div>  
      <span>订单操作</span>  
      <i xid="i18" id="add" class="icon-android-remove"/> 
    </div>  
    <div class="submenu"> 
      <div class="submenudiv" id="wcl" bind-click="jumu"> 
        <i xid="i19" class="icon-arrow-right-b"/>  
        <span>未处理订单</span> 
      </div>  
      <div class="submenudiv" bind-click="jumd"> 
        <i xid="i19" class="icon-arrow-right-b"/>  
        <span>已处理订单</span> 
      </div>  
      <div class="submenudiv" bind-click="jump"> 
        <i xid="i19" class="icon-arrow-right-b"/>  
        <span>已付款订单</span> 
      </div>  
      <div class="submenudiv" bind-click="jumc"> 
        <i xid="i19" class="icon-arrow-right-b"/>  
        <span>已完成订单</span> 
      </div> 
    </div>  
    <div class="menudiv"> 
      <div class="i"> 
        <i xid="i8" class="icon-android-forums"/> 
      </div>  
      <span>交流平台</span> 
    </div>  
    <div class="menudiv"> 
      <div class="i"> 
        <i xid="i8" class="icon-android-contact"/> 
      </div>  
      <span>个人信息</span> 
    </div>  
    <div class="menudiv"> 
      <div class="i"> 
        <i xid="i8" class="icon-clipboard"/> 
      </div>  
      <span>订单统计</span> 
    </div>  
    <div class="menudiv"> 
      <div class="i"> 
        <i xid="i8" class="icon-android-earth"/> 
      </div>  
      <span>物流跟踪</span> 
    </div>  
    <div class="menudiv"> 
      <div class="i"> 
        <i xid="i8" class="icon-ios7-copy"/> 
      </div>  
      <span>账单统计</span> 
    </div>  
    <div class="menudiv"> 
      <div class="i"> 
        <i xid="i8" class="icon-stats-bars"/> 
      </div>  
      <span>可视化管理</span> 
    </div>  
    <div class="menudiv"> 
      <div class="i"> 
        <i xid="i8" class="icon-android-call"/> 
      </div>  
      <span>沟通反馈</span> 
    </div>  
    <div class="menudiv"> 
      <div class="i"> 
        <i xid="i8" class="icon-android-book"/> 
      </div>  
      <span>系统使用手册</span> 
    </div>  
    <div class="menudiv"> 
      <div class="i"> 
        <i xid="i8" class="icon-card"/> 
      </div>  
      <span>付费</span> 
    </div> 
  </div>  
  <div class="title"> 
    <div class="titleword"> 
      <i xid="i8" id="tieleicon" class="icon-compose"/>  
      <span>订单操作</span> 
    </div>  
    <div class="titlesubword"> 
      <img src="../medicine/image/xg.jpg"/>进行订单的处理、发送订单信息
    </div>  
    <div class="loca"> 
      <span class="gray">您所在的位置：</span>  
      <span class="blue">订单操作</span>  
      <span class="black"> 
        <img src="../medicine/image/xg.jpg"/>未处理订单
      </span> 
    </div> 
  </div>  
  <div class="main"> 
    <div class="photo"> 
      <div class="phototitle"/>  
      <img id="photo"/> 
    </div>  
    <div class="right remarks"> 
      <div class="remarkstitle"/>  
      <div class="remarkcontent"> 
        <div class="consignee"/>  
        <div class="telephone"/>  
        <div class="adress"/>  
        <div class="remarkscontent"/> 
      </div> 
    </div>  
    <div class="right money"> 
      <div class="moneytitle">金额核算</div>  
      <div class="moneycontent"> 
        <div class="price"> 
          <div class="medprice"> 
            <div>药价(每副):</div>  
            <div class="medpricespan"> 
              <input id="medprice" placeholder="请输入..."/> 
            </div>  
            <div class="number"/>  
            <div>(副):</div>  
            <div class="totalleft">33333.33</div> 
          </div>  
          <div class="transportprice"> 
            <div class="transportpricefirst">运费:</div>  
            <div class="transportpricespan"> 
              <input id="transportprice" placeholder="请输入..."/> 
            </div> 
          </div> 
        </div>  
        <div class="total"> 
          <div class="totaltitle">合计：</div>  
          <div class="totalmoney"/> 
        </div> 
      </div> 
    </div>  
    <div class="right send"> 
      <!--      <div class="sendtitle">发送消息</div>   -->  
      <div class="sendbutton"> 
        <div class="success" bind-click="success">发送(信息无误)</div>  
        <div class="fail" bind-click="fail">提示(信息有误)</div> 
      </div>  
      <div class="sendcontent"> 
        <i xid="i14" class="icon-android-remove"/>  
        <textarea placeholder="请输入提示内容..."/> 
      </div> 
    </div> 
  </div>  
  <div class="over"> 
    <div class="over-body" bind-click="hide"/>  
    <div class="over-content"> 
      <div class="assortment"> 
        <div class="p"> 
          <i xid="i3" class="icon-person"/> 
        </div>  
        <span>个人简介</span> 
      </div>  
      <div class="assortment"> 
        <div class="p"> 
          <i xid="i4" class="icon-ios7-gear"/> 
        </div>  
        <span>账户设置</span> 
      </div>  
      <div class="assortment"> 
        <div class="p"> 
          <i xid="i5" class="icon-help-circled"/> 
        </div>  
        <span>帮助</span> 
      </div>  
      <div class="assortment"> 
        <div class="p"> 
          <i xid="i6" class="icon-log-out"/> 
        </div>  
        <span>退出</span> 
      </div> 
    </div> 
  </div> 
</div>
