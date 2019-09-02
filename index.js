var body = document.body
var Height = parseInt(window.getComputedStyle(body).height)
var Width = parseInt(window.getComputedStyle(body).width)
//var length = (Height/100)*70 - (Width/100)*75
var length0 = (Height/100)*30
var length3 = (Height/100)*40
var length4 = (Height/100)*70
//var length2 = (Height/100)*80 - (Width/100)*27


var pao = document.getElementById('pao')
var button = document.getElementById('start')
var gamePage = document.querySelector('.game')
var firstPage = document.querySelector('.first')
var toDetail = document.querySelector('.to-detail')
var detail = document.querySelector('.detail')
var again = document.getElementById('one-more')
var pao_container = document.querySelector('.pao-container')
var dan = document.querySelector('.dan')
var danContainer = document.querySelector('.dan-container')
var score= document.getElementById('score')
var exitButton = document.querySelector('.exit')
var game = document.querySelector('.game')

var dryGrabage='其他垃圾' , wetGrabage='厨余垃圾',posGrabage='有害垃圾',recycleG='可回收垃圾';
var compareObj = {
    firsts: '其他垃圾',
    second: '厨余垃圾',
    third: '可回收垃圾',
    forth: '有害垃圾'
}
var data={
    current: 0,
    garbage:[
        {name:'铅笔',type:dryGrabage,img:'qianbi'},{name:'菜叶',type:wetGrabage,img:'caiye'},{name:'塑料瓶',type:recycleG,img:'suliaoping'},{name:'漆捅',type:posGrabage,img:'youqitong'},{name:'葱',type:wetGrabage,img:'cong'},{name:'坏马桶',type:dryGrabage,img:'huaimatong'},{name:'罐头瓶',type:recycleG,img:'guantouping'},{name:'电池',type:posGrabage,img:'dianchi'},
        {name:'玻璃瓶',type:recycleG,img:'boliping'},{name:'打火机',type:posGrabage,img:'dahuoji'},{name:'番茄酱',type:wetGrabage,img:'fanqiejiang'},{name:'贝壳',type:dryGrabage,img:'beike'},{name:'易拉罐',type:recycleG,img:'yilaguan'},{name:'创可贴',type:posGrabage,img:'chuangketie'},{name:'化妆刷',type:dryGrabage,img:'huazhuangshua'},{name:'报纸',type:recycleG,img:'baozhi'},
        {name:'西瓜皮',type:wetGrabage,img:'xiguapi'},{name:'旧书包',type:recycleG,img:'jiushubao'},{name:'调色板',type:posGrabage,img:'tiaoseban'},{name:'海绵',type:dryGrabage,img:'haimian'},{name:'油漆',type:posGrabage,img:'youqi'},
        {name:'鱼骨',type:wetGrabage,img:'yugu'},{name:'花生壳',type:dryGrabage,img:'huashengke'},{name:'旧鞋子',type:recycleG,img:'jiuxiezi'},{name:'过期胶囊药物',type:posGrabage,img:'jiaonang'},{name:'甘蔗',type:wetGrabage,img:'ganzhe'},{name:'牛奶盒',type:recycleG,img:'niunaihe'},{name:'体温计',type:posGrabage,img:'tiwenji'},
        {name:'玉米',type:wetGrabage,img:'yumi'},{name:'砖块',type:dryGrabage,img:'zhuan'},{name:'旧塑料篮子',type:recycleG,img:'lanzi'},{name:'过期药片',type:posGrabage,img:'yaopian'},{name:'骨头',type:wetGrabage,img:'gutou'},{name:'卫生纸',type:dryGrabage,img:'weishengzhi'},{name:'旧玩偶',type:recycleG,img:'wanou'},{name:'荧光灯',type:posGrabage,img:'yingguangdeng'},
        {name:'篮球',type:dryGrabage,img:'lanqiu'},{name:'玻璃壶',type:recycleG,img:'bolihu'},{name:'蛋糕',type:wetGrabage,img:'dangao'},{name:'核桃',type:dryGrabage,img:'hetao'},{name:'军用棉签',type:posGrabage,img:'mianqian'},
        {name:'面包',type:wetGrabage,img:'mianbao'},{name:'垃圾桶',type:recycleG,img:'lajitong'},{name:'杀虫剂',type:posGrabage,img:'shachongji'},{name:'草莓',type:wetGrabage,img:'caomei'},{name:'水彩笔',type:posGrabage,img:'shuicaibi'},
        {name:'西红柿',type:wetGrabage,img:'xihongshi'},{name:'陶瓷',type:dryGrabage,img:'taoci'},{name:'牙刷',type:recycleG,img:'yashua'},{name:'农药瓶',type:posGrabage,img:'nongyaoping'},{name:'梨',type:wetGrabage,img:'li'},{name:'塑料梳子',type:recycleG,img:'suliaoshuzi'},{name:'医用纱布',type:posGrabage,img:'yiyongshabu'},
        {name:'蟹壳',type:wetGrabage,img:'xieke'},{name:'旧帽子',type:recycleG,img:'maozi'},{name:'口服液瓶',type:posGrabage,img:'koufuyeping'},{name:'香蕉皮',type:wetGrabage,img:'xiangjiaopi'},{name:'木质梳子',type:dryGrabage,img:'mushuzi'},{name:'旧夹子',type:recycleG,img:'jiujiazi'},{name:'香水瓶',type:posGrabage,img:'xiangshuiping'},
        {name:'辣椒',type:wetGrabage,img:'lajiao'},{name:'废锁头',type:recycleG,img:'suotou'},{name:'荧光棒',type:posGrabage,img:'yingguangbang'},{name:'巧克力',type:wetGrabage,img:'qiaokeli'},{name:'烟蒂',type:dryGrabage,img:'yandi'},{name:'牙膏皮',type:recycleG,img:'yagao'},
        {name:'茄子',type:wetGrabage,img:'qiezi'},{name:'染发剂',type:posGrabage,img:'ranfaji'},{name:'豌豆皮',type:wetGrabage,img:'wandou'},{name:'湿垃圾袋',type:dryGrabage,img:'lajidai'},
        {name:'苹果',type:wetGrabage,img:'pingguo'},{name:'瓦片',type:dryGrabage,img:'wapian'},{name:'纸盒',type:recycleG,img:'zhihe'},{name:'废弃灯泡',type:posGrabage,img:'dengpao'},{name:'扫把',type:dryGrabage,img:'saoba'},{name:'旧玩具',type:recycleG,img:'wanju'},{name:'煤气罐',type:posGrabage,img:'meiqiguan'},
        {name:'旧浴缸',type:dryGrabage,img:'yugang'},{name:'医用手套',type:posGrabage,img:'yiyongshoutao'},{name:'餐巾纸',type:dryGrabage,img:'canjinzhi'},{name:'书本',type:recycleG,img:'shuben'},{name:'充电电池',type:posGrabage,img:'chongdiandianchi'},
        {name:'剩饭剩菜',type:wetGrabage,img:'shengfan'},{name:'卫生间用纸',type:dryGrabage,img:'weishengzhi'},{name:'信封',type:recycleG,img:'xinfeng'},{name:'花卉',type:wetGrabage,img:'huahui'},{name:'纸尿裤',type:dryGrabage,img:'zhiniaoku'},
        {name:'宠物饲料',type:wetGrabage,img:'siliao'},{name:'铅笔',type:dryGrabage,img:'qianbi'},{name:'油桶',type:recycleG,img:'youtong'},{name:'节能灯',type:posGrabage,img:'deng'},{name:'毛发',type:dryGrabage,img:'maofa'},{name:'食品保鲜盒',type:recycleG,img:'baoxian'},{name:'药品包装',type:posGrabage,img:'yaopinbaozhuang'},
        {name:'药品包装',type:posGrabage,img:'yaopinbaozhuang'},{name:'眼镜',type:dryGrabage,img:'yanjing'},{name:'酒瓶',type:recycleG,img:'jiuping'},{name:'过期胶囊药品',type:posGrabage,img:'jiaonang'},{name:'鸡肉',type:wetGrabage,img:'jirou'},{name:'玻璃杯',type:recycleG,img:'bolibei'},{name:'糕饼',type:wetGrabage,img:'gaobing'},{name:'玻璃放大镜',type:recycleG,img:'fangdajing'},
        {name:'洗甲水',type:posGrabage,img:'xijiashui'},{name:'花瓣',type:wetGrabage,img:'huaban'},{name:'过期指甲油',type:posGrabage,img:'zhijiayou'},{name:'水银体温计',type:posGrabage,img:'tiwenji'},{name:'干果仁',type:wetGrabage,img:'ganguoren'},{name:'螺丝刀',type:recycleG,img:'luosidao'},{name:'刀',type:recycleG,img:'dao'},{name:'蔬菜',type:wetGrabage,img:'caiye'},
        {name:'杀虫喷雾',type:posGrabage,img:'shachongpenwu'},{name:'指甲钳',type:recycleG,img:'zhijiaqian'},{name:'废油漆桶',type:posGrabage,img:'youqitong'},{name:'火锅汤底',type:wetGrabage,img:'huoguo'},{name:'污损塑料',type:dryGrabage,img:'wusunsuliao'},{name:'床单',type:recycleG,img:'chuangdan'},{name:'毛绒玩具',type:recycleG,img:'wanou'},{name:'枕头',type:recycleG,img:'zhentou'},
        {name:'猪肉',type:wetGrabage,img:'zhurou'},{name:'旧报纸',type:recycleG,img:'jiubaozhi'},{name:'破碎陶瓷制品',type:dryGrabage,img:'taoci'}
    ],
    result:[],
    victory:0,
    indexArray:[]
}

