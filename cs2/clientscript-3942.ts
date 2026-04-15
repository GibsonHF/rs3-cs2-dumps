//
function script3942(int0: int, int1: int, int2: int, int3: unknown_int): [int, int] {
    switch (int0) {
        case 1: {
            if ((int3 == 1)) {
                CC_SETPARAM_INT(8951, int1);
                CC_SETPARAM_INT(8952, int2);
            } else {
                var int1 = cc_getparam(8951);
                var int2 = cc_getparam(8952);
            };
            break;
        }
        case 2: {
            if ((int3 == 1)) {
                CC_SETPARAM_INT(8953, int1);
                CC_SETPARAM_INT(8954, int2);
            } else {
                int1 = cc_getparam(8953);
                int2 = cc_getparam(8954);
            };
            break;
        }
        case 3: {
            if ((int3 == 1)) {
                CC_SETPARAM_INT(8955, int1);
                CC_SETPARAM_INT(8956, int2);
            } else {
                int1 = cc_getparam(8955);
                int2 = cc_getparam(8956);
            };
            break;
        }
        case 4: {
            if ((int3 == 1)) {
                CC_SETPARAM_INT(8957, int1);
                CC_SETPARAM_INT(8958, int2);
            } else {
                int1 = cc_getparam(8957);
                int2 = cc_getparam(8958);
            };
            break;
        }
        default: {
            script12478("Invalid slot found.");
            break;
        }
    };
    return [int1, int2];
}