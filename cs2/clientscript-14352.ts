//
function script14352(int0: inv, int1: obj): int {
    var int2 = script14074(int0);
    var int3 = INV_SIZE(int0);
    var int4 = 0;
    var int5 = 0;
    while ((int4 < int3)) {
        if (((CC_FIND[1](int2, int4) == 1) && (CC_GETINVOBJECT[1]() == int1))) {
            int5 = (int5 + CC_GETINVCOUNT[1]());
        };
        int4 = (int4 + 1);
    };
    return int5;
}