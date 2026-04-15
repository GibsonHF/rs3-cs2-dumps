//
function script7006(int0: component): void {
    var int1 = -1 as cs2enum;
    var int2 = -1 as obj;
    var int3 = -1 as struct;
    var int4 = -1;
    var int5 = -1;
    var int6 = comp(-1, 65535);
    var int7 = script7980(int0);
    var int8 = script11786(int0);
    [int5, int4, int2] = script11797(int8, int7);
    if ((int2 != -1 as obj)) {
        script8313(2);
    } else {
        switch (int5) {
            case 1: {
                int1 = 10147 as cs2enum;
                break;
            }
            case 5: {
                int1 = 6738 as cs2enum;
                break;
            }
            case 6: {
                int1 = 6740 as cs2enum;
                break;
            }
            case 17: {
                int1 = 16973 as cs2enum;
                break;
            }
            case 3: {
                int1 = 6736 as cs2enum;
                break;
            }
            case 4: {
                int1 = 6737 as cs2enum;
                break;
            }
            default: {
                return;
            }
        };
        int3 = enum_getvalue(0, 73, int1, int4);
        if ((int3 == -1 as struct)) {
            return;
        };
        if ((struct_getparam(int3, 2876) == 1)) {
            script8311(2);
        };
    };
    if ((int7 != -1)) {
        int6 = script7975(1430, int7);
        IF_SETTRANS(0, int6);
        IF_CLEARSCRIPTHOOKS(int6);
    };
    return;
}