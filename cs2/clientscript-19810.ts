//
function script19810(): void {
    var int0 = -1;
    var int1 = 0;
    var int2 = -1;
    var int3 = -1;
    IF_SETPOSITION(0, 0, 1, 1, 86507654);
    IF_SETHIDE(1, 86507655);
    [int0, int1, int2, int3] = script19764(0);
    script9525(86507669, 3, -1);
    script16663(14842, int0, int1);
    var int4 = 0;
    [int4, int0, int1, int2, int3] = script19766(varbitplayer_57152);
    if ((int4 == 1)) {
        IF_SETHIDE(0, 86507655);
        IF_SETPOSITION(-30, 0, 1, 1, 86507654);
        script16663(14843, int0, 1);
        IF_SETTEXT(strconcat(IF_GETTEXT(dbrow_getfield(14842 as dbrow, 708688, 0)), ` & ${OC_NAME(int0)}`), dbrow_getfield(14842 as dbrow, 708688, 0));
    };
    script19797(34731, 34732, 86507659, 86507661);
    return;
}