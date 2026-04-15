//
function script5311(int0: component, int1: component, int2: component, int3: component): void {
    var int4 = 0;
    var int5 = ENUM_GETOUTPUTCOUNT(5177 as cs2enum);
    var int6 = ENUM_GETOUTPUTCOUNT(5176 as cs2enum);
    define_array(MIN(int5, int6));
    var int7 = 0;
    while ((int4 < MIN(int5, int6))) {
        if (((CC_FIND(int1, int4) == 1) && (STRING_LENGTH(CC_GETTEXT()) > 0))) {
            pop_array(int7, int4);
            int7 = (int7 + 1);
        };
        int4 = (int4 + 1);
    };
    if ((int7 > 1)) {
        if ((varclient_1607 == 1)) {
            script4425(0, int1, 0, (int7 - 1));
            varclient_1607 = -1;
        } else {
            script4424(0, int1, 0, (int7 - 1));
            varclient_1607 = 1;
        };
    };
    var int8 = 15;
    int4 = 0;
    while ((int4 < int7)) {
        if ((CC_FIND(int1, push_array(int4)) == 1)) {
            CC_SETPOSITION(2, (int8 * int4), 0, 0);
            if ((CC_FIND[1](int2, push_array(int4)) == 1)) {
                CC_SETPOSITION[1](14, ((int8 * int4) + 1), 2, 0);
            };
            if ((CC_FIND[1](int3, push_array(int4)) == 1)) {
                CC_SETPOSITION[1](1, ((int8 * int4) + 1), 2, 0);
            };
            if ((CC_FIND[1](int0, push_array(int4)) == 1)) {
                CC_SETPOSITION[1](0, (int8 * int4), 0, 0);
                if ((MODULO(int4, 2) == 0)) {
                    CC_SETCOLOUR[1](2236962);
                } else {
                    CC_SETCOLOUR[1](1118481);
                };
            };
        };
        int4 = (int4 + 1);
    };
    return;
}