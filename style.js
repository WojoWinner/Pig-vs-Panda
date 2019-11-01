var ZycieLegiera=100;
var ZyciePaskudy=100;
var mist=" ";
var To="Ty to nazywasz atakiem?";
var smieszne="Co to za śmieszny atak !?";
var Ostrza=new Audio("Audio/WirujaceOstrza.wav");
var Przeciecie=new Audio("Audio/Przeciecie.wav");
var Zamkniecie=new Audio("Audio/Zamkniecie.wav");
var KunaiKnife=new Audio("Audio/KunaiKnife.wav");
var Shuriken=new Audio("Audio/Shuriken.wav");
var Mochi=new Audio("Audio/Mochi.wav");
var ThunderStrike=new Audio("Audio/ThunderStrike.wav");
var StarFall=new Audio("Audio/StarFall.wav");
var Promien=new  Audio("Audio/Promien.wav");
var Ryk=new  Audio("Audio/Ryk.wav");
var Skorka=new  Audio("Audio/Skorka.wav");
var HP=new  Audio("Audio/HP.wav");
var DivineHammer=new Audio("Audio/DivineHammer.wav");
//var Music=new Audio("Audio/Music.wav");

//MusicPlay();
 var blokada=false;
 
	setTimeout(function start(){document.body.style.filter="grayscale(0%)";},500);
 function Hammer()
 {
	 let Divine='<b style="color:gold;">'+"DivineHammer"+'<b>';
	 document.getElementById("Black_El_Paskudy").innerHTML=Divine;
 } 
 function Hammerout()
 {
	 document.getElementById("Black_El_Paskudy").innerHTML=mist;
 }
 function katanyonm()
{
	let katany='<b style="color:green;">'+"RzutKatanami"+'</b>';
	document.getElementById("odpLegiera").innerHTML=katany;

}
 function katanyonmout()
{
	
	document.getElementById("odpLegiera").innerHTML=mist;

}
 function przeciecieonm()
{
	let przeciecie='<b style="color:green;">'+"Szybkie przeciecie"+'<br />'+"Paskudy"+'</b>';
	document.getElementById("odpLegiera").innerHTML=przeciecie;

}
 function przeciecieonmout()
{
	
	document.getElementById("odpLegiera").innerHTML=mist;

}
function shurikenonm()
{
	let shuriken='<b style="color:green;">'+"Shuriken"+'</b>';
	document.getElementById("odpLegiera").innerHTML=shuriken;

}
function shurikenonmout()
{
	
	document.getElementById("odpLegiera").innerHTML=mist;

}
 function kunaiknifeonm()
{
let kunai='<b style="color:green;">'+"KunaiKnife"+'</b>';
	document.getElementById("odpLegiera").innerHTML=kunai;
}
function kunaiknifeonmout()
{
	document.getElementById("odpLegiera").innerHTML=mist;
}
 function mochionm()
{
let mochi='<b style="color:green;">'+"Mochi('+50 HP')"+'</b>';
	document.getElementById("odpLegiera").innerHTML=mochi;
}
function mochionmout()
{
	document.getElementById("odpLegiera").innerHTML=mist;
}
 
    function rotatonm()
{
	 let plus="+5HP"
	 document.getElementById("Black_El_Paskudy").innerHTML='<b style="color:yellow;font-size:20px;">'+plus+'</b>';
}
    function rotatonmout()
{
	 document.getElementById("Black_El_Paskudy").innerHTML=mist;
}
    function dwaonm()
{
	let skora="Skorka ('Odpad') z banana"
	
	document.getElementById("Black_El_Paskudy").innerHTML='<b style="color:yellow;font-size:20px;">'+skora+'</b>';
}
    function dwaonmout()
{
	
	 document.getElementById("Black_El_Paskudy").innerHTML=mist;
}
    function trzyonm()
{
	let energia="('Piorun Paskudy')";
	 
	 document.getElementById("Black_El_Paskudy").innerHTML='<b style="color:yellow;font-size:20px;">'+energia+'</b>';
}
    function trzyonmout()
{
	
	 document.getElementById("Black_El_Paskudy").innerHTML=mist;
}
    function czteryonm()
{
	let Ryk="Ryk Paskudy"
	
	 document.getElementById("Black_El_Paskudy").innerHTML='<b style=color:yellow;font-size:20px;">'+Ryk+'</b>';
	 
}
    function czteryonmout()
{
	 
	 document.getElementById("Black_El_Paskudy").innerHTML=mist;
}
    function pieconm()
{
	 let Star="SpadająceGwiazdy"+'<br />'+"('GwiezdnyAtak')";
	 
	 document.getElementById("Black_El_Paskudy").innerHTML='<b style=color:yellow;font-size:20px;">'+Star+'</b>';
}
    function pieconmout()
{
	 
	 document.getElementById("Black_El_Paskudy").innerHTML=mist;
}
    function szesconm()
{
	 let Promien="PromieńZagłady"+'<br />'+"Legiera";
	 
	 document.getElementById("Black_El_Paskudy").innerHTML='<b style=color:yellow;font-size:20px;">'+Promien+'</b>';
}
    function szesconmout()
{
	
	 document.getElementById("Black_El_Paskudy").innerHTML=mist;
}
var podmianaJ=0;
var Rotat=false;
    function rotat()
{
	blokada=false;
	HP.play();
	document.getElementById("animee").style.display="none";
	document.getElementById('WyswietlaczPaskudy').style.width = "50px";
	document.getElementById('WyswietlaczPaskudy').style.height = "50px";
	document.getElementById("WyswietlaczPaskudy").style.display="block";
	document.getElementById('WyswietlaczPaskudy').style.backgroundImage='url("img/piechp.png")';
	document.getElementById('WyswietlaczPaskudy').style.backgroundSize = "100% 100%";
	document.getElementById('WyswietlaczPaskudy').style.borderRadius = "0px";
	
	anime({
	targets:'#pierwszaanimpas',
	keyframes: [ {translateY:400},{translateX:530},{translateY:18},],
	delay:200,
	easing: 'easeInOutQuad',
	loop:false
	});
	anime({
	targets:'#WyswietlaczPaskudy',
	keyframes: [ {scale:2,duration:1000},{scale:1,duration:1},],
	delay:10,
	easing: 'easeInOutQuad',
	loop:false
	});
	anime({
	targets:'#wartop',
	translateX:'-=22px',
	delay:10,
	easing: 'easeInOutQuad',
	loop:false
	});
	setTimeout(function lek(){document.getElementById("WyswietlaczPaskudy").style.display="none";},1000);
	let x=5;
	let y=1;
	podmianaJ=podmianaJ+y;
	ZyciePaskudy=ZyciePaskudy+x;
	Rotat=true;
	if(blokada==false)
	{
		setTimeout(function(){document.getElementById("blocked").style.display="block";},1950);
	}
	if(Rotat==true)
	{
		setTimeout(function(){document.getElementById("Tury").style.display="block";
		document.getElementById("tura").innerHTML='<b style="color:green">'+"LegierTurn"+'</b>';},1200);
		setTimeout(function(){document.getElementById("Tury").style.display="none";},1950);
	}
	if(ZyciePaskudy<=0)
	{
		alert("PaskudaPrzegrał");
		document.getElementById("EndGame").style.display="block";
	}
	setTimeout(function timehehehe()
	{
	if(podmianaS==6 && podmianaP==5 && podmianaC==4 && podmianaT==3 && podmianaD==2 && podmianaJ==1)
	{
		document.getElementById("divmocyp").style.display="block";
	}
	},1000);
}
var podmianaD=0;
    function tagsdwa()
{
	blokada=false;
	
	let skorka="Łap skórkę Odpadzie!";
	let skorkaout="";
	document.getElementById("Black_El_Paskudy").innerHTML=skorka;
	document.getElementById("dwa").style.display="none";
	document.getElementById("anim").style.position="relative";
	document.getElementById("anim").style.width="50px";
	document.getElementById("anim").style.height="50px";
	document.getElementById("anim").style.display="block";
	document.getElementById('anim').style.backgroundImage='url("img/trzyatakiPaskudy.png")';
	document.getElementById('anim').style.backgroundSize = "100% 100%";
	document.getElementById("WyswietlaczPaskudy").style.display="block";
	document.getElementById('WyswietlaczPaskudy').style.width = "150px";
	document.getElementById('WyswietlaczPaskudy').style.height = "100px";
	document.getElementById("WyswietlaczPaskudy").style.backgroundImage='url("img/ZracaPaskuda.png")';
	document.getElementById('WyswietlaczPaskudy').style.backgroundSize = "100% 100%";
	
	
	anime({
	targets:'#anim',
	keyframes: [ {translateY:440,rotateZ:720,duration:1500},{translateY:0,rotateZ:0,duration:1},],
	delay:10,
	easing: 'easeInOutQuad',
	loop:3
	});
	anime({
	targets:'#warto',
	keyframes: [ {translateX:'-=5px',delay:1100},{translateX:'-=15px',delay:1400},{translateX:'-=30px',delay:1500},],
	duration:1,
	delay:0,
	easing: 'easeInOutQuad',
	loop:false
	});
	 
	anime({
	targets:'#drugaanim',
	keyframes: [ {translateY:24},{translateX:448},{translateY:4},{rotateZ:54,duration:200},],
	delay:200,
	easing: 'easeInOutQuad',
	loop:false
	});
	 setTimeout(function (){Skorka.play();},800);
	 setTimeout(function (){Skorka.play();},2100);
	 setTimeout(function (){Skorka.play();},3800);
	setTimeout(function at(){document.getElementById("anim").style.display="none";},1500);
	setTimeout(function ka(){document.getElementById("anim").style.display="block";},1502);
	setTimeout(function akt(){document.getElementById("anim").style.display="none";},3002);
	setTimeout(function tak(){document.getElementById("anim").style.display="block";},3004);
	setTimeout(function kra(){document.getElementById("anim").style.display="none";},4504);
	setTimeout(function ark(){document.getElementById("WyswietlaczPaskudy").style.display="none";},4504);
	setTimeout(function ogryzki(){document.getElementById("Black_El_Paskudy").innerHTML=skorkaout;},4504);
	let x=10;
	let y=2;
	let Turn=true;
	podmianaD=podmianaD+y;
	ZycieLegiera=ZycieLegiera-x;
	if(blokada==false)
	{
		setTimeout(function(){document.getElementById("blocked").style.display="block";},5254);
	}
	if(Turn==true)
	{
		setTimeout(function(){document.getElementById("Tury").style.display="block";
		document.getElementById("tura").innerHTML='<b style="color:green">'+"LegierTurn"+'</b>';},4504);
		setTimeout(function(){document.getElementById("Tury").style.display="none";},5254);
	}
	if(ZycieLegiera<=0)
	{
		setTimeout(function(){alert("LegierPrzegrał");
		document.getElementById("EndGame").style.display="block";},4600);
	}
	setTimeout(function timehehehe()
	{
	if(podmianaS==6 && podmianaP==5 && podmianaC==4 && podmianaT==3 && podmianaD==2 && podmianaJ==1)
	{
		document.getElementById("divmocyp").style.display="block";
	}
	},1000);
}
var podmianaT=0;
    function tagstrzy()
{
	blokada=false;
	ThunderStrike.play();
	document.getElementById("trzy").style.display="none";
	document.getElementById("anim").style.position="fixed";
	document.getElementById("anim").style.width="75px";
	document.getElementById("anim").style.height="328px";
	document.getElementById("anim").style.display="block";
	document.getElementById('anim').style.backgroundImage='url("img/Thunder2.png")';
	document.getElementById('anim').style.backgroundSize = "100% 100%";
	anime({
	targets:'#trzeciaanim',
	keyframes: [ {translateY:200},{translateX:800},{translateY:5},{translateX:447},{rotateZ:-52,duration:200},],
	delay:200,
	easing: 'easeInOutQuad',
	loop:false
	});
	anime({
	targets:'#warto',
	keyframes: [ { translateX:'-=35px',delay:0},{ translateX:'-=35px',delay:150},{ translateX:'-=35px',delay:300},{ translateX:'-=35px',delay:450},],
	duration:0,
	easing: 'easeInOutQuad',
	loop:false
	});
	setTimeout(function pie(){document.getElementById("anim").style.display="none";},75);
	setTimeout(function dru(){document.getElementById("anim").style.display="block";},150);
	setTimeout(function trz(){document.getElementById("anim").style.display="none";},225);
	setTimeout(function czw(){document.getElementById("anim").style.display="block";},300);
	setTimeout(function pia(){document.getElementById("anim").style.display="none";},375);
	setTimeout(function szo(){document.getElementById("anim").style.display="block";},450);
	setTimeout(function kwik(){document.getElementById("anim").style.display="none";},525);
	
	let x=27.45;
	let y=3;
	let Turn=true;
	podmianaT=podmianaT+y;
	ZycieLegiera=ZycieLegiera-x;
	if(blokada==false)
	{
		setTimeout(function(){document.getElementById("blocked").style.display="block";},1480);
	}
	if(Turn==true)
	{
		setTimeout(function(){document.getElementById("Tury").style.display="block";
		document.getElementById("tura").innerHTML='<b style="color:green">'+"LegierTurn"+'</b>';},730);
		setTimeout(function(){document.getElementById("Tury").style.display="none";},1480);
	}
	if(ZycieLegiera<=0)
	{
		setTimeout(function(){alert("LegierPrzegrał");
		document.getElementById("EndGame").style.display="block";},600);
	}
	setTimeout(function timehehehe()
	{
	if(podmianaS==6 && podmianaP==5 && podmianaC==4 && podmianaT==3 && podmianaD==2 && podmianaJ==1)
	{
		document.getElementById("divmocyp").style.display="block";
	}
	},1000);
}
var podmianaC=0;
    function tagscztery()
{
	
	blokada=false;
	Ryk.play();
	document.getElementById("cztery").style.display="none";
	document.getElementById("Ryk").style.display="block";
	anime({
	targets:'#czwartaanim',
	keyframes: [ {translateY:-34},{translateX:337},{rotateZ:122.9,duration:200},],
	delay:200,
	easing: 'easeInOutQuad',
	loop:false
	});
	anime({
	targets:'#Ryk',
	keyframes: [ {scale:0,duration:0},{scale:10,delay:100,duration:3000},],
	easing: 'easeInOutQuad',
	loop:false
	});
	anime({
	targets:'#warto',
	keyframes: [ {translateX:'-=75px',delay:100,duration:3000},],
	easing: 'easeInOutQuad',
	loop:false
    });
	setTimeout(function pie(){document.getElementById("Ryk").style.display="none";},3000);
	let x=14.71;
	let y=4;
	let Turn=true;
	podmianaC=podmianaC+y;
	ZycieLegiera=ZycieLegiera-x;
	if(blokada==false)
	{
		setTimeout(function(){document.getElementById("blocked").style.display="block";},3750);
	}
	if(Turn==true)
	{
		setTimeout(function(){document.getElementById("Tury").style.display="block";
		document.getElementById("tura").innerHTML='<b style="color:green">'+"LegierTurn"+'</b>';},3000);
		setTimeout(function(){document.getElementById("Tury").style.display="none";},3750);
	}
	if(ZycieLegiera<=0)
	{
		setTimeout(function(){alert("LegierPrzegrał");
		document.getElementById("EndGame").style.display="block";},3100);
	}
	setTimeout(function timehehehe()
	{
	if(podmianaS==6 && podmianaP==5 && podmianaC==4 && podmianaT==3 && podmianaD==2 && podmianaJ==1)
	{
		document.getElementById("divmocyp").style.display="block";
	}
	},1000);
}
var podmianaP=0;
    function tagspiec()
{
	blokada=false;
	document.getElementById("piec").style.display="none";
	document.getElementById("starone").style.display="block";
	document.getElementById("startwo").style.display="block";
	document.getElementById("starfree").style.display="block";
	anime({
	targets:'#piataanim',
	keyframes: [ {translateY:-100},{translateX:310},{rotateZ:180,duration:200},{translateY:-48.8},],
	delay:200,
	easing: 'easeInOutQuad',
	loop:false
	});
	anime({
	targets:'#starone',
    keyframes: [ {translateY:300,duration:450},{translateY:0,duration:1},],
	delay:200,
	easing: 'easeInOutQuad',
	loop:2
	});
	anime({
	targets:'#startwo',
    keyframes: [ {translateY:250,delay:100,duration:350},{translateY:0,duration:1},],
	delay:200,
	easing: 'easeInOutQuad',
	loop:2
	});
	anime({
	targets:'#starfree',
	keyframes: [ {translateY:200,delay:200,duration:250},{translateY:0,duration:1},],
	delay:200,
	easing: 'easeInOutQuad',
	loop:2
	});
	anime({
	targets:'#warto',
	keyframes: [ {translateX:'-=15px',delay:150,duration:0},{translateX:'-=15px',delay:180,duration:0},{translateX:'-=15px',delay:198,duration:0},
	{translateX:'-=15px',delay:175,duration:0},{translateX:'-=15px',delay:185,duration:0},{translateX:'-=15px',delay:195,duration:0}],
	delay:200,
	easing: 'easeInOutQuad',
	loop:false
	});
	StarFall.play();
    setTimeout(function staroned(){document.getElementById("starone").style.display="none";},450);
    setTimeout(function starend(){document.getElementById("starone").style.display="block";},500);
    setTimeout(function staronedend(){document.getElementById("starone").style.display="none";},1200);
    setTimeout(function startwoned(){document.getElementById("startwo").style.display="none";},450);
    setTimeout(function startwond(){document.getElementById("startwo").style.display="block";},500);
    setTimeout(function startwonedend(){document.getElementById("startwo").style.display="none";},900);
    setTimeout(function starfreend(){document.getElementById("starfree").style.display="none";},450);
    setTimeout(function starfreed(){document.getElementById("starfree").style.display="block";},500);
    setTimeout(function starfreendend(){document.getElementById("starfree").style.display="none";},900);
	let x=17.65;
	let y=5;
	let Turn=true;
	podmianaP=podmianaP+y;
	ZycieLegiera=ZycieLegiera-x;
	if(blokada==false)
	{
		setTimeout(function(){document.getElementById("blocked").style.display="block";},1650);
	}
	if(Turn==true)
	{
		setTimeout(function(){document.getElementById("Tury").style.display="block";
		document.getElementById("tura").innerHTML='<b style="color:green">'+"LegierTurn"+'</b>';},900);
		setTimeout(function(){document.getElementById("Tury").style.display="none";},1650);
	}
	if(ZycieLegiera<=0)
	{
		setTimeout(function(){alert("LegierPrzegrał");
		document.getElementById("EndGame").style.display="block";},1000);
	}
	setTimeout(function timehehehe()
	{
	if(podmianaS==6 && podmianaP==5 && podmianaC==4 && podmianaT==3 && podmianaD==2 && podmianaJ==1)
	{
		document.getElementById("divmocyp").style.display="block";
	}
	},1000);
}
var podmianaS=0;

