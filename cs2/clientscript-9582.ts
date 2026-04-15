//
function script9582(int0: component, int1: int, int2: int): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    define_array[9](10);
    var int3 = 8;
    var int4 = 0;
    var int5 = IF_GETY(int0);
    if ((IF_FIND(int0) == 1)) {
        if ((cc_getparam(4052) == -1)) {
            cc_setparam(4052, int1);
        };
        if ((cc_getparam(4053) == -1)) {
            cc_setparam(4053, int2);
        };
    };
    if ((IF_FIND(IF_GETPARENTLAYER(int0)) == 1)) {
        pop_array(9, cc_getparam(4050));
        if ((push_array(9) != -1)) {
            return;
        };
        pop_array(0, cc_getparam(4041));
        pop_array(1, cc_getparam(4042));
        pop_array(2, cc_getparam(4043));
        pop_array(3, cc_getparam(4044));
        pop_array(4, cc_getparam(4045));
        pop_array(5, cc_getparam(4046));
        pop_array(6, cc_getparam(4047));
        pop_array(7, cc_getparam(4048));
        pop_array(8, cc_getparam(4049));
        while ((int4 == 0)) {
            if ((int3 == -1)) {
                pop_array(0, int0);
                int4 = 1;
            } else if ((push_array(int3) != -1)) {
                if ((int5 < IF_GETY(push_array(int3)))) {
                    pop_array((int3 + 1), push_array(int3));
                } else {
                    pop_array((int3 + 1), int0);
                    int4 = 1;
                };
            };
            int3 = (int3 - 1);
        };
        cc_setparam(4041, push_array(0));
        cc_setparam(4042, push_array(1));
        cc_setparam(4043, push_array(2));
        cc_setparam(4044, push_array(3));
        cc_setparam(4045, push_array(4));
        cc_setparam(4046, push_array(5));
        cc_setparam(4047, push_array(6));
        cc_setparam(4048, push_array(7));
        cc_setparam(4049, push_array(8));
        cc_setparam(4050, push_array(9));
    };
    return;
}