
define(["parabola", "jquery", "jquery-cookie"], function(parabola, $){
	var main = function(){
		$(function(){
			
			/*****顶部******/
			var winHeight = $(document).scrollTop();
			$(window).scroll(function(){
				var scrollY = $(document).scrollTop();
				if(scrollY > 600){
					$('#top').slideDown();
				}else{
					$('#top').slideUp();
				}
			})
			
			
			
			
			
			
			
			
			
			
			//导航下的影藏列表
			$('.nav-r .ul3 #li4').mouseenter(function(){
				$('#nav_div').stop().show()
			})
			$('#nav_div').mouseleave(function(){
				$('#nav_div').stop().hide()
			})
			
			//纵向菜单
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
			
			/*****************轮播图******************/
			
			/*****************轮播图2****************/
			$.ajax({
				type:'GET',
				url:'../data/carousel2.json',
				success:function(arr){
					//console.log(arr)
					for(var i = 0; i < arr.length; i++){
						var arr2 = arr[i].img
						//console.log(arr2)
						//console.log(arr[i])
						for(var j = 0; j < arr2.length; j++){
							//console.log(arr2.length)
							//console.log(arr2[j])
							$(`<div class="carousel_l">
							<a href="">
								<div>
									<img src="${arr2[j].imgs1}" alt="" />
								</div>
								<div>
									<img src="${arr2[j].imgs2}" alt="" />
								</div>
								<div>
									<img src="${arr2[j].imgs3}" alt="" />
								</div>
								<div>
									<img src="${arr2[j].imgs4}" alt="" />
								</div>
								<div>
									<img src="${arr2[j].imgs5}" alt="" />
								</div>
							</a>
						</div>`).appendTo('#carousel')
						}
					}
				}
			})
			/*****************轮播图1****************/
			$.ajax({
				type:'GET',
				url:'../data/carousel.json',
				success:function(arr){
					//console.log(arr)
					for(var i = 0; i < arr.length; i++){
						var arr2 = arr[i].img
						//console.log(arr2)
						//console.log(arr[i])
						for(var j = 0; j < arr2.length; j++){
							//console.log(arr2.length)
							//console.log(arr2[j])
							$(`<div class="carousel_l">
							<a href="">
								<div>
									<img src="${arr2[j].imgs1}" alt="" />
								</div>
								<div>
									<img src="${arr2[j].imgs2}" alt="" />
								</div>
								<div>
									<img src="${arr2[j].imgs3}" alt="" />
								</div>
								<div>
									<img src="${arr2[j].imgs4}" alt="" />
								</div>
								<div>
									<img src="${arr2[j].imgs5}" alt="" />
								</div>
							</a>
						</div>`).appendTo('#carousel')
						}
					}
				}
			})
			
			/*************轮播图移入移除效果****************/
			//$('.carousel_ul li')[0].className = 'car_li_show'
			//$('.carousel_l').className = 'car_div_show'
			$('.carousel_ul li').mouseenter(function(){
				var index = $(this).index()
				
				$('.carousel_ul li').eq(index).addClass('car_li_show').siblings('.carousel_ul li').removeClass('car_li_show')
				$('.carousel_l').eq(index).css('z-index',22).fadeIn(1000).siblings('.carousel_l').fadeOut(1000)
			})
			
			
			
			/*****************自动轮播*******************/
			var inx = 0
			setInterval(function(){
				//console.log(inx)
				
				$('.carousel_l').eq(inx).css('z-index',22).fadeIn(1000).siblings('.carousel_l').fadeOut(1000)
				$('.carousel_ul li').eq(inx).addClass('car_li_show').siblings('.carousel_ul li').removeClass('car_li_show')
				inx++
				if(inx > 1){
					inx = 0
				}
			},4000)
			
			
			
			
			
			/**************产品移入移出*****************/
			$('.product_l_b ul li').mouseenter(function(){
				console.log(1)
				var index = $(this).index();
				$('.product_l_b ul li img').eq(index).css('display','block').siblings().css('display','none')
			})
			
			
			
			
			
			/***************产品***************/
			$.ajax({
				type:'get',
				url:'../data/product.json',
				success:function(arr){
					for(var i = 0; i < arr.length; i++){
						//console.log(arr)
						var arr2 = arr[i].img1;
						for(var j = 0; j < arr2.length; j++){
							//console.log(arr2[j])
							//console.log(arr2[j].imgs1)
							$(`<li>
									<a href="">
										<img src="${arr2[j].imgs1}" alt="" />
										<img src="${arr2[j].imgs2}" alt="" />
									</a>
								</li>
								<li>
									<a href="">
										<img src="${arr2[j].imgs3}" alt="" />
									</a>
								</li>
								<li>
									<a href="">
										<img src="${arr2[j].imgs4}" alt="" />
										<img src="${arr2[j].imgs5}" alt="" />
									</a>
								</li>
								<li>
									<a href="">
										<img src="${arr2[j].imgs6}" alt="" />
										<img src="${arr2[j].imgs7}" alt="" />
									</a>
								</li>
								<li>
									<a href="">
										<img src="${arr2[j].imgs8}" alt="" />
										<img src="${arr2[j].imgs9}" alt="" />
									</a>
								</li>
								<li>
									<a href="">
										<img src="${arr2[j].imgs10}" alt="" />
										<img src="${arr2[j].imgs11}" alt="" />
									</a>
								</li>
								<li>
									<a href="">
										<img src="${arr2[j].imgs12}" alt="" />
									</a>
								</li>
								<li>
									<a href="">
										<img src="${arr2[j].imgs13}" alt="" />
										<img src="${arr2[j].imgs14}" alt="" />
									</a>
								</li>
								<li>
									<a href="">
										<img src="${arr2[j].imgs15}" alt="" />
									</a>
								</li>
								<li>
									<a href="">
										<img src="${arr2[j].imgs16}" alt="" />
										<img src="${arr2[j].imgs17}" alt="" />
									</a>
								</li>
								<li>
									<a href="">
										<img src="${arr2[j].imgs18}" alt="" />
										<img src="${arr2[j].imgs19}" alt="" />
									</a>
								</li>`).appendTo('.product_l_b ul')
						}
					}
				}
			})
			
			
			
			
			
			/***********产品下的选项卡1**********/
			$.ajax({
				type:'get',
				url:'../data/tab.json',
				success:function(arr){
					for(var i = 0; i < arr.length; i++){
						//console.log(arr[i])
						var arr2 = arr[i].child
						for(var j = 0; j < arr2.length; j++){
							//console.log(arr2[j])
							$(`<div style='display:block' class="product_r_bb">
							<div class="one">
								<h2>
									<a href="">
										<img src="${arr2[j].img}" alt="" />
									</a>
								</h2>
								<ul>
									<li>
										<span>
											<a href="">${arr2[j].oSpan1}</a>
										</span>
										<a href="">${arr2[j].oA1}</a>
									</li>
									<li>
										<span>
											<a href="">${arr2[j].oSpan2}</a>
										</span>
										<a href="">${arr2[j].oA2}</a>
									</li>
									<li>
										<span>
											<a href="">${arr2[j].oSpan3}</a>
										</span>
										<a href="">${arr2[j].oA3}</a>
									</li>
								</ul>
							</div>
						</div>`).appendTo('.product_r_b')
						}
						
					}
					
				}
			})
			
			/**************选项卡2******************/
			$. ajax({
				type:'get',
				url:'../data/tab2.json',
				success:function(arr){
					for(var i = 0; i < arr.length; i++){
						//console.log(arr[i])
						var arr2 = arr[i].child;
						for(var j = 0; j < arr2.length; j++){
							//console.log(arr2[j])
							$(`<div class="product_r_bb">
							<div class="tow">
								<div class='tow_l'>
									<a href="">
										<h2>
											<span>${arr2[j].oSpan1}</span>
											<img src="${arr2[j].img1}" alt="" />
										</h2>
									</a>
									<ul>
										<li>
											<a href="">${arr2[j].oA1}</a>
										</li>
										<li>
											<a href="">${arr2[j].oA2}</a>
										</li>
										<li>
											<a href="">${arr2[j].oA3}</a>
										</li>
									</ul>
								</div>
								<div class='tow_l'>
									<a href="">
										<h2>
											<span>${arr2[j].oSpan2}</span>
											<img src="${arr2[j].img2}" alt="" />
										</h2>
									</a>
									<ul>
										<li>
											<a href="">${arr2[j].oA4}</a>
										</li>
										<li>
											<a href="">${arr2[j].oA5}</a>
										</li>
										<li>
											<a href="">${arr2[j].oA6}</a>
										</li>
									</ul>
								</div>
							</div>
						</div>`).appendTo('.product_r_b')
						}
					}
				}
			})
			
			
			/***************选项卡3******************/
			$.ajax({
				type:'get',
				url:'../data/tab3.json',
				success:function(arr){
					for(var i = 0; i < arr.length; i++){
						var arr2 = arr[i].child;
						for(var j = 0; j < arr2.length; j++){
							$(`<div class="product_r_bb">
							<div class="three">
								<h2>
									<a href="">
										<img src="${arr2[j].img}" alt="" />
									</a>
								</h2>
								<ul>
									<li>
										<span>
											<a href="">${arr2[j].oSpan1}</a>
										</span>
										<a href="">${arr2[j].oA1}</a>
									</li>
									<li>
										<span>
											<a href="">${arr2[j].oSpan2}</a>
										</span>
										<a href="">${arr2[j].oA2}</a>
									</li>
									<li>
										<span>
											<a href="">${arr2[j].oSpan3}</a>
										</span>
										<a href="">${arr2[j].oA3}</a>
									</li>
								</ul>
							</div>
						</div>`).appendTo('.product_r_b')
						}
					}
				}
			})
			
			
			
			/********产品右边*********/
			//$('.product_r_bb')[0].className = 'pct_show'
			$('.product_r_t .product_r_t1').mouseenter(function(){
				var index = $(this).index()
				$('.product_r_t .product_r_t1').eq(index).addClass('prod_show').siblings().removeClass('prod_show')
				$('.product_r_bb').eq(0).css('display','none')
				$('.product_r_bb').eq(index).addClass('pct_show').siblings().removeClass('pct_show')
			})
			
			
			
			/***********列表选项卡1********/
			
			
			$.ajax({
				type:'get',
				url:'../data/list.json',
				success:function(arr){
					for(var i = 0; i < arr.length; i++){
						var arr2 = arr[i].child;
						for(var j = 0; j < arr2.length; j++){
							$(`<div style='display:block' class="list_divq">
						<ul class='list_ul2'>
							<li>
								<a href="details.html">
									<img src="${arr2[j].img1}" alt="" />
								</a>
								<span>${arr2[j].oSpan1}</span>
								<del>${arr2[j].oDe1}</del>
							</li>
							<li>
								<a href="">
									<img src="${arr2[j].img2}" alt="" />
								</a>
								<span>${arr2[j].oSpan2}</span>
								<del>${arr2[j].oDe2}</del>
							</li>
							<li>
								<a href="">
									<img src="${arr2[j].img3}" alt="" />
								</a>
								<span>${arr2[j].oSpan3}</span>
								<del>${arr2[j].oDe3}</del>
							</li>
							<li>
								<a href="">
									<img src="${arr2[j].img4}" alt="" />
								</a>
								<span>${arr2[j].oSpan4}</span>
								<del>${arr2[j].oDe4}</del>
							</li>
							<li>
								<a href="">
									<img src="${arr2[j].img5}" alt="" />
								</a>
								<span>${arr2[j].oSpan5}</span>
								<del>${arr2[j].oDe5}</del>
							</li>
						</ul>
					</div>`).appendTo('.list_div')
						}
					}
				}
			})
			
			/***********列表选项卡2********/
			
			
			$.ajax({
				type:'get',
				url:'../data/list2.json',
				success:function(arr){
					for(var i = 0; i < arr.length; i++){
						var arr2 = arr[i].child;
						for(var j = 0; j < arr2.length; j++){
							$(`<div class="list_divq">
						<ul class='list_ul2'>
							<li>
								<a href="">
									<img src="${arr2[j].img6}" alt="" />
								</a>
								<span>${arr2[j].oSpan6}</span>
								<del>${arr2[j].oDe6}</del>
							</li>
							<li>
								<a href="">
									<img src="${arr2[j].img7}" alt="" />
								</a>
								<span>${arr2[j].oSpan7}</span>
								<del>${arr2[j].oDe7}</del>
							</li>
							<li>
								<a href="">
									<img src="${arr2[j].img8}" alt="" />
								</a>
								<span>${arr2[j].oSpan8}</span>
								<del>${arr2[j].oDe8}</del>
							</li>
							<li>
								<a href="">
									<img src="${arr2[j].img9}" alt="" />
								</a>
								<span>${arr2[j].oSpan9}</span>
								<del>${arr2[j].oDe9}</del>
							</li>
							<li>
								<a href="">
									<img src="${arr2[j].img10}" alt="" />
								</a>
								<span>${arr2[j].oSpan10}</span>
								<del>${arr2[j].oDe10}</del>
							</li>
						</ul>
					</div>`).appendTo('.list_div')
						}
					}
				}
			})
			
			/***********列表选项卡3********/
			
			
			$.ajax({
				type:'get',
				url:'../data/list3.json',
				success:function(arr){
					for(var i = 0; i < arr.length; i++){
						var arr2 = arr[i].child;
						for(var j = 0; j < arr2.length; j++){
							$(`<div class="list_divq">
						<ul class='list_ul2'>
							<li>
								<a href="">
									<img src="${arr2[j].img11}" alt="" />
								</a>
								<span>${arr2[j].oSpan11}</span>
								<del>${arr2[j].oDe11}</del>
							</li>
							<li>
								<a href="">
									<img src="${arr2[j].img12}" alt="" />
								</a>
								<span>${arr2[j].oSpan12}</span>
								<del>${arr2[j].oDe12}</del>
							</li>
							<li>
								<a href="">
									<img src="${arr2[j].img13}" alt="" />
								</a>
								<span>${arr2[j].oSpan13}</span>
								<del>${arr2[j].oDe13}</del>
							</li>
							<li>
								<a href="">
									<img src="${arr2[j].img14}" alt="" />
								</a>
								<span>${arr2[j].oSpan14}</span>
								<del>${arr2[j].oDe14}</del>
							</li>
							<li>
								<a href="">
									<img src="${arr2[j].img15}" alt="" />
								</a>
								<span>${arr2[j].oDe15}</span>
								<del>${arr2[j].oDe15}</del>
							</li>
						</ul>
					</div>`).appendTo('.list_div')
						}
					}
				}
			})
			
			
			/***********列表选项卡4********/
			
			
			$.ajax({
				type:'get',
				url:'../data/list4.json',
				success:function(arr){
					for(var i = 0; i < arr.length; i++){
						var arr2 = arr[i].child;
						for(var j = 0; j < arr2.length; j++){
							$(`<div class="list_divq">
						<ul class='list_ul2'>
							<li>
								<a href="">
									<img src="${arr2[j].img16}" alt="" />
								</a>
								<span>${arr2[j].oDe16}</span>
								<del>${arr2[j].oDe16}</del>
							</li>
							<li>
								<a href="">
									<img src="${arr2[j].img17}" alt="" />
								</a>
								<span>${arr2[j].oDe17}</span>
								<del>${arr2[j].oDe17}</del>
							</li>
							<li>
								<a href="">
									<img src="${arr2[j].img18}" alt="" />
								</a>
								<span>${arr2[j].oDe18}</span>
								<del>${arr2[j].oDe18}</del>
							</li>
							<li>
								<a href="">
									<img src="${arr2[j].img19}" alt="" />
								</a>
								<span>${arr2[j].oDe19}</span>
								<del>${arr2[j].oDe19}</del>
							</li>
							<li>
								<a href="">
									<img src="${arr2[j].img20}" alt="" />
								</a>
								<span>${arr2[j].oDe20}</span>
								<del>${arr2[j].oDe20}</del>
							</li>
						</ul>
					</div>`).appendTo('.list_div')
						}
					}
				}
			})
			
			
			
			/***********列表选项卡5********/
			
			
			$.ajax({
				type:'get',
				url:'../data/list5.json',
				success:function(arr){
					for(var i = 0; i < arr.length; i++){
						var arr2 = arr[i].child;
						for(var j = 0; j < arr2.length; j++){
							$(`<div class="list_divq">
						<ul class='list_ul2'>
							<li>
								<a href="">
									<img src="${arr2[j].img21}" alt="" />
								</a>
								<span>${arr2[j].oDe21}</span>
								<del>${arr2[j].oDe21}</del>
							</li>
							<li>
								<a href="">
									<img src="${arr2[j].img22}" alt="" />
								</a>
								<span>${arr2[j].oDe22}</span>
								<del>${arr2[j].oDe22}</del>
							</li>
							<li>
								<a href="">
									<img src="${arr2[j].img23}" alt="" />
								</a>
								<span>${arr2[j].oDe23}</span>
								<del>${arr2[j].oDe23}</del>
							</li>
							<li>
								<a href="">
									<img src="${arr2[j].img24}" alt="" />
								</a>
								<span>${arr2[j].oDe24}</span>
								<del>${arr2[j].oDe24}</del>
							</li>
							<li>
								<a href="">
									<img src="${arr2[j].img25}" alt="" />
								</a>
								<span>${arr2[j].oDe25}</span>
								<del>${arr2[j].oDe25}</del>
							</li>
						</ul>
					</div>`).appendTo('.list_div')
						}
					}
				}
			})
			
			/******列表下的选项卡******/
			$('#list-con .list_ul li a span')[0].className = 'list_show'
			$('#list-con .list_ul li').mouseenter(function(){
				var index = $(this).index();
				
				$('#list-con .list_ul li a span').removeClass('list_show');
				$('#list-con .list_ul li a span').eq(index).addClass('list_show');
				//$('#list-con .list_ul li a span').eq(0).removeClass('list_show');
				
				$('#list-con .list_div .list_divq').eq(0).css('display','none')
				//console.log(index)
				//console.log($('#list-con .list_div .list_divq').length)
				//console.log($('#list-con .list_div .list_divq').eq(index))
				$('#list-con .list_div .list_divq').eq(index).addClass('list2_show').siblings().removeClass('list2_show')
				
			})
			
			var inx2 = 0;
			timer = setInterval(function(){
				$('#list-con .list_div .list_divq').eq(0).css('display','none')
				$('#list-con .list_div .list_divq').eq(inx2).addClass('list2_show').siblings().removeClass('list2_show')
				$('#list-con .list_ul li a span').eq(0).removeClass('list_show');
				$('#list-con .list_ul li a span').removeClass('list_show');
				$('#list-con .list_ul li a span').eq(inx2).addClass('list_show');
				inx2++;
				if(inx2 > 4){
					inx2 = 0
				}
			},2000)
			
			
			$('#list-con .list_div .list_ul2 li').mouseenter(function(){
				clearInterval(timer)
			})
			
			
			
			/*******详情*********/
			$.ajax({
				type:'get',
				url:'../data/dett.json',
				success:function(arr){
					for(var i = 0; i < arr.length; i++){
						var arr2 = arr[i].child;
						for(var j = 0; j < arr2.length; j++){
							$(`<div class="det_conl">
						<!--图片-->
						<div class="det_img">
							<a href="">
								<img src="${arr2[j].img}" alt="" />
								<div class="info">
									${arr2[j].oDiv}
									<span>></span>
								</div>
							</a>
						</div>
						<!--图片下的文字-->
						<div class="s_cate">
							<div class="s_catel">
								<a href="">${arr2[j].oA1}</a>
								<a href="">${arr2[j].oA2}</a>
								<a href="">${arr2[j].oA3}</a>
								<a href="">${arr2[j].oA4}</a>
								<a href="">${arr2[j].oA5}</a>
								<a href="">${arr2[j].oA6}</a>
								<a href="">${arr2[j].oA7}</a>
								<a href="">${arr2[j].oA8}</a>
							</div>
						</div>
					</div>
					<!--图片右侧-->
					<div class="fl">
						<div class="fl_img">
							<a href="">
								<img class='sad1' src="${arr2[j].img2}" alt="" />
							</a>
							<a href="">
								<img class='sad2' src="${arr2[j].img3}" alt="" />
							</a>
							<a href="">
								<img class='sad3' src="${arr2[j].img4}" alt="" />
							</a>
						</div>
						<!--图片右侧效果-->
						<div class="fr_hot">
							<h1>热销排行榜</h1>
							<ul>
								<!--产品1-->
								<li>
									<h2>
										<img src="${arr2[j].img5}" alt="" />
										${arr2[j].oH2}
									</h2>
									<div class='hot_con' style='display:block'>
										<div class='hot_img'>
											<a href="">
												<img src="${arr2[j].img6}" alt="" />
											</a>
										</div>
										<div class='hot_info'>
											<p>
												<a href="">${arr2[j].oA10}</a>
											</p>
											<p>
												<span>${arr2[j].oSpan}</span>
											</p>
											<p>
												<del>${arr2[j].oDel}</del>
											</p>
											<p>
												已出售
												<span>${arr2[j].osPan2}</span>
												笔
											</p>
										</div>
									</div>
								</li>
								
								<!--产品2-->
								<li>
									<h2>
										<img src="${arr2[j].img7}" alt="" />
										${arr2[j].oH3}
									</h2>
									<div class='hot_con'>
										<div class='hot_img'>
											<a href="">
												<img src="${arr2[j].img8}" alt="" />
											</a>
										</div>
										<div class='hot_info'>
											<p>
												<a href="">${arr2[j].oA10}</a>
											</p>
											<p>
												<span>${arr2[j].oSpan}</span>
											</p>
											<p>
												<del>${arr2[j].oDel}</del>
											</p>
											<p>
												已出售
												<span>${arr2[j].osPan2}</span>
												笔
											</p>
										</div>
									</div>
								</li>
								<!--产品3-->
								<li>
									<h2>
										<img src="${arr2[j].img9}" alt="" />
										2017春装新款韩版裤子
									</h2>
									<div class='hot_con'>
										<div class='hot_img'>
											<a href="">
												<img src="${arr2[j].img10}" alt="" />
											</a>
										</div>
										<div class='hot_info'>
											<p>
												<a href="">2017韩版春季裤子</a>
											</p>
											<p>
												<span>￥86.00</span>
											</p>
											<p>
												<del>188.00</del>
											</p>
											<p>
												已出售
												<span>2416</span>
												笔
											</p>
										</div>
									</div>
								</li>
								<!--产品4-->
								<li>
									<h2>
										<img src="${arr2[j].img11}" alt="" />
										2017春装新款韩版裤子
									</h2>
									<div class='hot_con'>
										<div class='hot_img'>
											<a href="">
												<img src="${arr2[j].img12}" alt="" />
											</a>
										</div>
										<div class='hot_info'>
											<p>
												<a href="">2017韩版春季裤子</a>
											</p>
											<p>
												<span>￥86.00</span>
											</p>
											<p>
												<del>188.00</del>
											</p>
											<p>
												已出售
												<span>2416</span>
												笔
											</p>
										</div>
									</div>
								</li>
								<!--产品5-->
								<li>
									<h2>
										<img src="${arr2[j].img13}" alt="" />
										2017春装新款韩版裤子
									</h2>
									<div class='hot_con'>
										<div class='hot_img'>
											<a href="">
												<img src="${arr2[j].img14}" alt="" />
											</a>
										</div>
										<div class='hot_info'>
											<p>
												<a href="">2017韩版春季裤子</a>
											</p>
											<p>
												<span>￥86.00</span>
											</p>
											<p>
												<del>188.00</del>
											</p>
											<p>
												已出售
												<span>2416</span>
												笔
											</p>
										</div>
									</div>
								</li>
								<!--产品6-->
								<li>
									<h2>
										<img src="${arr2[j].img15}" alt="" />
										2017春装新款韩版裤子
									</h2>
									<div class='hot_con'>
										<div class='hot_img'>
											<a href="">
												<img src="${arr2[j].img16}" alt="" />
											</a>
										</div>
										<div class='hot_info'>
											<p>
												<a href="">2017韩版春季裤子</a>
											</p>
											<p>
												<span>￥86.00</span>
											</p>
											<p>
												<del>188.00</del>
											</p>
											<p>
												已出售
												<span>2416</span>
												笔
											</p>
										</div>
									</div>
								</li>
								<!--产品7-->
								<li>
									<h2>
										<img src="${arr2[j].img17}" alt="" />
										2017春装新款韩版裤子
									</h2>
									<div class='hot_con'>
										<div class='hot_img'>
											<a href="">
												<img src="${arr2[j].img18}" alt="" />
											</a>
										</div>
										<div class='hot_info'>
											<p>
												<a href="">2017韩版春季裤子</a>
											</p>
											<p>
												<span>￥86.00</span>
											</p>
											<p>
												<del>188.00</del>
											</p>
											<p>
												已出售
												<span>2416</span>
												笔
											</p>
										</div>
									</div>
								</li>
								<!--产品8-->
								<li>
									<h2>
										<img src="${arr2[j].img19}" alt="" />
										2017春装新款韩版裤子
									</h2>
									<div class='hot_con'>
										<div class='hot_img'>
											<a href="">
												<img src="${arr2[j].img20}" alt="" />
											</a>
										</div>
										<div class='hot_info'>
											<p>
												<a href="">2017韩版春季裤子</a>
											</p>
											<p>
												<span>￥86.00</span>
											</p>
											<p>
												<del>188.00</del>
											</p>
											<p>
												已出售
												<span>2416</span>
												笔
											</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>`).appendTo('.det_con')
						}
					}
				}
			})
			
			
			
			/*******详情效果***********/
			//$('.det_con .fl .fr_hot ul li h2')[0].className = 'deth_hide'
			$('.det_con').on('mouseenter','li',function(){
				var index = $(this).index();
				//console.log(index)
				$('.det_con .fl .fr_hot ul li h2').removeClass('deth_hide');
				$('.det_con .fl .fr_hot ul li h2').eq(index).addClass('deth_hide');
				$('.det_con .fl .fr_hot ul li .hot_con').eq(0).css('display','none')
				$('.det_con .fl .fr_hot ul li .hot_con').removeClass('detu_show');
				$('.det_con .fl .fr_hot ul li .hot_con').eq(index).addClass('detu_show')
			})
			
			
			
			/***********详情1********/
			
			
			$.ajax({
				type:'get',
				url:'../data/list3.json',
				success:function(arr){
					for(var i = 0; i < arr.length; i++){
						var arr2 = arr[i].child;
						for(var j = 0; j < arr2.length; j++){
							$(`<div class="list_divq">
						<ul class='list_ul2'>
							<li>
								<a href="">
									<img src="${arr2[j].img11}" alt="" />
								</a>
								<span>${arr2[j].oSpan11}</span>
								<del>${arr2[j].oDe11}</del>
							</li>
							<li>
								<a href="">
									<img src="${arr2[j].img12}" alt="" />
								</a>
								<span>${arr2[j].oSpan12}</span>
								<del>${arr2[j].oDe12}</del>
							</li>
							<li>
								<a href="">
									<img src="${arr2[j].img13}" alt="" />
								</a>
								<span>${arr2[j].oSpan13}</span>
								<del>${arr2[j].oDe13}</del>
							</li>
							<li>
								<a href="">
									<img src="${arr2[j].img14}" alt="" />
								</a>
								<span>${arr2[j].oSpan14}</span>
								<del>${arr2[j].oDe14}</del>
							</li>
							<li>
								<a href="">
									<img src="${arr2[j].img15}" alt="" />
								</a>
								<span>${arr2[j].oDe15}</span>
								<del>${arr2[j].oDe15}</del>
							</li>
						</ul>
					</div>`).appendTo('.det_con')
						}
					}
				}
			})
			
			
			/***********详情2********/
			
			
			$.ajax({
				type:'get',
				url:'../data/list4.json',
				success:function(arr){
					for(var i = 0; i < arr.length; i++){
						var arr2 = arr[i].child;
						for(var j = 0; j < arr2.length; j++){
							$(`<div class="list_divq">
						<ul class='list_ul2'>
							<li>
								<a href="">
									<img src="${arr2[j].img16}" alt="" />
								</a>
								<span>${arr2[j].oDe16}</span>
								<del>${arr2[j].oDe16}</del>
							</li>
							<li>
								<a href="">
									<img src="${arr2[j].img17}" alt="" />
								</a>
								<span>${arr2[j].oDe17}</span>
								<del>${arr2[j].oDe17}</del>
							</li>
							<li>
								<a href="">
									<img src="${arr2[j].img18}" alt="" />
								</a>
								<span>${arr2[j].oDe18}</span>
								<del>${arr2[j].oDe18}</del>
							</li>
							<li>
								<a href="">
									<img src="${arr2[j].img19}" alt="" />
								</a>
								<span>${arr2[j].oDe19}</span>
								<del>${arr2[j].oDe19}</del>
							</li>
							<li>
								<a href="">
									<img src="${arr2[j].img20}" alt="" />
								</a>
								<span>${arr2[j].oDe20}</span>
								<del>${arr2[j].oDe20}</del>
							</li>
						</ul>
					</div>`).appendTo('.det_con')
						}
					}
				}
			})
			
			
			
			
			
			/*******链接***********/
			
			
			
			
			
			
			
			
		})
		
		
		
		
		
		
		
		
		
	}
	return{
		main:main
	}
})




