/*

#随便写这就完了如果你在同一个包还要改别的
比如




#圈X重写地址：^https:\/\/priv.igame.qq.com\/SdkApi\/enter.+



MITM = priv.igame.qq.com


*/

var body = $response.body;




body=body.replace(/utype":\d,/g,'utype":0,').replace(/result":(.+?),/g,'result":200041002,').replace(/gid":(.+?)/g,'gid":411');


$done({body});
