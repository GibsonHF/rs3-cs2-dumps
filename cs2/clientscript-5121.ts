//
function script5121(): void {
    CC_DELETEALL(comp(1119, 14));
    var int0 = 0;
    var int1 = (126 + 1);
    var int2 = -1;
    var int3 = -1 as graphic;
    while ((int0 <= int1)) {
        if ((int0 > varbitplayer_7084)) {
            if (((CC_FIND(comp(1119, 9), (int0 * 3)) == 1) && (CC_GETHIDE() == false))) {
                CC_CLEARSCRIPTHOOKS();
                if ((CC_FIND[1](comp(1119, 9), ((int0 * 3) + 1)) == 1)) {
                    if ((varclient_777 == int0)) {
                        CC_SETGRAPHIC[1](5918 as graphic);
                    } else {
                        CC_SETGRAPHIC[1](5922 as graphic);
                    };
                };
                if ((CC_FIND[1](comp(1119, 9), ((int0 * 3) + 2)) == 1)) {
                    CC_SETCOLOUR[1](8355711);
                };
            };
        } else if ((varclient_777 == int0)) {
            int2 = 5917;
            int3 = 5916 as graphic;
            if (((CC_FIND(comp(1119, 9), (int0 * 3)) == 1) && (CC_GETHIDE() == false))) {
                CC_SETONMOUSEOVER(callback(script5122, -2147483645, -2147483643, int2, 16777215));
                CC_SETONMOUSELEAVE(callback(script5122, -2147483645, -2147483643, int3, 14671823));
                if ((CC_FIND[1](73334793, ((int0 * 3) + 1)) == 1)) {
                    CC_SETGRAPHIC[1](int3);
                };
                if ((CC_FIND[1](comp(1119, 9), ((int0 * 3) + 2)) == 1)) {
                    CC_SETCOLOUR[1](14671823);
                };
            };
        } else {
            int2 = 5921;
            int3 = 5920 as graphic;
            if (((CC_FIND(comp(1119, 9), (int0 * 3)) == 1) && (CC_GETHIDE() == false))) {
                CC_SETONMOUSEOVER(callback(script5122, -2147483645, -2147483643, int2, 16777215));
                CC_SETONMOUSELEAVE(callback(script5122, -2147483645, -2147483643, int3, 13615023));
                if ((CC_FIND[1](73334793, ((int0 * 3) + 1)) == 1)) {
                    CC_SETGRAPHIC[1](int3);
                };
                if ((CC_FIND[1](comp(1119, 9), ((int0 * 3) + 2)) == 1)) {
                    CC_SETCOLOUR[1](13615023);
                };
            };
        };
        if ((int0 <= varclient_777)) {
            CC_CREATE(comp(1119, 14), 3, int0);
            if ((int0 == varclient_777)) {
                CC_SETSIZE(0, 0, 1, 1);
                CC_SETPOSITION(0, 0, 1, 1);
                CC_SETTRANS(255);
                CC_SETOP(1, "Confirm");
            } else {
                CC_SETHIDE(true);
            };
        };
        int0 = (int0 + 1);
    };
    if ((varclient_777 >= 0)) {
        IF_SETHIDE(false, comp(1119, 14));
        IF_SETHIDE(true, comp(1119, 15));
    } else {
        IF_SETHIDE(true, comp(1119, 14));
        IF_SETHIDE(false, comp(1119, 15));
    };
    return;
}