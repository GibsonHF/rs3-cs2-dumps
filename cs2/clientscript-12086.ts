//
function script12086(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, string0: string): [number, number] {
    var int6 = struct_getparam(int5, 4538);
    CC_CREATE(int0, 4, int1);
    CC_SETTEXTFONT(struct_getparam(int5, 4536));
    script10674(int0, int1, struct_getparam(int5, 4537));
    var int7 = (PARAHEIGHT(string0, int4, CC_GETFONTMETRICS()) * int6);
    CC_SETTEXT(string0);
    CC_SETSIZE(int4, int7, 0, 0);
    CC_SETPOSITION(int2, int3, 0, 0);
    var int1 = (int1 + 1);
    return [int1, (int3 + int7)];
}