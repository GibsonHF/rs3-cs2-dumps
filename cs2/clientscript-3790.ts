//
function script3790(int0: component, int1: component, int2: int, int3: component): void {
    var int4 = 0;
    var int5 = 0;
    if ((IF_FIND(int0) == 1)) {
        int4 = cc_getparam(6315);
        int5 = cc_getparam(6316);
        if ((int5 > 0)) {
            var int2 = MAX(MIN(int2, int5), (0 - int5));
        };
    };
    var int6 = IF_GETSCROLLY(int1);
    switch (int1) {
        case 38666251: {
            if ((int2 > 0)) {
                int6 = script4754(int1, int6, 0);
            } else {
                int6 = script4754(int1, int6, 1);
            };
            break;
        }
        default: {
            int6 = (int6 + (int2 * int4));
            break;
        }
    };
    script3799(int0, int1, int6, 1, int3);
    return;
}