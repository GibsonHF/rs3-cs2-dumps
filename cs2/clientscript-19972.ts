//
function script19972(int0: int, int1: dbrow): unknown_int {
    if ((DB_GETROWTABLE(int1) != 101)) {
        script12478("Invalid dbtable.");
        return 0;
    };
    var int2 = 0;
    var int3 = DB_GETFIELDCOUNT(int1, 413696);
    var int4 = -1 as obj;
    var int5 = -1;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = -1;
    while ((int2 < int3)) {
        [int4, int6, int5, int6, int7, int8, int9, int6] = dbrow_getfield(int1, 413696, int2);
        if ((((int5 >= int0) && (script14214(int4) == 0)) && (((int9 == -1) || (script16171(int7, int8, enum_getvalue(0, 17, 681 as cs2enum, int9)) == 1)) && ((PLAYERMEMBER() == true) || (OC_MEMBERS(int4) == 0))))) {
            return 1;
        };
        int2 = (int2 + 1);
    };
    return 0;
}