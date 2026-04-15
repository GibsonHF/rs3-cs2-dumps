//
function script13846(int0: component, int1: component, int2: cs2enum): void {
    var int3 = 0;
    var int4 = ENUM_GETOUTPUTCOUNT(int2);
    while ((int3 < int4)) {
        if (((CC_FIND(int0, int3) == 1) && (CC_FIND[1](int1, int3) == 1))) {
            CC_SETHIDE(true);
            CC_SETHIDE[1](true);
        };
        int3 = (int3 + 1);
    };
    return;
}