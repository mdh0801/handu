define(["parabola", "jquery", "jquery-cookie"], function(parabola, $){
	var main2 = function(){
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
			
			
			
			
			/*****注册******/
			$('.reg_r .reg_rt .reg_num3 div').click(function(){
				//alert(1)
				var index = $(this).index();
				$('.reg_r .reg_rt .reg_num3 div').eq(index).addClass('reg_ashow').siblings().removeClass('reg_ashow')
				$('.reg_rz .reg_n3').eq(index).addClass('reg_dshow').siblings('.reg_rz .reg_n3').removeClass('reg_dshow')
				
			})
			
			
			/*****email验证*****/
			$('#reg_n3_it10').blur(function(){
				//console.log(1)
				var oInpt = $('#reg_n3_it10').val();
				var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
				if(oInpt == ''){
					$('#reg_n3_tb').html('请填写E-mail')
				}else if(!reg.test(oInpt)){
					$('#reg_n3_tb').html('E-mail格式不正确')
				}else{
					$('#reg_n3_tb img').attr('src','../images/reg/NEWS_login_02.jpg')
				}
				
				
			})
			
			/*****密码*****/
			$('#reg_n3_it20').blur(function(){
				var oInpt2 = $('#reg_n3_it20').val();
				var reg=/^(?![0-9]+$)(?![a-z]+$)[0-9a-z]{8,24}$/;
				if(!reg.test(oInpt2)){
					$('#reg_n3_mt0').html('密码必须为8-24位字母与数字组合')
				}else{
					$('#reg_n3_mt0 img').attr('src','../images/reg/NEWS_login_02.jpg')
				}
			})
			
			/******确认密码********/
			
			$('#reg_n3_it30').blur(function(){
				var oInpt3 = $('#reg_n3_it30').val();
				if($('#reg_n3_it20').val() != $('#reg_n3_it30').val()){
					$('#reg_n3_qmt0').html('两次输入的密码不一致')
				}else{
					$('#reg_n3_qmt0 img').attr('src','../images/reg/NEWS_login_02.jpg')
				}
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
			
			$('#reg_n3_60').html(text(4))
			
			$('#reg_n3_60').click(function(){
				$('#reg_n3_60').html(text(4))
			})
			
			
			/****注册*****/
			$('#reg_n3_emi').click(function(){
				console.log(1)
				$.ajax({
					type:'post',
					url:'http://localhost/item/dist/php/eng.php',
					data:'email=' + $('#reg_n3_it10').val() + '&password=' + $('#reg_n3_it20').val(),
					success:function(data){
						//console.log(data)
						$('.reg_p').html('注册成功')
					}
				})
			})
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
		})
		
		
		
	}
	return{
		main2:main2
	}
})