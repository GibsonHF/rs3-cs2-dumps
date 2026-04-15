//
function script14504(int0: dbrow): int {
    if ((int0 == -1 as dbrow)) {
        return 0;
    };
    var int1 = 0;
    var int2 = DB_GETFIELDCOUNT(int0, 344272);
    var int3 = -1;
    while ((++int3 < int2)) {
        if ((script14496(int0, int3) > 0)) {
            int1 = (int1 + 1);
        };
    };
    return int1;
}