//
function script6765(): void {
    CC_DELETEALL(comp(1253, 556));
    var int0 = 0;
    while ((int0 < 8)) {
        CC_CREATE(comp(1253, 556), 5, int0);
        int0 = (int0 + 1);
    };
    IF_SETONVARTRANSMIT(callback(script6775, 11462, 11462, 2), comp(631, 28));
    IF_SETONVARTRANSMIT(callback(script6773, 11464, 11465, 2), 41353241);
    IF_SETONVARTRANSMIT(callback(script6769, 11466, 1), 41353224);
    DB_LISTALL(162);
    dbrow_findnext();
    var int1 = stack();
    var int2 = -1;
    var int3 = -1;
    while ((int1 != -1 as dbrow)) {
        if ((DB_GETFIELDCOUNT(int1, 663712) > 0)) {
            [int2, int3] = dbrow_getfield(int1, 663712, 0);
            if ((IF_FIND(int2) == 1)) {
                CC_SETONOP(callback(script6774, int1));
                CC_SETOP(1, "Examine");
                CC_SETOPBASE(`<col=43BCBC>${dbrow_getfield(int1, 663568, 0)}</col>`);
                CC_SETRETEX(0, 14513, int3);
                script6772(int2);
            };
        };
        dbrow_findnext();
        int1 = stack();
    };
    script7852(comp(631, 11), 0, 0, 0, 0, 0, 0, 0, 1, 1, 4479 as dbrow, inttostring(600, 10));
    CC_SETOP(1, "Purchase with Fallen Leaves");
    CC_SETONOP(callback(script6777, 2, 1));
    CC_SETMOUSEOVERCURSOR(46);
    script7852(41353285, 0, 0, 0, 0, 0, 0, 0, 1, 1, 4479, "Seasons Store");
    CC_SETOP(1, "Open");
    CC_SETONOP(callback(script6777, 3, 1));
    CC_SETMOUSEOVERCURSOR(46);
    script13310(41353235, 41353236, 60, (8 * 1000));
    script6783();
    IF_SETONTIMER(callback(script6784, 0, 0), 41353216);
    return;
}