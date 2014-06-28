"use strict";angular.module("kaoCatalogApp",["onsen.directives","angular-intro"]),angular.module("kaoCatalogApp").controller("TopCtrl",["$scope",function(a){a.showBrand=function(){a.ons.slidingMenu.setBehindPage("views/brand.html"),a.ons.slidingMenu.toggleMenu()},a.showCategory=function(){a.ons.slidingMenu.setBehindPage("views/category.html"),a.ons.slidingMenu.toggleMenu()},a.IntroOptions={steps:[{element:"#step1",intro:"花王製品を商品のブランド名から探します。<br><span class='kao-color'><font size='1px'>例）アジエンス</font></span>",position:"top"},{element:"#step2",intro:"花王製品を目的から探します。<br><span class='kao-color'><font size='1px'>例）フェイスケア</font></span>",position:"top"},{element:"#step3",intro:"左上のボタンを押すとスライドメニューが開きます。",position:"bottom"},{element:"#step4",intro:"スライドメニューは画面を右にフリックしても開くことができます。",position:"right"}],showStepNumbers:!1,exitOnOverlayClick:!0,exitOnEsc:!0,nextLabel:'<span style="color:blue"><strong>次へ</strong></span>',prevLabel:'<span style="color:green">戻る</span>',skipLabel:"スキップする",doneLabel:'<span style="color:black"><strong>終了</strong></span>'}}]).controller("BrandCtrl",["$scope","JsonData","ShareData",function(a,b,c){b.getBrandData().then(function(b){a.items=b.data}),a.showProduct=function(b){c.list_key!==b&&(c.list_key=b,c.product_view="views/product.html"===c.product_view?"views/product2.html":"views/product.html",a.ons.slidingMenu.setAbovePage(c.product_view)),a.ons.slidingMenu.toggleMenu()}}]).controller("CategoryCtrl",["$scope","JsonData","ShareData",function(a,b,c){b.getCategoryData().then(function(b){a.items=b.data}),a.showProduct=function(b){c.list_key!==b&&(c.list_key=b,c.product_view="views/product.html"===c.product_view?"views/product2.html":"views/product.html",a.ons.slidingMenu.setAbovePage(c.product_view)),a.ons.slidingMenu.toggleMenu()}}]).controller("ProductCtrl",["$scope","JsonData","ShareData",function(a,b,c){b.getProductData(c.list_key).then(function(b){a.items=b.data}),a.showItem=function(b){c.selectedItem=a.items[b],a.ons.screen.presentPage("views/item.html")}}]).controller("ItemCtrl",["$scope","ShareData",function(a,b){a.item=b.selectedItem,a.show_lineup=b.selectedItem.lineup_num>1?!0:!1,a.showImage=function(){b.image_url="http://www.kao.com"+a.item.img_l,a.ons.navigator.pushPage("views/image.html",{title:"拡大"})}}]).controller("AboutCtrl",["$scope","ShareData",function(a,b){a.showLink=function(c){b.link_url=c,a.ons.navigator.pushPage("views/link.html",{title:"確認"})}}]).controller("LinkCtrl",["$scope","ShareData",function(a,b){a.link_url=b.link_url}]).controller("ImageCtrl",["$scope","ShareData",function(a,b){a.image_url=b.image_url}]),angular.module("kaoCatalogApp").factory("JsonData",["$http",function(a){return{getBrandData:function(){return a({method:"GET",url:"data/menu_brand.json"})},getCategoryData:function(){return a({method:"GET",url:"data/menu_category.json"})},getProductData:function(b){return a({method:"GET",url:"data/"+b+".json"})}}}]).factory("ShareData",function(){return{}});