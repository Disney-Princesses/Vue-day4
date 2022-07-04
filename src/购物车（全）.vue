<template>
    <div>
    <div>
        <!-- 顶部快捷导航start -->
        <div class="shortcut">
            <div class="w">
                <div class="fl">
                    <ul>
                        <li>品优购欢迎您！ </li>
                        <li>
                            <a href="#">请登录</a>
                            <a href="#" class="style-red">免费注册</a>
                        </li>
                    </ul>
                </div>
                <div class="fr">
                    <ul>
                        <li><a href="#">我的订单</a></li>
                        <li class="spacer"></li>
                        <li>
                            <a href="#">我的品优购</a>
                            <i class="icomoon"></i>
                        </li>
                        <li class="spacer"></li>
                        <li><a href="#">品优购会员</a></li>
                        <li class="spacer"></li>
                        <li><a href="#">企业采购</a></li>
                        <li class="spacer"></li>
                        <li><a href="#">关注品优购</a> <i class="icomoon"></i></li>
                        <li class="spacer"></li>
                        <li><a href="#">客户服务</a> <i class="icomoon"></i></li>
                        <li class="spacer"></li>
                        <li><a href="#">网站导航</a> <i class="icomoon"></i></li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 顶部快捷导航end  -->


        <div class="car-header">
            <div class="w">
                <div class="car-logo">
                     <b>购物车</b>
                </div>
            </div>
        </div>

    </div>
    <div class="c-container">
        <div class="w">
            <div class="cart-filter-bar">
                <em>全部商品</em>
            </div>
            <!-- 购物车主要核心区域 -->
            <div class="cart-warp">
                <!-- 头部全选模块 -->
                <div class="cart-thead">
                    <div class="t-checkbox">
                        <input type="checkbox" name="" id="" class="checkall"> 全选
                    </div>
                    <div class="t-goods">商品</div>
                    <div class="t-price">单价</div>
                    <div class="t-num">数量</div>
                    <div class="t-sum">小计</div>
                    <div class="t-action">操作</div>
                </div>
                <!-- 商品详细模块 -->
                <div class="cart-item-list">
                    <div class="cart-item check-cart-item">
                        <div class="p-checkbox">
                            <input type="checkbox" name="" id="" checked class="j-checkbox">
                        </div>
                        <div class="p-goods">
                            <div class="p-img">
                               <img src="./assets/img/p1.jpg" alt="">
                            </div>
                            <div class="p-msg">【5本26.8元】经典儿童文学彩图青少版八十天环游地球中学生语文教学大纲</div>
                        </div>
                        <div class="p-price">￥12.60</div>
                        <div class="p-num">
                            <div class="quantity-form">
                                <a href="javascript:;" class="decrement">-</a>
                                <input type="text" class="itxt" value="1">
                                <a href="javascript:;" class="increment">+</a>
                            </div>
                        </div>
                        <div class="p-sum">￥12.60</div>
                        <div class="p-action"><a href="javascript:;">删除</a></div>
                    </div>
                    <div class="cart-item">
                        <div class="p-checkbox">
                            <input type="checkbox" name="" id="" class="j-checkbox">
                        </div>
                        <div class="p-goods">
                            <div class="p-img">
                              <img src="./assets/img/p2.jpg" alt="">
                            </div>
                            <div class="p-msg">【2000张贴纸】贴纸书 3-6岁 贴画儿童 贴画书全套12册 贴画 贴纸儿童 汽</div>
                        </div>
                        <div class="p-price">￥24.80</div>
                        <div class="p-num">
                            <div class="quantity-form">
                                <a href="javascript:;" class="decrement">-</a>
                                <input type="text" class="itxt" value="1">
                                <a href="javascript:;" class="increment">+</a>
                            </div>
                        </div>
                        <div class="p-sum">￥24.80</div>
                        <div class="p-action"><a href="javascript:;">删除</a></div>
                    </div>
                    <div class="cart-item">
                        <div class="p-checkbox">
                            <input type="checkbox" name="" id="" class="j-checkbox">
                        </div>
                        <div class="p-goods">
                            <div class="p-img">
                              <img src="./assets/img/p3.jpg" alt="">
                            </div>
                            <div class="p-msg">唐诗三百首+成语故事全2册 一年级课外书 精装注音儿童版 小学生二三年级课外阅读书籍</div>
                        </div>
                        <div class="p-price">￥29.80</div>
                        <div class="p-num">
                            <div class="quantity-form">
                                <a href="javascript:;" class="decrement">-</a>
                                <input type="text" class="itxt" value="1">
                                <a href="javascript:;" class="increment">+</a>
                            </div>
                        </div>
                        <div class="p-sum">￥29.80</div>
                        <div class="p-action"><a href="javascript:;">删除</a></div>
                    </div>
                </div>

                <!-- 结算模块 -->
                <div class="cart-floatbar">
                    <div class="select-all">
                        <input type="checkbox" name="" id="" class="checkall">全选
                    </div>
                    <div class="operation">
                        <a href="javascript:;" class="remove-batch"> 删除选中的商品</a>
                        <a href="javascript:;" class="clear-all">清理购物车</a>
                    </div>
                    <div class="toolbar-right">
                        <div class="amount-sum">已经选<em>1</em>件商品</div>
                        <div class="price-sum">总价： <em>￥12.60</em></div>
                        <div class="btn-area">去结算</div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <!-- footer start -->
    <div class="footer">
        <div class="w">
            <!-- mod_service -->
            <div class="mod_service">
                <ul>
                    <li>
                        <i class="mod-service-icon mod_service_zheng"></i>
                        <div class="mod_service_tit">
                            <h5>正品保障</h5>
                            <p>正品保障，提供发票</p>
                        </div>
                    </li>
                    <li>
                        <i class="mod-service-icon mod_service_kuai"></i>
                        <div class="mod_service_tit">
                            <h5>正品保障</h5>
                            <p>正品保障，提供发票</p>
                        </div>
                    </li>
                    <li>
                        <i class="mod-service-icon mod_service_bao"></i>
                        <div class="mod_service_tit">
                            <h5>正品保障</h5>
                            <p>正品保障，提供发票</p>
                        </div>
                    </li>
                    <li>
                        <i class="mod-service-icon mod_service_bao"></i>
                        <div class="mod_service_tit">
                            <h5>正品保障</h5>
                            <p>正品保障，提供发票</p>
                        </div>
                    </li>
                    <li>
                        <i class="mod-service-icon mod_service_bao"></i>
                        <div class="mod_service_tit">
                            <h5>正品保障</h5>
                            <p>正品保障，提供发票</p>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- mod_help -->
            <div class="mod_help">
                <dl class="mod_help_item">
                    <dt>购物指南</dt>
                    <dd> <a href="#">购物流程 </a></dd>
                    <dd> <a href="#">会员介绍 </a></dd>
                    <dd> <a href="#">生活旅行/团购 </a></dd>
                    <dd> <a href="#">常见问题 </a></dd>
                    <dd> <a href="#">大家电 </a></dd>
                    <dd> <a href="#">联系客服 </a></dd>
                </dl>
                <dl class="mod_help_item">
                    <dt>购物指南</dt>
                    <dd> <a href="#">购物流程 </a></dd>
                    <dd> <a href="#">会员介绍 </a></dd>
                    <dd> <a href="#">生活旅行/团购 </a></dd>
                    <dd> <a href="#">常见问题 </a></dd>
                    <dd> <a href="#">大家电 </a></dd>
                    <dd> <a href="#">联系客服 </a></dd>
                </dl>
                <dl class="mod_help_item">
                    <dt>购物指南</dt>
                    <dd> <a href="#">购物流程 </a></dd>
                    <dd> <a href="#">会员介绍 </a></dd>
                    <dd> <a href="#">生活旅行/团购 </a></dd>
                    <dd> <a href="#">常见问题 </a></dd>
                    <dd> <a href="#">大家电 </a></dd>
                    <dd> <a href="#">联系客服 </a></dd>
                </dl>
                <dl class="mod_help_item">
                    <dt>购物指南</dt>
                    <dd> <a href="#">购物流程 </a></dd>
                    <dd> <a href="#">会员介绍 </a></dd>
                    <dd> <a href="#">生活旅行/团购 </a></dd>
                    <dd> <a href="#">常见问题 </a></dd>
                    <dd> <a href="#">大家电 </a></dd>
                    <dd> <a href="#">联系客服 </a></dd>
                </dl>
                <dl class="mod_help_item">
                    <dt>购物指南</dt>
                    <dd> <a href="#">购物流程 </a></dd>
                    <dd> <a href="#">会员介绍 </a></dd>
                    <dd> <a href="#">生活旅行/团购 </a></dd>
                    <dd> <a href="#">常见问题 </a></dd>
                    <dd> <a href="#">大家电 </a></dd>
                    <dd> <a href="#">联系客服 </a></dd>
                </dl>
                <dl class="mod_help_item mod_help_app">
                    <dt>帮助中心</dt>
                    <dd>
                      
                        <p>品优购客户端</p>
                    </dd>
                </dl>
            </div>

            <!-- mod_copyright  -->
            <div class="mod_copyright">
                <p class="mod_copyright_links">
                    关于我们 | 联系我们 | 联系客服 | 商家入驻 | 营销中心 | 手机品优购 | 友情链接 | 销售联盟 | 品优购社区 | 品优购公益 | English Site | Contact U
                </p>
                <p class="mod_copyright_info">
                    地址：北京市昌平区建材城西路金燕龙办公楼一层 邮编：100096 电话：400-618-4000 传真：010-82935100 邮箱: zhanghj+itcast.cn <br>
                    京ICP备08001421号京公网安备110108007702
                </p>
            </div>
        </div>
    </div>
    <!-- footer end -->
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  },
  filters: {
  },
  computed: {
  },
  watch: {
  },
}
</script>
<style lang="less" scoped>



