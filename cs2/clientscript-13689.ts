//
function script13689(): void {
    var int0 = 107413510;
    var int1 = 0;
    var int2 = 0;
    [int1, int2] = script8138(1031);
    script13691(int2);
    if (((varbitplayer_27169 == 1) || (int1 == 0))) {
        IF_SETOP(1, "Expand", int0);
        IF_SETSIZE(60, 30, 0, 0, 107413507);
    } else {
        IF_SETOP(1, "Shrink", int0);
        IF_SETSIZE(struct_getparam(31708, 3484), struct_getparam(31708, 3485), 0, 0, 107413507);
    };
    if ((varbitplayer_40059 == 0)) {
        IF_SETOP(2, "Reaper", int0);
        IF_SETGRAPHIC(13214, 107413508);
    } else {
        IF_SETOP(2, "Slayer", int0);
        IF_SETGRAPHIC(23991, 107413508);
    };
    IF_SETCOLOUR(script10495(0), 107413514);
    IF_SETCOLOUR(script10495(0), 107413515);
    return;
}