//
function script6097(int0: number): void {
    if ((int0 == 0)) {
        IF_SETHIDE(false, comp(1265, 40));  // shop_main:buy_tab_selected_layer
        IF_SETHIDE(true, comp(1265, 31));  // shop_main:sell_tab_selected_layer
    } else {
        IF_SETHIDE(true, comp(1265, 40));  // shop_main:buy_tab_selected_layer
        IF_SETHIDE(false, comp(1265, 31));  // shop_main:sell_tab_selected_layer
    };
    return;
}