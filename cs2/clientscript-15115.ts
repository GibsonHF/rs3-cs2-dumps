//
function script15115(int0: dbrow, int1: int): string {
    var int2 = DB_GETROWTABLE(int0);
    var string0 = "";
    var int3 = -1;
    var int4 = -1 as dbrow;
    var int5 = -1 as struct;
    var int6 = -1 as quest;
    var int7 = 1;
    if ((int0 != -1 as dbrow)) {
        switch (int2) {
            case 285: {
                string0 = script18921(int0, 5);
                int7 = script18920(int0, 33);
                if ((STRING_LENGTH(string0) > 0)) {
                    if (((int1 == 0) && (int7 == 1))) {
                        string0 = strconcat("This Week in RuneScape:<br>", string0);
                    };
                    return string0;
                };
                int3 = script18920(int0, 4);
                string0 = enum_getvalue(0, 36, 11809 as cs2enum, int3);
                if ((STRING_LENGTH(string0) > 0)) {
                    return string0;
                };
                int4 = script18923(int0, 14);
                if ((int4 != -1 as dbrow)) {
                    return script15115(int4, int1);
                };
                int5 = script18924(int0, 15);
                if ((int5 != -1 as struct)) {
                    return script18846(int5);
                };
                int6 = script18925(int0, 16);
                if ((int6 != -1 as quest)) {
                    return script2103(int6);
                };
                break;
            }
            case 77: {
                string0 = dbrow_getfield(int0, 315392, 0);
                if ((STRING_LENGTH(string0) > 0)) {
                    return string0;
                };
                break;
            }
            case 113: {
                string0 = dbrow_getfield(int0, 462992, 0);
                if ((STRING_LENGTH(string0) > 0)) {
                    return string0;
                };
                break;
            }
        };
    };
    script12478("Could not find a valid name for entry dbrow. Defaulting to \"Entry\"");
    return "Entry";
}