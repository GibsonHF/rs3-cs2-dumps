//
function script14921(int0: number): void {
    if ((int0 == -1)) {
        return;
    };
    CC_DELETEALL(45481999);
    CC_DELETEALL(45482000);
    CC_DELETEALL(45482033);
    CC_DELETEALL(45482034);
    CC_DELETEALL(45482036);
    CC_DELETEALL(45482037);
    var int1 = -1;
    var int2 = -1 as dbrow;
    stack(340080);
    stack(int0);
    DB_FIND(0);
    dbrow_findnext();
    int1 = stack();
    if ((int1 != -1)) {
        stack(335984);
        stack(int1);
        DB_FIND(0);
        dbrow_findnext();
        int2 = stack();
    };
    if ((int2 != -1 as dbrow)) {
        IF_SETTEXT(`${dbrow_getfield(int2, 335888, 0)}<br>Location: ${dbrow_getfield(int2, 335952, 0)}`, 45481995);
    };
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    int3 = script14766(45481999, 45482000, int0, 0, 0, IF_GETWIDTH(45481998), 0, 0);
    if ((IF_FIND(45481998) == 1)) {
        CC_SETSIZE(0, int3, 1, 0);
    };
    int4 = script14768(45482036, 45482037, -1, int0, 0, 0, IF_GETWIDTH(45482002), 0, "");
    if ((IF_FIND(45482002) == 1)) {
        CC_SETSIZE(0, int4, 1, 0);
    };
    if ((IF_FIND(45482001) == 1)) {
        CC_SETPOSITION(0, int3, 0, 0);
        CC_SETSIZE(0, (int3 + int4), 1, 1);
    };
    int5 = script14767(45482033, 45482034, -1, int0, 0, 0, IF_GETWIDTH(45482001), IF_GETHEIGHT(45482001), (IF_GETWIDTH(45482001) - 19), 0);
    IF_SETSCROLLSIZE(0, MAX(IF_GETHEIGHT(45482034), int5), 45482034);
    IF_SETSCROLLPOS(0, 0, 45482034);
    script7791(45482035, 45482034);
    IF_SETHIDE(0, 45481990);
    return;
}