/*清除元素默认的内外边距  */
* {
    margin: 0;
    padding: 0
}

/*让所有斜体 不倾斜*/
em,
i {
    font-style: normal;
}

/*去掉列表前面的小点*/
li {
    list-style: none;
}

/*图片没有边框   去掉图片底侧的空白缝隙*/
img {
    border: 0;
    /*ie6*/
    vertical-align: middle;
}

/*让button 按钮 变成小手*/
button {
    cursor: pointer;
}

/*取消链接的下划线*/
a {
    color: #666;
    text-decoration: none;
}

a:hover {
    color: #e33333;
}

button,
input {
    font-family: 'Microsoft YaHei', 'Heiti SC', tahoma, arial, 'Hiragino Sans GB', \\5B8B\4F53, sans-serif;
    /*取消轮廓线 蓝色的*/
    outline: none;
}

body {
    background-color: #fff;
    font: 12px/1.5 'Microsoft YaHei', 'Heiti SC', tahoma, arial, 'Hiragino Sans GB', \\5B8B\4F53, sans-serif;
    color: #666
}

.hide,
.none {
    display: none;
}

/*清除浮动*/
.clearfix:after {
    visibility: hidden;
    clear: both;
    display: block;
    content: ".";
    height: 0
}

.clearfix {
    *zoom: 1
}
/*公共样式*/

