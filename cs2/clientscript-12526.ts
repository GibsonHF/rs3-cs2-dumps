//
function script12526(int0: int): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    [int1, int2, int3] = script3419(int0, varplayer_6269);
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    [int4, int5] = script12527(int0);
    if (((int4 == comp(-1, 65535)) || (int5 == comp(-1, 65535)))) {
        return;
    };
    if ((int1 == 0)) {
        IF_SETHIDE(true, int4);
        return;
    };
    var int6 = -1 as dbrow;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var int7 = -1 as dbrow;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    int6 = enum_getvalue(0, 74, 863 as cs2enum, (int1 - 1));
    if ((int6 == -1 as dbrow)) {
        IF_SETHIDE(true, int4);
        return;
    };
    IF_SETHIDE(false, int4);
    string0 = dbrow_getfield(int6, 40976, 0);
    int10 = STRING_INDEXOF_STRING(string0, "X", 0);
    if ((int10 != -1)) {
        string2 = SUBSTRING(string0, 0, int10);
        string3 = SUBSTRING(string0, (int10 + 1), STRING_LENGTH(string0));
        string0 = string2;
        int9 = dbrow_getfield(int6, 40992, int2);
        int13 = dbrow_getfield(int6, 40960, 0);
        if ((int13 == 3)) {
            [int8, int12] = dbrow_getfield(int6, 41040, int3);
            if ((int8 == 0)) {
                string0 = strconcat(string0, "any ");
            };
        };
        string0 = strconcat(string0, inttostring(int9, 10));
        string0 = strconcat(string0, string3);
        int11 = STRING_INDEXOF_STRING(string0, "Y", 0);
        if ((int11 != -1)) {
            string0 = SUBSTRING(string0, 0, int11);
            switch (int13) {
                case 1: {
                    int8 = dbrow_getfield(int6, 41008, int3);
                    stack(16384);
                    stack(int8);
                    DB_FIND(0);
                    dbrow_findnext();
                    int7 = stack();
                    while ((int7 != -1 as dbrow)) {
                        string0 = strconcat(string0, dbrow_getfield(int7, 16400, 0));
                        dbrow_findnext();
                        int7 = stack();
                    };
                    break;
                }
                case 2: {
                    int8 = dbrow_getfield(int6, 41024, int3);
                    stack(16384);
                    stack(int8);
                    DB_FIND(0);
                    dbrow_findnext();
                    int7 = stack();
                    while ((int7 != -1 as dbrow)) {
                        string0 = strconcat(string0, dbrow_getfield(int7, 16400, 0));
                        dbrow_findnext();
                        int7 = stack();
                    };
                    break;
                }
                case 3: {
                    [int8, int12] = dbrow_getfield(int6, 41040, int3);
                    if ((int8 == 0)) {
                        string0 = strconcat(string0, "empty ");
                    };
                    stack(20480);
                    stack(int8);
                    DB_FIND(0);
                    dbrow_findnext();
                    int7 = stack();
                    while ((int7 != -1 as dbrow)) {
                        string1 = dbrow_getfield(int7, 20512, 0);
                        if (((int9 > 1) && (STRING_LENGTH(string1) > 0))) {
                            string0 = strconcat(string0, string1);
                        } else {
                            string0 = strconcat(string0, dbrow_getfield(int7, 20496, 0));
                        };
                        dbrow_findnext();
                        int7 = stack();
                    };
                    break;
                }
            };
        };
    };
    IF_SETTEXT(string0, int5);
    return;
}