//
function script5053(int0: number, int1: number): void {
    IF_SETSCROLLPOS((IF_GETSCROLLX(72810508) + int0), (IF_GETSCROLLY(72810508) + int1), 72810508);
    var int2 = IF_GETSCROLLWIDTH(72810508);
    var int3 = IF_GETWIDTH(72810508);
    var int4 = (int3 - 32);
    var int5 = MIN(MAX(SCALE(int3, int2, int4), 10), int4);
    var int6 = SCALE(IF_GETSCROLLY(72810508), MAX((int2 - int3), 1), (int4 - int5));
    var int7 = SCALE(IF_GETSCROLLX(72810508), MAX((int2 - int3), 1), (int4 - int5));
    int6 = (MAX(MIN(int6, (int4 - int5)), 0) + 16);
    int7 = (MAX(MIN(int7, (int4 - int5)), 0) + 16);
    if (((CC_FIND(72810512, 3) == 1) && (CC_FIND[1](72810513, 3) == 1))) {
        CC_SETSIZE(0, int5, 1, 0);
        CC_SETSIZE[1](int5, 0, 0, 1);
        CC_SETPOSITION(0, int6, 1, 0);
        CC_SETPOSITION[1](int7, 0, 0, 1);
    };
    if (((CC_FIND(72810512, 4) == 1) && (CC_FIND[1](72810513, 4) == 1))) {
        CC_SETPOSITION(0, int6, 1, 0);
        CC_SETPOSITION[1](int7, 0, 0, 1);
    };
    if (((CC_FIND(72810512, 5) == 1) && (CC_FIND[1](72810513, 5) == 1))) {
        CC_SETPOSITION(0, ((int6 + int5) - CC_GETHEIGHT()), 1, 0);
        CC_SETPOSITION[1](((int7 + int5) - CC_GETWIDTH[1]()), 0, 0, 1);
    };
    return;
}