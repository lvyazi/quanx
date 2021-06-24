/*

#随便写这就完了如果你在同一个包还要改别的
比如




#圈X重写地址：^https:\/\/mazu.m.qq.com\/



MITM = mazu.m.qq.com


*/



var body = $request.body;



body=body.replace(/a/g,'a').replace(/A/g,'A');

$done({body});
