//your JS code here. If required.
let div=document.createElement("div");
div.id='browser-info';
document.body.append(div);
div.innerHTML="You are using "+navigator.browserName +" version "+navigator.appVersion;