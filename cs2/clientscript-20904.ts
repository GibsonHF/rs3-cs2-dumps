//
function script20904(int0: number, int1: number, int2: number, int3: number): void {
    CC_CREATE(int0, 4, 0);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETSIZE(IF_GETWIDTH(int1), IF_GETHEIGHT(int1), 0, 0);
    CC_SETTEXTFONT(28 as fontmetrics);
    if ((int2 == -1)) {
        CC_SETTEXT("Too many results. Please refine your search.");
    } else if ((int3 > 0)) {
        CC_SETTEXT("No matching items are available in Ironman mode.");
    } else {
        CC_SETTEXT("No matching items found.");
    };
    CC_SETTEXTALIGN(1, 1, 0);
    script11024(3);
    CC_SETTEXTSHADOW(false);
    IF_SETSCROLLSIZE(0, 0, int1);
    script11702(0, 0);
    varclient_6789 = 0;
    varclient_6790 = 0;
    return;
}