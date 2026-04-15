//
function script19780(): void {
    DB_LISTALL(313);
    dbrow_findnext();
    var int0 = stack();
    var string0 = "";
    var int1 = 0;
    var int2 = 0;
    var int3 = -1;
    CC_DELETEALL(86507559);
    while ((int0 != -1 as dbrow)) {
        if ((script19752(int0) == 1)) {
            int3 = dbrow_getfield(int0, 1282192, 0);
            CC_CREATE(comp(1320, 39), 5, int2);
            int2 = (int2 + 1);
            CC_SETPOSITION(7, (int1 + 16), 0, 0);
            CC_SETSIZE(17, 18, 0, 0);
            CC_SETGRAPHIC(int3);
            CC_SETHIDE(false);
            CC_CREATE(comp(1320, 39), 4, int2);
            int2 = (int2 + 1);
            CC_SETPOSITION(36, int1, 0, 0);
            CC_SETSIZE(322, 50, 0, 0);
            CC_SETTEXTALIGN(0, 1, 0);
            CC_SETTEXTFONT(209 as fontmetrics);
            CC_SETTEXT(`${dbrow_getfield(int0, 1282064, 0)} x ${inttostring(script19759(int0), 10)}`);
            CC_SETHIDE(false);
            int1 = (int1 + 46);
        };
        dbrow_findnext();
        int0 = stack();
    };
    if ((int1 > 0)) {
        CC_CREATE(comp(1320, 39), 5, int2);
        int2 = (int2 + 1);
        CC_SETGRAPHIC(5394 as graphic);
        CC_SETPOSITION(23, 0, 0, 0);
        CC_SETSIZE(17, (int1 + 10), 0, 0);
        IF_SETHIDE(false, comp(1320, 39));
    };
    script19779(comp(1320, 23));
    return;
}