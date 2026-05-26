//
function script10051(): void {
    var int0 = comp(907, 72);
    var int1 = comp(907, 45);
    var int2 = comp(907, 98);
    if ((((PARAHEIGHT(IF_GETTEXT(int0), IF_GETWIDTH(int0), 58 as fontmetrics) > 1) || (PARAHEIGHT(IF_GETTEXT(int1), IF_GETWIDTH(int1), 58 as fontmetrics) > 1)) || (PARAHEIGHT(IF_GETTEXT(int2), IF_GETWIDTH(int2), 58 as fontmetrics) > 1))) {
        IF_SETTEXTFONT(57 as fontmetrics, int0);
        IF_SETTEXTFONT(57 as fontmetrics, int1);
        IF_SETTEXTFONT(57 as fontmetrics, int2);
    } else {
        IF_SETTEXTFONT(58 as fontmetrics, int0);
        IF_SETTEXTFONT(58 as fontmetrics, int1);
        IF_SETTEXTFONT(58 as fontmetrics, int2);
    };
    return;
}