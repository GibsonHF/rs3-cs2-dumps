//
function script16456(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): number {
    var int6 = 8;
    define_array(int6);
    define_array[65536](int6);
    var int7 = 0;
    var int8 = -1 as obj;
    var int9 = -1;
    var int10 = -1;
    var int11 = -1;
    var int12 = 0;
    var int13 = 0;
    if ((int4 != -1)) {
        int12 = (int12 + 1);
        while ((int12 < int6)) {
            [int8, int7] = script16455(int4, int12);
            if ((int8 != -1 as obj)) {
                switch (int8) {
                    case 3157: {
                        break;
                    }
                    default: {
                        pop_array(int12, int12);
                        pop_array[1](int12, int7);
                        break;
                    }
                };
            } else {
                int12 = int6;
            };
        };
        ARRAY_SORT(int6, 1, 0);
        int12 = -1;
        int12 = (int12 + 1);
        while ((int12 < int6)) {
            if ((push_array(int12) != 0)) {
                [int8, int7] = script16455(int4, push_array(int12));
                int13 = 1;
                int9 = -1;
                int10 = -1;
                int11 = -1;
                while ((int12 < (int6 - 1))) {
                    if (((((int7 > 0) && (push_array[1]((int12 + 1)) == int7)) && (item_getparam(int8, 319) == 0)) && (item_getparam(int8, 963) > 0))) {
                        int12 = (int12 + 1);
                        int13 = (int13 + 1);
                        if ((int9 == -1)) {
                            [int9, int7] = script16455(int4, push_array(int12));
                        } else if ((int10 == -1)) {
                            [int10, int7] = script16455(int4, push_array(int12));
                        } else if ((int11 == -1)) {
                            [int11, int7] = script16455(int4, push_array(int12));
                        };
                    };
                    var int2 = script16457(int0, int1, int2, int3, int13, int7, OC_NAME(int8), int8, int9, int10, int11);
                };
                int2 = script16457(int0, int1, int2, int3, int13, int7, OC_NAME(int8), int8, int9, int10, int11);
            };
        };
    } else {
        switch (int5) {
            case 36: {
                int2 = script16457(int0, int1, int2, int3, 0, 35, "Approval rating<br><br>No resource", -1, -1, -1, -1);
                break;
            }
            case 25: {
                int2 = script16457(int0, int1, int2, int3, 0, 68, "Random fish<br><br>Random fish are caught here, including fish you do not have the fishing level for. You are most likely to catch fish with a level requirement close to your fishing level.", -1, -1, -1, -1);
                break;
            }
            case 42: {
                int2 = script16457(int0, int1, int2, int3, 0, 94, "XP training method<br><br>No resource", -1, -1, -1, -1);
                break;
            }
        };
    };
    return int2;
}