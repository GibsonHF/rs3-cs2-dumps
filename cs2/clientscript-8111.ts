//
function script8111(int0: int, int1: int): void {
    var int2 = comp(1430, 252);
    var int3 = comp(1430, 59);
    var int4 = comp(1430, 266);
    var int5 = script10405(1003);
    if ((varbitplayer_27168 == 1)) {
        IF_SETHIDE(true, struct_getparam(int5, 3507));
    } else {
        IF_SETHIDE(false, struct_getparam(int5, 3507));
    };
    if (((script20655() == 1) || (varbitplayer_27168 == 1))) {
        IF_SETHIDE(true, int2);
        IF_SETHIDE(true, int3);
        IF_SETHIDE(true, int4);
        return;
    };
    IF_SETHIDE(false, int2);
    IF_SETHIDE(false, int3);
    IF_SETHIDE(false, int4);
    IF_SETSIZE(40, 32, 0, 0, int2);
    if ((int0 == 0)) {
        if ((int1 == 0)) {
            if ((varbitplayer_27169 == 1)) {
                IF_SETSIZE((504 + 14), 36, 0, 0, int3);
            } else {
                IF_SETSIZE(504, 36, 0, 0, int3);
            };
            IF_SETPOSITION(0, 0, 0, 2, int3);
            IF_SETSIZE(16, (36 - 4), 0, 0, int2);
            IF_SETPOSITION((((IF_GETWIDTH(IF_GETPARENTLAYER(int2)) - IF_GETWIDTH(int3)) - IF_GETWIDTH(int2)) / 2), 2, 2, 2, int2);
            IF_SETSIZE(16, 16, 0, 0, int4);
            IF_SETPOSITION((((IF_GETWIDTH(IF_GETPARENTLAYER(int4)) - IF_GETWIDTH(int3)) - IF_GETWIDTH(int4)) / 2), ((3 + 30) - 16), 2, 0, int4);
        } else {
            IF_SETSIZE(36, 504, 0, 0, int3);
            IF_SETPOSITION(0, 0, 0, 0, int3);
            IF_SETSIZE((36 - 4), 16, 0, 0, int2);
            IF_SETPOSITION(2, (((IF_GETHEIGHT(IF_GETPARENTLAYER(int2)) - IF_GETHEIGHT(int3)) - IF_GETHEIGHT(int2)) / 2), 0, 2, int2);
            IF_SETSIZE(16, 16, 0, 0, int4);
            IF_SETPOSITION(((3 + 30) - 16), 2, 2, 0, int4);
        };
    } else if ((int1 == 0)) {
        IF_SETSIZE(245, 72, 0, 0, int3);
        IF_SETPOSITION(0, 0, 0, 2, int3);
        IF_SETSIZE(16, (72 - 4), 0, 0, int2);
        IF_SETPOSITION((((IF_GETWIDTH(IF_GETPARENTLAYER(int2)) - IF_GETWIDTH(int3)) - IF_GETWIDTH(int2)) / 2), 2, 2, 2, int2);
        IF_SETSIZE(16, 16, 0, 0, int4);
        IF_SETPOSITION((((IF_GETWIDTH(IF_GETPARENTLAYER(int4)) - IF_GETWIDTH(int3)) - IF_GETWIDTH(int4)) / 2), ((3 + 50) - 16), 2, 0, int4);
    } else {
        IF_SETSIZE(72, 245, 0, 0, int3);
        IF_SETPOSITION(0, 0, 0, 0, int3);
        IF_SETSIZE((72 - 4), 16, 0, 0, int2);
        IF_SETPOSITION(2, (((IF_GETHEIGHT(IF_GETPARENTLAYER(int2)) - IF_GETHEIGHT(int3)) - IF_GETHEIGHT(int2)) / 2), 0, 2, int2);
        IF_SETSIZE(16, 16, 0, 0, int4);
        IF_SETPOSITION(((2 + 50) - 16), 2, 2, 0, int4);
    };
    return;
}