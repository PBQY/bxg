
	// NProgress.start();

	// NProgress.done();

	// $('.navs ul').prev('a').on('click', function () {
	// 	$(this).next().slideToggle();
	// });

  //如果当前页面不是登录页面，则要判断是否登录？如果没有登录则要跳转到登录页面进行登录
  if(!$.cookie('PHPSESSID') && location.pathname!='/login'){
    //跳转到登录页面
    window.location.href = '/login';
    // console.log(1232);
  }
  //在进行这个操作之前必须先引入jqery.cookie.js



//   // 渲染模板，除了登录页面，其他页面都要渲染
//  if(location.pathname!='/login'&& location.pathname !='/dashboard/login'&&location.pathname!='/views/dashboard/login'){
//     var html = template('avatar',JSON.parse($.cookie('userInfo')));
//     console.log(html);
//        console.log(1232);
//     $('.aside .profile').html(html);
//   }


	if(location.pathname!='/login'&& location.pathname !='/dashboard/login'&&location.pathname!='/views/dashboard/login'){  // 除主页面之外，其它的页面都需要渲染头像和用户名

		// var result = JSON.parse($.cookie('userInfo'));
	// console.log(typeof result)
	// var htmlStr =  template('tpl_asdide',result);
	//  console.log(123);
			var htmlStr =  template('avatar',JSON.parse($.cookie('userInfo')));
        console.log(htmlStr);
       
			$('.aside .profile').html(htmlStr);
	}
	