//
function script5076(int0: component, int1: int): void {
    var int2 = 0;
    var int3 = 0;
    if ((CC_FIND(int0, int1) == 1)) {
        if ((CC_GETHIDE() == true)) {
            int2 = ((IF_GETSCROLLWIDTH(comp(1111, 12)) - IF_GETWIDTH(comp(1111, 12))) / 2);
            int3 = int2;
        } else {
            int2 = ((CC_GETX() + (CC_GETWIDTH() / 2)) - (IF_GETWIDTH(comp(1111, 12)) / 2));
            int3 = ((CC_GETY() + (CC_GETHEIGHT() / 2)) - (IF_GETHEIGHT(comp(1111, 12)) / 2));
        };
    } else {
        int2 = ((IF_GETSCROLLWIDTH(comp(1111, 12)) - IF_GETWIDTH(comp(1111, 12))) / 2);
        int3 = int2;
    };
    IF_SETSCROLLPOS(int2, int3, comp(1111, 12));
    script5053(0, 0);
    return;
}