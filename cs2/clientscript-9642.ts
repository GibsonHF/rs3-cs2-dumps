//
function script9642(int0: number, int1: number, int2: number): [number, number] {
    var int3 = script5797(int0);
    var int4 = (int3 + int1);
    var int5 = -1;
    while ((int3 < int4)) {
        if (((int2 == 1) && (CC_FIND(33882313, int3) == 1))) {
            int5 = CC_GETINVOBJECT();
        } else {
            int5 = INV_GETOBJ(95, int3);
        };
        if (((int5 != -1) && (int5 != 48447))) {
            return [int5, 2147483647];
        };
        int3 = (int3 + 1);
    };
    return [48447, 0];
}