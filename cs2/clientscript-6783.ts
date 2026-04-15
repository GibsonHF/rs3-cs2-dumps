//
function script6783(): void {
    var int0 = -1;
    var int1 = DB_GETFIELDCOUNT(8346 as dbrow, 413696);
    var int2 = 0;
    var int3 = -1 as obj;
    var int4 = 0;
    var int5 = 0;
    while ((++int0 < int1)) {
        [int3, int2, int2, int2, int2, int2, int2, int2] = dbrow_getfield(8346 as dbrow, 413696, int0);
        if ((int3 != -1 as obj)) {
            CC_CREATE(comp(631, 24), 5, int4);
            int4 = (int4 + 1);
            CC_SETSIZE(36, 34, 0, 0);
            CC_SETOBJECT_NONUM(int3, 1);
            CC_SETHIDE(false);
            CC_CREATE(comp(631, 24), 4, int4);
            int4 = (int4 + 1);
            CC_SETPOSITION(36, int5, 0, 0);
            CC_SETSIZE(322, 34, 0, 0);
            CC_SETTEXTALIGN(0, 1, 0);
            CC_SETTEXT(OC_NAME(int3));
            CC_SETTEXTFONT(207 as fontmetrics);
            int5 = (int5 + 34);
        };
    };
    if ((int5 > 0)) {
        CC_CREATE(comp(631, 24), 5, int4);
        int4 = (int4 + 1);
        CC_SETGRAPHIC(5394 as graphic);
        CC_SETPOSITION(23, 0, 0, 0);
        CC_SETSIZE(17, (int5 + 10), 0, 0);
        IF_SETHIDE(false, comp(631, 24));
    };
    return;
}