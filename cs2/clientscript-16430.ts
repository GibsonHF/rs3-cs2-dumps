//
function script16430(): void {
    CC_DELETEALL(comp(1253, 556));
    var int0 = 0;
    while ((int0 < 8)) {
        CC_CREATE(comp(1253, 556), 5, int0);
        int0 = (int0 + 1);
    };
    IF_SETONVARTRANSMIT(callback(script16435, 10387, 10387, 2), comp(669, 27));
    IF_SETONVARTRANSMIT(callback(script16433, 10390, 10391, 2), 43843608);
    DB_LISTALL(168);
    dbrow_findnext();
    var int1 = stack();
    var int2 = -1;
    var int3 = -1;
    while ((int1 != -1 as dbrow)) {
        if ((DB_GETFIELDCOUNT(int1, 688288) > 0)) {
            [int2, int3] = dbrow_getfield(int1, 688288, 0);
            if ((IF_FIND(int2) == 1)) {
                CC_SETONOP(callback(script16434, int1));
                CC_SETOP(1, "Examine");
                CC_SETOPBASE(`<col=43BCBC>${dbrow_getfield(int1, 688144, 0)}</col>`);
                CC_SETRETEX(0, 14513, int3);
                script16432(int2);
            };
        };
        dbrow_findnext();
        int1 = stack();
    };
    script7852(comp(669, 10), 0, 0, 0, 0, 0, 0, 0, 1, 1, 4479 as dbrow, inttostring(500, 10));
    CC_SETOP(1, "Purchase with Heartments");
    CC_SETONOP(callback(script16437, 3, 1));
    script13310(43843604, 43843605, 53, (8 * 1000));
    return;
}