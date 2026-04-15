//
function script4830(int0: int): unknown_int {
    var int1 = -1 as cs2enum;
    var int2 = -1 as cs2enum;
    var int3 = -1 as cs2enum;
    var int4 = -1 as cs2enum;
    var int5 = -1 as cs2enum;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    switch (int0) {
        case 1: {
            int6 = varbitplayer_6985;
            int7 = varbitplayer_6986;
            int9 = varbitplayer_6990;
            int10 = varbitplayer_6991;
            int11 = varbitplayer_6992;
            int12 = varbitplayer_6989;
            break;
        }
        case 2: {
            int6 = varbitplayer_6994;
            int7 = varbitplayer_6995;
            int9 = varbitplayer_6999;
            int10 = varbitplayer_7000;
            int11 = varbitplayer_7001;
            int12 = varbitplayer_6998;
            break;
        }
        case 3: {
            int6 = varbitplayer_7003;
            int7 = varbitplayer_7004;
            int9 = varbitplayer_7008;
            int10 = varbitplayer_7009;
            int11 = varbitplayer_7010;
            int12 = varbitplayer_7007;
            break;
        }
    };
    if ((int12 == 1)) {
        return 5;
    };
    if ((int6 == 0)) {
        return -1;
    };
    int1 = enum_getvalue(0, 26, 4043 as cs2enum, int6);
    if ((int1 == -1 as cs2enum)) {
        return -1;
    };
    if (((int7 > 0) && (int7 <= 3))) {
        int2 = enum_getvalue(0, 26, int1, int7);
        if ((int2 != -1 as cs2enum)) {
            int3 = enum_getvalue(0, 26, int2, 1);
            int4 = enum_getvalue(0, 26, int2, 2);
            int5 = enum_getvalue(0, 26, int2, 3);
            if ((int3 != -1 as cs2enum)) {
                if (((int9 > 0) && (int9 <= ENUM_GETOUTPUTCOUNT(int3)))) {
                    if ((varbitclan_6507 >= struct_getparam(enum_getvalue(0, 73, int3, int9), 1567))) {
                        if ((int4 == -1 as cs2enum)) {
                        } else if (((int10 > 0) && (int10 <= ENUM_GETOUTPUTCOUNT(int4)))) {
                            if ((varbitclan_6507 < struct_getparam(enum_getvalue(0, 73, int4, int10), 1567))) {
                                return 2;
                            };
                        } else {
                            return 3;
                        };
                        if ((int5 == -1 as cs2enum)) {
                        } else if (((int11 > 0) && (int11 <= ENUM_GETOUTPUTCOUNT(int5)))) {
                            if ((varbitclan_6507 < struct_getparam(enum_getvalue(0, 73, int5, int11), 1567))) {
                                return 2;
                            };
                        } else {
                            return 3;
                        };
                        return 1;
                    };
                    return 2;
                };
                return 3;
            };
        };
    };
    return -1;
}