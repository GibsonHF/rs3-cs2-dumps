//
function script9255(int0: inv, int1: component, int2: int, int3: inv, int4: component, int5: int): void {
    var int6 = -1 as obj;
    var int7 = -1;
    var int8 = -1;
    if ((CC_FIND(int1, int2) == 1)) {
        if (((int0 == 530 as inv) && (int3 == 93 as inv))) {
            int6 = CC_GETINVOBJECT();
            if (((int6 != -1 as obj) && (CC_FIND[1](int4, int5) == 1))) {
                script9256(int1, int2, comp(671, 25), int0, int4, int5, comp(671, 25), int3);
            };
        } else if (((int0 == 93 as inv) && (int3 == 530 as inv))) {
            int6 = CC_GETINVOBJECT();
            if (((int6 != -1 as obj) && (CC_FIND[1](int4, int5) == 1))) {
                script9256(int1, int2, comp(671, 30), int0, int4, int5, comp(671, 25), int3);
            };
        };
    };
    return;
}