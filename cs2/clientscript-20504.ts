//
function script20504(int0: struct): void {
    var int1 = 0;
    var int2 = 0;
    if (((varbitplayer_27169 == 0) && (varbitplayer_60441 == 1))) {
        [int1, int1, int1, int2] = script20543(int0, 0);
        IF_SETSIZE(struct_getparam(52716 as struct, 9399), IF_GETHEIGHT(struct_getparam(int0, 3503)), 0, 0, struct_getparam(int0, 3503));
        IF_SETSIZE(0, 28, 1, 1, struct_getparam(int0, 3506));
        IF_SETSIZE(0, (int2 - 4), 1, 1, struct_getparam(int0, 3505));
        IF_SETPOSITION(0, (int2 - 4), 1, 0, struct_getparam(int0, 3505));
    } else if ((varbitplayer_27169 == 1)) {
        IF_SETSIZE(0, 28, 1, 1, struct_getparam(int0, 3506));
        IF_SETSIZE(0, 4, 1, 1, struct_getparam(int0, 3505));
        IF_SETPOSITION(0, 4, 1, 0, struct_getparam(int0, 3505));
    };
    return;
}