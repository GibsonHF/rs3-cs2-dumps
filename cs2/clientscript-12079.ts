//
function script12079(int0: dbrow, int1: int, int2: int): string {
    if ((int0 == -1 as dbrow)) {
        return "";
    };
    var int3 = DB_GETFIELDCOUNT(int0, 32880);
    var string0 = dbrow_getfield(int0, 32784, 0);
    if ((int3 < 2)) {
        return string0;
    };
    if ((int1 >= int2)) {
        return `${string0} ${inttostring(int1, 10)}`;
    };
    return `${string0} ${inttostring(int1, 10)}-${inttostring(int2, 10)}`;
}