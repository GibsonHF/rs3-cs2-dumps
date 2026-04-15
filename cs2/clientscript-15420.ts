//
function script15420(int0: dbrow, int1: int): void {
    if ((int0 == -1 as dbrow)) {
        return;
    };
    varclient_6986 = int1;
    var int2 = dbrow_getfield(int0, 483392, 0);
    var int3 = dbrow_getfield(int0, 483408, 0);
    var string0 = strconcat("<col=FFFFFF>", dbrow_getfield(int0, 483344, 0));
    var string1 = dbrow_getfield(int0, 483376, 0);
    var string2 = "";
    stack(int2);
    stack(48693255);
    IF_SETGRAPHIC();
    IF_SETONMOUSEOVER(callback(script15422, int3), 48693249);
    IF_SETONMOUSELEAVE(callback(script15423, int2), 48693249);
    if ((DB_GETFIELDCOUNT(int0, 483472) > 0)) {
        string2 = dbrow_getfield(int0, 483472, 0);
        IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), 48693249);
    };
    IF_SETOPBASE(string0, comp(743, 1));
    IF_SETOP(1, string1, comp(743, 1));
    script8843(83, 1);
    return;
}