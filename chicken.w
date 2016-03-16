<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;"
  xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"
    onLoad="modelLoad" onModelConstruct="modelModelConstruct"/>  
  <div class="x-panel-content" xid="content"> 
    <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full"
      active="0" xid="contents1" wrap="true" swipe="false"> 
      <div class="x-contents-content" xid="chooseContent"> 
        <div class="top" xid="div1"> 
          <video src="http://353637syf.imwork.net/c/a.mp4" controls="controls"
            poster="http://353637syf.imwork.net/c/3.jpg" width="100%" height="100%"
            preload="auto" xid="default1"/> 
        </div>
        <div class="body" xid="div2"> 
          <div class="progressdiv" xid="div3"> 
            <div class="progress" xid="div4"/> 
          </div>
          <div class="titlelayer"> 
            <div class="titleleft"> 
              <div class="title" xid="div5">请跟着视频一起做</div>  
              <div class="stitle" xid="div6">选材
                <span xid="span1">1</span> 
              </div> 
            </div>  
            <div class="calculagraph"> 
              <div class="game_time" xid="div8"> 
                <div class="hold" xid="div9"> 
                  <div class="pie pie1" xid="div10"/> 
                </div>  
                <div class="hold" xid="div11"> 
                  <div class="pie pie2" xid="div12"/> 
                </div>  
                <div class="bg" xid="div13"/>  
                <div class="time" xid="div14">30: 00</div> 
              </div>  
              <div class="start" id="time" bind-click="click" con="0">开始</div> 
            </div> 
          </div>
          <div class="context" xid="div7"/>  
          <div class="icon" bind-click="jump2" xid="div15">下一步
            <i xid="i1" class="icon-arrow-right-a"/> 
          </div> 
        </div>
      </div>  
      <div class="x-contents-content" xid="delContent">123123132123</div> 
    </div> 
  </div> 
</div>
