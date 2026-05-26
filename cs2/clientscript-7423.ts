//
function script7423(): void {
    var int0 = 0;
    var int1 = IF_GETY(85918080);
    var int2 = 34;
    var int3 = 0;
    var int4 = (STRINGWIDTH(IF_GETTEXT(85918081), 28) + 10);
    var int5 = 0;
    if ((STRINGWIDTH(IF_GETTEXT(85918079), 28) > 0)) {
        int3 = (STRINGWIDTH(IF_GETTEXT(85918079), 28) + 10);
        int0 = (STRINGWIDTH("-", 28) + 10);
        IF_SETTEXT("-", 85918080);
        int5 = (((int4 + int0) + int3) + 20);
        IF_SETSIZE(int5, IF_GETHEIGHT(85918077), 0, 0, 85918077);
    } else {
        IF_SETSIZE(int4, IF_GETHEIGHT(85918077), 0, 0, 85918077);
    };
    IF_SETSIZE(int3, 0, 0, 1, 85918079);
    IF_SETSIZE(int0, 0, 0, 1, 85918080);
    IF_SETSIZE(int4, 0, 0, 1, 85918081);
    if ((STRINGWIDTH(IF_GETTEXT(85918079), 28) > 0)) {
        IF_SETPOSITION(IF_GETX(85918078), int1, 0, 0, 85918079);
        IF_SETPOSITION(((IF_GETX(85918079) + IF_GETWIDTH(85918079)) + 15), int1, 0, 0, 85918080);
        IF_SETPOSITION(((IF_GETX(85918080) + IF_GETWIDTH(85918080)) + 5), int1, 0, 0, 85918081);
    } else {
        IF_SETPOSITION(0, 0, 1, 1, 85918081);
    };
    return;
}