var shareIndex = 0;

function forward(){
    var node=document.getElementById('current')
    if(node){
        var bottom=getComputedStyle(node).bottom
        node.style.bottom=parseInt(bottom)+10+'px'
        if (parseInt(bottom) < (length0)) {
            window.requestAnimationFrame(forward);
        }else{
            if((parseInt(bottom)>=(length0))&&(parseInt(bottom)<=(length0 + 10))){
                if(compareObj[node.$type]!==garbage.type){garbage.runAway()}
                upDateResult(node,garbage)
                window.requestAnimationFrame(forward)
            }else{
                if(parseInt(bottom)>=length3&&parseInt(bottom)<=(length3 + 10)){
                    if(compareObj[node.$type]===garbage.type){
                        garbage.bomb();
                        pao_container.removeChild(node);
                        upDatingCurrent()
                        if(data.current>9){
                            document.getElementById('count1').innerHTML=data.victory
                            show(toDetail)
                        }else{
                            setTimeout(createGrabage,2000)
                        }
                    }else{
                        window.requestAnimationFrame(forward)
                    }
                }else{
                    window.requestAnimationFrame(forward)
                    if(parseInt(bottom)>length4){
                        pao_container.removeChild(node)
                        upDatingCurrent()
                        if(data.current>9){
                            document.getElementById('count1').innerHTML=data.victory
                            show(toDetail)
                        }else{
                            setTimeout(createGrabage,2000)
                        }
                    }
                }
            }
        }
    }
}

