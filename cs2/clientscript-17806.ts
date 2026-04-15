//
function script17806(int0: dbrow): void {
    var int1 = 0;
    var int2 = comp(1224, 31);
    var int3 = comp(1224, 32);
    CC_DELETEALL(int2);
    int1 = (int1 + script17807(int0, int1, int2));
    int1 = (int1 + script17808(int0, int1, int2));
    int1 = (int1 + script17809(int0, int1, int2));
    int1 = (int1 + script17810(int0, int1, int2));
    int1 = (int1 + script17811(int0, int1, int2));
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