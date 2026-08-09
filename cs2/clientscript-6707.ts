//
function script6707(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number): void {
    stack(208896);
    stack(int0);
    DB_FIND(0);
    var int9 = dbrow_findnext();
    if ((int9 == -1)) {
        return;
    };
    var int10 = script6061(int0);
    var int11 = script6062(int0);
    if ((int0 == int1)) {
        script13998(int4, int5, 28547, int6, int7, 228, 80, int8, 0, "", 1);
        CC_SETOPCURSOR(1, 46);
    } else {
        script10410(int4, int5, 28547, int6, int7, 228, 80, int8, 0, "");
        CC_SETOPCURSOR(1, 46);
    };
    CC_CREATE(int2, 4, IF_GETNEXTSUBID(int2));
    CC_SETSIZE(150, 24, 0, 0);
    CC_SETPOSITION((int6 + 5), (int7 + 5), 0, 0);
    CC_SETTEXTFONT(28 as fontmetrics);
    CC_SETTEXTALIGN(0, 0, 0);
    script2733(int2, CC_GETID(), 3);
    CC_SETTEXT(dbrow_getfield(int9, 208912, 0));
    CC_CREATE(int2, 5, IF_GETNEXTSUBID(int2));
    CC_SETGRAPHIC(dbrow_getfield(int9, 208944, MIN(int10, (int11 - 1))));
    CC_SETSIZE(64, 64, 0, 0);
    CC_SETPOSITION((int6 + 156), (int7 + 8), 0, 0);
    var int12 = 1;
    while ((int12 <= int11)) {
        CC_CREATE(int2, 5, IF_GETNEXTSUBID(int2));
        if ((int10 >= int12)) {
            CC_SETGRAPHIC(1531 as graphic);
        } else {
            CC_SETGRAPHIC(1532 as graphic);
        };
        CC_SETSIZE(19, 18, 0, 0);
        CC_SETPOSITION(((int6 + 4) + ((int12 - 1) * 20)), (int7 + 50), 0, 0);
        int12 = (int12 + 1);
    };
    return;
}