function tagsszesc()
{
	blokada=false;
	Promien.play();
	document.getElementById("szesc").style.display="none";
	document.getElementById("anim").style.position="fixed";
	document.getElementById("anim").style.width="50px";
	document.getElementById("anim").style.height="50px";
	document.getElementById("anim").style.display="block";
	document.getElementById("anim").style.backgroundImage='url("img/PromienZaglady.png")';
	
	anime({
	targets:'#szostaanim',
	keyframes: [ {translateY:500},{translateX:800},{translateY:-34},{rotateZ:-125.2,duration:50},{translateX:282.9},],
	delay:200,
	easing: 'easeInOutQuad',
	loop:false
});
	anime({
    targets: '#anim',
    keyframes: [{height:'70%',filter:'brightness(100%)',duration:1000},{height:'0%',delay:1000,duration:1},],
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: false
});
    anime({
    targets: '#warto',
    keyframes: [{translateX:'-=250px',delay:720,duration:1200},],
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: false
});
    setTimeout(function Promienend(){document.getElementById("anim").style.display="none";},2500);
    let x=49.1;
	let y=6;
	let Turn=true;
	ZycieLegiera=ZycieLegiera-x;
	podmianaS=podmianaS+y;
	if(blokada==false)
	{
		setTimeout(function(){document.getElementById("blocked").style.display="block";},3250);
	}
	if(Turn==true)
	{
		setTimeout(function(){document.getElementById("Tury").style.display="block";
		document.getElementById("tura").innerHTML='<b style="color:green">'+"LegierTurn"+'</b>';},2500);
		setTimeout(function(){document.getElementById("Tury").style.display="none";},3250);
		
	}
	if(ZycieLegiera<=0)
	{
		setTimeout(function(){alert("LegierPrzegrał");
		document.getElementById("EndGame").style.display="block";},2600);
	}
	setTimeout(function timehehehe()
	{
	if(podmianaS==6 && podmianaP==5 && podmianaC==4 && podmianaT==3 && podmianaD==2 && podmianaJ==1)
	{
		document.getElementById("divmocyp").style.display="block";
	}
	},1000);
}

