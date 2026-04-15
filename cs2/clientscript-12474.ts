//
function script12474(int0: int): string {
    stack(36864);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    var int1 = stack();
    if ((int1 == -1)) {
        return "false";
    };
    var int2 = DB_GETFIELDCOUNT(int1, 37040);
    if ((int2 == 0)) {
        return "true";
    };
    var int3 = 0;
    var string0 = "You need to have completed the following cases:";
    var int4 = -1 as dbrow;
    while ((int3 < int2)) {
        var int0 = dbrow_getfield(int1, 37040, int3);
        stack(36864);
        stack(int0);
        DB_FIND(0);
        dbrow_findnext();
        int4 = stack();
        if ((int4 != -1)) {
            string0 = `${string0}<br>- ${dbrow_getfield(int4, 36896, 0)}`;
        };
        int3 = (int3 + 1);
    };
    return string0;
}