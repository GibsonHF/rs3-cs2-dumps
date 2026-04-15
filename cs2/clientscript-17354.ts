//
function script17354(): void {
    if ((varplayer_10850 == -1 as struct)) {
        return;
    };
    var string0 = "Information";
    var string1 = struct_getparam(varplayer_10850, 6136);
    var int0 = comp(1802, 325);
    var int1 = comp(1802, 326);
    var int2 = script17359(string1);
    if ((int2 > IF_GETHEIGHT(int1))) {
        IF_SETHIDE(false, int0);
        IF_SETSCROLLPOS(0, 0, int1);
        IF_SETSCROLLSIZE(0, (int2 + 4), int1);
        script7791(int0, int1);
    } else {
        IF_SETHIDE(true, int0);
        IF_SETSCROLLSIZE(0, 0, int1);
    };
    IF_SETTEXT(string1, comp(1802, 327));
    IF_SETTEXT(string0, comp(1802, 328));
    script17358(-1 as struct);
    return;
}