<?php
/*
function is_crawler() {
  $userAgent = strtolower($_SERVER['HTTP_USER_AGENT']);
  $spiders = array(
   // 'Googlebot', // Google 爬虫
    'Baiduspider' // 百度爬虫
    //'Yahoo! Slurp', // 雅虎爬虫
    //'YodaoBot', // 有道爬虫
    //'msnbot' // Bing爬虫
    // 更多爬虫关键字
  );
  foreach ($spiders as $spider) {
    $spider = strtolower($spider);
    if (strpos($userAgent, $spider) !== false) {
								echo("T");
      return true;
    }
  }
		//echo($userAgent);

		 $fp = @fopen('bot.txt','a');
   fwrite($fp,date('Y-m-d H:i:s')."\t".$_SERVER["REMOTE_ADDR"]."\t".$userAgent."\t".'http://'.$_SERVER['SERVER_NAME'].$_SERVER["REQUEST_URI"]."\r\n");
   fclose($fp);


  return false;
}


 is_crawler();
	*/
/*
header('Content-Type: application/json');
//header('Content-Type: text/html;charset=utf-8');
$arr = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);
//   echo json_encode($arr);
//$obj = json_encode{"jsonObj":{"id":"1","name":"lmw"}}	;
$data_json=			json_encode($arr);
echo($data_json);
*/


/*
$ret = array(
    'name' => isset($_POST['name'])? $_POST['name'] : '',
    'gender' => isset($_POST['gender'])? $_POST['gender'] : ''
);
*/



//header('content-type:application:json;charset=utf8');
//header('content-type:application:json');
//header('charset=utf8');


/*
$ip = @file_get_contents("http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js&ip=".$_SERVER["REMOTE_ADDR"]);
echo $ip;
*/
function getip(){
    if (getenv("HTTP_CLIENT_IP") && strcasecmp(getenv("HTTP_CLIENT_IP"), "unknown")) {
        $ip = getenv("HTTP_CLIENT_IP");
    } else if (getenv("HTTP_X_FORWARDED_FOR") && strcasecmp(getenv("HTTP_X_FORWARDED_FOR"), "unknown")) {
        $ip = getenv("HTTP_X_FORWARDED_FOR");
    } else if (getenv("REMOTE_ADDR") && strcasecmp(getenv("REMOTE_ADDR"), "unknown")) {
        $ip = getenv("REMOTE_ADDR");
    } else  if (isset ($_SERVER['REMOTE_ADDR']) && $_SERVER['REMOTE_ADDR'] && strcasecmp($_SERVER['REMOTE_ADDR'], "unknown")) {
        $ip = $_SERVER['REMOTE_ADDR'];
    } else {
        $ip = "unknown";
    }
    return $ip;
}

function getLocation($ip=''){
    empty($ip) && $ip = getip();
    if($ip=="127.0.0.1") return "本机地址";
    $api = "http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json&ip=$ip";
    $json = @file_get_contents($api);//调用新浪IP地址库
    $arr = json_decode($json,true);//解析json
    $country = $arr['country']; //取得国家
    $province = $arr['province'];//获取省份
    $city = $arr['city']; //取得城市

    if((string)$country == "中国"){
        if((string)($province) != (string)$city){
            $_location = $province.$city;
        }else{
            $_location = $country.$city;
        }
    }else{
        $_location = $country;
    }

    return $_location;
}

header('Content-Type:text/javascript;charset=utf-8');
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers:x-requested-with,content-type');


$ip_location =getLocation();
if (strpos($ip_location, "重庆")!== false) {
    echo('1');
}else{
    echo('0');
}


?>


