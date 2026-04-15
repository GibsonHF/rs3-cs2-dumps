//
function script6411(int0: component, int1: component, int2: cs2enum): void {
    if ((((int2 == -1 as cs2enum) || (int0 == comp(-1, 65535))) || (int1 == comp(-1, 65535)))) {
        return;
    };
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    var int3 = ENUM_GETOUTPUTCOUNT(int2);
    var int4 = 0;
    var int5 = 5;
    var int6 = -1;
    var int7 = (IF_GETHEIGHT(int0) - 10);
    var int8 = 0;
    var int9 = 0;
    switch (int2) {
        case 10301: {
            int6 = varbitplayer_6070;
            break;
        }
        case 10302: {
            int6 = varbitplayer_28967;
            break;
        }
        case 10303: {
            int6 = varbitplayer_28968;
            break;
        }
    };
    int7 = (int7 - (int3 * 18));
    int7 = (18 + (int7 / (int3 - 1)));
    while ((int4 < int3)) {
        int8 = enum_getvalue(0, 0, int2, int4);
        int9 = IF_GETNEXTSUBID(int0);
        CC_CREATE(int0, 5, int9);
        CC_SETSIZE(18, 18, 0, 0);
        CC_SETPOSITION(5, int5, 0, 0);
        if ((int6 == int8)) {
            CC_SETGRAPHIC(18525 as graphic);
        } else {
            CC_SETGRAPHIC(18526 as graphic);
        };
        CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
        CC_SETSIZE(25, 18, 1, 0);
        CC_SETPOSITION(30, int5, 0, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXT(enum_getvalue(0, 36, 10304 as cs2enum, int8));
        CC_SETONMOUSEOVER(callback(script10496, -2147483645, -2147483643, 4));
        CC_SETONMOUSELEAVE(callback(script10496, -2147483645, -2147483643, 3));
        script11024(3);
        CC_CREATE(int1, 4, int4);
        CC_SETSIZE(10, 18, 1, 0);
        CC_SETPOSITION(5, int5, 0, 0);
        CC_SETOP(1, "Select");
        CC_SETONOP(callback(script6411, int0, int1, int2));
        int5 = (int5 + int7);
        int4 = (int4 + 1);
    };
    return;
}