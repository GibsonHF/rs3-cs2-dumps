//[proc,quickchat_tutorial_addtext]
function script1034(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, string0: string): void {
    CC_CREATE(comp(157, 3), 4, int0);
    CC_SETPOSITION(int1, int2, 0, 0);
    CC_SETSIZE(int3, int4, 0, 0);
    CC_SETCOLOUR(int5);
    CC_SETTEXTSHADOW(true);
    CC_SETTEXTFONT(27 as fontmetrics);
    CC_SETTEXT(string0);
    return;
}