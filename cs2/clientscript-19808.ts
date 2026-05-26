//
function script19808(): void {
    var int0 = -1;
    var int1 = 0;
    var int2 = -1;
    var int3 = -1;
    script9525(86507650, 3, -1);
    script9525(86507743, 3, -1);
    IF_SETPOSITION(0, 0, 1, 1, 86507637);
    IF_SETPOSITION(0, 0, 1, 1, 86507735);
    IF_SETHIDE(1, 86507644);
    IF_SETHIDE(1, 86507746);
    [int0, int1, int2, int3] = script19764(1);
    script16663(14838, int0, 1);
    IF_SETTEXT(`Keys to unlock: ${inttostring(script19767(1), 10)}`, comp(1320, 132));
    [int0, int1, int2, int3] = script19764(2);
    script16663(14839, int0, 1);
    IF_SETTEXT(`Keys to unlock: ${inttostring(script19767(2), 10)}`, comp(1320, 225));
    var int4 = 0;
    [int4, int0, int1, int2, int3] = script19766(1);
    if ((int4 == 1)) {
        IF_SETHIDE(0, 86507644);
        IF_SETPOSITION(-12, 0, 1, 1, 86507637);
        script16663(14840, int0, 1);
        IF_SETTEXT(strconcat(IF_GETTEXT(dbrow_getfield(14838 as dbrow, 708688, 0)), ` & ${OC_NAME(int0)}`), dbrow_getfield(14838 as dbrow, 708688, 0));
    };
    [int4, int0, int1, int2, int3] = script19766(2);
    if ((int4 == 1)) {
        IF_SETHIDE(0, 86507746);
        IF_SETPOSITION(12, 0, 1, 1, 86507735);
        script16663(14841, int0, 1);
        IF_SETTEXT(strconcat(IF_GETTEXT(dbrow_getfield(14839 as dbrow, 708688, 0)), ` & ${OC_NAME(int0)}`), dbrow_getfield(14839 as dbrow, 708688, 0));
    };
    return;
}