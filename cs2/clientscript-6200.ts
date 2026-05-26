//
function script6200(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, string0: string): void {
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    if ((int6 == 1)) {
        CC_SETSIZE(int1, int2, 1, 0);
    } else {
        CC_SETSIZE(int1, int2, 0, 0);
    };
    CC_SETPOSITION(int3, int4, 0, 0);
    CC_SETTEXT(string0);
    CC_SETTEXTFONT(int5);
    CC_SETTEXTSHADOW(1);
    script6888(0);
    return;
}