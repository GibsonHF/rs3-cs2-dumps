//
function script9533(int0: int, int1: int, int2: unknown_int, int3: achievement): string {
    var int4 = -1 as struct;
    var int5 = -1 as quest;
    var string0 = "";
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = -1 as stat;
    var int11 = 0;
    var int12 = -1 as dbrow;
    var string1 = "";
    switch (int0) {
        case 2: {
            return script15321(int3);
        }
        case 3: {
            return script13285(enum_getvalue(0, 73, 12251 as cs2enum, int1), 1);
        }
        case 1: {
            int5 = enum_getvalue(0, 3, 2252 as cs2enum, int1);
            if ((int5 != -1 as quest)) {
                return script8220(int5);
            };
            return "";
        }
        case 4: {
            int4 = script16319(int1);
            if ((int4 != -1 as struct)) {
                if (((script16442(int1) >= struct_getparam(int4, 2235)) && (script18262(script16500(int1)) == 1))) {
                    return "Claim your reward in the Challenges tab of Adventures";
                };
                return script17230(int4, script16500(int1));
            };
            return script17177(script17176());
        }
        case 5: {
            [int7, int8, int9] = script4037(int1);
            int10 = enum_getvalue(0, 17, 681 as cs2enum, int1);
            if ((int10 == -1 as stat)) {
                return "";
            };
            if ((int7 == 1)) {
                int8 = enum_getvalue(0, 0, script12289(int10), int8);
            };
            int11 = MAX(0, (int8 - STAT_VISIBLE_XP_ACTUAL(int10)));
            return `${TOSTRING_LOCALISED(int11, 1)} XP Remaining`;
        }
        case 6: {
            int4 = enum_getvalue(0, 73, 6452 as cs2enum, int1);
            if ((int4 != -1 as struct)) {
                return struct_getparam(int4, 1273);
            };
            return "";
        }
        case 7: {
            return script7682(0);
        }
        case 8: {
            return script7683(0);
        }
        case 9: {
            if ((int2 == 1)) {
                return `${script3188(int1)}<br><br>${inttostring(script3603(int1), 10)}/${inttostring(script3605(int1), 10)}`;
            };
            return `${inttostring(script3603(int1), 10)}/${inttostring(script3605(int1), 10)}`;
        }
        case 10: {
            break;
        }
        default: {
            return "";
        }
    };
    int12 = script17905(int1);
    string0 = dbrow_getfield(dbrow_getfield(int12, 1019937, 0), 1024016, 0);
    string1 = script18073(int12);
    if ((STRING_LENGTH(string1) > 0)) {
        string0 = strconcat(string0, `<br>${string1}`);
    };
    string0 = strconcat(string0, `<br><br>${inttostring(script17903(int1), 10)}/${inttostring(dbrow_getfield(int12, 1019984, 0), 10)}`);
    return string0;
}