//
function script17884(int0: dbrow): [obj, struct, dbrow, int, int, graphic] {
    var int1 = -1 as obj;
    var int2 = -1 as struct;
    var int3 = -1 as dbrow;
    var int4 = 0;
    var int5 = -1;
    var int6 = -1 as graphic;
    if ((int0 == -1 as dbrow)) {
        return [int1, int2, int3, int4, int5, int6];
    };
    if ((DB_GETROWTABLE(int0) != 243)) {
        script12478("Invalid dbtable.");
        return [int1, int2, int3, int4, int5, int6];
    };
    if (((script4148() == true) && (script17885(int0) == 1))) {
        if ((DB_GETFIELDCOUNT(int0, 995376) > 0)) {
            [int1, int4, int5] = dbrow_getfield(int0, 995376, 0);
        } else if ((DB_GETFIELDCOUNT(int0, 995392) > 0)) {
            [int2, int4, int5, int6, int1] = dbrow_getfield(int0, 995392, 0);
        } else if ((DB_GETFIELDCOUNT(int0, 995408) > 0)) {
            [int3, int4, int5, int6, int1] = dbrow_getfield(int0, 995408, 0);
        };
    } else if ((DB_GETFIELDCOUNT(int0, 995328) > 0)) {
        [int1, int4, int5] = dbrow_getfield(int0, 995328, 0);
    } else if ((DB_GETFIELDCOUNT(int0, 995344) > 0)) {
        [int2, int4, int5, int6, int1] = dbrow_getfield(int0, 995344, 0);
    } else if ((DB_GETFIELDCOUNT(int0, 995360) > 0)) {
        [int3, int4, int5, int6, int1] = dbrow_getfield(int0, 995360, 0);
    } else {
        script12478("No rewards found.");
    };
    return [int1, int2, int3, int4, int5, int6];
}