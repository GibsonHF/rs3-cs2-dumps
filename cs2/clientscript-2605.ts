//
function script2605(int0: number): void {
    if ((int0 == -1 as obj)) {
        IF_SETHIDE(1, 2424863);
        return;
    };
    IF_SETHIDE(0, 2424863);
    var int1 = item_getparam(int0, 2989);
    if ((int1 == -1 as obj)) {
        int1 = int0;
    };
    IF_SETSIZE(0, 50, 1, 0, 2424833);
    IF_SETSIZE(0, 90, 1, 0, 2424834);
    script7126(2424832, int0);
    var int2 = ((IF_GETY(2424832) + IF_GETHEIGHT(2424832)) + 2);
    var int3 = 0;
    var int4 = ((IF_GETY(2424996) + IF_GETHEIGHT(2424996)) + 2);
    IF_SETPOSITION(IF_GETX(2424833), int2, 0, 0, 2424833);
    int3 = script7127(int0, int4, 2424833);
    if ((int3 > int4)) {
        IF_SETHIDE(0, 2424833);
        int2 = ((int2 + int3) + 2);
    } else {
        IF_SETHIDE(1, 2424833);
    };
    IF_SETPOSITION(IF_GETX(2424834), int2, 0, 0, 2424834);
    int4 = ((IF_GETY(2424997) + IF_GETHEIGHT(2424997)) + 2);
    int3 = script7129(int0, int4, 2424834);
    if ((int3 > int4)) {
        IF_SETHIDE(0, 2424834);
        int2 = (int2 + int3);
    } else {
        IF_SETHIDE(1, 2424834);
    };
    if ((IF_GETHEIGHT(2424864) < int2)) {
        IF_SETSCROLLSIZE(IF_GETWIDTH(2424864), int2, 2424864);
    } else {
        IF_SETSCROLLSIZE(0, 0, 2424864);
    };
    IF_SETSCROLLPOS(0, 0, 2424864);
    script31(2424863, 2424864, 4343, 4340, 4341, 4342, 4337, 4336);
    return;
}