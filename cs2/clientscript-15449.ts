//
function script15449(int0: dbrow, int1: inv, int2: int, int3: int, int4: int, int5: int, int6: int): [npc, string, unknown_string, int] {
    var int7 = enum_getvalue(0, 32, 14311 as cs2enum, dbrow_getfield(int0, 118800, 0));
    var int8 = 0;
    var int9 = -1 as cs2enum;
    var int10 = -1 as cs2enum;
    var string0 = "";
    var string1 = "Elder";
    if (((dbrow_getfield(int0, 118816, 0) != -1) && (int4 == 0))) {
        int7 = enum_getvalue(0, 32, 14311 as cs2enum, dbrow_getfield(int0, 118816, 0));
    };
    if ((int6 == 1)) {
        if (((dbrow_getfield(int0, 118848, 0) != -1) && (int4 == 0))) {
            int7 = enum_getvalue(0, 32, 14311 as cs2enum, dbrow_getfield(int0, 118848, 0));
        } else {
            int7 = enum_getvalue(0, 32, 14311 as cs2enum, dbrow_getfield(int0, 118832, 0));
        };
    };
    if ((int3 < dbrow_getfield(int0, 118912, 0))) {
        string1 = "Egg";
        int7 = enum_getvalue(0, 32, 14311 as cs2enum, dbrow_getfield(int0, 118960, 0));
    } else if ((int3 < dbrow_getfield(int0, 118928, 0))) {
        string1 = "Child";
        int7 = enum_getvalue(0, 32, 14311 as cs2enum, dbrow_getfield(int0, 118976, 0));
    } else if ((int3 < dbrow_getfield(int0, 118944, 0))) {
        string1 = "Adolescent";
    } else if ((int3 < dbrow_getfield(int0, 118896, 0))) {
        string1 = "Adult";
    };
    [int9, int10] = dbrow_getfield(int0, 119456, 0);
    if ((int4 == 0)) {
        string0 = enum_getvalue(0, 36, int9, int5);
    } else {
        string0 = enum_getvalue(0, 36, int10, int5);
    };
    switch (int7) {
        case 25754: {
            int7 = 25749 as npc;
            int8 = SCALE(45, 100, npc_getparam(int7, 7479));
            break;
        }
        default: {
            int8 = SCALE(75, 100, npc_getparam(int7, 7479));
            break;
        }
    };
    return [int7, string0, string1, int8];
}