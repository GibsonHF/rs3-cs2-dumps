//
function script9255(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    var int6 = -1 as obj;
    var int7 = -1;
    var int8 = -1;
    if ((CC_FIND(int1, int2) == 1)) {
        if (((int0 == 530) && (int3 == 93))) {
            int6 = CC_GETINVOBJECT();
            if (((int6 != -1 as obj) && (CC_FIND[1](int4, int5) == 1))) {
                script9256(int1, int2, 43974681, int0, int4, int5, 43974681, int3);
            };
        } else if (((int0 == 93) && (int3 == 530))) {
            int6 = CC_GETINVOBJECT();
            if (((int6 != -1 as obj) && (CC_FIND[1](int4, int5) == 1))) {
                script9256(int1, int2, 43974686, int0, int4, int5, 43974681, int3);
            };
        };
    };
    return;
}