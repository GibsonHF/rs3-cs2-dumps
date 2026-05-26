//
function script20488(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): number {
    var int6 = 0;
    if (((int5 > 0) && (CC_FIND(int4, (int5 - 1)) == 1))) {
        int6 = (CC_GETY() + CC_GETHEIGHT());
    };
    CC_CREATE(int4, 4, int5++);
    CC_SETSIZE(0, int0, 1, 0);
    CC_SETPOSITION(0, int6, 1, 0);
    int6 = (CC_GETY() + CC_GETHEIGHT());
    CC_CREATE(int4, 3, int5++);
    CC_SETPOSITION(0, int6, 1, 0);
    CC_SETSIZE((int1 * 2), 1, 1, 0);
    CC_SETCOLOUR(int2);
    int6 = (CC_GETY() + CC_GETHEIGHT());
    CC_CREATE(int4, 4, int5++);
    CC_SETSIZE(0, int0, 1, 0);
    CC_SETPOSITION(0, int6, 1, 0);
    return int5;
}