function pierwszaanimLegiera()
{
	blokada=true;
	let Turn=true;
	document.getElementById("animeLeg").style.display="none";
	document.getElementById("animacjaLegiera").style.display="block";
	document.getElementById("animacjaLegiera").style.width="250px";
	document.getElementById("animacjaLegiera").style.height="34px";
	document.getElementById("animacjaLegiera").style.backgroundImage='url("img/SzybkiePrzeciecie.gif")';
	document.getElementById("animacjaLegiera").style.backgroundSize="100% 100%";
	document.getElementById("Paskuda").style.backgroundImage='url("img/PrzecieciePaskudy.gif")';
	setTimeout(function (){Zamkniecie.play();},100);
    setTimeout(function (){document.getElementById("animacjaLegiera").style.display="none";Przeciecie.play();},1200);
    setTimeout(function (){document.getElementById("Paskuda").style.backgroundImage='url("img/paskuda0.png")';},2500);
anime({
	targets:'#wartop',
	translateX:'+=330px',
	delay:1800,
	easing:'easeInOutQuad',
	loop:false
});
let x=75;
ZyciePaskudy=ZyciePaskudy-x;
if(blokada==true)
	{
		document.getElementById("blocked").style.display="none";
	}
if(Turn==true)
{
	setTimeout(function(){document.getElementById("Tury").style.display="block";
		document.getElementById("tura").innerHTML='<b style="color:red">'+"PaskudaTurn"+'</b>';},3000);
		setTimeout(function(){document.getElementById("Tury").style.display="none";},3750);
		setTimeout(function(){randomskill();},4250);
}
if(ZyciePaskudy<=0)
{
	setTimeout(function spdac()
	{
	alert("PaskudaPrzegral");
	document.getElementById("EndGame").style.display="block";
},3000);
}
}
function drugaanimLegiera()
{
	blokada=true;
	let Turn=true;
	Shuriken.play();
	document.getElementById("dwaL").style.display="none";
	document.getElementById("TrzyLeg").style.display="block";
	document.getElementById("TrzyLeg").style.backgroundImage='url("img/Shuriken.png")';
	document.getElementById("TrzyLeg").style.backgroundSize="100% 100%";
	anime({
		targets:'#wartop',
		translateX:'+=22px',
		delay:400,
		easing:'easeInOutQuad',
		loop:false
	});
	anime({
		targets:'#TrzyLeg',
		keyframes: [{translateY:-300,duration:25},
				   {rotateZ:7200,translateY:-200,translateX:200,duration:2000},
				   {rotateZ:0,translateY:0,translateX:0,delay:10,duration:1},],
		easing:'easeInOutQuad',
		loop:false
	});
	setTimeout(function shurike(){document.getElementById("TrzyLeg").style.display="none";},2000);
	let x=5;
	ZyciePaskudy=ZyciePaskudy-x;
	if(blokada==true)
	{
		document.getElementById("blocked").style.display="none";
	}
	if(Turn==true)
	{
		setTimeout(function(){document.getElementById("Tury").style.display="block";
		document.getElementById("tura").innerHTML='<b style="color:red">'+"PaskudaTurn"+'</b>';},2000);
		setTimeout(function(){document.getElementById("Tury").style.display="none";},2500);
		setTimeout(function(){randomskill();},3000);
	}
	if(ZyciePaskudy<=0)
	{
		setTimeout(function spda(){alert("PaskudaPrzegral");
		document.getElementById("EndGame").style.display="block";},1000);
	}
}
function trzeciaanimLegiera()
{
	blokada=true;
	let Turn=true;
	KunaiKnife.play();
	document.getElementById("trzyL").style.display="none";
	document.getElementById("CzteryLeg").style.display="block";
	document.getElementById("CzteryLeg").style.backgroundImage='url("img/SecondKunai.png")';
	document.getElementById("CzteryLeg").style.backgroundSize="100% 100%";
	anime({
		targets:'#wartop',
		translateX:'+=66px',
		delay:400,
		easing:'easeInOutQuad',
		loop:false
	});
	anime({
		targets:'#CzteryLeg',
		keyframes: [{translateY:-350,duration:150},{translateY:0,delay:10,duration:1},],
		easing:'easeInOutQuad',
		loop:false
	});
	setTimeout(function kuna(){document.getElementById("CzteryLeg").style.display="none";},150);
	let x=15;
	ZyciePaskudy=ZyciePaskudy-x;
	if(blokada==true)
	{
		document.getElementById("blocked").style.display="none";
	}
	if(Turn==true)
	{
		setTimeout(function(){document.getElementById("Tury").style.display="block";
		document.getElementById("tura").innerHTML='<b style="color:red">'+"PaskudaTurn"+'</b>';},400);
		setTimeout(function(){document.getElementById("Tury").style.display="none";},1000);
		setTimeout(function(){randomskill();},1450);
	}
	if(ZyciePaskudy<=0)
	{
		setTimeout(function spda(){alert("PaskudaPrzegral");
		document.getElementById("EndGame").style.display="block";},1000);
	}
	
	
}
function czwartaanimLeg()
{
	
	blokada=true;
	let Turn=true;
	Mochi.play();
	document.getElementById("czteryL").style.display="none";
	document.getElementById("WyswietlaczLegiera").style.display="block";
	document.getElementById("WyswietlaczLegiera").style.backgroundImage='url("img/Mochi.png")';
	document.getElementById("WyswietlaczLegiera").style.backgroundSize="100% 100%";
	anime({
		targets:'#warto',
		translateX:'+=255px',
		delay:400,
		easing:'easeInOutQuad',
		loop:false
	});
	anime({
		targets:'#WyswietlaczLegiera',
		keyframes:[{translateY:-30,translateX:-15,scale:0,duration:800},{translateY:0,translateX:0,scale:1,duration:1},],
		easing:'easeInOutQuad',
		loop:false
	});
	setTimeout(function shurikenout(){document.getElementById("WyswietlaczLegiera").style.display="none";},800);
	let x=50;
	ZycieLegiera=ZycieLegiera+x;
	if(blokada==true)
	{
		document.getElementById("blocked").style.display="none";
	}
	if(Turn==true)
	{
		setTimeout(function(){document.getElementById("Tury").style.display="block";
		document.getElementById("tura").innerHTML='<b style="color:red">'+"PaskudaTurn"+'</b>';},900);
		setTimeout(function(){document.getElementById("Tury").style.display="none";},1500);
		setTimeout(function(){randomskill();},1950);
	}
	if(ZyciePaskudy<=0)
	{
		setTimeout(function spda(){alert("PaskudaPrzegral");
		document.getElementById("EndGame").style.display="block";},1000);
	}
	
}

