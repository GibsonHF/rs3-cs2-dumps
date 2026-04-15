//
function script2681(int0: component, int1: int, int2: int, int3: int, int4: int, int5: fontmetrics, int6: unknown_int, string0: string): void {
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    if ((int6 == 1)) {
        CC_SETSIZE(int1, int2, 1, 0);
    } else {
        CC_SETSIZE(int1, int2, 0, 0);
    };
    CC_SETPOSITION(int3, int4, 0, 0);
    CC_SETTEXT(string0);
    CC_SETTEXTFONT(int5);
    CC_SETTEXTSHADOW(true);
    script6888(3);
    return;
}