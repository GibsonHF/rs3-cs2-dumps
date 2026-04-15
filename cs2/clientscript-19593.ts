//
function script19593(int0: inv, int1: obj, int2: int, int3: int): int {
    var int4 = 0;
    var int5 = 0;
    var int6 = script19567(int0);
    if (((OC_UNCERT(int1) == int1) && (OC_STACKABLE(int1) == 0))) {
    } else if ((script3802(int1) == true)) {
        while ((int5 < int3)) {
            if ((((CC_FIND[1](int6, int5) == 1) && (CC_GETINVOBJECT[1]() == -1 as obj)) && (--int2 == 0))) {
                return 0;
            };
            int5 = (int5 + 1);
        };
        return int2;
    };
    var int7 = -1 as obj;
    while ((int5 < int3)) {
        if ((CC_FIND[1](int6, int5) == 1)) {
            int7 = CC_GETINVOBJECT[1]();
            if ((int7 == int1)) {
                int4 = ((2147483647 - CC_GETINVCOUNT[1]()) - int2);
                if ((int4 < 0)) {
                    return (0 - int4);
                };
                return 0;
            };
            if ((int7 == -1 as obj)) {
                int4 = 1;
            };
        };
        int5 = (int5 + 1);
    };
    if ((int4 == 1)) {
        return 0;
    };
    return int2;
}