//
function script20487(int0: number, int1: number, int2: number): number {
    var int3 = 0;
    if (((int2 > 0) && (CC_FIND(int1, (int2 - 1)) == 1))) {
        int3 = (CC_GETY() + CC_GETHEIGHT());
    };
    CC_CREATE(96797558, 5, IF_GETNEXTSUBID(96797558));
    CC_SETSIZE(0, 2, 1, 0);
    CC_SETPOSITION(0, (int3 + 5), 1, 0);
    CC_SETGRAPHIC(35516);
    CC_CREATE(int1, 4, int2++);
    CC_SETSIZE(0, 8, 1, 0);
    CC_SETPOSITION(0, int3, 1, 0);
    return int2;
}