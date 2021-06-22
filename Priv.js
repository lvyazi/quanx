/*

#随便写这就完了如果你在同一个包还要改别的
比如




#圈X重写地址：^https:\/\/priv.igame.qq.com\/SdkApi\/enter.+



MITM = priv.igame.qq.com


*/



var body = $request.body;



body=body.replace(/root":\d,/g,'root":0,');

$done({body});
