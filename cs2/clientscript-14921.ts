//
function script14921(int0: dbrow): void {
    if ((int0 == -1 as dbrow)) {
        return;
    };
    CC_DELETEALL(comp(694, 15));
    CC_DELETEALL(comp(694, 16));
    CC_DELETEALL(comp(694, 49));
    CC_DELETEALL(comp(694, 50));
    CC_DELETEALL(comp(694, 52));
    CC_DELETEALL(comp(694, 53));
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
        IF_SETTEXT(`${dbrow_getfield(int2, 335888, 0)}<br>Location: ${dbrow_getfield(int2, 335952, 0)}`, comp(694, 11));
    };
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    int3 = script14766(comp(694, 15), comp(694, 16), int0, 0, 0, IF_GETWIDTH(comp(694, 14)), 0, 0);
    if ((IF_FIND(comp(694, 14)) == 1)) {
        CC_SETSIZE(0, int3, 1, 0);
    };
    int4 = script14768(comp(694, 52), comp(694, 53), comp(-1, 65535), int0, 0, 0, IF_GETWIDTH(comp(694, 18)), 0, "");
    if ((IF_FIND(comp(694, 18)) == 1)) {
        CC_SETSIZE(0, int4, 1, 0);
    };
    if ((IF_FIND(comp(694, 17)) == 1)) {
        CC_SETPOSITION(0, int3, 0, 0);
        CC_SETSIZE(0, (int3 + int4), 1, 1);
    };
    int5 = script14767(comp(694, 49), comp(694, 50), -1, int0, 0, 0, IF_GETWIDTH(comp(694, 17)), IF_GETHEIGHT(comp(694, 17)), (IF_GETWIDTH(comp(694, 17)) - 19), 0);
    IF_SETSCROLLSIZE(0, MAX(IF_GETHEIGHT(comp(694, 50)), int5), comp(694, 50));
    IF_SETSCROLLPOS(0, 0, comp(694, 50));
    script7791(comp(694, 51), comp(694, 50));
    IF_SETHIDE(false, comp(694, 6));
    return;
}