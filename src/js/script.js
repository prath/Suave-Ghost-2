(function ($) {
    "use strict";
    NProgress.start();
    /**
     * Resizes Cover Image and above content
     */
    function resizeHeadline(){
        var winH = jQuery(window).height();
        var vc = jQuery('.headline .vertically.centered');
        var mainNav = jQuery('.main-navigation');
        jQuery('.headline').height(winH);
        vc.css('margin-top',(( winH - mainNav.height() - vc.height() )/2) - 50);
        refreshMenuPos();
    }

    /**
     * Repositions Menu/Navbar when window scrolled
     */
    function refreshMenuPos(){
        var winH = jQuery(window).height();
        var mainNav = jQuery('.main-navigation');
        var scrollTop = jQuery(window).scrollTop();
        var headline = jQuery('.headline');

        if(scrollTop >= winH-mainNav.height() || headline.length === 0){
            mainNav.addClass('navbar-fixed-top');
            mainNav.removeClass('navbar-absolute-bottom');
            mainNav.css('top', 0);
            $('.droppable').css('top', '50px');
        }else{
            mainNav.addClass('navbar-absolute-bottom');
            mainNav.removeClass('navbar-fixed-top');
            mainNav.css('top', winH - mainNav.outerHeight());
            $('.droppable').css('top', '0px');
        }
    }

    /**
     * Changes Dropup to Dropdown and vice versa when scrolled
     */
    function switchDropdownPosition(){
        if(jQuery('.headline').length == 1){
            var headlineHeight  = jQuery('.headline').height();
            var scrollTop       = jQuery(window).scrollTop();
            if(headlineHeight/2 > scrollTop){
                jQuery('.main-navigation li.dropdown').removeClass('dropdown').addClass('dropup');
            }else{
                jQuery('.main-navigation li.dropup').removeClass('dropup').addClass('dropdown');
            }
        }
    }

    /**
     * Shows post-list on dropnav 
     */
    function expandNav() {
        jQuery('.droppable').slideDown("fast", "easeOutBack");
        jQuery('.droppable').removeClass("hiden");
        jQuery('.droppable').addClass("shown");
        $.cookie('dropnav', true);
    }

    /**
     * Hide post-list on dropnav 
     */
    function collapseNav() {
        jQuery('.droppable').slideUp("fast", "easeInBack");
        jQuery('.droppable').removeClass("shown");
        jQuery('.droppable').addClass("hiden");
        $.removeCookie('dropnav');
    }

    jQuery(document).ready(function(){

        jQuery('.headline').fadeIn();

        if(jQuery('#collapse-the-nav').length > 0) {
            jQuery('#collapse-the-nav').hide();
        }
        
        resizeHeadline();
        refreshMenuPos();
        switchDropdownPosition();
        jQuery(window).on('resize', resizeHeadline);
        jQuery(window).on('resize', switchDropdownPosition);
        jQuery(window).on('scroll', refreshMenuPos);
        jQuery(window).on('scroll', switchDropdownPosition);


        // expand-collapse dropnav and qookie to keep the pagination.
        if(jQuery('#drop-the-nav').length > 0) {
            jQuery('#drop-the-nav').on('click', function(e){
                jQuery('#drop-the-nav').hide();
                jQuery('#collapse-the-nav').show();
                expandNav();
            })
            jQuery('#collapse-the-nav').on('click', function(e){
                jQuery('#collapse-the-nav').hide();
                jQuery('#drop-the-nav').show();
                collapseNav();
            })
            jQuery('.pagination a').on('click', function(e){
                $.cookie('dropnav', true);
            })
            jQuery('.navbar-brand').on('click', function(e){
                $.removeCookie('dropnav');
            })
            if($.cookie('dropnav') === 'true'){
                jQuery('#drop-the-nav').hide();
                jQuery('#collapse-the-nav').show();
                jQuery('.droppable').slideDown("fast", "easeOutBack");
                jQuery('.droppable').removeClass("hiden");
                jQuery('.droppable').addClass("shown");
            } else {
                jQuery('#collapse-the-nav').hide();
                jQuery('#drop-the-nav').show();
                jQuery('.droppable').slideUp("fast", "easeInBack");
                jQuery('.droppable').removeClass("shown");
                jQuery('.droppable').addClass("hiden");
            }
        }

        // fitvids
        $(".fitvids").fitVids();

    });

    jQuery(window).load(function(){
        NProgress.done();
    })
    
}(jQuery));
