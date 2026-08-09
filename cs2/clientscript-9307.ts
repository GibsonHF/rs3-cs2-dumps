//
function script9307(int0: number, int1: number): number {
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = -1 as obj;
    [int2, int3] = script5788();
    while ((int4 <= 15)) {
        int5 = int2;
        while ((int5 < int3)) {
            if ((CC_FIND(comp(517, 201), int5) == 1)) {
                if ((int1 == 0)) {
                    int8 = INV_GETOBJ(95 as inv, int5);
                    int6 = INV_GETNUM(95 as inv, int5);
                } else {
                    int8 = CC_GETINVOBJECT();
                    int6 = CC_GETINVCOUNT();
                };
                if ((int8 != -1 as obj)) {
                    if ((int8 != 48447 as obj)) {
                        if ((int6 == 0)) {
                            cc_setparam(3844, int4);
                            pop_array(int4, (push_array(int4) + 1));
                            int7 = (int7 + 1);
                        } else {
                            cc_setparam(3844, -1);
                        };
                    } else {
                        cc_setparam(3844, -1);
                    };
                } else {
                    cc_setparam(3844, -1);
                };
            };
            int5 = (int5 + 1);
        };
        if ((int4 == 0)) {
            int4 = 2;
        } else {
            int4 = (int4 + 1);
        };
        [int2, int3] = script5787(script14372(int4));
    };
    return int7;
}