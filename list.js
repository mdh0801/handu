define(["parabola", "jquery", "jquery-cookie"], function(parabola, $){
	var main6 = function(){
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
			
			
			/***选项卡1**/
			
			$.ajax({
				type:"get",
				url:"../data/lt.json",
				success:function(arr){
					for(var i = 0; i < arr.length; i++){
						var arr2 = arr[i].child;
						for(var j = 0; j < arr2.length; j++){
							$(`<!--图1-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img1}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>￥102</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图2-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img2}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>￥102</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图3-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img3}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>￥102</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图4-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img4}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>￥102</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						
						
						<!--图5-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img5}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>￥102</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图6-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img6}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>￥102</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图7-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img7}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>￥102</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图8-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img8}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>￥102</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						
						
						<!--图9-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img9}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>￥102</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图10-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img10}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>￥102</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图11-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img1}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>￥102</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图12-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img2}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>￥102</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						
						
						<!--图13-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img3}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>￥102</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图14-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img4}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>￥102</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图15-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img5}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>￥102</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图16-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img6}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>￥102</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						
						
						
						<!--图17-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img7}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>￥102</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图18-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img8}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>￥102</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图19-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img9}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>￥102</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图20-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img10}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>￥102</em>
									<del>￥804</del>
								</p>
							</div>
						</div>`).appendTo('#grid_warp1')
				}
						}
					}
					
			});
			
			
			/**选项卡2**/
			$.ajax({
				type:'get',
				url:'../data/lt2.json',
				success:function(arr){
					for(var i = 0; i < arr.length; i++){
						var arr2 = arr[i].child;
						for(var j = 0; j < arr2.length; j++){
							$(`<!--图2-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img1}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan1}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图2-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img2}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan2}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图3-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img3}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan3}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图4-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img4}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan1}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						
						
						<!--图5-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img5}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan4}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图6-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img6}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan4}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图7-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img7}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan8}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图8-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img8}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan3}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						
						
						<!--图9-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img9}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan6}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图10-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img10}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan5}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图11-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img1}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan6}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图12-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img2}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan3}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						
						
						<!--图13-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img3}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan3}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图14-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img4}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan3}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图15-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img5}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>￥102</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图16-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img6}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan4}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						
						
						
						<!--图17-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img7}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan4}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图18-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img8}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan2}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图19-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img9}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan2}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图20-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img10}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan4}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>`).appendTo('#grid_warp2')
				}
						}
					}
				
			})
			
			
			/**选项卡4**/
			$.ajax({
				type:'get',
				url:'../data/lt4.json',
				success:function(arr){
					for(var i = 0; i < arr.length; i++){
						var arr2 = arr[i].child;
						for(var j = 0; j < arr2.length; j++){
							$(`<!--图1-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img1}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan1}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图2-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img2}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan2}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图3-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img3}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan3}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图4-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img4}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan1}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						
						
						<!--图5-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img5}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan4}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图6-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img6}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan4}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图7-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img7}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan8}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图8-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img8}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan3}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						
						
						<!--图9-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img9}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan6}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图10-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img10}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan5}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图11-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img1}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan6}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图12-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img2}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan3}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						
						
						<!--图13-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img3}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan3}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图14-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img4}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan3}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图15-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img5}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>￥102</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图16-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img6}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan4}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						
						
						
						<!--图17-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img7}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan4}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图18-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img8}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan2}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图19-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img9}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan2}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图20-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img10}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan4}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>`).appendTo('#grid_warp3')
				}
						}
					}
				
			})
			
			/**选项卡3**/
			$.ajax({
				type:'get',
				url:'../data/lt3.json',
				success:function(arr){
					for(var i = 0; i < arr.length; i++){
						var arr2 = arr[i].child;
						for(var j = 0; j < arr2.length; j++){
							$(`<!--图1-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img1}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan1}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图2-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img2}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan2}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图3-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img3}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan3}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图4-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img4}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan1}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						
						
						<!--图5-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img5}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan4}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图6-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img6}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan4}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图7-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img7}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan8}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图8-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img8}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan3}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						
						
						<!--图9-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img9}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan6}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图10-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img10}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan5}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图11-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img1}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan6}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图12-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img2}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan3}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						
						
						<!--图13-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img3}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan3}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图14-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img4}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan3}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图15-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img5}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>￥102</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图16-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img6}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan4}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						
						
						
						<!--图17-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img7}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan4}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图18-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img8}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan2}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图19-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img9}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan2}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>
						<!--图20-->
						<div class="produ">
							<div class="produ_iap">
								<div class="produ_img">
									<a href="" class='produ_ia'>
										<img src="${arr2[j].img10}" alt="" />
									</a>
								</div>
								<p class="prodPrice">
									<em>${arr2[j].oSpan4}</em>
									<del>￥804</del>
								</p>
							</div>
						</div>`).appendTo('#grid_warp4')
				}
						}
					}
				
			})
			
			
			
			/****选卡1***/
			$('#grid_warp1').on('mouseenter','.produ',function(event){
				var index = $(this).index();
				console.log($('#grid_warp1 .produ').length)
				$('.produ_iap').removeClass('ip_shpw')
				$('.produ_iap').eq(index).addClass('ip_shpw')
				
			})
			$('#grid_warp1').on('mouseleave','.produ',function(event){
				var index = $(this).index();
				$('.produ_iap').eq(index).removeClass('ip_shpw')
				
			})
			
			
			
			/***选卡2***/
			$('#grid_warp2').on('mouseenter','.produ',function(event){
				var index = $(this).index();
				//console.log($('#grid_warp2 .produ').length)
				$('#grid_warp2 .produ .produ_iap').removeClass('ip_shpw')
				$('#grid_warp2 .produ .produ_iap').eq(index).addClass('ip_shpw')
				
			})
			$('#grid_warp1').on('mouseleave','.produ',function(event){
				var index = $(this).index();
				$('#grid_warp2 .produ .produ_iap').eq(index).removeClass('ip_shpw')
				
			})
			
			/***选卡3***/
			$('#grid_warp3').on('mouseenter','.produ',function(event){
				var index = $(this).index();
				//console.log($('#grid_warp2 .produ').length)
				$('#grid_warp3 .produ .produ_iap').removeClass('ip_shpw')
				$('#grid_warp3 .produ .produ_iap').eq(index).addClass('ip_shpw')
				
			})
			$('#grid_warp3').on('mouseleave','.produ',function(event){
				var index = $(this).index();
				$('#grid_warp3 .produ .produ_iap').eq(index).removeClass('ip_shpw')
				
			})
			
			
			/***选卡4***/
			$('#grid_warp4').on('mouseenter','.produ',function(event){
				var index = $(this).index();
				//console.log($('#grid_warp2 .produ').length)
				$('#grid_warp4 .produ .produ_iap').removeClass('ip_shpw')
				$('#grid_warp4 .produ .produ_iap').eq(index).addClass('ip_shpw')
				
			})
			$('#grid_warp4').on('mouseleave','.produ',function(event){
				var index = $(this).index();
				$('#grid_warp4 .produ .produ_iap').eq(index).removeClass('ip_shpw')
				
			})
			
			
			
			
			
			
			
			
			
			/*****选项卡切换底部*****/
			$('.page').click(function(){
				var index = $(this).index();
				$('.p_div span').removeClass('sp_sw');
				$('.p_div span').eq(index).addClass('sp_sw');
				$('.page').removeClass('pa_show');
				$('.page').eq(index).addClass('pa_show')
				$('.gaid_w').eq(0).stop().fadeOut()
				$('.gaid_w').eq(index).stop().fadeIn().siblings('.gaid_w').fadeOut()
			})
			
			/*****选项卡切换顶部*****/
			$('.p_div span').click(function(){
				var index = $(this).index();
				//console.log(index)
				$('.p_div span').removeClass('sp_sw');
				$('.p_div span').eq(index).addClass('sp_sw');
				var str = $('#it1').val();
				var num = Number(str)
				num++;
				console.log(num)
				$('.page').removeClass('pa_show');
				$('.page').eq(index).addClass('pa_show')
				$('.gaid_w').eq(0).stop().fadeOut()
				$('.gaid_w').eq(index).stop().fadeIn().siblings('.gaid_w').fadeOut()
			})
			
			
			
			
			
			
			
			
			
			
			
			
			
		})
		
			
		
	}
	return{
		main6:main6
	}
})