function TLeg()
{
	Ostrza.play();
	blokada=true;
	let Turn=true;
	 document.getElementById("divmocy").style.display="none";
	 document.getElementById("TLeg").style.display="block";
	 document.getElementById("TdwaLeg").style.display="block";
	 document.getElementById("TLeg").style.backgroundImage='url("img/SecondKatana.png")';
	 document.getElementById("TdwaLeg").style.backgroundImage='url("img/FirstKatana.png")';
	anime({
    targets: '#TLeg',
	keyframes: [{translateX:200,translateY:-200,rotateZ:-3600,duration:1000},
				{translateX:-120,translateY:-420,rotateZ:0,duration:1000},
				{translateX:0,translateY:0,delay:10,duration:1},],
    easing: 'easeInOutQuad',
    loop:false
});
anime({
	targets:'#TdwaLeg',
	keyframes: [{translateX:-200,translateY:-200,rotateZ:3600,duration:1000},
		{translateX:140,translateY:-420,rotateZ:0,duration:1000},
		{translateX:0,translateY:0,delay:10,duration:1},],
	delay:0,
	easing: 'easeInOutQuad',
    loop:false
	});
	anime({
    targets: '#wartop',
    translateX:'+=44px',
    delay:1000,
    duration:1500,
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: false
});
    setTimeout(function dis(){document.getElementById("TLeg").style.display="none";},2000);
	setTimeout(function disteleg(){document.getElementById("TdwaLeg").style.display="none";},2000);
    setTimeout(function smiech(){document.getElementById("Black_El_Paskudy").innerHTML=smieszne;},2000);
    setTimeout(function timeuper(){document.getElementById("divmocy").style.display="block";},2500);
    setTimeout(function smiechout(){document.getElementById("Black_El_Paskudy").innerHTML=mist;},2400);
	let x=10;
	ZyciePaskudy=ZyciePaskudy-x;
	if(blokada==true)
	{
		document.getElementById("blocked").style.display="none";
	}
	if(Turn==true)
	{
		setTimeout(function(){document.getElementById("Tury").style.display="block";
		document.getElementById("tura").innerHTML='<b style="color:red">'+"PaskudaTurn"+'</b>';},2050);
		setTimeout(function(){document.getElementById("Tury").style.display="none";},2750);
		setTimeout(function(){randomskill();},3500);
	}
	if(ZyciePaskudy<=0)
	{
		setTimeout(function spda(){alert("PaskudaPrzegral");
		document.getElementById("EndGame").style.display="block";},3000);
	}
}





