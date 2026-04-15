//
function script9306(int0: unknown_int, int1: unknown_int): int {
    var int2 = 0;
    var int3 = script14337();
    var int4 = -1 as obj;
    var int5 = 0;
    var int6 = 0;
    while ((int2 < int3)) {
        if ((CC_FIND(comp(517, 201), int2) == 1)) {
            if ((int1 == 0)) {
                int4 = INV_GETOBJ(95 as inv, int2);
            } else {
                int4 = CC_GETINVOBJECT();
            };
            if (((int4 != -1 as obj) && (int4 != 48447 as obj))) {
                int5 = script8232(int4);
                cc_setparam(3844, int5);
                if ((int5 != -1)) {
                    pop_array(int5, (push_array(int5) + 1));
                    int6 = (int6 + 1);
                };
            } else {
                cc_setparam(3844, -1);
            };
        };
        int2 = (int2 + 1);
    };
    return int6;
}