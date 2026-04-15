//
function script4249(int0: component, int1: component, int2: component, int3: component, int4: component, int5: int, int6: int, string0: string, string1: string): int {
    var int7 = 27 as fontmetrics;
    var int8 = 20;
    if ((script6431() == true)) {
        int7 = 28 as fontmetrics;
        int8 = 25;
    };
    var int9 = script10495(3);
    IF_SETTEXT(string0, int1);
    IF_SETTEXTFONT(int7, int1);
    if ((int3 != comp(-1, 65535))) {
        IF_SETPOSITION(0, 14, 0, 0, int3);
    };
    var int10 = IF_GETWIDTH(int0);
    var int11 = MAX(((PARAHEIGHT(string1, int10, int7) * 16) + int8), int8);
    IF_SETPOSITION(0, 18, 0, 0, int2);
    switch (int2) {
        case 98304345:
        case 98304342: {
            int11 = MAX(((PARAHEIGHT(string1, 410, int7) * 16) + int8), int8);
            IF_SETSIZE(0, int11, 1, 0, int0);
            IF_SETSIZE(410, 0, 0, 1, int2);
            break;
        }
        default: {
            IF_SETSIZE(0, int11, 1, 0, int0);
            IF_SETSIZE(0, 0, 1, 1, int2);
            break;
        }
    };
    IF_SETTEXT(string1, int2);
    IF_SETTEXTFONT(int7, int2);
    IF_SETCOLOUR(int9, int2);
    IF_SETTEXTFONT(int7, int0);
    IF_SETPOSITION(0, int6, 0, 0, int0);
    if ((int3 != comp(-1, 65535))) {
        if ((int5 == 2)) {
            IF_SETHIDE(true, int3);
            IF_SETHIDE(false, int2);
            IF_CLEARSCRIPTHOOKS(int3);
        } else {
            IF_SETHIDE(true, int2);
            IF_SETHIDE(false, int3);
            if ((int4 != comp(-1, 65535))) {
                IF_SETSIZE((STRINGWIDTH(IF_GETTEXT(int4), IF_GETFONTMETRICS(int4)) + 10), IF_GETHEIGHT(int3), 0, 0, int3);
            };
            IF_SETONOP(callback(script4250, int3, int2), int3);
        };
    } else {
        IF_SETHIDE(false, int2);
    };
    return (int6 + int11);
}