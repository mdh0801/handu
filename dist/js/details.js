define(["parabola", "jquery", "jquery-cookie"], function(parabola, $){
	var main4 = function(){
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
			
			
			
			
			
			/*****详情左侧******/
			$.ajax({
				type:'get',
				url:'../data/data1.json',
				success:function(arr){
					for(var i = 0; i < arr.length; i++){
						var arr2 = arr[i].child;
						for(var j = 0; j < arr2.length; j++){
							$(`<!--详情左半部分-->
				<div class="data_side">
					<ul id='data_ul'>
						<h1></h1>
						<li>
							<a href="">崔范锡设计系列</a>
						</li>
						<li>
							<a href="">毛呢外套</a>
						</li>
						<li>
							<a href="">羽绒服</a>
						</li>
						<li>
							<a href="">棉衣/棉服</a>
						</li>
						<li>
							<a href="">毛针织衫</a>
						</li>
						<li>
							<a href="">卫衣/绒衫</a>
						</li>
						<li>
							<a href="">短外套/休闲外套</a>
						</li>
						<li>
							<a href="">T恤</a>
						</li>
						<li>
							<a href="">衬衫</a>
						</li>
						<li>
							<a href="">套装</a>
						</li>
						<li>
							<a href="">风衣</a>
						</li>
						<li>
							<a href="">蕾丝衫/雪纺衫</a>
						</li>
						<li>
							<a href="">马夹</a>
						</li>
					</ul>
					<!--左侧文字下的图片-->
					<a href="">
						<img src="${arr2[j].img1}" alt="" />
					</a>
					<!--左侧文字下多个图片1-->
					<div class="deta_char">
						<h1></h1>
						<ul>
							<li class="news_box">
								<a href="">
									<img src="${arr2[j].img2}" alt="" />	
								</a>
								<p>${arr2[j].oP2}</p>
								<div class="data_w">
									<span>${arr2[j].oSpan2}</span>
									<del>${arr2[j].oDel2}</del>
								</div>
							</li>
							
							<li class="news_box">
								<a href="">
									<img src="${arr2[j].img3}" alt="" />	
								</a>
								<p>韩都衣舍2018夏装</p>
								<div class="data_w">
									<span>${arr2[j].oSpan3}</span>
									<del>${arr2[j].oDel3}</del>
								</div>
							</li>
							
							<li class="news_box">
								<a href="">
									<img src="${arr2[j].img4}" alt="" />	
								</a>
								<p>韩都衣舍2018夏装</p>
								<div class="data_w">
									<span>${arr2[j].oSpan4}</span>
									<del>${arr2[j].oDel4}</del>
								</div>
							</li>
							
							<li class="news_box">
								<a href="">
									<img src="${arr2[j].img5}" alt="" />	
								</a>
								<p>韩都衣舍2018夏装</p>
								<div class="data_w">
									<span>${arr2[j].oSpan5}</span>
									<del>${arr2[j].oDel5}</del>
								</div>
							</li>
							
							<li class="news_box">
								<a href="">
									<img src="${arr2[j].img6}" alt="" />	
								</a>
								<p>韩都衣舍2018夏装</p>
								<div class="data_w">
									<span>${arr2[j].oSpan6}</span>
									<del>${arr2[j].oDel6}</del>
								</div>
							</li>
						</ul>
					</div>
					
					<!--左侧文字下多个图片2-->
					<div class="deta_char">
						<h1></h1>
						<ul>
							<li class="news_box">
								<a href="">
									<img src="${arr2[j].img7}" alt="" />	
								</a>
								<p>韩都衣舍2018夏装</p>
								<div class="data_w">
									<span>${arr2[j].oSpan7}</span>
									<del>${arr2[j].oDel7}</del>
								</div>
							</li>
							
							<li class="news_box">
								<a href="">
									<img src="${arr2[j].img8}" alt="" />	
								</a>
								<p>韩都衣舍2018夏装</p>
								<div class="data_w">
									<span>${arr2[j].oSpan8}</span>
									<del>${arr2[j].oDel8}</del>
								</div>
							</li>
							
							<li class="news_box">
								<a href="">
									<img src="${arr2[j].img9}" alt="" />	
								</a>
								<p>韩都衣舍2018夏装</p>
								<div class="data_w">
									<span>${arr2[j].oSpan9}</span>
									<del>${arr2[j].oDel9}</del>
								</div>
							</li>
							
							<li class="news_box">
								<a href="">
									<img src="${arr2[j].img10}" alt="" />	
								</a>
								<p>韩都衣舍2018夏装</p>
								<div class="data_w">
									<span>${arr2[j].oSpan10}</span>
									<del>${arr2[j].oDel10}</del>
								</div>
							</li>
							
							<li class="news_box">
								<a href="">
									<img src="${arr2[j].img11}" alt="" />	
								</a>
								<p>韩都衣舍2018夏装</p>
								<div class="data_w">
									<span>${arr2[j].oSpan11}</span>
									<del>${arr2[j].oDel11}</del>
								</div>
							</li>
							<a href="">
								<img src="${arr2[j].img12}" alt="" />	
							</a>
						</ul>
					</div>
				</div>`).appendTo('#deta')
						}
					}
					
				}
			})
			
			/****求情剩下的全部数据******/
			
			
			
			/******放大镜图片切换*******/
			function det(){
				$('.gallery_nav li').click(function(){
					var index = $(this).index();
					$('.gallery_nav li a').removeClass();
					$('.gallery_nav li a').eq(index).addClass('gall_ashow');
					$('.gallery_nav li a s').removeClass();
					$('.gallery_nav li a s').eq(index).addClass('gall_sshow');
					$('.gallery_cont').removeClass('gall_dshow');
					$('.gallery_cont').eq(index).addClass('gall_dshow')
				})
			}
			
			det()
			
			$('.gallery_cont').hover(function(){
				var index = $(this).index()
				console.log(index)
				$('.zoomPad .float_layer').eq(index).css('display','block');
				$('.zoomWindow').eq(index).css('display','block')
			},function(){
				var index = $(this).index()
				$('.zoomPad .float_layer').eq(index).css('display','none');
				$('.zoomWindow').eq(index).css('display','none')
			}).mousemove(function(e){
				var index = $(this).index()
				 // 获取鼠标当前位置
	            var pageX = e.pageX;
	            var pageY = e.pageY;
	            // 获取“缩略图”窗口在整个文档中的偏移位置
	            var offsetX = $('.zoomPad .mark').eq(index).offset().left;
	            var offsetY = $('.zoomPad .mark').eq(index).offset().top;
	            // 计算鼠标在缩略图中的相对位置
	            var relativeX = pageX - offsetX;
	            var relativeY = pageY - offsetY;
	            // 考虑到鼠标处于“放大镜”框的中心，我们要根据鼠标位置计算“放大镜”框的位置
	            var magOffsetX = $('.float_layer').eq(index).width() / 2;
	            var magOffsetY = $('.float_layer').eq(index).height() / 2;
	            $('.float_layer').eq(index).css({ left: relativeX - magOffsetX + 'px',
	                top: relativeY - magOffsetY + 'px' });
	            // 获取“放大镜”框的新位置，后面会用到
	            var magX = $('.float_layer').eq(index).position().left;
	            var magY = $('.float_layer').eq(index).position().top;
	 
	            // 二、处理越界情况
	 
	            // 确定边界
	            var maxMagX = $('.zoomPad .mark').eq(index).width() - $('.float_layer').eq(index).width()
	            var maxMagY = $('.zoomPad .mark').eq(index).height() - $('.float_layer').eq(index).height()
	            // 左边界
	            if (magX <= 0) { $('.float_layer').eq(index).css('left', '0px'); }
	            // 右边界
	            if (magX >= maxMagX) { $('.float_layer').eq(index).css('left', maxMagX + 'px'); }
	            // 上边界
	            if (magY <= 0) { $('.float_layer').eq(index).css('top', '0px'); }
	            // 下边界
	            if (magY >= maxMagY) { $('.float_layer').eq(index).css('top', maxMagY + 'px'); }
	 
	            // 三、其次实现“原图”窗口中的图片随“放大镜”框的移动而相应移动
	 
	            // 按照之前确定的缩放比例移动“原图”窗口中的图片
	            // 注意：图片的移动方向与鼠标的移动方向是相反的！
	            var originX = magX * 0.8;
	            var originY = magY * 0.8;
	            $('.zoomWimg img').eq(index).css({ left: -originX + 'px', top: -originY + 'px' });
			})
			
			
					/****放大镜右侧尺码切换*******/
					$('.goods_deta3 .goods_taar ul li').click(function(){
						var index = $(this).index()
						$('.goods_deta3 .goods_taar ul li').removeClass('goods_lshow');
						$('.goods_deta3 .goods_taar ul li').eq(index).addClass('goods_lshow');
						var cm = $('.goods_deta3 .goods_taar ul li span').eq(index).html()
						$('#goodsString').html('你已选择了' +  cm)
					})
			
					/****放大镜右侧价格切换*******/
					$('.goods_deta3 .goods_taar2 ul li').click(function(){
						var index = $(this).index()
						$('.goods_deta3 .goods_taar2 ul li').removeClass('goods_lshow');
						$('.goods_deta3 .goods_taar2 ul li').eq(index).addClass('goods_lshow');
						//var cm = $('.goods_deta3 .goods_taar ul li span').eq(index).html()
						var jg = $('.goods_deta3 .goods_taar2 ul li span').eq(index).html();
						$('#goodsString').html('你已选择了' + jg)
					})
			
					/****库存数量加减******/
					$('.ince').click(function(){
						var goodval = Number($('#goodsNumber').val());
						$('#goodsNumber').val(goodval + 1)
						//console.log(goodval)
						
					})
					
					$('.decr').click(function(){
						var goodval = Number($('#goodsNumber').val());
						
						if(goodval <= 1){
							goodval = 1;
						}else{
							$('#goodsNumber').val(goodval - 1);
						}
					})
					
					
					
					/****微信****/
					$('.weire').mouseenter(function(){
						$('.qrcode').css('display','block')
					})
					$('.weire').mouseleave(function(){
						$('.qrcode').css('display','none')
					})
					
					
					/*****商品全部展示*****/
					$('#J_TabBer li').click(function(){
						var index = $(this).index();
						$('#J_TabBer li').removeClass('J_a');
						$('#J_TabBer li').eq(index).addClass('J_a')
					})
					
					
					 $(window).scroll(function(){
				        let winHeight = $(window).scrollTop();
				        if(winHeight>888){
				        	$('#J_Tab').addClass('J_d')
				        	$('#quikCart').css('display','block')
				        }else{
				        	$('#J_Tab').removeClass('J_d')
				        	$('#quikCart').css('display','none')
				        }
				        //console.log(winHeight)
				    })
					
					
					
					
					
					
					
					/***详情切换***/
					$('#J_TabBer li').click(function(){
						var index = $(this).index();
						$('.flat_contont .flat_li').eq(0).css('display','none')
						$('.flat_contont .flat_li').eq(index).css('display','block')
					})
					
					
					
					/***加入购物车弹出层**/
					/*****创建cookie*****/
					$('.data_btn_jg').click(function(){
						$('#good_Car').css('display','block');
						var id = this.id;
						//alert(id)
						var first = $.cookie("goods") == null ? true : false;
							if(first){
								//alert(1)
								$.cookie('goods', `[{id:${id},num:1}]`, {expires: 7});
							}else{
								//2、判断之前是否添加过该商品
								var str = $.cookie('goods');
								var arr = eval(str);
								var same = false; //假设没有相同的数据
								for(var i = 0; i < arr.length; i++){
									if(arr[i].id == id){
										//之前添加过
										arr[i].num++;
										var cookieStr = JSON.stringify(arr);
										$.cookie('goods', cookieStr, {expires: 7});
										same = true;
										break;
									}
								}
				
								if(!same){
									//之前没添加过
									var obj = {id: id, num: 1};
									arr.push(obj);
									var cookieStr = JSON.stringify(arr);
									$.cookie('goods', cookieStr, {expires: 7});
								}
						}
							
							function sc(){
								var str = $.cookie('goods');
								if(str){
									var arr = eval(str);
									var sum = 0;
									for(var i = 0; i < arr.length; i++){
										sum += arr[i].num;
									}
									$('.sc_num').html(sum)
								}
							}
					})
					
					
					
					
					
					
					
					
					
					
					
					$('.good_toplose').click(function(){
						$('#good_Car').css('display','none')
					})
					
					$('#h_jg').click(function(){
						$('#good_Car').css('display','none')
					})
					
					
					
					$('#quikCart').click(function(){
						$('#good_Car').css('display','block')
					})
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
		})
	}
	return{
		main4:main4
	}
})