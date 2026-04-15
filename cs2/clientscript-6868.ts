//
function script6868(int0: int, int1: int, int2: int): int {
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    if (((int1 > 0) && (CC_FIND(comp(1360, 0), int2) == 1))) {
        int3 = ((CC_GETY() + CC_GETHEIGHT()) + 4);
    };
    if ((CC_FIND(comp(1360, 0), int0) == 1)) {
        CC_SETPOSITION(0, int3, 0, 0);
    };
    if ((CC_FIND(comp(1360, 0), (int0 + 1)) == 1)) {
        CC_SETPOSITION(120, int3, 0, 0);
    };
    if ((CC_FIND(comp(1360, 0), (int0 + 2)) == 1)) {
        CC_SETPOSITION(315, int3, 0, 0);
        int4 = ((CC_GETY() + CC_GETHEIGHT()) + 4);
        int5 = (int3 + ((CC_GETHEIGHT() / 2) - (15 / 2)));
    };
    if ((CC_FIND(comp(1360, 0), (int0 + 3)) == 1)) {
        CC_SETPOSITION(450, int5, 0, 0);
    };
    if ((int4 > IF_GETHEIGHT(comp(1360, 0)))) {
        IF_SETSCROLLSIZE(IF_GETWIDTH(comp(1360, 0)), int4, comp(1360, 0));
        script31(comp(1360, 1), comp(1360, 0), 5666 as graphic, 5663 as graphic, 5664 as graphic, 5665 as graphic, 5686 as graphic, 5685 as graphic);
    } else {
        IF_SETSCROLLPOS(0, 0, comp(1360, 0));
    };
    return int0;
}