<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:pc">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:358px;top:339px;"
    onLoad="modelLoad"> 
    <div component="$UI/system/components/justep/data/baasData" autoLoad="true"
      xid="meddata" saveAction="saveInformation" queryAction="queryInformation" tableName="information"
      url="/medicine/med_action" idColumn="id">
      <column label="id" name="id" type="String" xid="default1"/>  
      <column label="userid" name="userid" type="String" xid="default2"/>  
      <column label="username" name="username" type="String" xid="default3"/>  
      <column label="state" name="state" type="String" xid="default4"/>  
      <column label="picture" name="picture" type="String" xid="default6"/>  
      <column label="number" name="number" type="Integer" xid="default7"/>  
      <column label="consignee" name="consignee" type="String" xid="default8"/>  
      <column label="telephone" name="telephone" type="String" xid="default9"/>  
      <column label="area" name="area" type="String" xid="default10"/>  
      <column label="address" name="address" type="String" xid="default11"/>  
      <column label="remarks" name="remarks" type="String" xid="default12"/>  
      <column label="medprice" name="medprice" type="Float" xid="default13"/>  
      <column label="transportprice" name="transportprice" type="Float" xid="default14"/>  
      <column label="dealnumber" name="dealnumber" type="String" xid="default15"/>  
      <column label="logisticstelephone" name="logisticstelephone" type="String"
        xid="default16"/>  
      <column label="logistics" name="logistics" type="String" xid="default17"/>  
      <column label="logisticsnumber" name="logisticsnumber" type="String" xid="default18"/>  
      <column label="dealtime" name="dealtime" type="DateTime" xid="default19"/>  
      <column label="ordertime" name="ordertime" type="DateTime" xid="default20"/>  
      <column label="managetime" name="managetime" type="DateTime" xid="default21"/>  
      <filter name="statee" xid="filter1"><![CDATA[state = :statee]]></filter>
    </div>
  </div>  
  <div class="head"> 
    <div class="company">碾子科技</div>  
    <div class="serach"> 
      <input type="text" placeholder="搜索..."/>  
      <div class="icon" bind-click="search"/> 
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
    <div class="xxxxx"> 
      <div class="tabletitlediv"> 
        <div class="tabletitle number">剂数</div>  
        <div class="tabletitle consignee">收货人</div>  
        <div class="tabletitle telephone">联系电话</div>  
        <div class="tabletitle area">地区</div>  
        <div class="tabletitle address">详细地址</div>  
        <div class="tabletitle details">详情</div> 
      </div>  
      <div component="$UI/system/components/justep/list/list" class="x-list"
        xid="list1" data="meddata"> 
        <ul class="x-list-template" xid="listTemplateUl1"> 
          <li xid="li5"> 
            <div component="$UI/system/components/justep/row/row" class="x-row"
              xid="row1"> 
              <div class="x-col x-col-fixed" style="width:10%" xid="col1"> 
                <div component="$UI/system/components/justep/output/output"
                  class="x-output" xid="output2" bind-ref="ref('number')"/> 
              </div>  
              <div class="x-col x-col-fixed" style="width:15%" xid="col2"> 
                <div component="$UI/system/components/justep/output/output"
                  class="x-output" xid="output3" bind-ref="ref('consignee')"/> 
              </div>  
              <div class="x-col x-col-fixed" style="width:15%" xid="col3"> 
                <div component="$UI/system/components/justep/output/output"
                  class="x-output" xid="output4" bind-ref="ref('telephone')"/> 
              </div>  
              <div class="x-col x-col-fixed" style="width:15%" xid="col4"> 
                <div component="$UI/system/components/justep/output/output"
                  class="x-output" xid="output5" bind-ref="ref('area')"/> 
              </div>  
              <div class="x-col x-col-fixed" style="width:40%" xid="col5"> 
                <div component="$UI/system/components/justep/output/output"
                  class="x-output" xid="output6" bind-ref="ref('address')"/> 
              </div>  
              <div class="x-col x-col-fixed" style="width:5%" xid="col6"> 
                <i class="icon-android-note" bind-click="i9Click"/> 
              </div> 
            </div> 
          </li> 
        </ul> 
      </div>  
      <div class="page"> 
        <div component="$UI/system/components/justep/pagerBar/pagerBar" class="x-pagerbar container-fluid"
          xid="pagerBar2" data="meddata"> 
          <div class="row" xid="div8"> 
            <div class="col-sm-3" xid="div9"> 
              <div class="x-pagerbar-length" xid="div10"> 
                <label component="$UI/system/components/justep/pagerLimitSelect/pagerLimitSelect"
                  class="x-pagerlimitselect" xid="pagerLimitSelect2" defaultValue="10"> 
                  <span xid="span7">显示</span>  
                  <select component="$UI/system/components/justep/select/select"
                    class="form-control input-sm" xid="select2"> 
                    <option value="10" xid="default5">10</option> 
                  </select>  
                  <span xid="span8">条</span> 
                </label> 
              </div> 
            </div>  
            <div class="col-sm-3" xid="div11"> 
              <div class="x-pagerbar-info" xid="div12">当前显示0条，共0条</div> 
            </div>  
            <div class="col-sm-6" xid="div13"> 
              <div class="x-pagerbar-pagination" xid="div14"> 
                <ul class="pagination" component="$UI/system/components/bootstrap/pagination/pagination"
                  xid="pagination2"> 
                  <li class="prev" xid="li3"> 
                    <a href="#" xid="a3"> 
                      <span aria-hidden="true" xid="span9">«</span>  
                      <span class="sr-only" xid="span10">Previous</span> 
                    </a> 
                  </li>  
                  <li class="next" xid="li4"> 
                    <a href="#" xid="a4"> 
                      <span aria-hidden="true" xid="span11">»</span>  
                      <span class="sr-only" xid="span12">Next</span> 
                    </a> 
                  </li> 
                </ul> 
              </div> 
            </div> 
          </div> 
        </div> 
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
