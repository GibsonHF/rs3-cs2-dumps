//
function script14587(int0: dbrow): int {
    var int1 = DB_GETFIELDCOUNT(int0, 376896);
    var int2 = -1;
    var int3 = 0;
    var int4 = -1;
    while ((++int4 < int1)) {
        if ((script13022(dbrow_getfield(int0, 376896, int4)) == 1)) {
            int3 = (int3 + 1);
        };
    };
    return int3;
}