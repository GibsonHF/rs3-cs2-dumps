//
function script7482(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, string0: string, string1: string): number {
    if ((int2 != -1)) {
        IF_SETHIDE(0, int2);
        IF_SETTEXT(string0, int4);
        if ((int0 != -1)) {
            IF_SETGRAPHIC(int0, int3);
            if ((script6431() == 1)) {
                IF_SETSIZE(30, 30, 0, 0, int3);
            } else {
                IF_SETSIZE(25, 25, 0, 0, int3);
            };
        };
        if ((int1 != -1)) {
            IF_SETOBJECT(int1, -1, int3);
            if ((script6431() == 1)) {
                IF_SETSIZE(SCALE(3, 4, 44), SCALE(3, 4, 39), 0, 0, int3);
            } else {
                IF_SETSIZE(SCALE(3, 4, 36), SCALE(3, 4, 32), 0, 0, int3);
            };
        };
        if ((strcmp(string1, "") != 0)) {
            IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643), int2);
            IF_SETONMOUSELEAVE(callback(script8805), int2);
            IF_SETONCLICK(callback(script11913, string1, int2), int2);
        };
        if ((script6431() == 1)) {
            if ((STRING_LENGTH(string0) > 4)) {
                IF_SETTEXTFONT(26, int4);
            } else {
                IF_SETTEXTFONT(28, int4);
            };
        };
    };
    return int5;
}