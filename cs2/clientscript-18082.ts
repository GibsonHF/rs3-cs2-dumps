//
function script18082(int0: dbrow, int1: component, int2: int): int {
    var int3 = script17903(varplayer_11357);
    var string0 = "";
    var int4 = 0;
    if ((IF_FIND(int1) == 1)) {
        CC_CREATECHILD(0, int4, 3);
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETPOSITION(0, 0, 0, 0);
        script10485(3, int4, 10, int2, 0, 0, 0, 30, 1, 0, 7982 as dbrow, "Progress");
        int4 = (int4 + 1);
        var int2 = (int2 + 20);
        if ((int0 != script17905(varplayer_11357))) {
            script10485(3, int4, 10, int2, 0, 0, 0, 30, 1, 0, 8002 as dbrow, "Viewing future chain mission");
            int3 = 0;
            int4 = (int4 + 1);
            int2 = (int2 + 20);
        };
        script10485(3, int4, 10, int2, 0, 0, 0, 30, 1, 0, 8002 as dbrow, `<col=2EF8FF>${inttostring(int3, 10)}</col> / <col=2EF8FF>${inttostring(dbrow_getfield(int0, 1019984, 0), 10)}</col> progress`);
        int4 = (int4 + 1);
        int2 = (int2 + 40);
    } else {
        script12478("Cannot find parent layer when trying to populate BP3 missions reward panel.");
    };
    return int2;
}