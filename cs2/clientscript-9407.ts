//
function script9407(int0: int, int1: int, int2: achievement): string {
    var int3 = -1 as struct;
    var string0 = "";
    switch (int0) {
        case 2: {
            return ACHIEVEMENT_GETNAME(int2);
        }
        case 1: {
            return script2103(enum_getvalue(0, 3, 2252 as cs2enum, int1));
        }
        case 3: {
            return script13284(enum_getvalue(0, 73, 12251 as cs2enum, int1));
        }
        case 4: {
            int3 = script16319(int1);
            if ((int3 != -1 as struct)) {
                return script17039(int3);
            };
            return `No Challenge in Slot ${inttostring(int1, 10)}`;
        }
        case 5: {
            return enum_getvalue(0, 36, 108 as cs2enum, int1);
        }
        case 6: {
            int3 = enum_getvalue(0, 73, 6452 as cs2enum, int1);
            if ((int3 != -1 as struct)) {
                return struct_getparam(int3, 1266);
            };
            return "";
        }
        case 7: {
            return script16090();
        }
        case 8: {
            return script14060();
        }
        case 9: {
            if ((int1 == 0)) {
                return `Task A: ${dbrow_getfield(varplayer_9064, 303104, 0)}`;
            };
            return `Task B: ${dbrow_getfield(varplayer_9071, 303104, 0)}`;
        }
        case 10: {
            return dbrow_getfield(script17905(int1), 1019904, 0);
        }
    };
    return "";
}