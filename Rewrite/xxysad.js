/*
小小影视去广告

https:\/\/.*\..*\.com\/(vod\/reqplay\/|ucp/index|getGlobalData) url script-response-body https://raw.githubusercontent.com/lvyazi/quanx/main/Rewrite/xxysad.js

*/


let obj = JSON.parse($response.body);
delete obj.data.adrows
delete obj.data.iOS_adgroups
$done({body: JSON.stringify(obj)});
