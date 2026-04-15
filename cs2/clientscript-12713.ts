//
function script12713(int0: unknown_int): void {
    var int1 = 0;
    var int2 = 1;
    var string0 = "";
    [int1, int2] = script12711();
    IF_SETTEXT(`${inttostring(int1, 10)}%`, comp(1620, 29));
    IF_SETPARAM_INT(5932, int2, comp(1620, 27));
    if ((varbitplayer_33689 == 500)) {
        IF_SETHIDE(true, comp(1620, 29));
        if ((IF_FIND(comp(1620, 19)) == 1)) {
            cc_setparam(5836, 4);
            cc_setparam(4156, 1);
            cc_setparam(4157, 0);
        };
        if ((IF_FIND(comp(1620, 30)) == 1)) {
            cc_setparam(5836, 4);
        };
        if ((IF_FIND(comp(1620, 0)) == 1)) {
            cc_setparam(5836, 4);
            cc_setparam(5837, 1);
            cc_setparam(5938, 0);
            cc_setparam(5939, 100);
        };
    } else {
        IF_SETHIDE(false, comp(1620, 29));
        if ((IF_FIND(comp(1620, 19)) == 1)) {
            cc_setparam(5836, 1);
            cc_setparam(4156, -1);
        };
        if ((IF_FIND(comp(1620, 30)) == 1)) {
            cc_setparam(5836, 1);
        };
        if ((IF_FIND(comp(1620, 0)) == 1)) {
            cc_setparam(5836, 1);
            cc_setparam(5837, -1);
        };
    };
    return;
}