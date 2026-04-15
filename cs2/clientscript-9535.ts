//
function script9535(int0: int, int1: int, int2: achievement): int {
    var int3 = -1 as struct;
    var int4 = 0;
    var int5 = 0;
    var int6 = -1 as stat;
    var int7 = 0;
    var int8 = 0;
    var string0 = "";
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    switch (int0) {
        case 5: {
            [int4, int8, int5] = script4037(int1);
            int6 = enum_getvalue(0, 17, 681 as cs2enum, int1);
            if ((int4 == 1)) {
                int8 = enum_getvalue(0, 0, script12289(int6), int8);
                int5 = enum_getvalue(0, 0, script12289(int6), int5);
            };
            int7 = (STAT_VISIBLE_XP_ACTUAL(int6) - int5);
            int8 = (int8 - int5);
            break;
        }
        case 4: {
            int3 = script16319(int1);
            if ((int3 != -1 as struct)) {
                int7 = script16442(int1);
                int8 = struct_getparam(int3, 2235);
                if ((script16501(int1) == 1)) {
                    int7 = MIN((int8 + int7), (int8 * 2));
                };
                if ((script16500(int1) == 1)) {
                    int8 = (int8 * 2);
                };
            };
            break;
        }
        case 2: {
            [int7, int8] = script15322(int2);
            if ((int7 < 0)) {
                int7 = 0;
            };
            if ((int8 < 0)) {
                int8 = 0;
            };
            if (((int8 <= 0) && (ACHIEVEMENT_REQSTATE(int2) > 0))) {
                return (ACHIEVEMENT_REQSTATE(int2) / 100);
            };
            break;
        }
        case 3: {
            int3 = enum_getvalue(0, 73, 12251 as cs2enum, int1);
            if (((int3 != -1 as struct) && (struct_getparam(int3, 6419) == true))) {
                int7 = script13281(int3);
                int8 = script13569(int3);
            };
            break;
        }
        case 7: {
            [int9, int10, string0, int11, int12] = script11608();
            if ((int9 == 1)) {
                int7 = int11;
                int8 = int12;
            } else {
                int7 = (varbitplayer_521 - varplayer_183);
                int8 = varbitplayer_521;
            };
            break;
        }
        case 8: {
            int7 = (varbitplayer_44751 - varbitplayer_22902);
            int8 = varbitplayer_44751;
            break;
        }
        case 9: {
            int7 = script3604(int1);
            int8 = script3605(int1);
            break;
        }
        case 10: {
            int7 = script17903(int1);
            int8 = dbrow_getfield(script17905(int1), 1019984, 0);
            break;
        }
        default: {
            return 0;
        }
    };
    if ((int8 == 0)) {
        return -1;
    };
    return SCALE(int7, int8, 100);
}