function hidden (el){
   el.classList.add('disapper')
}

function show (el) {
    el.classList.remove('disapper')
}

button.addEventListener('click',function(){
    bgm.play()
    hidden(firstPage);
    show(gamePage);
    createGrabage()
})

toDetail.addEventListener('click',function(){
    hidden(firstPage)
    hidden(gamePage)
    show(detail)
    showshare(sharearrow)
    showResult()
    hidden(toDetail)
})

var first = document.createElement('img');first.src='./image/firsts.png';
var second = document.createElement('img');second.src='./image/second.png';
var third = document.createElement('img');third.src='./image/third.png';
var forth = document.createElement('img');forth.src='./image/forth.png';

var timer = null
var time = 0 

/*danContainer.addEventListener('click',function(event){
    timer&&clearTimeout(timer)
    timer = setTimeout(function(){hander(event)},1000)
})*/

function danhandler (event){
    var current = document.getElementById('current')
     if(current){
         if(!current.$flying){ 
             if(event.target.className==='dan'){
                 pao_container.removeChild(current)
                 var node = document.createElement('img')
                 node.src = './image/'+event.target.id+'.png'
                 node.id='current'
                 node.className='dan'
                 node.classList.add(event.target.id)
                 node.$type = event.target.id
                 node.$flying = false
                 pao_container.append(node)
                 upBullet.play()
             }
         }
     }else{
         if(event.target.className==='dan'){
             var node = document.createElement('img')
             node.src = './image/'+event.target.id+'.png'
             node.id='current'
             node.className='dan'
             node.classList.add(event.target.id)
             node.$type = event.target.id
             node.$flying = false
             pao_container.append(node)
             upBullet.play()
         }
     }   
 }

danContainer.addEventListener('touchend',function(event){
    if(time === 0){
        time = new Date().getTime();
        danhandler(event)
    }else{
        if(new Date().getTime()-time<800){
            var repeat = document.getElementById('current')
            if(repeat){
                shootHandler(event)
            }else{
                danhandler(event);
                shootHandler(event)
            }
                
        }else{
            time = new Date().getTime();
            danhandler(event)
        }
    }
    
})

