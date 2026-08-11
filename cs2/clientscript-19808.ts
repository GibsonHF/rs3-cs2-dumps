//
function script19808(): void {
    var int0 = -1 as obj;
    var int1 = 0;
    var int2 = -1;
    var int3 = -1;
    script9525(86507650, 3, -1);
    script9525(86507743, 3, -1);
    IF_SETPOSITION(0, 0, 1, 1, comp(1320, 117));  // trh205_overlay:prize_select_preview_movable_layer_1
    IF_SETPOSITION(0, 0, 1, 1, comp(1320, 215));  // trh205_overlay:prize_select_preview_movable_layer_2
    IF_SETHIDE(true, comp(1320, 124));  // trh205_overlay:joint_prize_option_1_content_layer
    IF_SETHIDE(true, comp(1320, 226));  // trh205_overlay:joint_prize_option_2_content_layer
    [int0, int1, int2, int3] = script19764(1);
    script16663(14838, int0, 1);
    IF_SETTEXT(`Keys to unlock: ${inttostring(script19767(1), 10)}`, comp(1320, 132));  // trh205_overlay:prize_select_preview_keys_1
    [int0, int1, int2, int3] = script19764(2);
    script16663(14839, int0, 1);
    IF_SETTEXT(`Keys to unlock: ${inttostring(script19767(2), 10)}`, comp(1320, 225));  // trh205_overlay:prize_select_preview_keys_2
    var int4 = 0;
    [int4, int0, int1, int2, int3] = script19766(1);
    if ((int4 == 1)) {
        IF_SETHIDE(false, comp(1320, 124));  // trh205_overlay:joint_prize_option_1_content_layer
        IF_SETPOSITION(-12, 0, 1, 1, comp(1320, 117));  // trh205_overlay:prize_select_preview_movable_layer_1
        script16663(14840, int0, 1);
        IF_SETTEXT(strconcat(IF_GETTEXT(dbrow_getfield(14838 as dbrow, 708688, 0)), ` & ${OC_NAME(int0)}`), dbrow_getfield(14838 as dbrow, 708688, 0));
    };
    [int4, int0, int1, int2, int3] = script19766(2);
    if ((int4 == 1)) {
        IF_SETHIDE(false, comp(1320, 226));  // trh205_overlay:joint_prize_option_2_content_layer
        IF_SETPOSITION(12, 0, 1, 1, comp(1320, 215));  // trh205_overlay:prize_select_preview_movable_layer_2
        script16663(14841, int0, 1);
        IF_SETTEXT(strconcat(IF_GETTEXT(dbrow_getfield(14839 as dbrow, 708688, 0)), ` & ${OC_NAME(int0)}`), dbrow_getfield(14839 as dbrow, 708688, 0));
    };
    return;
}