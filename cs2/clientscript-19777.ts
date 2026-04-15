//
function script19777(): void {
    CC_DELETEALL(comp(1253, 556));
    var int0 = 0;
    while ((int0 < 9)) {
        CC_CREATE(comp(1253, 556), 5, int0);
        int0 = (int0 + 1);
    };
    int0 = 0;
    var int1 = DB_GETFIELDCOUNT(dbrow_getfield(14845 as dbrow, 1106000, 0), 1269760);
    var int2 = DB_GETFIELDCOUNT(dbrow_getfield(14845 as dbrow, 1106016, 0), 1269760);
    var int3 = (MAX(int1, int2) + 1);
    while ((int0 < int3)) {
        CC_CREATE(comp(1320, 172), 5, int0);
        int0 = (int0 + 1);
    };
    CC_CREATE(comp(1320, 172), 5, (int3 + 1));
    IF_SETONVARTRANSMIT(callback(script19782, 12080, 12080, 2), comp(1320, 22));
    IF_SETONVARTRANSMIT(callback(script19780, 12084, 1), 86507559);
    IF_SETONVARTRANSMIT(callback(script19807, 12081, 12082, 12082, 3), 86507571);
    IF_SETONVARTRANSMIT(callback(script19782, 12080, 1), 86507543);
    DB_LISTALL(313);
    dbrow_findnext();
    var int4 = stack();
    var int5 = -1;
    var int6 = -1;
    while ((int4 != -1 as dbrow)) {
        if ((DB_GETFIELDCOUNT(int4, 1282208) > 0)) {
            [int5, int6] = dbrow_getfield(int4, 1282208, 0);
            if ((IF_FIND(int5) == 1)) {
                CC_SETONOP(callback(script19781, int4));
                CC_SETOP(1, "Examine");
                CC_SETOPBASE(`<col=43BCBC>${dbrow_getfield(int4, 1282064, 0)}</col>`);
                CC_SETRETEX(0, 14513, int6);
                script19779(int5);
            };
        };
        dbrow_findnext();
        int4 = stack();
    };
    script13310(comp(1320, 37), comp(1320, 38), 62, (8 * 1000));
    script13310(comp(1320, 162), comp(1320, 163), 63, (8 * 1000));
    script19800();
    return;
}