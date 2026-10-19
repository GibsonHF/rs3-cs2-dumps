//
function script14228(): void {
    IF_SETONTIMER(callback(), comp(1322, 1));  // minimenu:clickout_and_blocking_layer ?
    script3350();
    CC_DELETEALL(comp(1322, 9));  // minimenu:menu_build_layer ?
    CC_DELETEALL(comp(1322, 13));  // minimenu:menu_scroll_bar_layer ?
    CC_DELETEALL(comp(1322, 8));  // minimenu:menu_background_layer ?
    CC_DELETEALL(comp(1322, 16));  // minimenu:submenu_build_layer ?
    CC_DELETEALL(comp(1322, 12));  // minimenu:submenu_background_layer ?
    IF_SETSIZE(0, 0, 0, 0, comp(1322, 4));  // minimenu:universe_layer ?
    IF_SETPOSITION(0, 0, 0, 0, comp(1322, 4));  // minimenu:universe_layer ?
    IF_SETSCROLLPOS(0, 0, comp(1322, 9));  // minimenu:menu_build_layer ?
    IF_SETHIDE(true, comp(1322, 1));  // minimenu:clickout_and_blocking_layer ?
    IF_SETHIDE(true, comp(1322, 3));  // minimenu:menu_blocking_layer ?
    IF_SETHIDE(true, comp(1322, 2));  // minimenu:submenu_blocking_layer ?
    IF_SETHIDE(true, comp(1322, 15));  // minimenu:menu_scroll_down_layer ?
    IF_SETHIDE(true, comp(1322, 14));  // minimenu:menu_scroll_up_layer ?
    if ((script6431() == 1)) {
        stack(callback());
        stack(script83());
        IF_SETONRELEASE();
        ACTIVECLANCHANNEL_FIND_AFFINED(0);
    };
    return;
}