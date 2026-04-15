//
function script17741(int0: dbrow): void {
    if ((int0 == -1 as dbrow)) {
        return;
    };
    if ((DB_GETROWTABLE(int0) != 231)) {
        script12478("Invalid skill tree");
        return;
    };
    CC_DELETEALL(comp(1222, 22));
    CC_DELETEALL(comp(1222, 27));
    stack(dbrow_getfield(int0, 946208, 0));
    stack(80084995);
    IF_SETGRAPHIC();
    var int1 = DB_GETFIELDCOUNT(int0, 946272);
    if ((int1 > 7)) {
        script12478(`Skill tree exceeds max level count - count: ${inttostring(int1, 10)} (max: ${inttostring(7, 10)})`);
        int1 = 7;
    };
    var int2 = 1;
    var int3 = 1;
    var int4 = -1;
    while ((++int4 < int1)) {
        int3 = script17742(comp(1222, 22), comp(1222, 27), int0, int4, int2, 0, ((int4 * 52) + ((int4 + 1) * 5)), 1, 2, (2 * 8), 52, 1, 0);
        if ((int3 == 0)) {
            int2 = 0;
        };
    };
    var int5 = -1 as dbrow;
    var int6 = -1 as dbrow;
    if (((varclient_7216 != -1) && (varclient_7217 != -1))) {
        int5 = dbrow_getfield(int0, 946272, varclient_7216);
        int6 = dbrow_getfield(int5, 950288, varclient_7217);
    };
    script17747(int5, int6);
    return;
}