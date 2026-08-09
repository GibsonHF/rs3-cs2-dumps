//
function script11282(int0: number, int1: number): number {
    var int2 = 0;
    var int3 = DB_GETFIELDCOUNT(int1, 1470576);
    var int4 = -1;
    int4 = (int4 + 1);
    while ((int4 < int3)) {
        int2 = (int2 + script11286(dbrow_getfield(int1, 1470576, int4)));
    };
    return int2;
}