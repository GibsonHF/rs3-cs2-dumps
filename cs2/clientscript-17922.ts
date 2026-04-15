//
function script17922(int0: dbrow): int {
    if ((script17853() == -1 as dbrow)) {
        return -1;
    };
    var int1 = script17853();
    var int2 = DB_GETFIELDCOUNT(int1, 991536);
    var int3 = 0;
    while ((int3 < int2)) {
        if ((dbrow_getfield(int1, 991536, int3) == int0)) {
            return (int3 + 1);
        };
        int3 = (int3 + 1);
    };
    return -1;
}