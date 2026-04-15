//
function script11227(int0: component, int1: component, int2: component, int3: component): void {
    var int4 = 0;
    var int5 = (1 + ENUM_GETOUTPUTCOUNT(9908 as cs2enum));
    define_array(int5);
    var int6 = 0;
    while ((int4 < int5)) {
        if ((((CC_FIND(int0, int4) == 1) && (CC_GETHIDE() == false)) && (STRING_LENGTH(CC_GETTEXT()) > 0))) {
            pop_array(int6, int4);
            int6 = (int6 + 1);
        };
        int4 = (int4 + 1);
    };
    if ((int6 > 1)) {
        script4424(0, int0, 0, (int6 - 1));
    };
    var int7 = 15;
    int4 = 0;
    while ((int4 < int6)) {
        if ((CC_FIND(int0, push_array(int4)) == 1)) {
            CC_SETPOSITION(0, ((int4 * 40) + 4), 0, 0);
            if ((CC_FIND[1](int1, push_array(int4)) == 1)) {
                CC_SETPOSITION[1](0, ((int4 * 40) + 6), 2, 0);
            };
            if ((CC_FIND[1](int2, push_array(int4)) == 1)) {
                CC_SETPOSITION[1](0, ((int4 * 40) + 18), 2, 0);
            };
            if ((CC_FIND[1](int3, push_array(int4)) == 1)) {
                CC_SETPOSITION[1](0, (int4 * 40), 0, 0);
            };
        };
        int4 = (int4 + 1);
    };
    return;
}