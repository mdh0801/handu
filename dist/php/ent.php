<?php 
	// 设置编码方式
	header("Content-type:text/html;charset=utf-8");

	//post提交过来的数据提取
	$email = $_POST['email'];
	$password = $_POST['password'];

	//少用户是否重名的验证

	//1、链接数据库
	$link = mysql_connect('localhost', 'root', 'root');
	//2、判断是否链接成功
	if(!$link){
		echo '数据库链接失败';
		exit; //退出
	}

	//3、设置字符集
	mysql_set_charset('utf8');

	//4、选择用哪个数据库
	mysql_select_db('1803');

	$time = time();

	//5、准备sql语句
	$sql = "select * from xmb where email='{$email}'";
	// echo $sql;

	//6、发送sql语句
	//$res = mysql_query($sql);

	$res = mysql_query($sql);

		//echo $res;
     $result = mysql_fetch_assoc($res);
    // var_dump($result);

	$i = 0;
	$arr = array();
	while($result = mysql_fetch_assoc($res)){
		$arr[$i] = $result['password']; 
		$i++;
	}
	echo json_encode($arr);
	//var_dump($res);
	// if($res){
	// 	echo "添加成功<a href = 'list.php'>返回首页</a>";
	// }else{
	// 	echo '添加失败';
	// 	exit;
	// }
	 mysql_close($link);
 ?>