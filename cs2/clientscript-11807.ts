//
function script11807(int0: int, int1: int, int2: int): void {
    var int3 = script11787(int0);
    var int4 = script11788(int0);
    if (((int3 == comp(-1, 65535)) || (int4 == comp(-1, 65535)))) {
        return;
    };
    if ((int1 == 0)) {
        if ((int2 == 0)) {
            if ((varbitplayer_27169 == 1)) {
                IF_SETSIZE((504 + 14), 36, 0, 0, int3);
            } else {
                IF_SETSIZE(504, 36, 0, 0, int3);
            };
            IF_SETPOSITION(0, 0, 0, 1, int3);
            IF_SETSIZE(16, 2, 0, 1, int4);
            IF_SETPOSITION((((IF_GETWIDTH(IF_GETPARENTLAYER(int4)) - IF_GETWIDTH(int3)) - IF_GETWIDTH(int4)) / 2), 0, 2, 1, int4);
        } else {
            IF_SETSIZE(36, 504, 0, 0, int3);
            IF_SETPOSITION(0, 0, 1, 0, int3);
            IF_SETSIZE(2, 16, 1, 0, int4);
            IF_SETPOSITION(0, (((IF_GETHEIGHT(IF_GETPARENTLAYER(int4)) - IF_GETHEIGHT(int3)) - IF_GETHEIGHT(int4)) / 2), 1, 2, int4);
        };
    } else if ((int2 == 0)) {
        IF_SETSIZE(245, 72, 0, 0, int3);
        IF_SETPOSITION(0, 0, 0, 1, int3);
        IF_SETSIZE(16, 2, 0, 1, int4);
        IF_SETPOSITION((((IF_GETWIDTH(IF_GETPARENTLAYER(int4)) - IF_GETWIDTH(int3)) - IF_GETWIDTH(int4)) / 2), 0, 2, 1, int4);
    } else {
        IF_SETSIZE(72, 245, 0, 0, int3);
        IF_SETPOSITION(0, 0, 1, 0, int3);
        IF_SETSIZE(2, 16, 1, 0, int4);
        IF_SETPOSITION(0, (((IF_GETHEIGHT(IF_GETPARENTLAYER(int4)) - IF_GETHEIGHT(int3)) - IF_GETHEIGHT(int4)) / 2), 1, 2, int4);
    };
    return;
}