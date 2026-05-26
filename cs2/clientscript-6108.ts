//
function script6108(int0: number, int1: number): void {
    if (((varplayer_299 == -1 as inv) || (varplayer_301 == -1))) {
        return;
    };
    IF_SETHIDE(0, 82903188);
    IF_SETHIDE(0, 82903185);
    var int2 = INV_GETOBJ(int0, int1);
    if (((int2 == -1) || (INV_TOTAL(int0, int2) == -1))) {
        IF_SETTEXT("Select an item", 82903098);
        IF_SETOBJECT(-1, -1, 82903100);
        IF_SETTEXT("N/A", 82903177);
        stack(-1);
        stack(82903176);
        IF_SETGRAPHIC();
        IF_SETCOLOUR(8552313, 82903187);
        IF_SETTEXT("N/A", 82903187);
        return;
    };
    IF_SETCOLOUR(15052881, 82903187);
    IF_SETTEXT(OC_NAME(int2), 82903098);
    IF_SETOBJECT(int2, -1, 82903100);
    IF_SETTEXT(varclient_2361, 82903099);
    var int3 = script6075(int2, varplayer_302);
    if ((int0 == 93 as inv)) {
        IF_SETTEXT("Value:", 82903173);
        IF_SETTEXT("Sell", 82903187);
        int3 = script6076(int2, varplayer_302, varplayer_304);
        if ((TESTBIT(varclient_1879, int1) == 0)) {
            int3 = -1;
        };
    } else if ((int0 == varplayer_305)) {
        IF_SETTEXT("Price:", 82903173);
        IF_SETTEXT("Take", 82903187);
    } else {
        IF_SETTEXT("Price:", 82903173);
        IF_SETTEXT("Buy", 82903187);
    };
    script17395();
    if ((int3 == -1)) {
        IF_SETTEXT("N/A", 82903177);
        stack(2180);
        stack(82903176);
        IF_SETGRAPHIC();
    } else if ((int0 == varplayer_305)) {
        IF_SETTEXT("Free!", 82903177);
        stack(-1);
        stack(82903176);
        IF_SETGRAPHIC();
    } else {
        IF_SETTEXT(script940(int3), 82903177);
        stack(enum_getvalue(0, 23, 200 as cs2enum, varplayer_306));
        stack(82903176);
        IF_SETGRAPHIC();
    };
    var int4 = PARAWIDTH(IF_GETTEXT(82903177), IF_GETWIDTH(82903174), 26);
    if ((int0 != varplayer_305)) {
        int4 = ((int4 + 2) + IF_GETWIDTH(82903176));
    };
    IF_SETSIZE(int4, 15, 0, 0, 82903175);
    if ((int3 != -1)) {
        IF_SETHIDE(1, 82903188);
        IF_SETHIDE(1, 82903185);
    };
    var int5 = 82903060;
    if (((varclient_1881 != -1 as inv) && (varclient_1880 != -1))) {
        IF_SETHIDE(1, 82968579);
        if ((varclient_1881 == varplayer_305)) {
            int5 = 82903054;
        };
        if ((CC_FIND(int5, varclient_1880) == 1)) {
            CC_SETONMOUSEOVER(callback(script6100, varbitplayer_987, 0, 1, -2147483645, -2147483643));
            CC_SETONMOUSELEAVE(callback(script6100, varbitplayer_987, 0, 0, -2147483645, -2147483643));
            if ((varbitplayer_987 == 0)) {
                CC_SETGRAPHIC(24086);
            } else {
                CC_SETGRAPHIC(24086);
            };
        };
    };
    int5 = 82903060;
    if ((varplayer_299 == varplayer_305)) {
        int5 = 82903054;
    };
    if ((int0 == varplayer_299)) {
        if (((int0 == 93 as inv) && (CC_FIND(82968576, int1) == 1))) {
            IF_SETPOSITION(((CC_GETX() + 2) - 2), ((CC_GETY() + 2) - 2), 0, 0, 82968579);
            IF_SETHIDE(0, 82968579);
        };
        if (((CC_FIND(int5, int1) == 1) && ((int0 != 93 as inv) || (varplayer_303 == 1)))) {
            CC_SETONMOUSEOVER(callback(script6100, varbitplayer_987, 1, 1, -2147483645, -2147483643));
            CC_SETONMOUSELEAVE(callback(script6100, varbitplayer_987, 1, 0, -2147483645, -2147483643));
            if ((varbitplayer_987 == 0)) {
                CC_SETGRAPHIC(24164);
            } else {
                CC_SETGRAPHIC(24164);
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