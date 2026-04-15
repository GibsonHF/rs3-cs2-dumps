//
function script16808(int0: dbrow, int1: boolean): void {
    if ((int0 == -1 as dbrow)) {
        return;
    };
    if ((DB_GETROWTABLE(int0) != 197)) {
        return;
    };
    var int2 = dbrow_getfield(int0, 806960, 0);
    var int3 = dbrow_getfield(int0, 806944, 0);
    var string0 = "";
    var string1 = "null";
    var int4 = -1 as graphic;
    var int5 = comp(-1, 65535);
    if (((int1 == true) && (int3 == 1))) {
        string0 = dbrow_getfield(int0, 807040, 0);
    };
    CC_DELETEALL(int2);
    script7853(int2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 4479 as dbrow, string0, int1, 1, false, false);
    if ((int3 == 0)) {
        int5 = dbrow_getfield(int0, 807088, 0);
        int4 = dbrow_getfield(int0, 807072, 0);
        stack(int4);
        stack(int5);
        IF_SETGRAPHIC();
        IF_SETHIDE(script6430(int1), int5);
    };
    string1 = dbrow_getfield(int0, 807056, 0);
    if ((STRING_LENGTH(string1) > 0)) {
        IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -1), int5);
    };
    return;
}