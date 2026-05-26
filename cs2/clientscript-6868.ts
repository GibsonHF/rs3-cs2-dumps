//
function script6868(int0: number, int1: number, int2: number): number {
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    if (((int1 > 0) && (CC_FIND(89128960, int2) == 1))) {
        int3 = ((CC_GETY() + CC_GETHEIGHT()) + 4);
    };
    if ((CC_FIND(89128960, int0) == 1)) {
        CC_SETPOSITION(0, int3, 0, 0);
    };
    if ((CC_FIND(89128960, (int0 + 1)) == 1)) {
        CC_SETPOSITION(120, int3, 0, 0);
    };
    if ((CC_FIND(89128960, (int0 + 2)) == 1)) {
        CC_SETPOSITION(315, int3, 0, 0);
        int4 = ((CC_GETY() + CC_GETHEIGHT()) + 4);
        int5 = (int3 + ((CC_GETHEIGHT() / 2) - (15 / 2)));
    };
    if ((CC_FIND(89128960, (int0 + 3)) == 1)) {
        CC_SETPOSITION(450, int5, 0, 0);
    };
    if ((int4 > IF_GETHEIGHT(89128960))) {
        IF_SETSCROLLSIZE(IF_GETWIDTH(89128960), int4, 89128960);
        script31(89128961, 89128960, 5666, 5663, 5664, 5665, 5686, 5685);
    } else {
        IF_SETSCROLLPOS(0, 0, 89128960);
    };
    return int0;
}