//
function script2512(int0: number, int1: number, int2: number): number {
    if ((int0 == -1 as dbrow)) {
        return script2513(int1);
    };
    var int3 = 0;
    var int4 = DB_GETFIELDCOUNT(int0, 127024);
    var int5 = -1 as dbrow;
    while ((int3 < int4)) {
        int5 = dbrow_getfield(int0, 127024, int3);
        if ((int5 == int1)) {
            return int2;
        };
        int3 = (int3 + 1);
    };
    return script2513(int1);
}