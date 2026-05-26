//
function script12713(int0: number): void {
    var int1 = 0;
    var int2 = 1;
    var string0 = "";
    [int1, int2] = script12711();
    IF_SETTEXT(`${inttostring(int1, 10)}%`, 106168349);
    IF_SETPARAM_INT(5932, int2, 106168347);
    if ((varbitplayer_33689 == 500)) {
        IF_SETHIDE(1, 106168349);
        if ((IF_FIND(106168339) == 1)) {
            cc_setparam(5836, 4);
            cc_setparam(4156, 1);
            cc_setparam(4157, 0);
        };
        if ((IF_FIND(106168350) == 1)) {
            cc_setparam(5836, 4);
        };
        if ((IF_FIND(106168320) == 1)) {
            cc_setparam(5836, 4);
            cc_setparam(5837, 1);
            cc_setparam(5938, 0);
            cc_setparam(5939, 100);
        };
    } else {
        IF_SETHIDE(0, 106168349);
        if ((IF_FIND(106168339) == 1)) {
            cc_setparam(5836, 1);
            cc_setparam(4156, -1);
        };
        if ((IF_FIND(106168350) == 1)) {
            cc_setparam(5836, 1);
        };
        if ((IF_FIND(106168320) == 1)) {
            cc_setparam(5836, 1);
            cc_setparam(5837, -1);
        };
    };
    return;
}