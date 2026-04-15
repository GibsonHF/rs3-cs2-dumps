//
function script12603(): void {
    var int0 = struct_getparam(script10405(28), 3503);
    IF_SETPOSITION((275 + 30), 0, 2, 0, int0);
    var int1 = struct_getparam(script10405(28), 3505);
    var int2 = (IF_GETWIDTH(int0) - IF_GETWIDTH(int1));
    var int3 = (IF_GETHEIGHT(int0) - IF_GETHEIGHT(int1));
    var int4 = (varclient_5495 + int2);
    var int5 = (varclient_5496 + int3);
    if ((int5 > 275)) {
        int4 = (int4 + 16);
    };
    IF_SETSIZE(int4, MIN(int5, 275), 0, 0, int0);
    var int6 = 0;
    if ((IF_GETHIDE(int0) == false)) {
        int6 = int4;
    };
    int0 = struct_getparam(script10405(1005), 3503);
    IF_SETPOSITION(0, 0, 0, 0, int0);
    if ((varbitplayer_27168 == 1)) {
        IF_SETSIZE((275 + int6), (189 + 35), 1, 1, int0);
    } else {
        IF_SETSIZE((275 + int6), ((189 + 35) + 76), 1, 1, int0);
    };
    int0 = struct_getparam(script10405(1014), 3503);
    IF_SETPOSITION((275 + int6), 0, 2, 0, int0);
    int0 = struct_getparam(script10405(1036), 3503);
    IF_SETPOSITION(0, 0, 0, 0, int0);
    IF_SETSIZE((275 + int6), 189, 1, 1, int0);
    return;
}