//
function script17910(int0: dbrow, int1: int): [stat, struct, dbrow, int, npc, obj, int] {
    var int2 = DB_GETFIELDCOUNT(int0, 999472);
    var int3 = DB_GETFIELDCOUNT(int0, 999488);
    var int4 = DB_GETFIELDCOUNT(int0, 999504);
    var int5 = DB_GETFIELDCOUNT(int0, 999520);
    var int6 = DB_GETFIELDCOUNT(int0, 999536);
    var int7 = DB_GETFIELDCOUNT(int0, 999552);
    var int8 = -1 as stat;
    var int9 = -1 as struct;
    var int10 = -1 as dbrow;
    var int11 = -1;
    var int12 = -1 as npc;
    var int13 = -1 as obj;
    var int14 = 0;
    if ((((int2 > 0) && (int2 < int1)) || (((int3 > 0) && (int3 < int1)) || (((int4 > 0) && (int4 < int1)) || (((int5 > 0) && (int5 < int1)) || (((int6 > 0) && (int6 < int1)) || ((int7 > 0) && (int7 < int1)))))))) {
        script12478(`We don't have enough index's in dbrow ${dbrow_getfield(int0, 999424, 0)}. We're looking for index ${inttostring(int1, 10)}`);
        return [int8, int9, int10, int11, int12, int13, int14];
    };
    if ((int2 > 0)) {
        int8 = dbrow_getfield(int0, 999473, int1);
        int14 = dbrow_getfield(int0, 999474, int1);
    } else if ((int3 > 0)) {
        int9 = dbrow_getfield(int0, 999489, int1);
        int14 = dbrow_getfield(int0, 999490, int1);
    } else if ((int4 > 0)) {
        int10 = dbrow_getfield(int0, 999505, int1);
        int14 = dbrow_getfield(int0, 999506, int1);
    } else if ((int5 > 0)) {
        int11 = dbrow_getfield(int0, 999521, int1);
        int14 = dbrow_getfield(int0, 999522, int1);
    } else if ((int6 > 0)) {
        int12 = dbrow_getfield(int0, 999537, int1);
        int14 = dbrow_getfield(int0, 999538, int1);
    } else if ((int7 > 0)) {
        int13 = dbrow_getfield(int0, 999553, int1);
        int14 = dbrow_getfield(int0, 999554, int1);
    };
    return [int8, int9, int10, int11, int12, int13, int14];
}