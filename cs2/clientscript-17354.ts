//
function script17354(): void {
    if ((varplayer_10850 == -1 as struct)) {
        return;
    };
    var string0 = "Information";
    var string1 = struct_getparam(varplayer_10850, 6136);
    var int0 = 118096197;
    var int1 = 118096198;
    var int2 = script17359(string1);
    if ((int2 > IF_GETHEIGHT(int1))) {
        IF_SETHIDE(0, int0);
        IF_SETSCROLLPOS(0, 0, int1);
        IF_SETSCROLLSIZE(0, (int2 + 4), int1);
        script7791(int0, int1);
    } else {
        IF_SETHIDE(1, int0);
        IF_SETSCROLLSIZE(0, 0, int1);
    };
    IF_SETTEXT(string1, 118096199);
    IF_SETTEXT(string0, 118096200);
    script17358(-1);
    return;
}