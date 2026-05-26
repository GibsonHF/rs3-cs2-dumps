//
function script15348(int0: number, int1: number, int2: number): void {
    if ((enum_getvalue(41, 26, 16076 as cs2enum, int2) == -1 as cs2enum)) {
        return;
    };
    var int3 = ACHIEVEMENT_FINDCATEGORY(int2);
    var int4 = 0;
    var int5 = ACHIEVEMENT_FINDNEXT();
    while ((int5 != -1)) {
        if ((ACHIEVEMENT_REQSTATE(int5) == -2)) {
            int4 = (int4 + 1);
        };
        int5 = ACHIEVEMENT_FINDNEXT();
    };
    if ((CC_FIND(int0, int1) == 1)) {
        if (((varbitplayer_48340 == 0) || ((varbitplayer_48340 == 1) && (int4 < int3)))) {
            CC_SETGRAPHIC(30205);
        } else {
            CC_SETGRAPHIC(-1);
        };
    };
    return;
}