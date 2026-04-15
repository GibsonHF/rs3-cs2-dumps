//
function script749(int0: component, int1: unknown_int, int2: unknown_int): void {
    var int3 = 1000;
    if ((varbitplayer_28141 > 0)) {
        int3 = (int3 + 1000);
    };
    if ((varbitplayer_28142 > 0)) {
        int3 = (int3 + 1000);
    };
    if ((varbitplayer_28143 > 0)) {
        int3 = (int3 + 1000);
    };
    var int4 = (((varbitplayer_28140 + varbitplayer_28141) + varbitplayer_28142) + varbitplayer_28143);
    var int5 = SCALE(255, int3, (int3 - int4));
    var int6 = SCALE(255, int3, int4);
    var int7 = 0;
    IF_SETTEXT(`${inttostring(SCALE(int4, 4000, 100), 10)}%`, comp(18, 18));
    int4 = SCALE(350, 4000, int4);
    IF_SETCOLOUR(script693(int5, int6, int7), comp(18, 19));
    if ((IF_GETWIDTH(int0) < int4)) {
        IF_SETSIZE((IF_GETWIDTH(int0) + 1), 23, 0, 0, int0);
    } else if ((IF_GETWIDTH(int0) > int4)) {
        IF_SETSIZE(MAX(0, (IF_GETWIDTH(int0) - 1)), 23, 0, 0, int0);
    };
    if ((int4 == 350)) {
        IF_SETHIDE(false, comp(18, 20));
    };
    return;
}