//
function script12309(int0: component, int1: int, int2: unknown_int): unknown_int {
    var int3 = 0;
    var int4 = IF_GETNEXTSUBID(int0);
    var int5 = 0;
    var int6 = 0;
    if (((CC_FIND(int0, int1) == 1) && (CC_FIND[1](int0, MODULO(((int1 - 1) + int4), int4)) == 1))) {
        [int3, int5] = script12283(script12300(varbitclient_30618, varbitclient_30619, varbitclient_30620));
        if ((int3 == 0)) {
            CC_DELETEALL(int0);
            return int3;
        };
        cc_setparam(5947, int5);
        if ((int2 == 0)) {
            int6 = cc_getparam[1](5947);
            if ((int6 > 0)) {
                if ((int5 <= (int6 + -2147483648))) {
                    int5 = -2147483648;
                } else {
                    int5 = (int5 - int6);
                };
            } else if ((int6 < 0)) {
                if (((int6 + 2147483647) <= int5)) {
                    int5 = 2147483647;
                } else {
                    int5 = (int5 - int6);
                };
            };
        } else {
            int5 = 0;
        };
        cc_setparam(5946, int5);
        IF_SETPARAM_INT(5643, int1, int0);
    };
    return int3;
}