function anim()
{
	
	document.getElementById("TPask").style.display="block";
	document.getElementById("TPask").style.backgroundImage='url("img/DivineHammer2.png")';
	anime({
    targets: '#TPask',
	keyframes:[{rotateZ:-270,duration:900},{rotateZ:0,duration:1},],
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: false
});

	anime({
    targets: '#warto',
    translateX:'-=125px', 
    delay:1000,
    duration:1000,
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: false
});
anime({
	targets:'#szostaanim ,#piataanim ,#czwartaanim ,#trzeciaanim ,#drugaanim ,#pierwszaanimpas',
	keyframes: [ {translateY:0,translateX:0,rotateZ:0,duration:1},],
	delay:200,
	easing: 'easeInOutQuad',
	loop:false
});
	anime({
    targets: '#Legier',
	keyframes: [ {borderRadius: ['0%', '50%']},{rotateZ: 67},{translateY: -400},{scale:2},{scale:0},{translateY: 0},{scale:1},{rotateZ: 0},{borderRadius: ['50%', '0%']},],
	delay:300,
    duration:2000,
    easing: 'easeInOutQuad',
  
 });
    setTimeout(function Pan(){document.getElementById("odpLegiera").innerHTML=To;},1500);
    setTimeout(function Panout(){document.getElementById("odpLegiera").innerHTML=mist;},2400);
   setTimeout(function plain(){document.getElementById("TPask").style.display="none";},900);
   setTimeout(function(){DivineHammer.play();},500);
   setTimeout(function timerend(){document.getElementById("divmocyp").style.display="none";},100);
   setTimeout(function newskills()
{
	let Turn=true;
	let y=24.8;
	let x=0;
	blokada=false
  podmianaJ=x;	
  podmianaD=x;	
  podmianaT=x;	
  podmianaC=x;	
  podmianaP=x;	
  podmianaS=x;	
  document.getElementById("animee").style.display="block";
  document.getElementById("dwa").style.display="block";
  document.getElementById("trzy").style.display="block";
  document.getElementById("cztery").style.display="block";
  document.getElementById("piec").style.display="block";
  document.getElementById("szesc").style.display="block";
  ZycieLegiera=ZycieLegiera-y;
  if(Turn==true)
	{
		setTimeout(function(){document.getElementById("Tury").style.display="block";
		document.getElementById("tura").innerHTML='<b style="color:red">'+"LegierTurn"+'</b>';},2000);
		setTimeout(function(){document.getElementById("Tury").style.display="none";},2300);
	}
  if(blokada==false)
	{
		setTimeout(function(){document.getElementById("blocked").style.display="block";},2000);
	}
  if(ZycieLegiera<=0)
  {
	alert("LegierPrzegrał");
  }
},2000);
}