function shootHandler () {
    var current = document.getElementById('current')
    var pinggai0 = document.querySelector('.bomb')
    var pinggai1 = document.querySelector('.escape0')
    var pinggai2 = document.querySelector('.escape1')
    var pinggai3 = document.querySelector('.escape2')
    var pinggai4 = document.querySelector('.escape3')
    var pinggai5 = document.querySelector('.escape4')
    var pinggai = document.querySelector('.pinggai')

    if(current){
        if(!current.$flying && !pinggai0 && !pinggai1 && !!pinggai &&!pinggai2 && !pinggai3 && !pinggai4 && !pinggai5 ){
            current.$flying = true
            shooting.play();
            window.requestAnimationFrame(forward)
        }
    }
}

pao_container.addEventListener('click',shootHandler)

/*shoot.addEventListener('click',function(){
        var current = document.getElementById('current')
        var pinggai0 = document.querySelector('.bomb')
        var pinggai1 = document.querySelector('.escape')
        var pinggai = document.querySelector('.pinggai')

        if(current){
            if(!current.$flying && !pinggai0 && !pinggai1 && pinggai ){
                current.$flying = true
                window.requestAnimationFrame(forward)
            }
        } 
})*/

function upDatingCurrent (){
        data.current++;
        score.innerText=data.current
}

function Garbage(name,type,img) {
    this.name=name
    this.type=type
    this.img = img
}

Garbage.prototype.render=function(){
    var node=document.createElement('div')
    node.className='pinggai'
    node.name=this.name
    node.type=this.type
    node.innerHTML="<div class='garb'>"+this.name+'</div>'
    node.style.backgroundImage = 'url(./image/'+this.img+'.png)'
    game.appendChild(node)
}

Garbage.prototype.bomb=function(){
    var garbage=document.querySelector('.pinggai')
    garbage.classList.add('bomb')
    bombBGM.play()
    setTimeout(function(){game.removeChild(garbage)},2000)
}

Garbage.prototype.runAway=function(){
    var garbage=document.querySelector('.pinggai')
    var class_n = 'escape' + Math.floor(Math.random(0,1)*5)
    garbage.classList.add(class_n)
    setTimeout(function(){game.removeChild(garbage)},2000)
}

var garbage=null

function createGrabage(){
    var index =  parseInt(Math.random(0,1)*121)

    function findaindex (){
        if(data.indexArray.includes(index)){
            index = parseInt(Math.random(0,1)*121)
            findaindex()
        }else{
            data.indexArray.push(index)
        }
    }
    
    if(data.indexArray.length===0){
        data.indexArray.push(index)
    }else{
        findaindex()
    }
    garbage = new Garbage(data.garbage[index].name,data.garbage[index].type,data.garbage[index].img)
    garbage.render()
}

function reset(){
    data.current=0;
    score.innerText=data.current
    data.victory=0
    data.result=[]
    data.indexArray=[]
    var sheng = document.getElementById('current');
    sheng?pao_container.removeChild(sheng):true 
    var lajisheng = document.querySelector('.pinggai');
    lajisheng?game.removeChild(lajisheng):true
}

var adpage = document.querySelector('.ad')
var turnoff = document.querySelector('.turnoff')
var linkto = document.querySelector('.alink')

linkto.addEventListener('click',function(event){
    if(event.target===turnoff){
        event.preventDefault()
    }
})

again.addEventListener('click',function(){
    hidden(detail)
    reset()
    show(game)
    if((shareIndex-1)%2===0){
        show(adpage)
        countDown()
    }
    createGrabage()
})

function countDown () {
    var numm = 3
    var cd = setInterval(function(){
        numm--
        turnoff.innerText = '关闭('+ numm +')'
        if(numm === 0){
         clearInterval(cd)
         turnoff.innerText = '关闭'
            turnoff.addEventListener('click',nomi)
            adpage.addEventListener('click',nomi) 
        }
    },1000)
}

function nomi (event){
    if(event.target===this){
        event.stopPropagation()
        hidden(adpage)
        this.removeEventListener('click',nomi)
    }
    
}

