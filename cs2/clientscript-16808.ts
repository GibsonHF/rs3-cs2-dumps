//
function script16808(int0: number, int1: number): void {
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
    var int4 = -1;
    var int5 = -1;
    if (((int1 == 1) && (int3 == 1))) {
        string0 = dbrow_getfield(int0, 807040, 0);
    };
    CC_DELETEALL(int2);
    script7853(int2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 4479, string0, int1, 1, 0, 0);
    if ((int3 == 0)) {
        int5 = dbrow_getfield(int0, 807088, 0);
        int4 = dbrow_getfield(int0, 807072, 0);
        IF_SETGRAPHIC(int4, int5);
        IF_SETHIDE(script6430(int1), int5);
    };
    string1 = dbrow_getfield(int0, 807056, 0);
    if ((STRING_LENGTH(string1) > 0)) {
        IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -1), int5);
    };
    return;
}