.fl {
    float: left;
}

.fr {
    float: right;
}

@font-face {
    font-family: 'icomoon';
    src: url('./assets/fonts/icomoon.eot?7kkyc2');
    src: url('./assets/fonts/icomoon.eot?7kkyc2#iefix') format('embedded-opentype'), url('./assets/fonts/icomoon.ttf?7kkyc2') format('truetype'), url('./assets/fonts/icomoon.woff?7kkyc2') format('woff'), url('./assets/fonts/icomoon.svg?7kkyc2#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
}

.fr .icomoon {
    font-family: 'icomoon';
    font-size: 16px;
    line-height: 26px;
}


/*版心*/

.w {
    width: 1200px;
    margin: 0 auto;
}

.style-red {
    color: #c81623;
}

.spacer {
    width: 1px;
    height: 12px;
    background-color: #666;
    margin: 9px 12px 0;
}


/*顶部快捷导航*/

.shortcut {
    height: 31px;
    background-color: #f1f1f1;
    line-height: 31px;
}

.shortcut li {
    float: left;
}


/*header区域*/

.header {
    position: relative;
    height: 105px;
}

.logo {
    position: absolute;
    top: 25px;
    left: 0;
    width: 175px;
    height: 56px;
}

.logo a {
    display: block;
    /*overflow: hidden;*/
    width: 175px;
    height: 56px;
  
    /*text-indent: -999px;*/
    font-size: 0;
}

.search {
    position: absolute;
    top: 25px;
    left: 348px;
}

.text {
    float: left;
    width: 445px;
    height: 32px;
    border: 2px solid #b1191a;
    padding-left: 10px;
    color: #ccc;
}

.btn {
    float: left;
    width: 82px;
    height: 36px;
    background-color: #b1191a;
    border: 0;
    font-size: 16px;
    color: #fff;
}

.hotwrods {
    position: absolute;
    top: 65px;
    left: 348px;
}

.hotwrods a {
    margin: 0 10px;
}

.shopcar {
    position: absolute;
    top: 25px;
    right: 64px;
    width: 138px;
    height: 34px;
    border: 1px solid #dfdfdf;
    background-color: #f7f7f7;
    line-height: 34px;
    text-align: center;
}

.car {
    font-family: 'icomoon';
    color: #da5555;
}

.arrow {
    font-family: 'icomoon';
    margin-left: 5px;
}

.count {
    position: absolute;
    top: -5px;
    /*应该是左侧对齐 文字才能往右走显示*/
    left: 100px;
    background-color: #e60012;
    height: 14px;
    padding: 0 3px;
    line-height: 14px;
    color: #fff;
    /*border-radius: 左上角 右上角  右下角  左下角;*/
    border-radius: 7px 7px 7px 0;
}


/*nav start*/

.nav {
    height: 45px;
    border-bottom: 2px solid #b1191a;
}

.dropdown {
    width: 209px;
    height: 45px;
}

.dropdown .dt {
    height: 100%;
    background-color: #b1191a;
    font-size: 16px;
    color: #fff;
    text-align: center;
    line-height: 45px;
}

.dropdown .dd {
    height: 465px;
    background-color: #c81623;
    margin-top: 2px;
}

.menu_item:hover {
    background-color: #fff;
}


/*鼠标经过li 里面的 a变颜色*/

.menu_item:hover a {
    color: #c81623;
}

.menu_item {
    height: 31px;
    line-height: 31px;
    margin-left: 1px;
    padding: 0 10px;
    transition: all .5s;
}

.menu_item:hover {
    padding-left: 20px;
}

.menu_item a {
    font-size: 14px;
    color: #fff;
}

.menu_item i {
    float: right;
    font-family: 'icomoon';
    font-size: 18px;
    color: #fff;
}

.navitems {
    margin-left: 10px;
}

.navitems li {
    float: left;
}

.navitems li a {
    display: block;
    height: 45px;
    padding: 0 25px;
    line-height: 45px;
    font-size: 16px;
}


/*footer 部分*/

.footer {
    height: 386px;
    background-color: #f5f5f5;
    padding-top: 30px;
}

.mod_service {
    height: 79px;
    border-bottom: 1px solid #ccc;
}

.mod_service li {
    float: left;
    width: 240px;
    height: 79px;
}

.mod-service-icon {
    /*浮动的盒子 可以直接给大小的 不需要转换*/
    float: left;
    width: 50px;
    height: 50px;
    margin-left: 35px;
  
}

.mod_service_zheng {
    background-position: -253px -3px;
}

.mod_service_tit {
    float: left;
    margin-left: 5px;
}

.mod_service_tit h5 {
    margin: 5px 0;
}

.mod_service_kuai {
    background-position: -255px -54px;
}

.mod_service_bao {
    background-position: -257px -105px;
}

.mod_help {
    height: 187px;
    border-bottom: 1px solid #ccc;
}

.mod_help_item {
    float: left;
    width: 150px;
    padding: 20px 0 0 50px;
}

.mod_help_item dt {
    height: 25px;
    font-size: 16px;
}

.mod_help_item dd {
    height: 22px;
}

.mod_help_app dt,
.mod_help_app p {
    padding-left: 15px;
}

.mod_help_app img {
    margin: 7px 0;
}

.mod_copyright {
    text-align: center;
}

.mod_copyright_links {
    margin: 20px 0 15px 0;
}

.mod_copyright_info {
    line-height: 18px;
}
.car-header {
    padding: 20px 0;
}

.car-logo img {
    vertical-align: middle;
}

.car-logo b {
    font-size: 20px;
    margin-top: 20px;
    margin-left: 10px;
}

.cart-filter-bar {
    font-size: 16px;
    color: #E2231A;
    font-weight: 700;
}

.cart-filter-bar em {
    padding: 5px;
    border-bottom: 1px solid #E2231A;
}

.cart-thead {
    height: 32px;
    line-height: 32px;
    margin: 5px 0 10px;
    padding: 5px 0;
    background: #f3f3f3;
    border: 1px solid #e9e9e9;
    border-top: 0;
    position: relative;
}

.cart-thead>div,
.cart-item>div {
    float: left;
}

.t-checkbox,
.p-checkbox {
    height: 18px;
    line-height: 18px;
    padding-top: 7px;
    width: 122px;
    padding-left: 11px;
}

.t-goods {
    width: 400px;
}

.t-price {
    width: 120px;
    padding-right: 40px;
    text-align: right;
}

.t-num {
    width: 150px;
    text-align: center;
}

.t-sum {
    width: 100px;
    text-align: right;
}

.t-action {
    width: 130px;
    text-align: right;
}

.cart-item {
    height: 160px;
    border-style: solid;
    border-width: 2px 1px 1px;
    border-color: #aaa #f1f1f1 #f1f1f1;
    background: #fff;
    padding-top: 14px;
    margin: 15px 0;
}

.check-cart-item {
    background: #fff4e8;
}

.p-checkbox {
    width: 50px;
}

.p-goods {
    margin-top: 8px;
    width: 565px;
}

.p-img {
    float: left;
    border: 1px solid #ccc;
    padding: 5px;
}

.p-msg {
    float: left;
    width: 210px;
    margin: 0 10px;
}

.p-price {
    width: 110px;
}

.quantity-form {
    width: 80px;
    height: 22px;
}

.p-num {
    width: 170px;
}

.decrement,
.increment {
    float: left;
    border: 1px solid #cacbcb;
    height: 18px;
    line-height: 18px;
    padding: 1px 0;
    width: 16px;
    text-align: center;
    color: #666;
    margin: 0;
    background: #fff;
    margin-left: -1px;
}

.itxt {
    float: left;
    border: 1px solid #cacbcb;
    width: 42px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    padding: 1px;
    margin: 0;
    margin-left: -1px;
    font-size: 12px;
    font-family: verdana;
    color: #333;
    -webkit-appearance: none;
}

.p-sum {
    font-weight: 700;
    width: 145px;
}


/* 结算模块 */

.cart-floatbar {
    height: 50px;
    border: 1px solid #f0f0f0;
    background: #fff;
    position: relative;
    margin-bottom: 50px;
    line-height: 50px;
}

.select-all {
    float: left;
    height: 18px;
    line-height: 18px;
    padding: 16px 0 16px 9px;
    white-space: nowrap;
}

.select-all input {
    vertical-align: middle;
    display: inline-block;
    margin-right: 5px;
}

.operation {
    float: left;
    width: 235px;
    margin-left: 40px;
}

.clear-all {
    font-weight: 700;
    margin: 0 20px;
}

.toolbar-right {
    float: right;
}

.amount-sum {
    float: left;
}

.amount-sum em {
    font-weight: 700;
    color: #E2231A;
    padding: 0 3px;
}

.price-sum {
    float: left;
    margin: 0 15px;
}

.price-sum em {
    font-size: 16px;
    color: #E2231A;
    font-weight: 700;
}

.btn-area {
    font-weight: 700;
    width: 94px;
    height: 52px;
    line-height: 52px;
    color: #fff;
    text-align: center;
    font-size: 18px;
    font-family: "Microsoft YaHei";
    background: #e54346;
    overflow: hidden;
}
</style>
