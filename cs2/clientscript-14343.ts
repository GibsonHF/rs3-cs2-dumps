//
function script14343(int0: number, int1: number, int2: number): number {
    var int3 = INV_SIZE(int0);
    var int4 = script14074(int0);
    while ((int2 < int3)) {
        if (((CC_FIND(int4, int2) == 1) && (CC_GETINVOBJECT() == int1))) {
            return int2;
        };
        var int2 = (int2 + 1);
    };
    return -1;
}