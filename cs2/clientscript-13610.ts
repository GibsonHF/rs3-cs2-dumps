//
function script13610(int0: component, int1: int, int2: graphic, int3: int): void {
    var int4 = 28;
    var int5 = 2;
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(int5, (int5 + int1), 0, 0);
    CC_SETSIZE(int4, int4, 0, 0);
    CC_SETGRAPHIC(int2);
    if (((int3 == -2) || (int3 == -1))) {
        CC_CREATE(int0, 3, IF_GETNEXTSUBID(int0));
        CC_SETPOSITION(int5, (int5 + int1), 0, 0);
        CC_SETSIZE(int4, int4, 0, 0);
        CC_SETFILL(1);
        CC_SETCOLOUR(script10495(7));
        CC_SETTRANS(70);
        CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
        CC_SETPOSITION(int5, (int5 + int1), 0, 0);
        CC_SETSIZE(int4, int4, 0, 0);
        if ((int3 == -2)) {
            CC_SETGRAPHIC(26606 as graphic);
        } else {
            CC_SETGRAPHIC(26605 as graphic);
        };
    };
    return;
}