function configWX(data){
    if(wx){
        wx.config({
            debug:false,
            appId:data.appId,
            timestamp:data.timestamp,
            nonceStr:data.noncestr,
            signature:data.signature,
            jsApiList:['updateAppMessageShareData','updateTimelineShareData']
        })
        
        wx.ready(function(){
            wx.updateAppMessageShareData({ 
                title: '微帮世界-垃圾分类小游戏', // 分享标题
                desc: '垃圾分类，从我做起，一起来学习垃圾分类知识吧！', // 分享描述
                link: 'https://www.weibanglove.com/game/index.html', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: 'https://www.weibanglove.com/game/image/share.png' // 分享图标
            })
        
            wx.updateTimelineShareData({ 
                title: '微帮世界-垃圾分类小游戏', // 分享标题
                link: 'https://www.weibanglove.com/game/index.html', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: 'https://www.weibanglove.com/game/image/share.png' // 分享图标
            })
        })
        
        wx.error(function(){
            console.log('error')
        })
    }
}

var xhr = new XMLHttpRequest()
xhr.open('GET','https://www.weibanglove.com/zhendi_test/open/requestwxsign?requesturl=https://www.weibanglove.com/game/index.html')
xhr.onreadystatechange = function(){
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var res = xhr.response
        var data = JSON.parse(res)
        var data1 = data.data
        console.log(data)
        configWX(data1)
    }
}

xhr.send()

/*fetch('https://www.weibanglove.com/zhendi_test/open/requestwxsign?requesturl=https://www.weibanglove.com/game/index.html',{method:'GET'}).then(function(response){
    if(response.ok){
        return response.json()
    }else{
        throw new Error(response.statusText)
    }
}).then(function(data){
    configWX(data)
}).catch(function(error){console.log(error)})*/