function upDateResult(node,garbage){
    if((!!node)&&(!!garbage)){
    var obj={name:garbage.name,type:garbage.type}
    if(compareObj[node.$type]===garbage.type){
        obj.right = 0
        data.victory++
    }else{
        obj.right = compareObj[node.$type]
    }
    data.result.push(obj)
    } 
}

function showResult(){
    var table=document.querySelector('tbody')
    for(var i=0;i<10;i++){
            var node = table.children[i].children
            node[0].innerHTML=data.result[i].name
            node[1].innerHTML=data.result[i].type
            if(data.result[i].right===0){
                node[2].className='corrent'
                node[2].innerHTML='____'
            }else{
                node[2].className='wrong'
                node[2].innerText=data.result[i].right
            }
    }
    document.getElementById('count').src='./image/'+data.victory+'.png'
}

//引导页运行

var c_garbage1 = new Garbage(data.garbage[0].name,data.garbage[0].type,data.garbage[0].img)
var c_garbage2 = new Garbage(data.garbage[1].name,data.garbage[1].type,data.garbage[1].img)
var guidepage = document.querySelector('.guidepage')
var c_paocontainer = document.querySelector('.c-paocontainer')
var guideEnding = document.querySelector('.guideEnding')
var skip = document.querySelector('.skip')

skip.addEventListener('click',function(){
    var garbage = document.querySelector('.pinggai')
    garbage?guidepage.removeChild(garbage):true
    var current = document.getElementById('current')
    current?c_paocontainer.removeChild(current):true
    unsee(guideEnding)
    show(game)
    hidden(guidepage)
    createGrabage()
})

var guideButton = document.querySelector('.guidebutton')
guideButton.addEventListener('click',function(){
    bgm.play()
    show(guidepage)
    hidden(firstPage)
    var node=document.createElement('div')
    node.className='pinggai'
    node.name=c_garbage1.name
    node.type=c_garbage1.type
    node.innerHTML="<div class='garb'>"+c_garbage1.name+'</div>'
    node.style.backgroundImage = 'url(./image/' + c_garbage1.img +'.png'
    guidepage.appendChild(node)
})

var g_dan = document.querySelector('.g-dan');
var tt =  0;
var time2 = 0;
var timer2;

function withCircle(el){
    el.classList.add('withCircle')
}

function deleteCircle(el){
    el.classList.remove('withCircle')
}

g_dan.addEventListener('touchend',function(){
    if(!tt){
        unsee(_1)
        deleteCircle(g_dan)
        onsee(_2)
        withCircle(c_paocontainer)
        tt++
    }

    if(time2 === 0){
        time2 = new Date().getTime();
        timer2 = setTimeout(function(){
            var current = document.getElementById('current')
            if(current){
                if(!current.$flying){ 
                    c_paocontainer.removeChild(current)
                    var node = document.createElement('img')
                    node.src = './image/firsts.png'
                    node.id='current'
                    node.className='dan'
                    node.classList.add('firsts')
                    node.$type = 'firsts'
                    node.$flying = false
                    c_paocontainer.append(node)
                }
            }else{  
                var node = document.createElement('img')
                node.src = './image/firsts.png'
                node.id='current'
                node.className='dan'
                node.classList.add('firsts')
                node.$type = 'firsts'
                node.$flying = false
                c_paocontainer.append(node) 
            }
        },800);
    }else{
        if(new Date().getTime()-time2<800){
                clearTimeout(timer2)
                unsee(_4)
                deleteCircle(g_dan)

            var current = document.getElementById('current')
            if(current){
                if(!current.$flying){ 
                    c_paocontainer.removeChild(current)
                    var node = document.createElement('img')
                    node.src = './image/firsts.png'
                    node.id='current'
                    node.className='dan'
                    node.classList.add('firsts')
                    node.$type = 'firsts'
                    node.$flying = false
                    c_paocontainer.append(node)
                }
            }else{  
                var node = document.createElement('img')
                node.src = './image/firsts.png'
                node.id='current'
                node.className='dan'
                node.classList.add('firsts')
                node.$type = 'firsts'
                node.$flying = false
                c_paocontainer.append(node) 
            }

            var current = document.getElementById('current')
            var pinggai0 = document.querySelector('.bomb')
            var pinggai1 = document.querySelector('.escape')
            var pinggai = document.querySelector('.pinggai')

            if(current){
                if(!current.$flying && !pinggai0 && !pinggai1 && pinggai ){
                    current.$flying = true
                    window.requestAnimationFrame(forward2)
                }
            }
        }else{
            time2 = new Date().getTime()
            timer2 = setTimeout(function(){
                var current = document.getElementById('current')
                if(current){
                    if(!current.$flying){ 
                        c_paocontainer.removeChild(current)
                        var node = document.createElement('img')
                        node.src = './image/firsts.png'
                        node.id='current'
                        node.className='dan'
                        node.classList.add('firsts')
                        node.$type = 'firsts'
                        node.$flying = false
                        c_paocontainer.append(node)
                    }
                }else{  
                    var node = document.createElement('img')
                    node.src = './image/firsts.png'
                    node.id='current'
                    node.className='dan'
                    node.classList.add('first')
                    node.$type = 'first'
                    node.$flying = false
                    c_paocontainer.append(node) 
                }
            },800)
        }
    }
    
})

