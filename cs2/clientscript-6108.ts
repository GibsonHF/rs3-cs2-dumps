//
function script6108(int0: inv, int1: int): void {
    if (((varplayer_299 == -1 as inv) || (varplayer_301 == -1))) {
        return;
    };
    IF_SETHIDE(false, comp(1265, 148));
    IF_SETHIDE(false, comp(1265, 145));
    var int2 = INV_GETOBJ(int0, int1);
    if (((int2 == -1 as obj) || (INV_TOTAL(int0, int2) == -1))) {
        IF_SETTEXT("Select an item", comp(1265, 58));
        IF_SETOBJECT(-1 as obj, -1, comp(1265, 60));
        IF_SETTEXT("N/A", comp(1265, 137));
        stack(-1);
        stack(82903176);
        IF_SETGRAPHIC();
        IF_SETCOLOUR(8552313, 82903187);
        IF_SETTEXT("N/A", 82903187);
        return;
    };
    IF_SETCOLOUR(15052881, comp(1265, 147));
    IF_SETTEXT(OC_NAME(int2), comp(1265, 58));
    IF_SETOBJECT(int2, -1, comp(1265, 60));
    IF_SETTEXT(varclient_2361, comp(1265, 59));
    var int3 = script6075(int2, varplayer_302);
    if ((int0 == 93 as inv)) {
        IF_SETTEXT("Value:", comp(1265, 133));
        IF_SETTEXT("Sell", comp(1265, 147));
        int3 = script6076(int2, varplayer_302, varplayer_304);
        if ((TESTBIT(varclient_1879, int1) == 0)) {
            int3 = -1;
        };
    } else if ((int0 == varplayer_305)) {
        IF_SETTEXT("Price:", comp(1265, 133));
        IF_SETTEXT("Take", comp(1265, 147));
    } else {
        IF_SETTEXT("Price:", comp(1265, 133));
        IF_SETTEXT("Buy", comp(1265, 147));
    };
    script17395();
    if ((int3 == -1)) {
        IF_SETTEXT("N/A", comp(1265, 137));
        stack(2180);
        stack(82903176);
        IF_SETGRAPHIC();
    } else if ((int0 == varplayer_305)) {
        IF_SETTEXT("Free!", comp(1265, 137));
        stack(-1);
        stack(82903176);
        IF_SETGRAPHIC();
    } else {
        IF_SETTEXT(script940(int3), comp(1265, 137));
        stack(enum_getvalue(0, 23, 200 as cs2enum, varplayer_306));
        stack(82903176);
        IF_SETGRAPHIC();
    };
    var int4 = PARAWIDTH(IF_GETTEXT(comp(1265, 137)), IF_GETWIDTH(comp(1265, 134)), 26 as fontmetrics);
    if ((int0 != varplayer_305)) {
        int4 = ((int4 + 2) + IF_GETWIDTH(comp(1265, 136)));
    };
    IF_SETSIZE(int4, 15, 0, 0, comp(1265, 135));
    if ((int3 != -1)) {
        IF_SETHIDE(true, comp(1265, 148));
        IF_SETHIDE(true, comp(1265, 145));
    };
    var int5 = comp(1265, 20);
    if (((varclient_1881 != -1 as inv) && (varclient_1880 != -1))) {
        IF_SETHIDE(true, comp(1266, 3));
        if ((varclient_1881 == varplayer_305)) {
            int5 = comp(1265, 14);
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
    int5 = comp(1265, 20);
    if ((varplayer_299 == varplayer_305)) {
        int5 = comp(1265, 14);
    };
    if ((int0 == varplayer_299)) {
        if (((int0 == 93 as inv) && (CC_FIND(comp(1266, 0), int1) == 1))) {
            IF_SETPOSITION(((CC_GETX() + 2) - 2), ((CC_GETY() + 2) - 2), 0, 0, comp(1266, 3));
            IF_SETHIDE(false, comp(1266, 3));
        };
        if (((CC_FIND(int5, int1) == 1) && ((int0 != 93 as inv) || (varplayer_303 == 1)))) {
            CC_SETONMOUSEOVER(callback(script6100, varbitplayer_987, 1, 1, -2147483645, -2147483643));
            CC_SETONMOUSELEAVE(callback(script6100, varbitplayer_987, 1, 0, -2147483645, -2147483643));
            if ((varbitplayer_987 == 0)) {
                CC_SETGRAPHIC(24164 as graphic);
            } else {
                CC_SETGRAPHIC(24164 as graphic);
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
        stack(2180);
        stack(82903101);
        IF_SETGRAPHIC();
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 82903098);
    } else {
        stack(-1);
        stack(82903101);
        IF_SETGRAPHIC();
        IF_SETONMOUSEREPEAT(callback(), 82903101);
        IF_SETONMOUSEREPEAT(callback(), 82903100);
        IF_SETONMOUSEREPEAT(callback(), 82903098);
    };
    return;
}