//
function script16693(int0: component, int1: int): void {
    CC_DELETEALL(int0);
    script15955(int0, IF_GETNEXTSUBID(int0), 0, 0, 1, 1, 0, 0, 1, 1, 4471 as dbrow, true);
    var int2 = db_find_with_count(782336, int1, 0);
    dbrow_findnext();
    var int3 = stack();
    if (((int2 == 0) || (int3 == -1 as dbrow))) {
        script2995(int0, IF_GETNEXTSUBID(int0), 0, 5, 1, 0, 20, 60, 1, 0, 2195 as dbrow, "Coming Soon");
        script2994(int0, IF_GETNEXTSUBID(int0), 0, 0, 1, 1, 66, 66, 0, 0, 14794 as graphic);
        script12478(`Unable to find a Task DBROW for ID: ${inttostring(int1, 10)}`);
        return;
    };
    var string0 = dbrow_getfield(int3, 782352, 0);
    script2995(int0, IF_GETNEXTSUBID(int0), 0, 5, 1, 0, 20, 60, 1, 0, 2195 as dbrow, string0);
    var string1 = dbrow_getfield(int3, 782368, 0);
    if (((int1 > 1) && (TESTBIT(varbitplayer_51563, (int1 - 2)) == 0))) {
        if ((strcmp(string1, "Coming Soon") != 0)) {
            script2995(int0, IF_GETNEXTSUBID(int0), 5, 65, 1, 0, 20, 90, 1, 1, 2100 as dbrow, string1);
            CC_SETTEXTALIGN(1, 0, 0);
        } else {
            script2994(int0, IF_GETNEXTSUBID(int0), 5, 0, 1, 1, 66, 66, 0, 0, 14794 as graphic);
        };
        return;
    };
    if ((varclient_7056 < 0)) {
        return;
    };
    if ((int1 > varclient_7056)) {
        script2995(int0, IF_GETNEXTSUBID(int0), 0, 65, 1, 0, 20, 90, 1, 1, 2100 as dbrow, "Complete the previous task to unlock this one.");
        CC_SETTEXTALIGN(1, 0, 0);
        return;
    };
    var int4 = (DB_GETFIELDCOUNT(int3, 782384) - 1);
    var int5 = MAX(0, MIN((varclient_7056 - int1), int4));
    var string2 = dbrow_getfield(int3, 782384, int5);
    script2995(int0, IF_GETNEXTSUBID(int0), 0, 65, 1, 0, 20, 90, 1, 1, 2100 as dbrow, string2);
    CC_SETTEXTALIGN(1, 0, 0);
    return;
}