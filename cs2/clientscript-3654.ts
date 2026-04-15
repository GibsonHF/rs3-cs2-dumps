//
function script3654(): dbrow {
    var int0 = DATE_RUNEDAY();
    var int1 = 0;
    var int2 = 0;
    DB_LISTALL(73);
    dbrow_findnext();
    var int3 = stack();
    while ((int3 != -1 as dbrow)) {
        [int1, int2] = dbrow_getfield(int3, 299040, 0);
        if (((int0 >= int1) && (int0 <= int2))) {
            return int3;
        };
        dbrow_findnext();
        int3 = stack();
    };
    return -1 as dbrow;
}