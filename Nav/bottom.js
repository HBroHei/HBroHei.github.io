
//Random Message
const msgList = [
    'To reflect on how my (and other) videos perform, I recommend installing the "Return YouTube Dislike" Plugin',
    'YouTube needs to improve their copyright system to prevent false copyrights',
    'Can we all agree war sucks?'
]
const msg = msgList[Math.floor(Math.random() * msgList.length)]
//Add Bottom Navigation
document.getElementById("bottomNav").innerHTML = 
'<div style="background-color: green; color:white; font-family: Arial, Helvetica, sans-serif; width: 100%; min-width: fit-content; font-size:medium;">' +
'<span style="font-family: \'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif; font-size: large;">HBroHei.github.io</span>'+
'<hr>'+
'<!--<a href="top" style="color:#00f7ff">Back to Top</a>-->'+
'Hosted on Github Page (<a href="https://www.github.com/HBroHei/HBroHei.github.io" style="color:white">Source</a>)'+
'<br>'+
'<br>'+
'<div style="display: inline-flex; text-align:center;">'+
'    <div style=" background-color: rgb(0, 253, 190); width:max-content; height:fit-content; margin: 1vw; display:block; text-align:center;">'+
'        <a href="https://www.youtube.com/channel/UCAB-dMSrwRcsUKBoWkPCkEA" style=" text-align: center;"><img src="/Nav/main_yt_logo.jpg" style="width:10vh; height:10vh; color:aliceblue">Visit my channel</a>'+
'    </div>'+
'    <div style="background-color: rgb(0, 160, 253); width:max-content; height:fit-content;  margin: 1vw; text-align: center; height:10vh">'+
'        <br>'+
'        <a href="https://www.youtube.com/channel/UCgqaFU1ff6axCEA5UkOt98A" style=" text-align:center;"><img style="width:3vw;"></img>Visit my secondary channel</a>'+
'    </div>'+
'    '+
'</div>'+
'<br>'+
'<span style="font-family: Arial, Helvetica, sans-serif; font-weight: bolder;">'+
msg+
'</span>'+
'<br><br>'+
'</div>'