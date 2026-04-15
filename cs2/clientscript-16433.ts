//
function script16433(): void {
    DB_LISTALL(168);
    dbrow_findnext();
    var int0 = stack();
    var string0 = "";
    var int1 = 0;
    var int2 = 0;
    var int3 = -1;
    CC_DELETEALL(43843608);
    var int4 = 0;
    while ((int0 != -1 as dbrow)) {
        if ((script16421(int0) == 1)) {
            int3 = dbrow_getfield(int0, 688272, 0);
            if (((int3 == 5386 as graphic) || (int3 == 5387 as graphic))) {
                int4 = 1;
            } else {
                int4 = 0;
            };
            CC_CREATE(comp(669, 24), 5, int2);
            int2 = (int2 + 1);
            if ((int4 == 1)) {
                CC_SETPOSITION(12, int1, 0, 0);
            } else {
                CC_SETPOSITION(7, int1, 0, 0);
            };
            CC_SETSIZE(17, 18, 0, 0);
            CC_SETGRAPHIC(int3);
            CC_SETHIDE(false);
            if ((int4 == 1)) {
                CC_CREATE(comp(669, 24), 5, int2);
                int2 = (int2 + 1);
                CC_SETPOSITION(1, int1, 0, 0);
                CC_SETSIZE(17, 18, 0, 0);
                CC_SETGRAPHIC(5390 as graphic);
                CC_SETHIDE(false);
            };
            CC_CREATE(comp(669, 24), 4, int2);
            int2 = (int2 + 1);
            CC_SETPOSITION(36, int1, 0, 0);
            CC_SETSIZE(322, 20, 0, 0);
            CC_SETTEXTALIGN(0, 1, 0);
            CC_SETTEXTFONT(209 as fontmetrics);
            CC_SETTEXT(`${dbrow_getfield(int0, 688144, 0)} x ${inttostring(script16425(int0), 10)}`);
            CC_SETHIDE(false);
            int1 = (int1 + 22);
        };
        dbrow_findnext();
        int0 = stack();
    };
    if ((int1 > 0)) {
        CC_CREATE(comp(669, 24), 5, int2);
        int2 = (int2 + 1);
        CC_SETGRAPHIC(5394 as graphic);
        CC_SETPOSITION(23, 0, 0, 0);
        CC_SETSIZE(17, (int1 + 10), 0, 0);
        IF_SETHIDE(false, comp(669, 24));
    };
    script16432(comp(669, 37));
    return;
}