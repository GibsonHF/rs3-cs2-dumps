//
function script17806(int0: number): void {
    var int1 = 0;
    var int2 = 80216095;
    var int3 = 80216096;
    CC_DELETEALL(int2);
    int1 = (int1 + script17807(int0, int1, int2));
    int1 = (int1 + script17808(int0, int1, int2));
    int1 = (int1 + script17809(int0, int1, int2));
    int1 = (int1 + script17810(int0, int1, int2));
    int1 = (int1 + script17811(int0, int1, int2));
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