//
function script20487(int0: component, int1: component, int2: int): int {
    var int3 = 0;
    if (((int2 > 0) && (CC_FIND(int1, (int2 - 1)) == 1))) {
        int3 = (CC_GETY() + CC_GETHEIGHT());
    };
    CC_CREATE(comp(1477, 886), 5, IF_GETNEXTSUBID(comp(1477, 886)));
    CC_SETSIZE(0, 2, 1, 0);
    CC_SETPOSITION(0, (int3 + 5), 1, 0);
    CC_SETGRAPHIC(35516 as graphic);
    CC_CREATE(int1, 4, int2++);
    CC_SETSIZE(0, 8, 1, 0);
    CC_SETPOSITION(0, int3, 1, 0);
    return int2;
}