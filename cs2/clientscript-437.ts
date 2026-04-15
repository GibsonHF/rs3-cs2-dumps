//
function script437(int0: dbrow, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int): unknown_int {
    if ((int0 == -1 as dbrow)) {
        script12478("$probability_dbrow was null, returning null.");
        return -1;
    };
    if ((DB_GETROWTABLE(int0) != 35)) {
        script12478("$probability_dbrow was not of dbtable probability_distribution, returning null.");
        return -1;
    };
    if ((DB_GETFIELDCOUNT(int0, 143360) == 0)) {
        script12478("The non-null dbrow we are using has no outcomes, returning null.");
        return -1;
    };
    var int7 = DB_GETFIELDCOUNT(int0, 143360);
    define_array(int7);
    define_array[65536](int7);
    var int8 = 0;
    var int9 = 0;
    var int10 = -1;
    var int11 = -1;
    while ((++int11 < int7)) {
        [int9, int10] = dbrow_getfield(int0, 143360, int11);
        if (((((((int9 != int1) && (int9 != int2)) && (int9 != int3)) && (int9 != int4)) && (int9 != int5)) && (int9 != int6))) {
            int8 = (int8 + int10);
            pop_array(int11, int8);
            pop_array[1](int11, int9);
        };
    };
    if ((int8 == 0)) {
        script12478("We found a dbrow defined for the distribtuion but it had no probability data, returning null.");
        return -1;
    };
    var int12 = RANDOM(int8);
    int11 = -1;
    while ((++int11 < int7)) {
        if ((int12 < push_array(int11))) {
            return push_array[1](int11);
        };
    };
    script12478("Unable to find outcome for dbrow, returning null");
    return -1;
}