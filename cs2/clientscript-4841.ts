//
function script4841(int0: int): [int, int, int, int, int, int] {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    if ((CLANPROFILE_FIND() == 1)) {
        switch (int0) {
            case 1: {
                int3 = varbitplayer_6993;
                int1 = varbitplayer_6985;
                int2 = varbitplayer_6986;
                int4 = varbitplayer_6990;
                int5 = varbitplayer_6991;
                int6 = varbitplayer_6992;
                break;
            }
            case 2: {
                int3 = varbitplayer_7002;
                int1 = varbitplayer_6994;
                int2 = varbitplayer_6995;
                int4 = varbitplayer_6999;
                int5 = varbitplayer_7000;
                int6 = varbitplayer_7001;
                break;
            }
            case 3: {
                int3 = varbitplayer_7011;
                int1 = varbitplayer_7003;
                int2 = varbitplayer_7004;
                int4 = varbitplayer_7008;
                int5 = varbitplayer_7009;
                int6 = varbitplayer_7010;
                break;
            }
        };
    };
    var int7 = 1;
    var int8 = 1;
    var int9 = -1 as cs2enum;
    var int10 = -1 as struct;
    var int11 = -1 as cs2enum;
    var int12 = -1 as cs2enum;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    int11 = enum_getvalue(0, 26, 4043 as cs2enum, int1);
    if ((int11 == -1 as cs2enum)) {
        return [0, 0, 0, 0, 0, 0];
    };
    int12 = enum_getvalue(0, 26, int11, int2);
    if ((int12 == -1 as cs2enum)) {
        return [0, 0, 0, 0, 0, 0];
    };
    while ((int7 <= 3)) {
        int9 = enum_getvalue(0, 26, int12, int7);
        if ((int9 != -1 as cs2enum)) {
            switch (int7) {
                case 1: {
                    int10 = enum_getvalue(0, 73, int9, int4);
                    break;
                }
                case 2: {
                    int10 = enum_getvalue(0, 73, int9, int5);
                    break;
                }
                case 3: {
                    int10 = enum_getvalue(0, 73, int9, int6);
                    break;
                }
            };
            if ((int10 != -1 as struct)) {
                int13 = struct_getparam(int10, 1571);
                int16 = (int16 + struct_getparam(int10, 1573));
                int14 = struct_getparam(int10, 1575);
                int17 = (int17 + struct_getparam(int10, 1577));
                int15 = struct_getparam(int10, 1579);
                int18 = (int18 + struct_getparam(int10, 1581));
            };
        };
        int9 = -1 as cs2enum;
        int7 = (int7 + 1);
    };
    return [int13, int16, int14, int17, int15, int18];
}