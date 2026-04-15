//
function script7188(int0: unknown_int): void {
    if ((int0 == 1)) {
        IF_SETHIDE(false, comp(1372, 2));
        IF_SETSIZE(IF_GETWIDTH(comp(1372, 3)), IF_GETHEIGHT(comp(1372, 3)), 0, 0, comp(1372, 2));
        IF_SETPOSITION((1 + IF_GETX(comp(1372, 3))), (1 + IF_GETY(comp(1372, 3))), 0, 0, comp(1372, 2));
        IF_SETTEXT(IF_GETTEXT(comp(1372, 3)), comp(1372, 2));
        IF_SETTEXTALIGN(0, 1, 0, comp(1372, 2));
        IF_SETTEXTFONT(30 as fontmetrics, comp(1372, 2));
    } else {
        IF_SETHIDE(true, comp(1372, 2));
    };
    return;
}