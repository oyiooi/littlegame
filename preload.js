function preLoad (){
    var srcArray = [
        '1','2','3','4','5','6','7','8','9','10','bg2',
        'bg','biaoti','bomb','border','check','dui','ending','fasheqi','firsts',
        'forth','ganlajis','guize','h3','hou','qian','kehuishous','liststyle','second','shilajis',
        'shoot','third','xingqiu','youhailajis',"qianbi", "caiye", "suliaoping", "youqitong", "cong", 
        "huaimatong", "guantouping", "dianchi", "boliping", "dahuoji", "fanqiejiang", "beike", "yilaguan", "chuangketie", "huazhuangshua", 
        "baozhi", "xiguapi", "jiushubao", "tiaoseban", "haimian", "youqi", "yugu", "huashengke", "jiuxiezi", "jiaonang", "ganzhe", "niunaihe", 
        "tiwenji", "yumi", "zhuan", "lanzi", "yaopian", "gutou", "weishengzhi", "wanou", "yingguangdeng", "lanqiu", "bolihu", "dangao", "hetao", "mianqian",
         "mianbao", "lajitong", "shachongji", "caomei", "shuicaibi", "xihongshi", 
        "taoci", "yashua", "nongyaoping", "li", "suliaoshuzi", "yiyongshabu", "xieke", "maozi", "koufuyeping", "xiangjiaopi", "mushuzi", "jiujiazi", "xiangshuiping",
        "lajiao", "suotou", "yingguangbang", "qiaokeli", "yandi", "yagao", "qiezi", "ranfaji", "wandou", "lajidai", "pingguo", "wapian", "zhihe", "dengpao", "saoba",
         "wanju", "meiqiguan", "yugang", "yiyongshoutao", "canjinzhi", "shuben", "chongdiandianchi", "shengfan", "weishengzhi", "xinfeng", "huahui", "zhiniaoku", "siliao",
          "qianbi", "youtong", "deng", "maofa", "baoxian", "yaopinbaozhuang", "yaopinbaozhuang", "yanjing", "jiuping", "jiaonang", "jirou", "bolibei", "gaobing", "fangdajing",
           "xijiashui", "huaban", "zhijiayou", "tiwenji", "ganguoren", "luosidao", "dao", "caiye", "shachongpenwu",
         "zhijiaqian", "youqitong", "huoguo", "wusunsuliao", "chuangdan", "wanou", "zhentou", "zhurou", "jiubaozhi", "taoci"
    ]

    for (var i=0;i<155;i++){
        var img = new Image(); img.src = './image/'+srcArray[i]+'.png'
        imgArray.push(img)
    }
}

var auo = new Audio('./bgm.mp3')
var auo1 =new Audio('.shootV.mp3')
var auo2 = new Audio('.upbullet.mp3')
var auo3 = new Audio('.bombB.mp3')

var imgArray = []
preLoad()



var loading = document.querySelector('.pageLoad')

imgArray[153].onload = function() {
    loading.className = 'disapper'
}