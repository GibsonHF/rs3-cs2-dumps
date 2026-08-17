//
function script4001(int0: number, string0: string, string1: string): string {
    stack(1515520);
    stack(int0);
    DB_FIND(0);
    var int1 = dbrow_findnext();
    if ((int1 == -1)) {
        return 0;
    };
    var int2 = dbrow_getfield(int1, 1515856, 0);
    if ((int2 != -1)) {
        return 0;
    };
    var int3 = DB_GETFIELDCOUNT(int2, 1572864);
    if ((int3 <= 0)) {
        return 0;
    };
    return 1;
}