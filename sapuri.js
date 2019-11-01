alert('ページを開きます');
const t=document.getElementById('kuso');
const musi=document.getElementById('musi');
var firstClick=true;
var i=0;
t.addEventListener('click',function() {
if (firstClick) {
const result=prompt("ベーシックコース一ヶ月無料キャンペーンを申込む場合、パスワードを入力し、OKを押してください。");
if(result==='studySapuri'){t.style.backgroundColor='#bbdefb';
t.style.color='#ffffff';
t.style.border='inset 0.5px #90caf9';
alert('受付完了:お申込みありがとうございます。');
firstClick=false;i++}
else{alert('パスワードが違います'); t.style.backgroundColor='#eeeeee';
t.style.color='#000000';
t.style.border='inset 0.5px #bdbdbd';
firstClick=true;
};
}
else {let org=document.getElementById('unko');
const bpy=window.confirm('💩🦍🥊🤪🤣');
if(bpy){t.style.backgroundColor='#3f51b5';
t.style.color='#ffffff';
org.style.width='3000px';
org.style.height='3000px';
firstClick=false; 
document.querySelector('#moji').innerHTML='ただいま'+i+'回目';
i++}
else{firstClick=false; 
t.style.backgroundColor='#3f51b5';
t.style.border='inset 0.5px #303f9f';
t.style.color='#ffffff';
org.style.width='3000px';
org.style.height='3000px'; 
document.querySelector('#moji').innerHTML='ただいま'+i+'回目'; 
while(5<=i){alert('🤗🤬');};
i++};
};
},false);
var l=0;
const func=function kusoMihoBBA(){
alert('🤩');
l++
};
const unkoYaro=setInterval(func,100000);
if(l>5){clearInterval(unkoYaro);};




