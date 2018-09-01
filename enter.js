define(["parabola", "jquery", "jquery-cookie"], function(parabola, $){
	var main3 = function(){
		$(function(){
			//导航下的影藏列表
			$('.nav-r .ul3 #li4').mouseenter(function(){
				$('#nav_div').stop().show()
			})
			$('#nav_div').mouseleave(function(){
				$('#nav_div').stop().hide()
			})
			
			//纵向菜单
			
			$('.yHeader-con .menu h2').mouseenter(function(){
				$('.yHeader-con .menu .ul2').css('display','block')
			})
			$('.yHeader-con .menu').mouseleave(function(){
				$('.yHeader-con .menu .ul2').css('display','none')
			})
			
			
			$('.yHeader-con .menu .ul2 li').mouseenter(function(){
				var index = $(this).index();
				$(this).css('background','#333')
				$('.yHeader-con .menu .ul2 li #img1').eq(index).css('display','none')
				$('.yHeader-con .menu .ul2 li #img2').eq(index).css('display','block')
				$('.yHeader-con .menu .ul2 li .ul_div h3').eq(index).css('color','#fff')
				$('.yHeader-con .menu .ul2 li p').eq(index).siblings('a').css('color','#fff')
				$('.yHeader-con .menu .ul2 li .ul_div h3').eq(index).stop().animate({
					left:25
				})
				//$('#menu_div .menu_divq').eq(index).show()
				//$('#menu_div .menu_divq').eq(index).addClass('divq_show').siblings('.menu_divq').removeClass('divq_show')
				$('.yHeader-con .menu .ul2 li .menu_divq').eq(index).show()	
				
			})
			$('.yHeader-con .menu .ul2 li').mouseleave(function(){
				var index = $(this).index();
				$('.yHeader-con .menu .ul2 li').css('background','')
				$('.yHeader-con .menu .ul2 li #img1').eq(index).css('display','block')
				$('.yHeader-con .menu .ul2 li #img2').eq(index).css('display','none')
				$('.yHeader-con .menu .ul2 li .ul_div h3').eq(index).css('color','#333')
				$('.yHeader-con .menu .ul2 li p').eq(index).siblings('a').css('color','#333')
				$(this).css('background','#e3e3e3')
				$('.yHeader-con .menu .ul2 li .ul_div h3').stop().eq(index).animate({
					left:16
				})
				$('.yHeader-con .menu .ul2 li .menu_divq').eq(index).hide()
			})
			
			//验证码
			function text(n){
				var arr = [];
				for(var i = 0; i < n; i++){
					var tmp = parseInt(Math.random()*100);
					if(tmp <= 9 && tmp >= 0){
						arr.push(tmp)
					}else if(tmp >=65 && tmp <= 90){
						var strBig = String.fromCharCode(tmp)
						arr.push(strBig)
					}else if(tmp >= 17 && tmp <= 42){
						var strSm = String.fromCharCode(tmp + 80)
						arr.push(strSm)
					}else{
						i--;
					}
				}
				return arr.join('');
			}
			
			$('.entr_ym').html(text(4))
			
			$('.entr_ym').click(function(){
				$('.entr_ym').html(text(4))
			})
			
			
			
			
			/*******登录*******/
			$('#ent_ld').click(function(){
				$.ajax({
					type:'post',
					url:'http://localhost/item/dist/../php/ent.php',
					data:'email=' + $('#ent_10').val() + '&password=' + $('#ent_20').val(),
					success:function(data){
						var arr = JSON.parse(data);
						//console.log(arr)
						//console.log(arr[0])
						if(arr[0] == $('#ent_20').val()){
							//console.log(arr)
							$('.ent_dc').html('登录成功')
						}
					}
				})
			})
			
			
			
			
		})
	}
	return{
		main3:main3
	}
})
