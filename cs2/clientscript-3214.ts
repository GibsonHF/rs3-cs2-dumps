//
function script3214(int0: int): int {
    var int1 = 0;
    var int2 = 0;
    var int3 = -1 as cs2enum;
    [int1, int2, int3] = script10737(int0);
    if ((int3 == -1 as cs2enum)) {
        switch (int0) {
            case 10000: {
                switch (int1) {
                    case 0: {
                        return 1;
                    }
                    case 1: {
                        return 3;
                    }
                };
                return 32;
            }
        };
        return 1;
    };
    var int4 = enum_getvalue(0, 0, int3, int1);
    return GETBIT_RANGE(int4, 23, 28);
}