//
function script15936(int0: unknown_int, int1: int): string {
    if ((int0 == 0)) {
        return "";
    };
    stack(32768);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int2 = stack();
    if ((int2 == -1)) {
        return "";
    };
    var string0 = dbrow_getfield(int2, 32784, 0);
    if ((DB_GETFIELDCOUNT(int2, 32880) > 1)) {
        string0 = `${string0} ${inttostring(int1, 10)}`;
    };
    return string0;
}