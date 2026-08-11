//
function script3287(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number): void {
    var int10 = (IF_GETWIDTH(comp(557, 9)) - 4);  // trh162_overlay:progress_bar_background
    var int11 = ((int0 * 100) / 32);
    IF_SETTEXT(`${inttostring(int11, 10)}%`, comp(557, 15));  // trh162_overlay:progress_bar_number
    var int12 = ((int11 * int10) / 100);
    IF_SETSIZE(int12, 18, 0, 0, comp(557, 10));  // trh162_overlay:progress_bar_fill
    if ((int1 == 1)) {
        IF_SETHIDE(false, comp(557, 27));  // trh162_overlay:head
    };
    if ((int2 == 1)) {
        IF_SETHIDE(false, comp(557, 26));  // trh162_overlay:body
    };
    if ((int3 == 1)) {
        IF_SETHIDE(false, comp(557, 25));  // trh162_overlay:legs
    };
    if ((int4 == 1)) {
        IF_SETHIDE(false, comp(557, 29));  // trh162_overlay:boots
    };
    if ((int5 == 1)) {
        IF_SETHIDE(false, comp(557, 30));  // trh162_overlay:gloves
    };
    if ((int6 == 1)) {
        IF_SETHIDE(false, comp(557, 28));  // trh162_overlay:cloak
    };
    if ((int7 == 1)) {
        IF_SETHIDE(false, comp(557, 31));  // trh162_overlay:sword
    };
    IF_SETTEXT(`${inttostring(int8, 10)} / 7`, comp(557, 16));  // trh162_overlay:armour_count
    if ((int9 == 1)) {
        IF_SETHIDE(false, comp(557, 12));  // trh162_overlay:guaranteed_armour_glow
    } else {
        IF_SETHIDE(true, comp(557, 12));  // trh162_overlay:guaranteed_armour_glow
    };
    return;
}