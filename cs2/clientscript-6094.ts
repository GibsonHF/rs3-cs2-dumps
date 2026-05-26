//
function script6094(): void {
    var int0 = comp(1265, 20);
    var int1 = 24086 as graphic;
    if ((varbitplayer_987 == 1)) {
        int1 = 24086 as graphic;
    };
    var int2 = 0;
    while ((int2 < 40)) {
        if ((CC_FIND(int0, int2) == 1)) {
            CC_SETGRAPHIC(int1);
            CC_SETONMOUSEOVER(callback(script6100, varbitplayer_987, 0, 1, -2147483645, -2147483643));
            CC_SETONMOUSELEAVE(callback(script6100, varbitplayer_987, 0, 0, -2147483645, -2147483643));
        };
        int2 = (int2 + 1);
    };
    int2 = 0;
    int0 = comp(1265, 14);
    while ((int2 < 40)) {
        if ((CC_FIND(int0, int2) == 1)) {
            CC_SETGRAPHIC(int1);
            CC_SETONMOUSEOVER(callback(script6100, varbitplayer_987, 0, 1, -2147483645, -2147483643));
            CC_SETONMOUSELEAVE(callback(script6100, varbitplayer_987, 0, 0, -2147483645, -2147483643));
        };
        int2 = (int2 + 1);
    };
    return;
}