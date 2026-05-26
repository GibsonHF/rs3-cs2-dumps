//
function script13759(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, string0: string, string1: string, string2: string): void {
    var int8 = int5;
    if ((int4 == 1)) {
        if (((CC_FIND(67436612, int0) == 1) && (CC_FIND[1](67436611, int0) == 1))) {
            if (((CC_GETGRAPHIC() == 18542) || (CC_GETGRAPHIC() == 32060))) {
                if ((varbitplayer_22875 == 1)) {
                    CC_SETGRAPHIC(32062);
                } else {
                    CC_SETGRAPHIC(18544);
                };
                CC_SETCOLOUR[1](15777401);
            } else {
                if ((varbitplayer_22875 == 1)) {
                    CC_SETGRAPHIC(32060);
                } else {
                    CC_SETGRAPHIC(18542);
                };
                CC_SETCOLOUR[1](16777215);
            };
        };
    } else {
        while ((int8 < int6)) {
            if (((CC_FIND(67436612, int8) == 1) && (CC_FIND[1](67436611, int8) == 1))) {
                if ((int8 == int0)) {
                    CC_SETGRAPHIC(18525);
                    CC_SETCOLOUR[1](15777401);
                } else {
                    CC_SETCOLOUR[1](16777215);
                    CC_SETGRAPHIC(18526);
                };
            };
            int8 = (int8 + 1);
        };
    };
    return;
}