//
function script4490(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number): void {
    if ((script858(int1, int8) == 1)) {
        return;
    };
    var int9 = 0;
    var int10 = 0;
    [int10, int9] = script4492(int4);
    var int11 = enum_getvalue(0, 0, 13934 as cs2enum, int1);
    var int12 = enum_getvalue(0, 23, 13935 as cs2enum, int1);
    var int13 = -1;
    var int14 = -1;
    var int15 = -1;
    var int16 = 0;
    int14 = (int4 / 10000);
    switch (int2) {
        case 100:
        case 101:
        case 102:
        case 103:
        case 104: {
            if ((int1 != 2)) {
                int13 = 17725;
            };
            break;
        }
    };
    if ((int6 == 1)) {
    } else {
        if ((int1 == 6)) {
            int12 = -1 as graphic;
            switch (MAP_LANG()) {
                case 1: {
                    int12 = struct_getparam(int0, 7282);
                    break;
                }
                case 2: {
                    int12 = struct_getparam(int0, 7283);
                    break;
                }
                case 3: {
                    int12 = struct_getparam(int0, 7284);
                    break;
                }
            };
            if ((int12 == -1 as graphic)) {
                int12 = struct_getparam(int0, 7181);
            };
            int13 = -1;
            int16 = 1;
        };
        script4585(48496641, int10, int5, int14, int11, int9, int12, int13, int16, int7, int3);
    };
    return;
}