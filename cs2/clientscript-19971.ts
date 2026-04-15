//
function script19971(int0: struct, int1: unknown_int, int2: int, int3: dbrow): int {
    if ((int3 == -1 as dbrow)) {
        script12478("We are trying to bulid the TRH prizes but got a null $promo_data dbrow, falling back to default table.");
        var int3 = 4562 as dbrow;
    };
    if ((DB_GETFIELDCOUNT(int3, 602112) == 0)) {
        script12478("The non-null dbrow we are using to generate TRH prizes has no categories specified on it, falling back to the default table.");
        int3 = 4562 as dbrow;
    };
    var int4 = DB_GETFIELDCOUNT(int3, 602112);
    var int5 = 0;
    define_array(MAX(int4, DB_GETFIELDCOUNT(4562 as dbrow, 602112)));
    define_array[65536](MAX(int4, DB_GETFIELDCOUNT(4562 as dbrow, 602112)));
    var int6 = 0;
    var int7 = -1 as dbrow;
    var int8 = 0;
    var int9 = -1;
    while ((++int9 < int4)) {
        [int5, int7, int8] = dbrow_getfield(int3, 602112, int9);
        if (((((int1 == 1) && (script16734(int5) == 1)) || (int1 == 0)) && ((int2 == -1) || (script19972(int2, int7) == 1)))) {
            int6 = (int6 + script16165(int5, int3, int0));
        };
        pop_array(int9, int6);
        pop_array[1](int9, int5);
    };
    if ((int6 == 0)) {
        script12478("We found a dbrow defined for the current promo but it had no prize data, so are now using the default drop table.");
        int3 = 4562 as dbrow;
        int5 = 0;
        int9 = -1;
        int4 = DB_GETFIELDCOUNT(int3, 602112);
        while ((++int9 < int4)) {
            [int5, int7, int8] = dbrow_getfield(int3, 602112, int9);
            if ((((int1 == 1) && (script16734(int5) == 1)) || (int1 == 0))) {
                int6 = (int6 + script16165(int5, int3, int0));
            };
            pop_array(int9, int6);
            pop_array[1](int9, int5);
        };
    };
    var int10 = RANDOM(int6);
    int9 = -1;
    while ((++int9 < int4)) {
        if ((int10 < push_array(int9))) {
            return push_array[1](int9);
        };
    };
    script12478(`we were unable to roll a category into a player's slot, going to the specified fallback of: ${inttostring(dbrow_getfield(int3, 602176, 0), 10)}`);
    return dbrow_getfield(int3, 602176, 0);
}