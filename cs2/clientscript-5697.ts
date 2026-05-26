//
function script5697(int0: number, int1: number): void {
    var string0 = script12096(int1);
    if ((STRING_LENGTH(string0) <= 0)) {
        return;
    };
    var int2 = 0;
    var int3 = 0;
    var int4 = 26;
    if ((CC_FIND(79823094, int0) == 1)) {
        if ((IF_GETHIDE(79823096) == 1)) {
            int3 = ((CC_GETHEIGHT() + CC_GETY()) - 5);
            if ((script6431() == 1)) {
                IF_SETTEXTFONT(28, 79823098);
                int4 = 28;
            };
            int2 = ((MAX(PARAHEIGHT(string0, 500, int4), 1) * 12) + 30);
            IF_SETTEXT(string0, 79823098);
            IF_SETSIZE(590, int2, 0, 0, 79823096);
            if ((((int3 + int2) - IF_GETSCROLLY(79823092)) > IF_GETHEIGHT(79823092))) {
                int3 = (CC_GETY() - (int2 - 10));
            };
            IF_SETPOSITION(IF_GETX(79823096), int3, 0, 0, 79823096);
            IF_SETHIDE(0, 79823096);
        } else {
            IF_SETHIDE(1, 79823096);
        };
    };
    return;
}