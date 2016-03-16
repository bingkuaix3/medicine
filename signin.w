<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:pc">  
  <div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad"/>  
  <div class="main"> 
    <div class="section"> 
      <div class="left"> 
        <div class="head">碾子科技</div>  
        <div class="Subtitle">欢迎使用线上订单处理系统！</div>  
        <div class="function"> 
          <ul> 
            <li><div class="sub"></div>线上订单查看</li>  
            <li><div class="sub"></div>订单数据处理</li>  
            <li><div class="sub"></div>可视化分析</li>  
            <li><div class="sub"></div>实时跟踪</li> 
          </ul>
        </div> 
      </div>  
      <div class="right"> 
        <div class="signin"> 
          <div class="text"> 
            <div class="title">登录</div>  
            <div class="content">请输入您的账号密码</div> 
          </div>  
          <div class="input"> 
            <input type="text" class="username" placeholder="Username"/>  
            <input type="password" class="password" placeholder="Password"/> 
          </div>  
          <div class="button" bind-click="div1Click">登录</div> 
        </div> 
      </div> 
    </div> 
  </div> 
</div>
