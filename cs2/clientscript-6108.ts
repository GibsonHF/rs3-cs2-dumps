//
function script6108(int0: number, int1: number): void {
    if (((varplayer_299 == -1 as inv) || (varplayer_301 == -1))) {
        return;
    };
    IF_SETHIDE(false, comp(1265, 148));  // shop_main:quantity_disabled
    IF_SETHIDE(false, comp(1265, 145));  // shop_main:buy_disabled
    var int2 = INV_GETOBJ(int0, int1);
    if (((int2 == -1 as obj) || (INV_TOTAL(int0, int2) == -1))) {
        IF_SETTEXT("Select an item", comp(1265, 58));  // shop_main:item_name
        IF_SETOBJECT(-1 as obj, -1, comp(1265, 60));  // shop_main:item_icon
        IF_SETTEXT("N/A", comp(1265, 137));  // shop_main:total_value
        IF_SETGRAPHIC(-1 as graphic, comp(1265, 136));  // shop_main:total_icon
        IF_SETCOLOUR(8552313, comp(1265, 147));  // shop_main:buy_text
        IF_SETTEXT("N/A", comp(1265, 147));  // shop_main:buy_text
        return;
    };
    IF_SETCOLOUR(15052881, comp(1265, 147));  // shop_main:buy_text
    IF_SETTEXT(OC_NAME(int2), comp(1265, 58));  // shop_main:item_name
    IF_SETOBJECT(int2, -1, comp(1265, 60));  // shop_main:item_icon
    IF_SETTEXT(varclient_2361, comp(1265, 59));  // shop_main:item_description
    var int3 = script6075(int2, varplayer_302);
    if ((int0 == 93)) {
        IF_SETTEXT("Value:", comp(1265, 133));  // shop_main:total_title
        IF_SETTEXT("Sell", comp(1265, 147));  // shop_main:buy_text
        int3 = script6076(int2, varplayer_302, varplayer_304);
        if ((TESTBIT(varclient_1879, int1) == 0)) {
            int3 = -1;
        };
    } else if ((int0 == varplayer_305)) {
        IF_SETTEXT("Price:", comp(1265, 133));  // shop_main:total_title
        IF_SETTEXT("Take", comp(1265, 147));  // shop_main:buy_text
    } else {
        IF_SETTEXT("Price:", comp(1265, 133));  // shop_main:total_title
        IF_SETTEXT("Buy", comp(1265, 147));  // shop_main:buy_text
    };
    script17395();
    if ((int3 == -1)) {
        IF_SETTEXT("N/A", comp(1265, 137));  // shop_main:total_value
        IF_SETGRAPHIC(2180 as graphic, comp(1265, 136));  // shop_main:total_icon
    } else if ((int0 == varplayer_305)) {
        IF_SETTEXT("Free!", comp(1265, 137));  // shop_main:total_value
        IF_SETGRAPHIC(-1 as graphic, comp(1265, 136));  // shop_main:total_icon
    } else {
        IF_SETTEXT(script940(int3), comp(1265, 137));  // shop_main:total_value
        IF_SETGRAPHIC(enum_getvalue(0, 23, 200, varplayer_306), comp(1265, 136));  // shop_main:total_icon
    };
    var int4 = PARAWIDTH(IF_GETTEXT(comp(1265, 137) /*shop_main:total_value*/), IF_GETWIDTH(comp(1265, 134) /*shop_main:total_bounding_layer*/), 26 as fontmetrics);
    if ((int0 != varplayer_305)) {
        int4 = ((int4 + 2) + IF_GETWIDTH(comp(1265, 136)));  // shop_main:total_icon
    };
    IF_SETSIZE(int4, 15, 0, 0, comp(1265, 135));  // shop_main:total_layer
    if ((int3 != -1)) {
        IF_SETHIDE(true, comp(1265, 148));  // shop_main:quantity_disabled
        IF_SETHIDE(true, comp(1265, 145));  // shop_main:buy_disabled
    };
    var int5 = 82903060;
    if (((varclient_1881 != -1) && (varclient_1880 != -1))) {
        IF_SETHIDE(true, comp(1266, 3));  // shop_side:select_reticule
        if ((varclient_1881 == varplayer_305)) {
            int5 = 82903054;
        };
        if ((CC_FIND(int5, varclient_1880) == 1)) {
            CC_SETONMOUSEOVER(callback(script6100, varbitplayer_987, 0, 1, -2147483645, -2147483643));
            CC_SETONMOUSELEAVE(callback(script6100, varbitplayer_987, 0, 0, -2147483645, -2147483643));
            if ((varbitplayer_987 == 0)) {
                CC_SETGRAPHIC(24086 as graphic);
            } else {
                CC_SETGRAPHIC(24086 as graphic);
            };
        };
    };
    int5 = 82903060;
    if ((varplayer_299 == varplayer_305)) {
        int5 = 82903054;
    };
    if ((int0 == varplayer_299)) {
        if (((int0 == 93) && (CC_FIND(comp(1266, 0), int1) == 1))) {  // shop_side:inventory_layer
            IF_SETPOSITION(((CC_GETX() + 2) - 2), ((CC_GETY() + 2) - 2), 0, 0, comp(1266, 3));  // shop_side:select_reticule
            IF_SETHIDE(false, comp(1266, 3));  // shop_side:select_reticule
        };
        if ((CC_FIND(int5, int1) == 1)) {
            if (((int0 != 93) || (varplayer_303 == 1))) {
                CC_SETONMOUSEOVER(callback(script6100, varbitplayer_987, 1, 1, -2147483645, -2147483643));
                CC_SETONMOUSELEAVE(callback(script6100, varbitplayer_987, 1, 0, -2147483645, -2147483643));
                if ((varbitplayer_987 == 0)) {
                    CC_SETGRAPHIC(24164 as graphic);
                } else {
                    CC_SETGRAPHIC(24164 as graphic);
                };
            };
        };
        varclient_1881 = int0;
        varclient_1880 = int1;
    };
    var string0 = script2706(int2);
    if ((strcmp(string0, "") != 0)) {
        if ((strcmp(varclient_2355, "") != 0)) {
            string0 = strconcat(string0, varclient_2355);
        };
        if ((strcmp(varclient_2356, "") != 0)) {
            string0 = strconcat(string0, `<br>${varclient_2356}`);
        };
        IF_SETGRAPHIC(2180 as graphic, comp(1265, 61));  // shop_main:item_no_use
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1265, 58));  // shop_main:item_name
    } else {
        IF_SETGRAPHIC(-1 as graphic, comp(1265, 61));  // shop_main:item_no_use
        IF_SETONMOUSEREPEAT(callback(), comp(1265, 61));  // shop_main:item_no_use
        IF_SETONMOUSEREPEAT(callback(), comp(1265, 60));  // shop_main:item_icon
        IF_SETONMOUSEREPEAT(callback(), comp(1265, 58));  // shop_main:item_name
    };
    return;
}