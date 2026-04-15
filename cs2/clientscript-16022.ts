//
function script16022(int0: struct, int1: int): string {
    var string0 = struct_getparam(int0, 8663);
    var string1 = struct_getparam(int0, 8847);
    if (((PLAYERMEMBER() == false) && (STRING_LENGTH(string1) > 0))) {
        string0 = string1;
    };
    var int2 = -1 as dbrow;
    var int3 = -1 as dbrow;
    var int4 = 0;
    var int5 = -1 as obj;
    var int6 = 0;
    if ((STRING_LENGTH(string0) == 0)) {
        switch (int1) {
            case 2: {
                int2 = script15769(int0);
                if (((dbrow_getfield(int2, 667744, 0) == 20) && (DB_GETFIELDCOUNT(int2, 667856) > 0))) {
                    int4 = CC_SETPARAM_STRING(IF_SETPLAYERHEAD_SELF(IF_SETPLAYERHEAD_SELF(WORLDMAP_LISTELEMENT_START(667856, dbrow_getfield(int2, 667856, 0), 3, 0), IF_SETPLAYERHEAD_SELF(WORLDMAP_LISTELEMENT_START(667744, 20, 3, 0))), WORLDMAP_LISTELEMENT_START(667984, 0, 3, 0)), 667744, 1, -1, 0);
                    dbrow_findnext();
                    int3 = stack();
                    if ((int4 > 1)) {
                        string0 = "This outfit contains:";
                    };
                    while ((int3 != -1 as dbrow)) {
                        int5 = dbrow_getfield(int3, 667712, 0);
                        if ((int5 != -1 as obj)) {
                            string0 = `${string0}<br>- ${OC_NAME(int5)}`;
                        };
                        dbrow_findnext();
                        int3 = stack();
                    };
                };
                break;
            }
            case 5: {
                string0 = enum_getvalue(0, 36, 10638 as cs2enum, struct_getparam(int0, 2532));
                break;
            }
            case 4: {
                string0 = enum_getvalue(0, 36, 10637 as cs2enum, struct_getparam(int0, 2532));
                break;
            }
            default: {
                return "";
            }
        };
    };
    if ((STRING_LENGTH(string0) == 0)) {
        return "";
    };
    return script14145(" ", "Details:", string0);
}