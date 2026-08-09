//
function script3654(): number {
    var int0 = DATE_RUNEDAY();
    var int1 = 0;
    var int2 = 0;
    DB_LISTALL(73);
    var int3 = dbrow_findnext();
    while ((int3 != -1)) {
        [int1, int2] = dbrow_getfield(int3, 299040, 0);
        if (((int0 >= int1) && (int0 <= int2))) {
            return int3;
        };
        int3 = dbrow_findnext();
    };
    return -1;
}