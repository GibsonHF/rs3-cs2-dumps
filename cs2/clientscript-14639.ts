//
function script14639(int0: dbrow, int1: int): int {
    if ((int0 == -1 as dbrow)) {
        return 0;
    };
    var int2 = script14637(int0, int1);
    var int3 = dbrow_getfield(int0, 368768, 0);
    return (int3 * int2);
}