//
function script1913(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): void {
    var int7 = IF_GETNEXTSUBID(int0);
    var int8 = struct_getparam(int2, 7504);
    stack(int0);
    stack(5);
    stack(int7);
    int7 = (int7 + 1);
    CC_CREATE();
    CC_SETSIZE(int6, int6, 0, 0);
    CC_SETPOSITION(((int3 + (int5 / 2)) - (int6 + 3)), int4, 0, 0);
    CC_SETGRAPHIC(30104 as graphic);
    CC_CREATE(int0, 4, int7);
    CC_SETSIZE((int5 / 2), int6, 0, 0);
    CC_SETPOSITION(((int3 + (int5 / 2)) + 3), int4, 0, 0);
    CC_SETTEXTFONT(28 as fontmetrics);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETTEXT(inttostring(int8, 10));
    CC_SETCOLOUR(16777215);
    return;
}