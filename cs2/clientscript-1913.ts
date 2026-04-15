//
function script1913(int0: component, int1: int, int2: struct, int3: int, int4: int, int5: int, int6: int): void {
    var int7 = IF_GETNEXTSUBID(int0);
    var int8 = struct_getparam(int2, 7504);
    CC_CREATE(int0, 5, int7++);
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