function Moc()
{
	TLeg();
	//randomskill();
	//alert(randomskill());

}
var rotatf=true;
var tagsdwaf=true;
var tagstrzyf=true;
var tagsczteryf=true;
var tagspiecf=true;
var tagsszescf=true;
function randomskill(){
 let rand=[0,1,2,3,4,5];
	

     for(let r=0;r<=rand.length;r++)
	 {
		  var randomowy = Math.floor(Math.random() * rand.length);
		  
		 
		
	 }
	  
		if(randomowy==0&&rotatf==true)
		{
			rotat();
			rotatf=false;
			
		}
		else if(randomowy==1&&tagsdwaf==true)
		{
			tagsdwa();
			tagsdwaf=false;
		}
		else if(randomowy==2&&tagstrzyf==true)
		{
			tagstrzy();
			tagstrzyf=false;
		}
		else if(randomowy==3&&tagsczteryf==true)
		{
			tagscztery();
			tagsczteryf=false;
		}
		else if(randomowy==4&&tagspiecf==true)
		{
			tagspiec();
			tagspiecf=false;
		}
		else if(randomowy==5&&tagsszescf==true)
		{
			tagsszesc();
			tagsszescf=false;
		}
		else if(rotatf==false&&tagsdwaf==false&&tagstrzyf==false&&tagsczteryf==false&&tagspiecf==false&&tagsszescf==false){
			rotatf=true
			tagsdwaf=true
			tagstrzyf=true
			tagsczteryf=true
			tagspiecf=true
			tagsszescf=true
			anim();
		}
		else{
			randomskill();
		}
	  
}


//console.log(randomskill());



anime({
  targets: '#warto',
  translateX:['0px','510px'],
  duration:500,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: false
});
anime({
  targets: '#wartop',
  translateX:['0px','-440px'],
  duration:500,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: false
});