//
function script6107(): void {
    IF_SETTEXT("Select an item", comp(1265, 58));  // shop_main:item_name
    IF_SETOBJECT(-1 as obj, -1, comp(1265, 60));  // shop_main:item_icon
    IF_SETTEXT("N/A", comp(1265, 137));  // shop_main:total_value
    var int0 = PARAWIDTH(IF_GETTEXT(comp(1265, 137) /*shop_main:total_value*/), IF_GETWIDTH(comp(1265, 134) /*shop_main:total_bounding_layer*/), 26 as fontmetrics);
    IF_SETSIZE(int0, 15, 0, 0, comp(1265, 135));  // shop_main:total_layer
    IF_SETTEXT("", comp(1265, 59));  // shop_main:item_description
    IF_SETTEXT("", comp(1265, 63));  // shop_main:item_info
    IF_SETTEXT("", comp(1265, 64));  // shop_main:item_more_info
    IF_SETTEXT("Transaction:", comp(1265, 66));  // shop_main:selected_quantity_title
    IF_SETTEXT("Price:", comp(1265, 133));  // shop_main:total_title
    IF_SETGRAPHIC(-1 as graphic, comp(1265, 136));  // shop_main:total_icon
    IF_SETHIDE(true, comp(1266, 3));  // shop_side:select_reticule
    IF_SETHIDE(false, comp(1265, 148));  // shop_main:quantity_disabled
    IF_SETHIDE(false, comp(1265, 145));  // shop_main:buy_disabled
    IF_SETCOLOUR(8552313, comp(1265, 147));  // shop_main:buy_text
    IF_SETTEXT("N/A", comp(1265, 147));  // shop_main:buy_text
    IF_SETHIDE(true, comp(1265, 175));  // shop_main:sell_confirm_layer
    IF_SETGRAPHIC(-1 as graphic, comp(1265, 61));  // shop_main:item_no_use
    IF_SETONMOUSEREPEAT(callback(), comp(1265, 61));  // shop_main:item_no_use
    script6094();
    return;
}