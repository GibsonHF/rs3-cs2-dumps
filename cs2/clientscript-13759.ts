//
function script13759(int0: int, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: unknown_int, int5: int, int6: int, int7: unknown_int, string0: unknown_string, string1: unknown_string, string2: unknown_string): void {
    var int8 = int5;
    if ((int4 == 1)) {
        if (((CC_FIND(comp(1029, 68), int0) == 1) && (CC_FIND[1](comp(1029, 67), int0) == 1))) {
            if (((CC_GETGRAPHIC() == 18542 as graphic) || (CC_GETGRAPHIC() == 32060 as graphic))) {
                if ((varbitplayer_22875 == 1)) {
                    CC_SETGRAPHIC(32062 as graphic);
                } else {
                    CC_SETGRAPHIC(18544 as graphic);
                };
                CC_SETCOLOUR[1](15777401);
            } else {
                if ((varbitplayer_22875 == 1)) {
                    CC_SETGRAPHIC(32060 as graphic);
                } else {
                    CC_SETGRAPHIC(18542 as graphic);
                };
                CC_SETCOLOUR[1](16777215);
            };
        };
    } else {
        while ((int8 < int6)) {
            if (((CC_FIND(comp(1029, 68), int8) == 1) && (CC_FIND[1](comp(1029, 67), int8) == 1))) {
                if ((int8 == int0)) {
                    CC_SETGRAPHIC(18525 as graphic);
                    CC_SETCOLOUR[1](15777401);
                } else {
                    CC_SETCOLOUR[1](16777215);
                    CC_SETGRAPHIC(18526 as graphic);
                };
            };
            int8 = (int8 + 1);
        };
    };
    return;
}