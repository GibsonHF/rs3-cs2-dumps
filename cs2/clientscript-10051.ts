//
function script10051(): void {
    var int0 = 59441224;
    var int1 = 59441197;
    var int2 = 59441250;
    if ((((PARAHEIGHT(IF_GETTEXT(int0), IF_GETWIDTH(int0), 58) > 1) || (PARAHEIGHT(IF_GETTEXT(int1), IF_GETWIDTH(int1), 58) > 1)) || (PARAHEIGHT(IF_GETTEXT(int2), IF_GETWIDTH(int2), 58) > 1))) {
        IF_SETTEXTFONT(57, int0);
        IF_SETTEXTFONT(57, int1);
        IF_SETTEXTFONT(57, int2);
    } else {
        IF_SETTEXTFONT(58, int0);
        IF_SETTEXTFONT(58, int1);
        IF_SETTEXTFONT(58, int2);
    };
    return;
}