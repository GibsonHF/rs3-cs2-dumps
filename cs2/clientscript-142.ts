//[clientscript,trade_confirm_init]
function script142(): void {
    CC_DELETEALL(comp(334, 13));
    CC_DELETEALL(comp(334, 21));
    CC_DELETEALL(comp(334, 22));
    var int0 = 0;
    var int1 = -1 as obj;
    var int2 = 0;
    var long0 = script17402(626 as inv, 90 as inv);
    var long1 = script17403(626, 90);
    if (((((((((((((((INV_GETOBJ(90 as inv, 14) != -1 as obj) || (INV_GETOBJ(90 as inv, 15) != -1 as obj)) || (INV_GETOBJ(90 as inv, 16) != -1 as obj)) || (INV_GETOBJ(90 as inv, 17) != -1 as obj)) || (INV_GETOBJ(90 as inv, 18) != -1 as obj)) || (INV_GETOBJ(90 as inv, 19) != -1 as obj)) || (INV_GETOBJ(90 as inv, 20) != -1 as obj)) || (INV_GETOBJ(90 as inv, 21) != -1 as obj)) || (INV_GETOBJ(90 as inv, 22) != -1 as obj)) || (INV_GETOBJ(90 as inv, 23) != -1 as obj)) || (INV_GETOBJ(90 as inv, 24) != -1 as obj)) || (INV_GETOBJ(90 as inv, 25) != -1 as obj)) || (INV_GETOBJ(90 as inv, 26) != -1 as obj)) || (INV_GETOBJ(90 as inv, 27) != -1 as obj))) {
        IF_SETHIDE(false, comp(334, 21));
        IF_SETHIDE(false, comp(334, 22));
        IF_SETHIDE(false, comp(334, 23));
        while ((int0 < 14)) {
            int1 = INV_GETOBJ(90 as inv, int0);
            if ((int1 != -1 as obj)) {
                int2 = IF_GETNEXTSUBID(comp(334, 21));
                CC_CREATE(comp(334, 21), 4, int2);
                CC_SETTEXTFONT(26 as fontmetrics);
                CC_SETTEXTALIGN(0, 0, 0);
                CC_SETTEXT(script4107(int1, INV_GETNUM(90 as inv, int0), long0));
                CC_SETPOSITION(0, (int0 * 12), 1, 0);
                CC_SETSIZE(STRINGWIDTH(CC_GETTEXT(), CC_GETFONTMETRICS()), 12, 0, 0);
                CC_SETCOLOUR(16777215);
                CC_SETTEXTSHADOW(true);
                CC_SETONTIMER(callback(script9310, 21889045, int2, 0));
            };
            int0 = (int0 + 1);
        };
        while ((int0 < 28)) {
            int1 = INV_GETOBJ(90 as inv, int0);
            if ((int1 != -1 as obj)) {
                int2 = IF_GETNEXTSUBID(comp(334, 22));
                CC_CREATE(comp(334, 22), 4, int2);
                CC_SETTEXTFONT(26 as fontmetrics);
                CC_SETTEXTALIGN(0, 0, 0);
                CC_SETTEXT(script4107(int1, INV_GETNUM(90 as inv, int0), long0));
                CC_SETPOSITION(0, ((int0 - 14) * 12), 1, 0);
                CC_SETSIZE(STRINGWIDTH(CC_GETTEXT(), CC_GETFONTMETRICS()), 12, 0, 0);
                CC_SETCOLOUR(16777215);
                CC_SETTEXTSHADOW(true);
                CC_SETONTIMER(callback(script9310, 21889046, int2, 0));
            };
            int0 = (int0 + 1);
        };
        script4109(114, 21889037, comp(334, 21), comp(334, 22), comp(334, 23), comp(334, 24));
        IF_SETONDRAG(callback(script4108, -2147483647, 21889037, 21889045, 21889046, 21889047, 21889048), 21889048);
        IF_SETONDRAGCOMPLETE(callback(script4108, -2147483647, 21889037, 21889045, 21889046, 21889047, 21889048), 21889048);
        IF_SETMOUSEOVERCURSOR(149, 21889048);
    } else {
        IF_SETHIDE(true, comp(334, 21));
        IF_SETHIDE(true, comp(334, 22));
        IF_SETHIDE(true, comp(334, 23));
        while ((int0 < 14)) {
            int1 = INV_GETOBJ(90 as inv, int0);
            if ((int1 != -1 as obj)) {
                int2 = IF_GETNEXTSUBID(comp(334, 13));
                CC_CREATE(comp(334, 13), 4, int2);
                CC_SETTEXTFONT(26 as fontmetrics);
                CC_SETTEXTALIGN(1, 0, 0);
                CC_SETTEXT(script4107(int1, INV_GETNUM(90 as inv, int0), long0));
                CC_SETPOSITION(0, (int0 * 12), 1, 0);
                CC_SETSIZE(STRINGWIDTH(CC_GETTEXT(), CC_GETFONTMETRICS()), 12, 0, 0);
                CC_SETCOLOUR(16777215);
                CC_SETTEXTSHADOW(true);
                CC_SETONTIMER(callback(script9310, 21889037, int2, 0));
            };
            int0 = (int0 + 1);
        };
    };
    CC_DELETEALL(comp(334, 15));
    CC_DELETEALL(comp(334, 33));
    CC_DELETEALL(comp(334, 34));
    int0 = 0;
    var int3 = 0;
    if (((((((((((((((INVOTHER_GETOBJ(90 as inv, 14) != -1 as obj) || (INVOTHER_GETOBJ(90 as inv, 15) != -1 as obj)) || (INVOTHER_GETOBJ(90 as inv, 16) != -1 as obj)) || (INVOTHER_GETOBJ(90 as inv, 17) != -1 as obj)) || (INVOTHER_GETOBJ(90 as inv, 18) != -1 as obj)) || (INVOTHER_GETOBJ(90 as inv, 19) != -1 as obj)) || (INVOTHER_GETOBJ(90 as inv, 20) != -1 as obj)) || (INVOTHER_GETOBJ(90 as inv, 21) != -1 as obj)) || (INVOTHER_GETOBJ(90 as inv, 22) != -1 as obj)) || (INVOTHER_GETOBJ(90 as inv, 23) != -1 as obj)) || (INVOTHER_GETOBJ(90 as inv, 24) != -1 as obj)) || (INVOTHER_GETOBJ(90 as inv, 25) != -1 as obj)) || (INVOTHER_GETOBJ(90 as inv, 26) != -1 as obj)) || (INVOTHER_GETOBJ(90 as inv, 27) != -1 as obj))) {
        IF_SETHIDE(false, comp(334, 33));
        IF_SETHIDE(false, comp(334, 34));
        IF_SETHIDE(false, comp(334, 35));
        while ((int0 < 14)) {
            int3 = script148(int0);
            if (((int3 > 0) && (int3 > (CLIENTCLOCK() - 750)))) {
                IF_SETHIDE(false, comp(334, 19));
                CC_CREATE(comp(334, 33), 3, IF_GETNEXTSUBID(comp(334, 33)));
                CC_CREATE[1](comp(334, 33), 3, IF_GETNEXTSUBID(comp(334, 33)));
                CC_SETPOSITION(0, (int0 * 12), 1, 0);
                CC_SETPOSITION[1](0, (int0 * 12), 1, 0);
                CC_SETSIZE(0, 13, 1, 0);
                CC_SETSIZE[1](0, 13, 1, 0);
                CC_SETCOLOUR(16711680);
                CC_SETCOLOUR[1](10027008);
                CC_SETFILL(1);
                CC_SETFILL[1](0);
                CC_SETONTIMER(callback(script144, -2147483645, -2147483643, int3, (int3 + 750)));
                CC_SETONTIMER[1](callback(script144, -2147483645, -2147483643, int3, (int3 + 750)));
            };
            int1 = INVOTHER_GETOBJ(90 as inv, int0);
            if ((item_getparam(int1, 3758) != -1 as obj)) {
                int1 = item_getparam(int1, 3758);
            };
            if ((int1 != -1 as obj)) {
                int2 = IF_GETNEXTSUBID(comp(334, 33));
                CC_CREATE(comp(334, 33), 4, int2);
                CC_SETTEXTFONT(26 as fontmetrics);
                CC_SETTEXTALIGN(0, 0, 0);
                CC_SETTEXT(script4107(int1, INVOTHER_GETNUM(90 as inv, int0), long1));
                CC_SETPOSITION(0, (int0 * 12), 1, 0);
                CC_SETSIZE(STRINGWIDTH(CC_GETTEXT(), CC_GETFONTMETRICS()), 12, 0, 0);
                CC_SETCOLOUR(16777215);
                CC_SETTEXTSHADOW(true);
                CC_SETONTIMER(callback(script9310, 21889057, int2, 0));
            };
            int0 = (int0 + 1);
        };
        while ((int0 < 28)) {
            int3 = script148(int0);
            if (((int3 > 0) && (int3 > (CLIENTCLOCK() - 750)))) {
                IF_SETHIDE(false, comp(334, 19));
                CC_CREATE(comp(334, 34), 3, IF_GETNEXTSUBID(comp(334, 34)));
                CC_CREATE[1](comp(334, 34), 3, IF_GETNEXTSUBID(comp(334, 34)));
                CC_SETPOSITION(0, ((int0 - 14) * 12), 1, 0);
                CC_SETPOSITION[1](0, ((int0 - 14) * 12), 1, 0);
                CC_SETSIZE(0, 13, 1, 0);
                CC_SETSIZE[1](0, 13, 1, 0);
                CC_SETCOLOUR(16711680);
                CC_SETCOLOUR[1](10027008);
                CC_SETFILL(1);
                CC_SETFILL[1](0);
                CC_SETONTIMER(callback(script144, -2147483645, -2147483643, int3, (int3 + 750)));
                CC_SETONTIMER[1](callback(script144, -2147483645, -2147483643, int3, (int3 + 750)));
            };
            int1 = INVOTHER_GETOBJ(90 as inv, int0);
            if ((item_getparam(int1, 3758) != -1 as obj)) {
                int1 = item_getparam(int1, 3758);
            };
            if ((int1 != -1 as obj)) {
                int2 = IF_GETNEXTSUBID(comp(334, 34));
                CC_CREATE(comp(334, 34), 4, int2);
                CC_SETTEXTFONT(26 as fontmetrics);
                CC_SETTEXTALIGN(0, 0, 0);
                CC_SETTEXT(script4107(int1, INVOTHER_GETNUM(90 as inv, int0), long1));
                CC_SETPOSITION(0, ((int0 - 14) * 12), 1, 0);
                CC_SETSIZE(STRINGWIDTH(CC_GETTEXT(), CC_GETFONTMETRICS()), 12, 0, 0);
                CC_SETCOLOUR(16777215);
                CC_SETTEXTSHADOW(true);
                CC_SETONTIMER(callback(script9310, 21889058, int2, 0));
            };
            int0 = (int0 + 1);
        };
        script4109(114, 21889039, comp(334, 33), comp(334, 34), comp(334, 35), comp(334, 36));
        IF_SETONDRAG(callback(script4108, -2147483647, 21889039, 21889057, 21889058, 21889059, 21889060), 21889060);
        IF_SETONDRAGCOMPLETE(callback(script4108, -2147483647, 21889039, 21889057, 21889058, 21889059, 21889060), 21889060);
        IF_SETMOUSEOVERCURSOR(149, 21889060);
    } else {
        IF_SETHIDE(true, comp(334, 33));
        IF_SETHIDE(true, comp(334, 34));
        IF_SETHIDE(true, comp(334, 35));
        while ((int0 < 14)) {
            int3 = script148(int0);
            if (((int3 > 0) && (int3 > (CLIENTCLOCK() - 750)))) {
                IF_SETHIDE(false, comp(334, 19));
                CC_CREATE(comp(334, 15), 3, IF_GETNEXTSUBID(comp(334, 15)));
                CC_CREATE[1](comp(334, 15), 3, IF_GETNEXTSUBID(comp(334, 15)));
                CC_SETPOSITION(0, (int0 * 12), 1, 0);
                CC_SETPOSITION[1](0, (int0 * 12), 1, 0);
                CC_SETSIZE(0, 13, 1, 0);
                CC_SETSIZE[1](0, 13, 1, 0);
                CC_SETCOLOUR(16711680);
                CC_SETCOLOUR[1](10027008);
                CC_SETFILL(1);
                CC_SETFILL[1](0);
                CC_SETONTIMER(callback(script144, -2147483645, -2147483643, int3, (int3 + 750)));
                CC_SETONTIMER[1](callback(script144, -2147483645, -2147483643, int3, (int3 + 750)));
            };
            int1 = INVOTHER_GETOBJ(90 as inv, int0);
            if ((item_getparam(int1, 3758) != -1 as obj)) {
                int1 = item_getparam(int1, 3758);
            };
            if ((int1 != -1 as obj)) {
                int2 = IF_GETNEXTSUBID(comp(334, 15));
                CC_CREATE(comp(334, 15), 4, int2);
                CC_SETTEXTFONT(26 as fontmetrics);
                CC_SETTEXTALIGN(1, 0, 0);
                CC_SETTEXT(script4107(int1, INVOTHER_GETNUM(90 as inv, int0), long1));
                CC_SETPOSITION(0, (int0 * 12), 1, 0);
                CC_SETSIZE(STRINGWIDTH(CC_GETTEXT(), CC_GETFONTMETRICS()), 12, 0, 0);
                CC_SETCOLOUR(16777215);
                CC_SETTEXTSHADOW(true);
                CC_SETONTIMER(callback(script9310, 21889039, int2, 0));
            };
            int0 = (int0 + 1);
        };
    };
    int3 = script148(-1);
    if ((int3 > 0)) {
        IF_SETHIDE(false, comp(334, 19));
        CC_CREATE(comp(334, 16), 3, 0);
        CC_SETHIDE(false);
        CC_SETPOSITION(0, 0, 0, 0);
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETCOLOUR(16711680);
        CC_SETFILL(1);
        CC_SETONTIMER(callback(script144, -2147483645, -2147483643, int3, (int3 + 750)));
        CC_CREATE(21889040, 3, 1);
        CC_SETHIDE(0);
        CC_SETPOSITION(0, 0, 0, 0);
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETCOLOUR(10027008);
        CC_SETFILL(0);
        CC_SETONTIMER(callback(script144, -2147483645, -2147483643, int3, (int3 + 750)));
    };
    return;
}