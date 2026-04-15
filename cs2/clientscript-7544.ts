//
function script7544(int0: int, int1: cs2enum): void {
    var int2 = comp(-1, 65535);
    var int3 = 0;
    var int4 = 0;
    if ((int1 == 12874 as cs2enum)) {
        CC_DELETEALL(comp(1468, 4));
        CC_DELETEALL(comp(1468, 5));
        [int3, int4] = script13534(int0, int1, 1, comp(1468, 1), comp(1468, 2));
        int2 = script13543(int0);
    } else {
        CC_DELETEALL(comp(1468, 1));
        CC_DELETEALL(comp(1468, 2));
        [int3, int4] = script13534(int0, int1, 1, comp(1468, 4), comp(1468, 5));
        int2 = script13546(int0);
    };
    script16569(1468 as overlayinterface);
    script13536(int3, int4, int2, -1, 1, 0, 0, 60, 40);
    return;
}