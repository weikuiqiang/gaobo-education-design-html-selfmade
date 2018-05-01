var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

if ($(window).width() >= 992) {
    $(".navbar-search").click(function () {
        if ($(".navbar-search").main_2sClass("opened")) { console.log("opened"); }
        else { $(".navbar-search").addClass("opened"); var width = $(".navbar-nav").width(); $(".navbar-nav").hide(); $(".navbar-search").css("width", width); $(".navbar-search").show(); $(".search-cancel").show(); $("#submit-search").show(); }
    });

    $(".search-cancel").click(function () {
        $(".navbar-search").removeClass("opened");
        $(".navbar-search").css("width", "");
        $(".search-cancel").hide();
        $("#submit-search").hide();
        $(".navbar-nav").fadeIn();
    });

}

if($(window).width() <=992){
    $("#main_1_nav").hide();
}



//test

var main_1_nav = $("#main_1_nav");
var main_1_nav_offset = main_1_nav.offset().top;
var menu = $(".navbar.navbar-expand-lg.navbar-light.navbar-right.fixed-top");
var height = main_1_nav.height() + menu.height() +30;





function menucollapse() {
    
    if (menu.offset().top > 30) {
        menu.addClass("material_shadow");
    }
    else {
        menu.removeClass("material_shadow")
    }

    if($(window).width() >= 992){
        if (menu.offset().top >= main_1_nav_offset) {
            $("#main_1_nav").css("position", "fixed");
            $("#main_1_nav").css("top", $(".navbar.navbar-expand-lg.navbar-light.navbar-right.fixed-top").height() + 30);
            $("#main_1_nav").css("z-index", "2000");
            $("#main_1_nav").css("width", "100%");
            $(".main_2").css("top", $("#main_1_nav").height()+60);
        } 
        else {
            $("#main_1_nav").css("position", "");
            $("#main_1_nav").css("top", "");
            $(".main_2").css("top", "");
    
        }
    }
    
    
}



$(document).ready(function () {
    $("#carouselMain1").css("padding-top", $(".navbar.navbar-expand-lg.navbar-light.navbar-right.fixed-top").height() + 30);
    $(window).scroll(menucollapse);

    $("body").attr("data-offset", height);
    console.log(height);
});

$(".custom_selection a").click(function(){
    $(this).addClass("active");
});

var type1_1 = ["语文", "数学", "英语", "物理","化学","生物",];
var type2_2 = ["听力", "阅读", "写作", "口语",];
var type_num;


$("#program_select").change(function(){
    var course = $(this).val();
    $(".class_selection h2").text("请选择您学习的"+course+"科目");
    


    if ($(this).val() == "IGCSE" || $(this).val() == "DP"|| $(this).val() == "MYP" || $(this).val() == "A-Level"|| $(this).val() == "AP"|| $(this).val() == "IFD" ){
        for (type_num = 0; type_num<type1_1.length; type_num++){
            var current_html = $(".class_list").html();
            var new_html = current_html + '<a href="#" class="list-group-item list-group-item-action">'+type1_1[type_num]+'</a>';
            $(".class_list").html(new_html);
        }
    }
    else{
        $(".class_list").html(type2);
    }
    
});



"Psychology-SL","Spanish-SL","Biology-HL","Biology-SL","BM-HL","BM-SL","Chemistry-HL","Chemistry-SL","Chinese A-SL","Chinese B-SL","Computer Science-HLComputer Science-SLEconomics-HLEconomics-SLEnglish A-SLEnglish-B-SLGeography-HLGeography-SLHistory-HLHistory-SLMathematics-HLMathematics-SLFurther MathematicsPhysics-HLPhysics-SLVisual Arts-HLVisual Arts-SLTheory of KnowledgeExtended EssaysInternal AssessmentEE+TOKChinese A-HLEnglish B-HLKorean A1  HL&SLChinese B-HLThetres-SL"