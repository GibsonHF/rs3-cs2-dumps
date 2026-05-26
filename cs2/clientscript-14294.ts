//
function script14294(): number {
    var int0 = 0;
    var int1 = 0;
    var int2 = -1;
    var int3 = script14337();
    while ((int0 < int3)) {
        if ((CC_FIND(33882313, int0) == 1)) {
            int2 = CC_GETINVOBJECT();
        };
        if ((((int2 != -1) && (int2 != 48447)) && (OC_MEMBERS(int2) == 0))) {
            int1 = (int1 + 1);
        };
        int0 = (int0 + 1);
    };
    return int1;
}