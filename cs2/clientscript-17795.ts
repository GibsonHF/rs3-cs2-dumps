//
function script17795(int0: number): void {
    var int1 = 0;
    var int2 = 80216081;
    var int3 = 80216082;
    CC_DELETEALL(int2);
    int1 = (int1 + script17797(int0, int1, int2));
    int1 = (int1 + script17798(int0, int1, int2));
    int1 = (int1 + script17796(int0, int1, int2));
    int1 = (int1 + script17799(int0, int1, int2));
    int1 = (int1 + script17800(int0, int1, int2));
    int1 = (int1 + script17801(int0, int1, int2));
    int1 = (int1 + script17802(int0, int1, int2));
    int1 = (int1 + script17812(int2, int1, 2100, -1, -1, "Glyphs:", 2, -1));
    int1 = (int1 + script17803(int0, int1, int2));
    if ((IF_GETHEIGHT(int2) < int1)) {
        IF_SETHIDE(0, int3);
        IF_SETSCROLLPOS(0, 0, int2);
        IF_SETSCROLLSIZE(0, int1, int2);
        script7791(int3, int2);
    } else {
        IF_SETHIDE(1, int3);
        IF_SETSCROLLSIZE(0, 0, int2);
    };
    return;
}