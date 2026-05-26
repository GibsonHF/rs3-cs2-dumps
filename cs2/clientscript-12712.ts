//
function script12712(): void {
    var int0 = 0;
    var int1 = 0;
    [int0, int1] = script12711();
    IF_SETONVARTRANSMIT(callback(script12713, -2147483645, 6507, 1), 106168346);
    IF_SETONTIMER(callback(script12631, -2147483645, -1), 106168347);
    IF_SETPARAM_INT(5835, 3, 106168347);
    IF_SETPARAM_INT(5930, 2, 106168347);
    IF_SETTEXT(`${inttostring(int0, 10)}%`, 106168349);
    IF_SETPARAM_INT(5932, int1, 106168347);
    IF_SETSIZE(IF_GETWIDTH(106168347), int1, 0, 0, 106168347);
    if ((varbitplayer_33689 == 500)) {
        IF_SETTRANS(0, 106168320);
    } else {
        IF_SETTRANS(255, 106168320);
    };
    if ((IF_FIND(106168339) == 1)) {
        CC_SETONTIMER(callback(script12631, -2147483645, -2147483643));
        cc_setparam(5942, (1000 * 5));
        cc_setparam(5936, 0);
    };
    if ((IF_FIND(106168350) == 1)) {
        CC_SETONTIMER(callback(script12631, -2147483645, -2147483643));
        cc_setparam(5942, (1000 * 5));
        cc_setparam(5936, 0);
    };
    if ((IF_FIND(106168320) == 1)) {
        CC_SETONTIMER(callback(script12631, -2147483645, -2147483643));
        cc_setparam(5942, (1000 * 5));
        cc_setparam(5936, 0);
        cc_setparam(5940, 1000);
    };
    return;
}