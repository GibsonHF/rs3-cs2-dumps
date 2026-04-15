//
function script9642(int0: int, int1: int, int2: unknown_int): [obj, int] {
    var int3 = script5797(int0);
    var int4 = (int3 + int1);
    var int5 = -1 as obj;
    while ((int3 < int4)) {
        if (((int2 == 1) && (CC_FIND(comp(517, 201), int3) == 1))) {
            int5 = CC_GETINVOBJECT();
        } else {
            int5 = INV_GETOBJ(95 as inv, int3);
        };
        if (((int5 != -1 as obj) && (int5 != 48447 as obj))) {
            return [int5, 2147483647];
        };
        int3 = (int3 + 1);
    };
    return [48447 as obj, 0];
}