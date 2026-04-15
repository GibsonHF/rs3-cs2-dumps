//
function script16079(int0: int, int1: int, int2: dbrow): unknown_int {
    if ((varbitplayer_20806 == 1)) {
        return 0;
    };
    var int3 = 0;
    var int4 = 0;
    if ((int2 == -1 as dbrow)) {
        return 0;
    };
    if ((DB_GETFIELDCOUNT(int2, 549296) == 0)) {
        script12478("$bundle_data does not have a start_date attached, assume is out of bounds");
        return 0;
    };
    if ((DB_GETFIELDCOUNT(int2, 549312) == 0)) {
        script12478("$bundle_data does not have a end_date attached, assume is out of bounds");
        return 0;
    };
    int3 = dbrow_getfield(int2, 549296, 0);
    int4 = dbrow_getfield(int2, 549312, 0);
    if (((varplayer_3079 < int3) || (varplayer_3079 > int4))) {
        return 0;
    };
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    [int5, int6, int7] = DATE_RUNEDAY_TODATE(int0);
    [int5, int8, int9] = DATE_RUNEDAY_TODATE(varplayer_3079);
    var int10 = dbrow_getfield(int2, 549328, 0);
    if ((((int6 == int8) && (int7 == int9)) && (int10 <= int1))) {
        return 0;
    };
    return 1;
}