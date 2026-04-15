//
function script5697(int0: int, int1: struct): void {
    var string0 = script12096(int1);
    if ((STRING_LENGTH(string0) <= 0)) {
        return;
    };
    var int2 = 0;
    var int3 = 0;
    var int4 = 26 as fontmetrics;
    if ((CC_FIND(comp(1218, 246), int0) == 1)) {
        if ((IF_GETHIDE(comp(1218, 248)) == true)) {
            int3 = ((CC_GETHEIGHT() + CC_GETY()) - 5);
            if ((script6431() == true)) {
                IF_SETTEXTFONT(28 as fontmetrics, comp(1218, 250));
                int4 = 28 as fontmetrics;
            };
            int2 = ((MAX(PARAHEIGHT(string0, 500, int4), 1) * 12) + 30);
            IF_SETTEXT(string0, comp(1218, 250));
            IF_SETSIZE(590, int2, 0, 0, comp(1218, 248));
            if ((((int3 + int2) - IF_GETSCROLLY(comp(1218, 244))) > IF_GETHEIGHT(comp(1218, 244)))) {
                int3 = (CC_GETY() - (int2 - 10));
            };
            IF_SETPOSITION(IF_GETX(comp(1218, 248)), int3, 0, 0, comp(1218, 248));
            IF_SETHIDE(false, comp(1218, 248));
        } else {
            IF_SETHIDE(true, comp(1218, 248));
        };
    };
    return;
}