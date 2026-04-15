//
function script18084(int0: dbrow, int1: component, int2: int): int {
    var int3 = dbrow_getfield(int0, 1020178, 0);
    var int4 = script17905(varplayer_11357);
    if (((int3 == -1 as dbrow) || (int0 != int4))) {
        if ((CC_FINDBYCATEGORY(int1, 0, 6) == 1)) {
            CC_DELETE();
        };
        return int2;
    };
    var int5 = dbrow_getfield(int0, 1020177, 0);
    var string0 = dbrow_getfield(int0, 1020180, 0);
    var int6 = 0;
    if ((IF_FIND(int1) == 1)) {
        CC_CREATECHILD(0, int6, 6);
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETPOSITION(0, 0, 0, 0);
        script10485(6, int6, 10, int2, 0, 0, 0, 30, 1, 0, 7982 as dbrow, string0);
        int6 = (int6 + 1);
        var int2 = (int2 + 20);
        script10485(6, int6, 10, int2, 0, 0, 0, 30, 1, 0, 8002 as dbrow, `Cost to change mission: ${inttostring(int5, 10)} x vis wax.`);
        int6 = (int6 + 1);
        int2 = (int2 + 30);
        script7858(7, varplayer_11357, 10, int2, 0, 0, 120, 30, 0, 0, script17989(22), "Change");
        script17954("Spend vis wax to replace this mission with a different mission.", 0);
        script7872(true, 1, false, false);
        CC_SETOP(2, "Change Mission");
        int2 = (int2 + 40);
    } else {
        script12478("Cannot find parent layer when trying to populate BP3 missions reward panel.");
    };
    return int2;
}