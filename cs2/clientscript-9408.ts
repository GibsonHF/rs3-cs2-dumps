//
function script9408(int0: int, int1: int, int2: achievement): graphic {
    var int3 = -1 as struct;
    var int4 = -1 as quest;
    var int5 = -1 as graphic;
    switch (int0) {
        case 2: {
            return ACHIEVEMENT_SPRITE(int2);
        }
        case 1: {
            int4 = enum_getvalue(0, 3, 2252 as cs2enum, int1);
            if ((int4 != -1 as quest)) {
                return script2107(int4);
            };
            return -1 as graphic;
        }
        case 3: {
            int3 = enum_getvalue(0, 73, 12251 as cs2enum, int1);
            if ((int3 != -1 as struct)) {
                return script13286(int3);
            };
            return -1 as graphic;
        }
        case 4: {
            int3 = script16319(int1);
            if ((int3 != -1 as struct)) {
                return struct_getparam(int3, 1271);
            };
            if ((script17176() != -2)) {
                return 13161 as graphic;
            };
            return -1 as graphic;
        }
        case 5: {
            return enum_getvalue(0, 23, 8548 as cs2enum, int1);
        }
        case 6: {
            int3 = enum_getvalue(0, 73, 6452 as cs2enum, int1);
            if ((int3 != -1 as struct)) {
                return struct_getparam(int3, 1271);
            };
            return -1 as graphic;
        }
        case 7: {
            int5 = script16096();
            if ((int5 != -1 as graphic)) {
                return int5;
            };
            return 13214 as graphic;
        }
        case 8: {
            int5 = script16087();
            if ((int5 != -1 as graphic)) {
                return int5;
            };
            return 23991 as graphic;
        }
        case 9: {
            return 11944 as graphic;
        }
        case 10: {
        }
        default: {
            return -1 as graphic;
        }
    };
    return dbrow_getfield(script17905(int1), 1020160, 0);
}