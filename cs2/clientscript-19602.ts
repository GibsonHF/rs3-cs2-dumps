//
function script19602(int0: int, int1: int, int2: obj, int3: int, int4: inv, int5: int, int6: boolean, int7: unknown_int): void {
    if ((CC_FIND(comp(1313, 75), int0) == 1)) {
        if ((int3 >= int1)) {
            if ((int7 == 1)) {
                script19539(int2, 0);
            } else {
                script19539(-1 as obj, 0);
            };
        } else {
            script19539(int2, (int1 - int3));
        };
    };
    var int8 = -1;
    var int9 = script19567(int4);
    if (((OC_STACKABLE(int2) == 1) || ((int6 == true) && (OC_CERT(int2) != int2)))) {
        int8 = script19585(int4, OC_CERT(int2), 0);
        if (((int8 != int5) && (int8 != -1))) {
            var int5 = int8;
        };
        if ((int5 == -1)) {
            int5 = script3798(int9, 0);
        };
        if (((int5 != -1) && (CC_FIND(int9, int5) == 1))) {
            if ((int6 == true)) {
                script19607(int4, OC_CERT(int2), (CC_GETINVCOUNT() + int3));
            } else {
                script19607(int4, int2, (CC_GETINVCOUNT() + int3));
            };
        };
        return;
    };
    if ((int5 == -1)) {
        int5 = script3798(int9, 0);
        if ((int5 == -1)) {
            return;
        };
    };
    while ((int3 > 0)) {
        if ((CC_FIND(int9, int5) == 1)) {
            script19607(int4, int2, 1);
        };
        int5 = script3798(int9, int5);
        if ((int5 == -1)) {
            return;
        };
        var int3 = (int3 - 1);
    };
    return;
}