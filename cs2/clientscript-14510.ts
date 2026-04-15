//
function script14510(int0: dbrow): unknown_int {
    var int1 = false;
    var int2 = false;
    [int1, int2] = dbrow_getfield(int0, 344144, 0);
    if ((int1 == false)) {
        return 0;
    };
    if (((int2 == false) && (script14502(int0) == 2))) {
        return 0;
    };
    return 1;
}