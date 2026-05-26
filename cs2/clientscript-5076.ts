//
function script5076(int0: number, int1: number): void {
    var int2 = 0;
    var int3 = 0;
    if ((CC_FIND(int0, int1) == 1)) {
        if ((CC_GETHIDE() == 1)) {
            int2 = ((IF_GETSCROLLWIDTH(72810508) - IF_GETWIDTH(72810508)) / 2);
            int3 = int2;
        } else {
            int2 = ((CC_GETX() + (CC_GETWIDTH() / 2)) - (IF_GETWIDTH(72810508) / 2));
            int3 = ((CC_GETY() + (CC_GETHEIGHT() / 2)) - (IF_GETHEIGHT(72810508) / 2));
        };
    } else {
        int2 = ((IF_GETSCROLLWIDTH(72810508) - IF_GETWIDTH(72810508)) / 2);
        int3 = int2;
    };
    IF_SETSCROLLPOS(int2, int3, 72810508);
    script5053(0, 0);
    return;
}