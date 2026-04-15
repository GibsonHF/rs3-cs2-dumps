//
function script19808(): void {
    var int0 = -1 as obj;
    var int1 = 0;
    var int2 = -1 as struct;
    var int3 = -1 as graphic;
    script9525(comp(1320, 130), 3, -1);
    script9525(comp(1320, 223), 3, -1);
    IF_SETPOSITION(0, 0, 1, 1, comp(1320, 117));
    IF_SETPOSITION(0, 0, 1, 1, comp(1320, 215));
    IF_SETHIDE(true, comp(1320, 124));
    IF_SETHIDE(true, comp(1320, 226));
    [int0, int1, int2, int3] = script19764(1);
    script16663(14838 as dbrow, int0, 1);
    IF_SETTEXT(`Keys to unlock: ${inttostring(script19767(1), 10)}`, comp(1320, 132));
    [int0, int1, int2, int3] = script19764(2);
    script16663(14839 as dbrow, int0, 1);
    IF_SETTEXT(`Keys to unlock: ${inttostring(script19767(2), 10)}`, comp(1320, 225));
    var int4 = 0;
    [int4, int0, int1, int2, int3] = script19766(1);
    if ((int4 == 1)) {
        IF_SETHIDE(false, comp(1320, 124));
        IF_SETPOSITION(-12, 0, 1, 1, comp(1320, 117));
        script16663(14840 as dbrow, int0, 1);
        IF_SETTEXT(strconcat(IF_GETTEXT(dbrow_getfield(14838 as dbrow, 708688, 0)), ` & ${OC_NAME(int0)}`), dbrow_getfield(14838 as dbrow, 708688, 0));
    };
    [int4, int0, int1, int2, int3] = script19766(2);
    if ((int4 == 1)) {
        IF_SETHIDE(false, comp(1320, 226));
        IF_SETPOSITION(12, 0, 1, 1, comp(1320, 215));
        script16663(14841 as dbrow, int0, 1);
        IF_SETTEXT(strconcat(IF_GETTEXT(dbrow_getfield(14839 as dbrow, 708688, 0)), ` & ${OC_NAME(int0)}`), dbrow_getfield(14839 as dbrow, 708688, 0));
    };
    return;
}