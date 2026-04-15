//
function script19810(): void {
    var int0 = -1 as obj;
    var int1 = 0;
    var int2 = -1 as struct;
    var int3 = -1 as graphic;
    IF_SETPOSITION(0, 0, 1, 1, comp(1320, 134));
    IF_SETHIDE(true, comp(1320, 135));
    [int0, int1, int2, int3] = script19764(0);
    script9525(comp(1320, 149), 3, -1);
    script16663(14842 as dbrow, int0, int1);
    var int4 = 0;
    [int4, int0, int1, int2, int3] = script19766(varbitplayer_57152);
    if ((int4 == 1)) {
        IF_SETHIDE(false, comp(1320, 135));
        IF_SETPOSITION(-30, 0, 1, 1, comp(1320, 134));
        script16663(14843 as dbrow, int0, 1);
        IF_SETTEXT(strconcat(IF_GETTEXT(dbrow_getfield(14842 as dbrow, 708688, 0)), ` & ${OC_NAME(int0)}`), dbrow_getfield(14842 as dbrow, 708688, 0));
    };
    script19797(34731, 34732 as graphic, comp(1320, 139), comp(1320, 141));
    return;
}