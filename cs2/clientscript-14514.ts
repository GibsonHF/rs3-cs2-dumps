//
function script14514(int0: dbrow): unknown_int {
    if ((int0 == -1 as dbrow)) {
        return 0;
    };
    var int1 = DB_GETFIELDCOUNT(int0, 340080);
    var int2 = -1 as dbrow;
    var int3 = -1;
    switch (int0) {
        case 2634:         if ((++int3 < int1)) {
            int2 = dbrow_getfield(int0, 340080, int3);
            if (((int2 != 2767 as dbrow) && (script14502(int2) != 2))) {
                return 0;
            };
        };

        default:         if ((++int3 < int1)) {
            if ((script14502(dbrow_getfield(int0, 340080, int3)) != 2)) {
                return 0;
            };
        };

    };
    return 1;
}