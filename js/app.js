$(function()
{     
		var s='UNABRIDGED SOFTWARE';
		var s2='CONVERSATION';
		var s3=' PLAN';
		var s4='PRODUCE';
		var s5='DELIVER';
		var s6='RESULTS';
		$w=$('.typed-cursor');
		$zizi=$('.typed-introduction');
		$zizi2=$('.typed-conversation');
		$zizi3=$('.toaplan');
		$zizi4=$('.typed-produce');
		$zizi5=$('.typed-deliver');
		$zizi6=$('.typed-results');
		$zizi.text('');
		$zizi2.text('');
		$zizi3.text('');
		$zizi4.text('');
		$zizi5.text('');
		$zizi6.text('');
		var xiala=$('.xiaoxiala');
		var kaiguan=true;
		xiala.click(function()
		{	if(kaiguan)
			{
				$(this).css({background:'white'})
			}
			else{
				$(this).css({background:'black'})
			}
			kaiguan = !kaiguan;
		})
		var zichuxian=(function()
			{	var index=0;
				return function()
				{	
					if(index==s.length)
					{
						clearInterval(time);
					}
					$zizi.append(s.charAt(index));
					index++;
				}
			})()
		var zichuxian2=(function()
			{	var index=0;
				return function()
				{	
					if(index==s2.length)
					{
						clearInterval(time2);
					}
					$zizi2.append(s2.charAt(index));
					index++;
				}
			})()
		var zichuxian3=(function()
			{	var index=0;
				return function()
				{	
					if(index==s3.length)
					{
						clearInterval(time3);
					}
					$zizi3.append(s3.charAt(index));
					index++;
				}
			})()
		var zichuxian4=(function()
			{	var index=0;
				return function()
				{	
					if(index==s4.length)
					{
						clearInterval(time4);
					}
					$zizi4.append(s4.charAt(index));
					index++;
				}
			})()
		var zichuxian5=(function()
			{	var index=0;
				return function()
				{	
					if(index==s5.length)
					{
						clearInterval(time5);
					}
					$zizi5.append(s5.charAt(index));
					index++;
				}
			})()
		var zichuxian6=(function()
			{	var index=0;
				return function()
				{	
					if(index==s6.length)
					{
						clearInterval(time6);
					}
					$zizi6.append(s6.charAt(index));
					index++;
				}
			})()
		var time;
		var time2;
		var time3;
		var time4;
		var time5;
		var time6;
		var guangbiao=(function()
			{	var num=0;
				return function()
					{	
						if(num>=9){num=0}
						if(num==0){$w.css({opacity:1});}
						if(num==1){$w.css({opacity:0});}
						num++;
					}
			})()
		var shan=setInterval(guangbiao,100);
		var fanyi1=function()
		{	
			move('.speech-1').y(300).duration('0.5s').end();
			move('.speech-2').y(300).duration('0.5s').end();
			move('.speech-3').y(300).duration('0.5s').end();
			move('.speech-4').y(300).duration('0.5s').end();
		}
		var yidong1=function()
		{	
			move('.speech-1').y(0).delay('1.2s').duration('1.5s').end();
			move('.speech-2').y(0).delay('1.8s').duration('1.5s').end();
			move('.speech-3').y(0).delay('1.5s').duration('1.5s').end();
			move('.speech-4').y(0).delay('2.1s').duration('1.5s').end();
		}
		var yidong2=function()
		{	
			move('.papers-1').y(0).delay('1.2s').duration('1.3s').end();
			move('.papers-2').y(0).delay('1.7s').duration('1.5s').end();
			move('.papers-3').y(0).delay('2.2s').duration('1.5s').end();
			move('.papers-hero').y(-260).delay('2.8s').duration('3s').end();
		}
		var fanyi2=function()
		{	
			move('.papers-1').y(600).duration('0.5s').end();
			move('.papers-2').y(600).duration('0.5s').end();
			move('.papers-3').y(600).duration('0.5s').end();
			move('.papers-hero').y(600).duration('0.5s').end();
		}
		var yidong3=function()
		{	
			move('.screens-2')
			.delay('0.6s')
			.set('opacity',1)
			.scale(1,1)
			.ease('cubic-bezier(.82,1.81,.41,.66)')
			.duration('1.5s')
			.end();
			move('.screens-3')
			.delay('0.8s')
			.set('opacity',1)
			.scale(1,1)
			.ease('cubic-bezier(.82,1.81,.41,.66)')
			.duration('1.5s')
			.end();
			move('.screens-4')
			.delay('1s')
			.set('opacity',1)
			.scale(1,1)
			.ease('cubic-bezier(.82,1.81,.41,.66)')
			.duration('1.5s')
			.end();
		}
		var fanyi3=function()
		{	
			move('.screens-2').scale(0.2,0.2).set('opacity',0).duration('0.5s').end();
			move('.screens-3').scale(0.2,0.2).set('opacity',0).duration('0.5s').end();
			move('.screens-4').scale(0.2,0.2).set('opacity',0).duration('0.5s').end();
		}
		var yidong4=function()
		{	
			move('.folder-1-front').y(0).delay('0.5s').duration('1s').end();
			move('.folder-1-back').y(0).delay('0.5s').duration('1s').end();
			move('.document-1')
			.delay('1s')
			.set('z-index',10)
			.set('opacity',1)
			.y(-150)
			.duration('1.5s')
			.then()
				.delay('0s')
				.set('z-index',1)
				.duration('0s')
				.then()
					.y(150)
					.duration('1.5s')
				.pop()	
			.pop()
			.end();
			move('.folder-logo-1')
			.delay('4s')
			.set('opacity',1)
			//.scale(1)
			.duration('2.5s')
			.end()
		}
		var fanyi4=function()
		{	
			move('.folder-1-front').y(-200).duration('0.51s').end();
			move('.folder-1-back').y(-200).duration('0.51s').end();
			move('.document-1')
			.set('z-index',10)
			.set('opacity',0)
			.y(200)
			.duration('0.5s')
			.then()
				.delay('0s')
				.set('z-index',1)
				.duration('0s')
				.then()
					.y(0)
					.duration('0.5s')
				.pop()	
			.pop()
			.end();
			move('.folder-logo-1')
			.delay('0s')
			.set('opacity',0)
			//.scale(1)
			.duration('2.5s')
			.end()
		}
		var yidong5=function()
		{	
			move('.results-container').set('opacity','1').duration('1.5s').y(0).delay('0.5s').end();
		}
		var fanyi5=function()
		{	
			move('.results-container').y(-30).set('opacity','0').end();
		}
		$('#fullpage').fullpage({
			sectionsColor:['rgb(36, 53, 76)','rgb(103, 175, 50)','rgb(36, 53, 76)','rgb(103, 175, 50)','rgb(36, 53, 76)','rgb(103, 175, 50)','rgb(36, 53, 76)'],
			controlArrows:false,
			paddingTop:60,
			navigation:true,
			showActiveTooltip:false,	
			//scrollOverflow:true,
			navigationTooltips:['INTRODUCTION','CONVERSATION','PLAN','PRODUCE','DELIVER','RESULTS','TALK'],
			fixedElements:'#header',	
			afterLoad(anchorLink,index){
				switch(index){
					case 1:time=setInterval(zichuxian,200);shan;break;
					case 2:time2=setInterval(zichuxian2,200);shan;yidong1();break;
					case 3:time3=setInterval(zichuxian3,200);shan;yidong2();break;
					case 4:time4=setInterval(zichuxian4,200);shan;yidong3();break;
					case 5:time5=setInterval(zichuxian5,200);shan;yidong4();break;
					case 6:time6=setInterval(zichuxian6,200);shan;yidong5();break;
				}
			},
			afterRender(){
				move('#header').y(0).end()
			},
			onLeave(index,nextIndex,direction){
				switch(index){
					case 2:fanyi1();break;
					case 3:fanyi2();break;
					case 4:fanyi3();break;
					case 5:fanyi4();break;
					case 6:fanyi5();break;
				}
			}
		})
		
	})