//
function script2400(int0: component): void {
    if ((((varclient_3467 != -1) || (varbitplayer_27169 == 1)) || (varbitplayer_38842 == 1))) {
        return;
    };
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    var int1 = script2387(1);
    var int2 = 0;
    if ((IF_FIND(comp(1431, 1)) == 1)) {
        int2 = cc_getparam(6837);
    };
    int1 = (int1 - int2);
    if ((int1 <= 0)) {
        script8800("Open Ribbon Setup", int0, -1);
        return;
    };
    script8421(comp(568, 1), comp(568, 4), comp(568, 2), comp(-1, 65535), "", 21259 as struct, -1, 0, -1 as graphic, 38884 as struct);
    var int3 = 32;
    var int4 = 32;
    var int5 = 4;
    var int6 = -2;
    var int7 = -2;
    var int8 = 0;
    var int9 = 0;
    if ((varbitplayer_22875 == 1)) {
        int3 = 32;
        int4 = 32;
        int5 = 0;
        int8 = 4;
        int9 = 7;
    };
    var int10 = (int3 + 8);
    var int11 = (((int4 + int5) * int1) + 8);
    var int12 = 0;
    var int13 = -1;
    var int14 = int2;
    var int15 = 0;
    var int16 = (int1 + int2);
    if ((IF_GETWIDTH(comp(1431, 1)) < IF_GETHEIGHT(comp(1431, 1)))) {
        int12 = script2255(int11, int10, int0, -1, 2, int6, int7, 0, 0, comp(1477, 690));
    } else {
        if ((varbitplayer_22875 == 1)) {
            int11 = (((int3 + int5) * int1) + 8);
        };
        int12 = script2255(int10, int11, int0, -1, 1, int7, int6, 0, 0, comp(1477, 690));
    };
    script13846(comp(568, 5), comp(568, 6), 13319 as cs2enum);
    while ((int14 < int16)) {
        int13 = script2384(int14, 1);
        if ((varbitplayer_22875 != 1)) {
            int8 = 4;
            int9 = 4;
        };
        if ((enum_hasoutput(0, 13319 as cs2enum, int13) == 1)) {
            int13 = enum_getreverseindex(0, 0, 13319 as cs2enum, int13, 0);
            if (((CC_FIND(comp(568, 5), int13) == 1) && (CC_FIND[1](comp(568, 6), int13) == 1))) {
                CC_SETHIDE(false);
                CC_SETHIDE[1](false);
                switch (int12) {
                    case 0:
                    case 1: {
                        CC_SETPOSITION(0, int15, 1, 2);
                        CC_SETPOSITION[1](0, (int15 + int9), 1, 2);
                        int15 = (int15 + (int3 + int5));
                        break;
                    }
                    default: {
                        CC_SETPOSITION(int15, 0, 2, 1);
                        CC_SETPOSITION[1]((int15 + int8), 0, 2, 1);
                        int15 = (int15 + (int4 + int5));
                        break;
                    }
                };
            };
        } else {
            script2393(int13, -1);
        };
        int14 = (int14 + 1);
    };
    return;
}