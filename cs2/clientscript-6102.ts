//
function script6102(): void {
    var int0 = 0;
    var int1 = 0;
    IF_SETTEXT(script940(varplayer_302), comp(1265, 67));  // shop_main:selected_quantity
    if (((varplayer_299 != -1 as inv) && (varplayer_301 != -1))) {
        if ((varplayer_299 == 93 as inv)) {
            int0 = script6076(varplayer_300, varplayer_302, varplayer_304);
        } else {
            int0 = script6075(varplayer_300, varplayer_302);
        };
        if ((int0 == -1)) {
            IF_SETTEXT("N/A", comp(1265, 137));  // shop_main:total_value
            IF_SETGRAPHIC(2180 as graphic, comp(1265, 136));  // shop_main:total_icon
        } else if ((varplayer_299 == varplayer_305)) {
            IF_SETTEXT("Free!", comp(1265, 137));  // shop_main:total_value
            IF_SETGRAPHIC(-1 as graphic, comp(1265, 136));  // shop_main:total_icon
        } else {
            IF_SETTEXT(script940(int0), comp(1265, 137));  // shop_main:total_value
            IF_SETGRAPHIC(enum_getvalue(0, 23, 200 as cs2enum, varplayer_306), comp(1265, 136));  // shop_main:total_icon
        };
        int1 = PARAWIDTH(IF_GETTEXT(comp(1265, 137) /*shop_main:total_value*/), IF_GETWIDTH(comp(1265, 134) /*shop_main:total_bounding_layer*/), 26 as fontmetrics);
        if ((varplayer_299 != varplayer_305)) {
            int1 = ((int1 + 2) + IF_GETWIDTH(comp(1265, 136)));  // shop_main:total_icon
        };
        IF_SETSIZE(int1, 15, 0, 0, comp(1265, 135));  // shop_main:total_layer
    };
    return;
}