//
function script14294(): int {
    var int0 = 0;
    var int1 = 0;
    var int2 = -1 as obj;
    var int3 = script14337();
    while ((int0 < int3)) {
        if ((CC_FIND(comp(517, 201), int0) == 1)) {
            int2 = CC_GETINVOBJECT();
        };
        if ((((int2 != -1 as obj) && (int2 != 48447 as obj)) && (OC_MEMBERS(int2) == 0))) {
            int1 = (int1 + 1);
        };
        int0 = (int0 + 1);
    };
    return int1;
}