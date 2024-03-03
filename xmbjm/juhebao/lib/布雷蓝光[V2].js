var rule = {
	title: '布雷蓝光[V2]', // csp_AppYsV2
	host: 'https://appto-v3-1251970844.cos.ap-chongqing.myqcloud.com/accredits/68.json',
	hostJs:'print(HOST);let html=request(HOST,{headers:{"User-Agent":"Dart/3.0 (dart:io)"}});let src = JSON.parse(html).domain;print(src);HOST=src',
	homeUrl:'/api.php/app/index_video',
	// url: '/api.php/app/video?tid=fyclass&class=&area=&lang=&year=&limit=18&pg=fypage',
	url: '/api.php/app/video?tid=fyclassfyfilter&limit=18&pg=fypage',
	filter_url:'&class={{fl.class}}&area={{fl.area}}&lang={{fl.lang}}&year={{fl.year}}',
	filter: {
		"1":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"爱情","v":"爱情"},{"n":"剧情","v":"剧情"},{"n":"喜剧","v":"喜剧"},{"n":"家庭","v":"家庭"},{"n":"伦理","v":"伦理"},{"n":"文艺","v":"文艺"},{"n":"音乐","v":"音乐"},{"n":"歌舞","v":"歌舞"},{"n":"动漫","v":"动漫"},{"n":"西部","v":"西部"},{"n":"武侠","v":"武侠"},{"n":"古装","v":"古装"},{"n":"动作","v":"动作"},{"n":"恐怖","v":"恐怖"},{"n":"惊悚","v":"惊悚"},{"n":"冒险","v":"冒险"},{"n":"犯罪","v":"犯罪"},{"n":"悬疑","v":"悬疑"},{"n":"记录","v":"记录"},{"n":"战争","v":"战争"},{"n":"历史","v":"历史"},{"n":"传记","v":"传记"},{"n":"体育","v":"体育"},{"n":"科幻","v":"科幻"},{"n":"魔幻","v":"魔幻"},{"n":"奇幻片","v":"奇幻片"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"内地","v":"内地"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"美国","v":"美国"},{"n":"法国","v":"法国"},{"n":"英国","v":"英国"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"德国","v":"德国"},{"n":"泰国","v":"泰国"},{"n":"印度","v":"印度"},{"n":"意大利","v":"意大利"},{"n":"西班牙","v":"西班牙"},{"n":"加拿大","v":"加拿大"},{"n":"其他","v":"其他"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"闽南语","v":"闽南语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"法语","v":"法语"},{"n":"德语","v":"德语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"},{"n":"1999","v":"1999"},{"n":"1998","v":"1998"},{"n":"1997","v":"1997"},{"n":"1996","v":"1996"},{"n":"1995","v":"1995"},{"n":"1994","v":"1994"},{"n":"1993","v":"1993"},{"n":"1992","v":"1992"},{"n":"1991","v":"1991"},{"n":"1990","v":"1990"}]}],
		"2":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"古装","v":"古装"},{"n":"战争","v":"战争"},{"n":"偶像","v":"偶像"},{"n":"喜剧","v":"喜剧"},{"n":"家庭","v":"家庭"},{"n":"犯罪","v":"犯罪"},{"n":"动作","v":"动作"},{"n":"奇幻","v":"奇幻"},{"n":"剧情","v":"剧情"},{"n":"历史","v":"历史"},{"n":"经典","v":"经典"},{"n":"乡村","v":"乡村"},{"n":"情景","v":"情景"},{"n":"商战","v":"商战"},{"n":"网剧","v":"网剧"},{"n":"其他","v":"其他"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"内地","v":"内地"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"新加坡","v":"新加坡"},{"n":"印度","v":"印度"},{"n":"泰国","v":"泰国"},{"n":"其他","v":"其他"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"闽南语","v":"闽南语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"泰语","v":"泰语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"},{"n":"1999","v":"1999"},{"n":"1998","v":"1998"},{"n":"1997","v":"1997"},{"n":"1996","v":"1996"},{"n":"1995","v":"1995"},{"n":"1994","v":"1994"},{"n":"1993","v":"1993"},{"n":"1992","v":"1992"},{"n":"1991","v":"1991"},{"n":"1990","v":"1990"}]}],
		"3":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"选秀","v":"选秀"},{"n":"情感","v":"情感"},{"n":"访谈","v":"访谈"},{"n":"旅游","v":"旅游"},{"n":"音乐","v":"音乐"},{"n":"美食","v":"美食"},{"n":"纪实","v":"纪实"},{"n":"曲艺","v":"曲艺"},{"n":"生活","v":"生活"},{"n":"游戏互动","v":"游戏互动"},{"n":"财经","v":"财经"},{"n":"求职","v":"求职"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"内地","v":"内地"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"欧美","v":"欧美"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"闽南语","v":"闽南语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"},{"n":"1999","v":"1999"},{"n":"1998","v":"1998"},{"n":"1997","v":"1997"},{"n":"1996","v":"1996"},{"n":"1995","v":"1995"},{"n":"1994","v":"1994"},{"n":"1993","v":"1993"},{"n":"1992","v":"1992"},{"n":"1991","v":"1991"},{"n":"1990","v":"1990"}]}],
		"4":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"科幻","v":"科幻"},{"n":"热血","v":"热血"},{"n":"推理","v":"推理"},{"n":"搞笑","v":"搞笑"},{"n":"冒险","v":"冒险"},{"n":"校园","v":"校园"},{"n":"动作","v":"动作"},{"n":"机战","v":"机战"},{"n":"运动","v":"运动"},{"n":"战争","v":"战争"},{"n":"少年","v":"少年"},{"n":"少女","v":"少女"},{"n":"社会","v":"社会"},{"n":"原创","v":"原创"},{"n":"亲子","v":"亲子"},{"n":"益智","v":"益智"},{"n":"励志","v":"励志"},{"n":"其他","v":"其他"},{"n":"萝莉","v":"萝莉"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"内地","v":"内地"},{"n":"日本","v":"日本"},{"n":"欧美","v":"欧美"},{"n":"其他","v":"其他"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"闽南语","v":"闽南语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"},{"n":"1999","v":"1999"},{"n":"1998","v":"1998"},{"n":"1997","v":"1997"},{"n":"1996","v":"1996"},{"n":"1995","v":"1995"},{"n":"1994","v":"1994"},{"n":"1993","v":"1993"},{"n":"1992","v":"1992"},{"n":"1991","v":"1991"},{"n":"1990","v":"1990"}]}],
		"5":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"爱情","v":"爱情"},{"n":"剧情","v":"剧情"},{"n":"喜剧","v":"喜剧"},{"n":"家庭","v":"家庭"},{"n":"科幻","v":"科幻"},{"n":"犯罪","v":"犯罪"},{"n":"悬疑","v":"悬疑"},{"n":"西部","v":"西部"},{"n":"音乐","v":"音乐"},{"n":"歌舞","v":"歌舞"},{"n":"武侠","v":"武侠"},{"n":"古装","v":"古装"},{"n":"动作","v":"动作"},{"n":"恐怖","v":"恐怖"},{"n":"惊悚","v":"惊悚"},{"n":"冒险","v":"冒险"},{"n":"记录","v":"记录"},{"n":"战争","v":"战争"},{"n":"历史","v":"历史"},{"n":"传记","v":"传记"},{"n":"体育","v":"体育"},{"n":"魔幻","v":"魔幻"},{"n":"奇幻","v":"奇幻"},{"n":"伦理","v":"伦理"},{"n":"文艺","v":"文艺"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"美国","v":"美国"},{"n":"英国","v":"英国"},{"n":"西班牙","v":"西班牙"},{"n":"葡萄牙","v":"葡萄牙"},{"n":"意大利","v":"意大利"},{"n":"德国","v":"德国"},{"n":"其他","v":"其他"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"英语","v":"英语"},{"n":"法语","v":"法语"},{"n":"德语","v":"德语"},{"n":"葡萄牙语","v":"葡萄牙语"},{"n":"意大利语","v":"意大利语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"},{"n":"1999","v":"1999"},{"n":"1998","v":"1998"},{"n":"1997","v":"1997"},{"n":"1996","v":"1996"},{"n":"1995","v":"1995"},{"n":"1994","v":"1994"},{"n":"1993","v":"1993"},{"n":"1992","v":"1992"},{"n":"1991","v":"1991"},{"n":"1990","v":"1990"}]}],
		"21":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"爱情","v":"爱情"},{"n":"剧情","v":"剧情"},{"n":"喜剧","v":"喜剧"},{"n":"家庭","v":"家庭"},{"n":"科幻","v":"科幻"},{"n":"犯罪","v":"犯罪"},{"n":"悬疑","v":"悬疑"},{"n":"西部","v":"西部"},{"n":"音乐","v":"音乐"},{"n":"歌舞","v":"歌舞"},{"n":"武侠","v":"武侠"},{"n":"古装","v":"古装"},{"n":"动作","v":"动作"},{"n":"恐怖","v":"恐怖"},{"n":"惊悚","v":"惊悚"},{"n":"冒险","v":"冒险"},{"n":"记录","v":"记录"},{"n":"战争","v":"战争"},{"n":"历史","v":"历史"},{"n":"传记","v":"传记"},{"n":"体育","v":"体育"},{"n":"魔幻","v":"魔幻"},{"n":"奇幻","v":"奇幻"},{"n":"伦理","v":"伦理"},{"n":"文艺","v":"文艺"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"日语","v":"日语"},{"n":"韩语","v":"韩语"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"},{"n":"1999","v":"1999"},{"n":"1998","v":"1998"},{"n":"1997","v":"1997"},{"n":"1996","v":"1996"},{"n":"1995","v":"1995"},{"n":"1994","v":"1994"},{"n":"1993","v":"1993"},{"n":"1992","v":"1992"},{"n":"1991","v":"1991"},{"n":"1990","v":"1990"}]}],
		"22":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"爱情","v":"爱情"},{"n":"剧情","v":"剧情"},{"n":"喜剧","v":"喜剧"},{"n":"家庭","v":"家庭"},{"n":"伦理","v":"伦理"},{"n":"文艺","v":"文艺"},{"n":"音乐","v":"音乐"},{"n":"歌舞","v":"歌舞"},{"n":"动漫","v":"动漫"},{"n":"西部","v":"西部"},{"n":"武侠","v":"武侠"},{"n":"古装","v":"古装"},{"n":"动作","v":"动作"},{"n":"恐怖","v":"恐怖"},{"n":"惊悚","v":"惊悚"},{"n":"冒险","v":"冒险"},{"n":"犯罪","v":"犯罪"},{"n":"悬疑","v":"悬疑"},{"n":"记录","v":"记录"},{"n":"战争","v":"战争"},{"n":"历史","v":"历史"},{"n":"传记","v":"传记"},{"n":"体育","v":"体育"},{"n":"科幻","v":"科幻"},{"n":"魔幻","v":"魔幻"},{"n":"奇幻片","v":"奇幻片"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"闽南语","v":"闽南语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"法语","v":"法语"},{"n":"德语","v":"德语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"2014","v":"2014"},{"n":"2013","v":"2013"},{"n":"2012","v":"2012"},{"n":"2011","v":"2011"},{"n":"2010","v":"2010"},{"n":"2009","v":"2009"},{"n":"2008","v":"2008"},{"n":"2007","v":"2007"},{"n":"2006","v":"2006"},{"n":"2005","v":"2005"},{"n":"2004","v":"2004"},{"n":"2003","v":"2003"},{"n":"2002","v":"2002"},{"n":"2001","v":"2001"},{"n":"2000","v":"2000"},{"n":"1999","v":"1999"},{"n":"1998","v":"1998"},{"n":"1997","v":"1997"},{"n":"1996","v":"1996"},{"n":"1995","v":"1995"},{"n":"1994","v":"1994"},{"n":"1993","v":"1993"},{"n":"1992","v":"1992"},{"n":"1991","v":"1991"},{"n":"1990","v":"1990"}]}]
	},
	detailUrl:'/api.php/app/video_detail?id=fyid',
	searchUrl: '/api.php/app/search?text=**&pg=fypage',
	searchable: 2,
	quickSearch: 0,
	filterable:1,//是否启用分类筛选,
	headers:{'User-Agent':'Dart/3.0 (dart:io)'},
	timeout:5000,
	class_name:'电影&电视剧&综艺&动漫&欧美剧&日韩剧&港台剧', // 分类筛选 /api.php/app/nav
	class_url:'1&2&3&4&5&21&22',
	play_parse:true,
	lazy:'js:if(/m3u8|mp4/.test(input)){input}else{let purl=request("https://bltv.f3322.net/api/?key=gElnrzlFcwgY1srLhp&url="+input);input={jx:0,url:JSON.parse(purl).url,parse:0}}',
	limit:6,
	推荐:'json:list[1].vlist;*;*;*;*',
	一级:'json:list;vod_name;vod_pic;vod_remarks;vod_id',
	二级:'js:try{let html=request(input);print(html);html=JSON.parse(html);let node=html.data;VOD={vod_id:node["vod_id"],vod_name:node["vod_name"],vod_pic:node["vod_pic"],type_name:node["vod_class"],vod_year:node["vod_year"],vod_area:node["vod_area"],vod_remarks:node["vod_remarks"],vod_actor:node["vod_actor"],vod_director:node["vod_director"],vod_content:node["vod_content"].strip()};let episodes=node.vod_url_with_player;let playMap={};if(typeof play_url==="undefined"){var play_url=""}episodes.forEach(function(ep){let source=ep["name"];if(!playMap.hasOwnProperty(source)){playMap[source]=[]}playMap[source].append(ep["url"])});let playFrom=[];let playList=[];Object.keys(playMap).forEach(function(key){playFrom.append(key);playList.append(playMap[key])});let vod_play_from=playFrom.join("$$$");let vod_play_url=playList.join("$$$");VOD["vod_play_from"]=vod_play_from;VOD["vod_play_url"]=vod_play_url}catch(e){log("获取二级详情页发生错误:"+e.message)}',
	搜索:'*',
}