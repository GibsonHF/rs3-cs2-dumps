//
function script14857(int0: int): void {
    var int1 = comp(691, 64);
    var int2 = comp(691, 65);
    var int3 = comp(691, 66);
    var int4 = comp(691, 63);
    var int5 = comp(691, 67);
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    var int6 = 0;
    var int7 = ENUM_GETOUTPUTCOUNT(14090 as cs2enum);
    var int8 = -1 as dbrow;
    var int9 = 0;
    var int10 = 0;
    var int11 = -1 as struct;
    var int12 = IF_GETWIDTH(int1);
    var int13 = 0;
    var int14 = 0;
    var int15 = 8;
    define_array(int7);
    define_array[65536](int7);
    var int16 = -1;
    while ((++int16 < int7)) {
        CC_CREATE(int2, 4, int16);
        CC_CREATE(int3, 5, int16);
    };
    int16 = -1;
    switch (varplayer_9291) {
        case 0:         if ((++int16 < int7)) {
            int8 = enum_getvalue(0, 74, 14090 as cs2enum, int16);
            pop_array(int16, int16);
            if ((CC_FIND(int2, int16) == 1)) {
                CC_SETPARAM_STRING(5441, LOWERCASE(dbrow_getfield(int8, 385040, 0)));
            };
        };

        case 1:         if ((++int16 < int7)) {
            int8 = enum_getvalue(0, 74, 14090 as cs2enum, int16);
            pop_array(int16, int16);
            pop_array[1](int16, script14612(int8));
        };

    };
    int16 = -1;
    if ((varbitplayer_46470 == 0)) {
        while ((++int16 < int7)) {
            int8 = enum_getvalue(0, 74, 14090 as cs2enum, push_array(int16));
            int9 = dbrow_getfield(int8, 385024, 0);
            switch (script14606(varplayer_12086, int9)) {
                case 0: {
                    int10 = 180;
                    break;
                }
                case 1: {
                    int10 = 0;
                    break;
                }
                case 2: {
                    int10 = 0;
                    break;
                }
            };
            if (((int14 + 64) > int12)) {
                [int14, int15] = [0, ((int15 + 64) + 8)];
                int13 = ((int15 + 64) + 8);
            };
            script13998(int1, int2, 28548 as struct, int14, int15, 64, 64, push_array(int16), false, "", script9670(push_array(int16), int0));
            if ((CC_FIND(int2, push_array(int16)) == 1)) {
                CC_SETOPBASE(dbrow_getfield(int8, 385040, 0));
                CC_SETOPCURSOR(1, 46);
                CC_SETONOP(callback(script14858, int8));
            };
            script7924(int3, push_array(int16), (64 - 8), (64 - 8), (int14 + 4), (int15 + 4), dbrow_getfield(int8, 385136, 0), false, false, false, int10);
            script3539();
            CC_SETDRAGRENDERBEHAVIOUR(1);
            if ((script14606(varplayer_12086, int9) == 2)) {
                script7924(int1, IF_GETNEXTSUBID(int1), 16, 16, (int14 + 2), (int15 + 2), 21747 as graphic, false, false, false, 0);
            };
            int14 = (int14 + (64 + 8));
        };
    } else if ((varbitplayer_46470 == 1)) {
        while ((++int16 < int7)) {
            int8 = enum_getvalue(0, 74, 14090 as cs2enum, push_array(int16));
            int9 = dbrow_getfield(int8, 385024, 0);
            switch (script14606(varplayer_12086, int9)) {
                case 0: {
                    int11 = 35515 as struct;
                    break;
                }
                case 1: {
                    int11 = 35508 as struct;
                    break;
                }
                case 2: {
                    int11 = 35508 as struct;
                    break;
                }
            };
            if (((int16 > 0) && (MODULO(int16, 2) == 0))) {
                [int14, int15] = [0, ((int15 + 20) + 4)];
                int13 = ((int15 + 20) + 8);
            };
            script13998(int1, int2, int11, int14, int15, ((int12 / 2) - 5), 20, push_array(int16), false, dbrow_getfield(int8, 385040, 0), script9670(push_array(int16), int0));
            if ((CC_FIND(int1, (((int16 * 11) + 9) + int6)) == 1)) {
                CC_SETSIZE((CC_GETWIDTH() - 16), CC_GETHEIGHT(), 0, 0);
                CC_SETTEXTALIGN(0, 1, 0);
                CC_SETMAXLINES(1);
            };
            if ((CC_FIND(int2, push_array(int16)) == 1)) {
                CC_SETOPBASE(dbrow_getfield(int8, 385040, 0));
                CC_SETOP(1, "Select");
                CC_SETOPCURSOR(1, 46);
                CC_SETONOP(callback(script14858, int8));
            };
            if ((script14606(varplayer_12086, int9) == 2)) {
                script7924(int1, IF_GETNEXTSUBID(int1), 16, 16, (int14 + (((int12 / 2) - 5) - 20)), (int15 + 2), 21747 as graphic, false, false, false, 0);
                int6 = (int6 + 1);
            };
            int14 = ((int12 / 2) + 5);
        };
    };
    IF_SETSCROLLSIZE(0, MAX(IF_GETHEIGHT(int4), int13), int4);
    IF_SETSCROLLPOS(0, IF_GETSCROLLY(int4), int4);
    script7791(int5, int4);
    return;
}