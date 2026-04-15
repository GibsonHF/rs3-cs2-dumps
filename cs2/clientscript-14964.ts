//
function script14964(int0: dbrow): int {
    if ((int0 == -1 as dbrow)) {
        return -1;
    };
    var int1 = script14965(int0);
    if ((dbrow_getfield(int0, 270352, 0) == 1)) {
        int1 = script11882(int1, INV_TOTAL(93 as inv, dbrow_getfield(int0, 270400, 0)));
    };
    return int1;
}