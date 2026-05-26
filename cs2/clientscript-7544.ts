//
function script7544(int0: number, int1: number): void {
    var int2 = -1;
    var int3 = 0;
    var int4 = 0;
    if ((int1 == 12874)) {
        CC_DELETEALL(96206852);
        CC_DELETEALL(96206853);
        [int3, int4] = script13534(int0, int1, 1, 96206849, 96206850);
        int2 = script13543(int0);
    } else {
        CC_DELETEALL(96206849);
        CC_DELETEALL(96206850);
        [int3, int4] = script13534(int0, int1, 1, 96206852, 96206853);
        int2 = script13546(int0);
    };
    script16569(1468);
    script13536(int3, int4, int2, -1, 1, 0, 0, 60, 40);
    return;
}