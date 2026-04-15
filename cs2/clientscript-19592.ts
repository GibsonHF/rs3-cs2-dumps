//
function script19592(int0: obj, int1: int, int2: int): int {
    if (((item_getparam(int0, 59) == 1) || (item_getparam(int0, 1047) == 1))) {
        return int1;
    };
    var int3 = 0;
    if ((script3802(int0) == true)) {
        while ((int3 < int2)) {
            if ((CC_FIND[1](comp(1313, 75), int3) == 1)) {
                if ((CC_GETINVOBJECT[1]() == 48447 as obj)) {
                } else if ((((CC_GETINVOBJECT[1]() == int0) && (CC_GETINVCOUNT[1]() == 0)) && (--int1 == 0))) {
                    return 0;
                };
            };
            int3 = (int3 + 1);
        };
        return int1;
    };
    var int4 = 0;
    var int5 = -1 as obj;
    while ((int3 < int2)) {
        if ((CC_FIND[1](comp(1313, 75), int3) == 1)) {
            int5 = CC_GETINVOBJECT[1]();
            if ((int5 == int0)) {
                int4 = ((2147483647 - CC_GETINVCOUNT[1]()) - int1);
                if ((int4 < 0)) {
                    return (0 - int4);
                };
                return 0;
            };
            if ((int5 == 48447 as obj)) {
                int4 = 1;
            };
        };
        int3 = (int3 + 1);
    };
    if ((int4 == 1)) {
        return 0;
    };
    return int1;
}