//
function script14642(int0: number, int1: number, int2: number): number {
    if ((int0 == -1 as dbrow)) {
        return 0;
    };
    var int3 = script14637(int0, int1);
    if ((DB_GETFIELDCOUNT(int0, 368784) > 0)) {
        return (dbrow_getfield(int0, 368784, 0) * int3);
    };
    var int4 = ((int2 / 2) * 10);
    int4 = SCALE(dbrow_getfield(int0, 368816, 0), 100, int4);
    var int5 = script14639(int0, int1);
    return SCALE(int5, 6000, int4);
}