//
function script13848(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 2;
    var int4 = IF_GETWIDTH(comp(567, 15));
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    script13846(comp(567, 14), comp(567, 15), 13319 as cs2enum);
    script13849();
    while ((int1 < 30)) {
        int0 = script2384(int1, 1);
        if ((int0 == -1)) {
            return;
        };
        if ((varbitplayer_22875 == 1)) {
            int6 = 4;
            int7 = 7;
        } else {
            int6 = 4;
            int7 = 4;
        };
        if (((enum_hasoutput(0, 13319 as cs2enum, int0) == 1) && (script19633(int0) == true))) {
            int0 = enum_getreverseindex(0, 0, 13319 as cs2enum, int0, 0);
            if (((CC_FIND(comp(567, 14), int0) == 1) && (CC_FIND[1](comp(567, 15), int0) == 1))) {
                CC_SETHIDE(false);
                CC_SETPOSITION(int2, int3, 0, 0);
                CC_SETHIDE[1](false);
                CC_SETPOSITION[1]((int2 + int6), (int3 + int7), 0, 0);
                if (((++int2 + 35) >= int4)) {
                    int2 = 0;
                    int3 = (int3 + 44);
                };
            };
            int1 = (int1 + 1);
        } else {
            script2393(int0, -1);
        };
    };
    return;
}