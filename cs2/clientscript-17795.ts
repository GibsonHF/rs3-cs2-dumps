//
function script17795(int0: dbrow): void {
    var int1 = 0;
    var int2 = comp(1224, 17);
    var int3 = comp(1224, 18);
    CC_DELETEALL(int2);
    int1 = (int1 + script17797(int0, int1, int2));
    int1 = (int1 + script17798(int0, int1, int2));
    int1 = (int1 + script17796(int0, int1, int2));
    int1 = (int1 + script17799(int0, int1, int2));
    int1 = (int1 + script17800(int0, int1, int2));
    int1 = (int1 + script17801(int0, int1, int2));
    int1 = (int1 + script17802(int0, int1, int2));
    int1 = (int1 + script17812(int2, int1, 2100 as dbrow, -1 as graphic, -1 as obj, "Glyphs:", 2, -1 as graphic));
    int1 = (int1 + script17803(int0, int1, int2));
    if ((IF_GETHEIGHT(int2) < int1)) {
        IF_SETHIDE(false, int3);
        IF_SETSCROLLPOS(0, 0, int2);
        IF_SETSCROLLSIZE(0, int1, int2);
        script7791(int3, int2);
    } else {
        IF_SETHIDE(true, int3);
        IF_SETSCROLLSIZE(0, 0, int2);
    };
    return;
}