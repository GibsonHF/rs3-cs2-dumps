//
function script11391(): void {
    var int0 = script11401();
    if ((int0 == -1 as cs2enum)) {
        IF_SETHIDE(false, comp(1621, 17));
        return;
    };
    IF_SETHIDE(true, comp(1621, 17));
    var int1 = 0;
    var int2 = ENUM_GETOUTPUTCOUNT(int0);
    var int3 = IF_GETWIDTH(comp(1621, 6));
    var int4 = 8;
    var int5 = 5;
    var int6 = -1 as obj;
    var int7 = 40;
    var int8 = 36;
    var int9 = 36;
    var int10 = 32;
    var int11 = 3;
    var int12 = 1;
    var int13 = -1 as graphic;
    var int14 = 0;
    if ((script6431() == true)) {
        int7 = 44;
        int8 = 44;
        int9 = 44;
        int10 = 39;
        int11 = ((int7 - int9) / 2);
        int12 = ((int8 - int10) / 2);
        int13 = 18266 as graphic;
    } else if ((varbitplayer_22875 != 1)) {
        int13 = 18266 as graphic;
    };
    while ((int1 < int2)) {
        if (((CC_FIND(comp(1621, 25), int1) == 1) && (CC_FIND[1](comp(1621, 20), int1) == 1))) {
            int6 = enum_getvalue(0, 33, int0, int1);
            if ((script5252(int6) == 1)) {
                if ((((int4 + int7) + 4) > int3)) {
                    int4 = 8;
                    int5 = ((int5 + int8) + 4);
                };
                CC_SETPOSITION((int4 + int11), (int5 + int12), 0, 0);
                if ((script11400(int1) == 1)) {
                    script11393(int6, int1);
                } else {
                    CC_SETONTIMER(callback(script11392, -2147483645, -2147483643, int6, int1));
                };
                CC_SETGRAPHIC[1](int13);
                CC_SETTRANS[1](int14);
                CC_SETCOLOUR[1](0);
                CC_SETHIDE(false);
                CC_SETPOSITION[1](int4, int5, 0, 0);
                CC_SETHIDE[1](false);
                int4 = ((int4 + int7) + 4);
            } else {
                CC_SETHIDE(true);
                CC_SETHIDE[1](true);
            };
        };
        int1 = (int1 + 1);
    };
    int5 = ((int5 + 36) + 5);
    if ((int5 >= IF_GETHEIGHT(comp(1621, 6)))) {
        IF_SETSCROLLSIZE(0, int5, comp(1621, 6));
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(1621, 6));
    };
    script7791(comp(1621, 7), comp(1621, 6));
    return;
}