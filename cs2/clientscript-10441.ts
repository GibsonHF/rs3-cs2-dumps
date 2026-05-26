//
function script10441(int0: number, int1: number, int2: number): void {
    if ((int0 == -1)) {
        return;
    };
    var int3 = 0;
    var int4 = int1;
    define_array((int4 + 1));
    var int5 = 0;
    var int6 = 0;
    var int7 = 96797567;
    var int8 = 96797568;
    switch (IF_GETTOP()) {
        case 906: {
            int7 = 59375780;
            int8 = 59375781;
            break;
        }
        case 744: {
            int7 = 48759139;
            int8 = 48759140;
            break;
        }
        default: {
            int7 = 96797567;
            int8 = 96797568;
            break;
        }
    };
    while ((int3 <= int4)) {
        if (((CC_FIND(int7, int3) == 1) && (STRING_LENGTH(CC_GETTEXT()) > 0))) {
            pop_array(int5, int3);
            int5 = (int5 + 1);
        };
        int3 = (int3 + 1);
    };
    if ((int5 > 1)) {
        script4424(0, int7, 0, (int5 - 1));
    };
    int3 = 0;
    while ((int3 < int5)) {
        if ((CC_FIND(int7, push_array(int3)) == 1)) {
            CC_SETPOSITION(5, int6, 0, 0);
            int6 = (int6 + CC_GETHEIGHT());
        };
        int3 = (int3 + 1);
    };
    int3 = -1;
    while ((CC_FIND(int8, ++int3) == 1)) {
        if ((CC_FIND[1](int7, cc_getparam(6308)) == 1)) {
            if ((cc_getparam(5928) == 2)) {
                CC_SETPOSITION(0, CC_GETY[1](), 2, 0);
            } else {
                CC_SETPOSITION(CC_GETX(), CC_GETY[1](), 0, 0);
            };
        };
    };
    script10437(int7, int2);
    return;
}