function forward2(){
    var node=document.getElementById('current')
    if(node){
        var bottom=getComputedStyle(node).bottom
        node.style.bottom=parseInt(bottom)+10+'px'
        if (parseInt(bottom) < (length0)) {
            window.requestAnimationFrame(forward2);
        }else{
            if((parseInt(bottom)>=(length0))&&(parseInt(bottom)<=(length0 + 10))){
                var garbage=document.querySelector('.pinggai')
                if(garbage){
                    if(garbage.type !== compareObj[node.$type]){
                        console.log(garbage.type,compareObj[node.$type])
                        garbage.classList.add('escape1')
                        setTimeout(function(){guidepage.removeChild(garbage);onsee(guideEnding)},2000)
                    }
                } 
                window.requestAnimationFrame(forward2);
            }else{
                if(parseInt(bottom)>=length3&&parseInt(bottom)<=(length3 + 10)){
                    var garbage=document.querySelector('.pinggai')
                    if(garbage){
                        if(garbage.type === compareObj[node.$type]){
                            garbage.classList.add('bomb')
                            c_paocontainer.removeChild(node)
                            setTimeout(function(){guidepage.removeChild(garbage);gar2()},2000)
                        }
                    }
                    window.requestAnimationFrame(forward2);
                }else{
                    if(parseInt(bottom)>length4){
                        c_paocontainer.removeChild(node)
                    }else{
                        window.requestAnimationFrame(forward2);
                    }   
                }
                
            }
        }
    }
}

function gar2 (){
    var node=document.createElement('div')
    node.className='pinggai'
    node.name=c_garbage2.name
    node.type=c_garbage2.type
    node.innerHTML="<div class='garb'>"+c_garbage2.name+'</div>'+"<div class='fix' >"+'是什么垃圾?'+'</div>'
    node.style.backgroundImage = 'url(./image/'+c_garbage2.img+'.png)'
    guidepage.appendChild(node)
}

var _1 = document.querySelector('._1')
var _2 = document.querySelector('._2')
var _3 = document.querySelector('._3')
var _4 = document.querySelector('._4')
var nextstep = document.querySelector('.nextstep')


function onsee (el){
    el.style.visibility = 'visible'
}

function unsee (el) {
    el.style.visibility = 'hidden'
}

var c_tt = 0
c_paocontainer.addEventListener('click',function(){
    if(!c_tt){
        unsee(_2)
        deleteCircle(c_paocontainer)
        unsee(_3)
        setTimeout(function(){onsee(_4);withCircle(g_dan)},2000)
    }

    forward2()
})

guideEnding.addEventListener('click',function(){
    unsee(guideEnding)
    show(game)
    hidden(guidepage)
    createGrabage()
})

//share arrow
var sharearrow = document.querySelector('.sharearrow')

function showshare(){
    if(shareIndex%2===0){  
        show(sharearrow)
    }
    shareIndex++
}

sharearrow.addEventListener('click',function(){
    hidden(sharearrow)
})

//play music
var music = document.getElementById('music')
var bgm = new Audio('./bgm.mp3')
bgm.preload = 'auto'
bgm.autoplay=true
bgm.loop=true
console.log(bgm.readyState,bgm.canPlayType('audio/wma'))
bgm.addEventListener('canplaythrough',function(){bgm.play()})

music.addEventListener('click',function(){
    if(bgm.paused){
        bgm.play();music.className='playing'
    }else{
        bgm.pause();music.className='paused'
    }
})

//上弹音效
var upBullet = new Audio('./upbullet.mp3')
var shooting = new Audio('./shootV.mp3')
var bombBGM = new Audio('./bombB.mp3')