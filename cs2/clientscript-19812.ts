//
function script19812(int0: number, int1: number): void {
    var int2 = -1;
    var int3 = 0;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    [int2, int3, int4, int5, int6] = script19765(int0, int1);
    script9525(86507704, 3, -1);
    script16663(14844, int2, int3);
    if ((int6 != -1)) {
        if (((int0 == 1) || (int0 == 2))) {
            IF_SETTEXT(`Keys: ${inttostring(dbrow_getfield(int6, 1273856, 0), 10)}`, comp(1320, 186));  // trh205_overlay:prize_path_preview_price
        } else {
            IF_SETTEXT("Unlocked from obtaining all previous rewards.", comp(1320, 186));  // trh205_overlay:prize_path_preview_price
        };
    } else {
        IF_SETTEXT("Unlocked from obtaining all previous rewards.", comp(1320, 186));  // trh205_overlay:prize_path_preview_price
    };
    return;
}