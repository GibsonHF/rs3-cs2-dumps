//
function script13344(int0: int, int1: int): void {
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    while ((CC_FIND(comp(1851, 40), int2) == 1)) {
        if ((CC_GETY() > int0)) {
            CC_SETPOSITION(CC_GETX(), (CC_GETY() + int1), 0, 0);
            int3 = (int2 + 1);
            int4 = (int2 + 11);
            while (((int3 < int4) && (CC_FIND[1](comp(1851, 40), int3) == 1))) {
                CC_SETPOSITION[1](CC_GETX[1](), (CC_GETY[1]() + int1), 0, 0);
                int3 = (int3 + 1);
            };
        };
        int2 = (int2 + 11);
    };
    return;
}