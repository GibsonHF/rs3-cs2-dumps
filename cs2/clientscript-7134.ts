//
function script7134(int0: component, int1: unknown_int, int2: unknown_int, int3: int, int4: int, int5: int, int6: int, string0: string): void {
    CC_CREATE(int0, 4, int6);
    switch (int2) {
        case 3: {
            CC_SETCOLOUR(2996756);
            break;
        }
        case 2: {
            script11024(6);
            break;
        }
        default: {
            script11024(3);
            break;
        }
    };
    CC_SETTEXT(string0);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXTSHADOW(true);
    CC_SETTEXTALIGN(0, 1, 13);
    var int7 = (16 * PARAHEIGHT(string0, int5, 26 as fontmetrics));
    CC_SETSIZE(PARAWIDTH(string0, int5, 26 as fontmetrics), int7, 0, 0);
    CC_SETPOSITION(int4, int3, 0, 0);
    return;
}