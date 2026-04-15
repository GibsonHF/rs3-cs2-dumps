//
function script2605(int0: obj): void {
    if ((int0 == -1 as obj)) {
        IF_SETHIDE(true, comp(37, 31));
        return;
    };
    IF_SETHIDE(false, comp(37, 31));
    var int1 = item_getparam(int0, 2989);
    if ((int1 == -1 as obj)) {
        int1 = int0;
    };
    IF_SETSIZE(0, 50, 1, 0, comp(37, 1));
    IF_SETSIZE(0, 90, 1, 0, comp(37, 2));
    script7126(comp(37, 0), int0);
    var int2 = ((IF_GETY(comp(37, 0)) + IF_GETHEIGHT(comp(37, 0))) + 2);
    var int3 = 0;
    var int4 = ((IF_GETY(comp(37, 164)) + IF_GETHEIGHT(comp(37, 164))) + 2);
    IF_SETPOSITION(IF_GETX(comp(37, 1)), int2, 0, 0, comp(37, 1));
    int3 = script7127(int0, int4, comp(37, 1));
    if ((int3 > int4)) {
        IF_SETHIDE(false, comp(37, 1));
        int2 = ((int2 + int3) + 2);
    } else {
        IF_SETHIDE(true, comp(37, 1));
    };
    IF_SETPOSITION(IF_GETX(comp(37, 2)), int2, 0, 0, comp(37, 2));
    int4 = ((IF_GETY(comp(37, 165)) + IF_GETHEIGHT(comp(37, 165))) + 2);
    int3 = script7129(int0, int4, comp(37, 2));
    if ((int3 > int4)) {
        IF_SETHIDE(false, comp(37, 2));
        int2 = (int2 + int3);
    } else {
        IF_SETHIDE(true, comp(37, 2));
    };
    if ((IF_GETHEIGHT(comp(37, 32)) < int2)) {
        IF_SETSCROLLSIZE(IF_GETWIDTH(comp(37, 32)), int2, comp(37, 32));
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(37, 32));
    };
    IF_SETSCROLLPOS(0, 0, comp(37, 32));
    script31(comp(37, 31), comp(37, 32), 4343 as graphic, 4340 as graphic, 4341 as graphic, 4342 as graphic, 4337 as graphic, 4336 as graphic);
    return;
}