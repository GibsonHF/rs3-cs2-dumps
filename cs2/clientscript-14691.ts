//
function script14691(int0: dbrow): int {
    var int1 = 0;
    var int2 = DB_GETFIELDCOUNT(int0, 344272);
    var int3 = -1;
    while ((++int3 < int2)) {
        int1 = (int1 + script14689(dbrow_getfield(int0, 344272, int3)));
    };
    return int1;
}