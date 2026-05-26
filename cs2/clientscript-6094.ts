//
function script6094(): void {
    var int0 = 82903060;
    var int1 = 24086;
    if ((varbitplayer_987 == 1)) {
        int1 = 24086;
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
    int0 = 82903054;
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