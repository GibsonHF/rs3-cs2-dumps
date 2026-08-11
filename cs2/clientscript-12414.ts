//
function script12414(): void {
    IF_SETTEXT(`${inttostring(varbitplayer_31011, 10)}/${inttostring(2000, 10)}`, comp(1751, 25));  // trh89_rc_summoning_rifts:summoning_progress_bar_text
    IF_SETTEXT(`${inttostring(varbitplayer_31010, 10)}/${inttostring(2000, 10)}`, comp(1751, 29));  // trh89_rc_summoning_rifts:runecrafting_progress_bar_text
    if ((varbitplayer_31010 >= 2000)) {
        IF_SETHIDE(true, comp(1751, 5));  // trh89_rc_summoning_rifts:unlock_2_graphic_disabled
    };
    if ((varbitplayer_31011 >= 2000)) {
        IF_SETHIDE(true, comp(1751, 7));  // trh89_rc_summoning_rifts:unlock_1_graphic_disabled
    };
    var int0 = IF_GETWIDTH(comp(1751, 10));  // trh89_rc_summoning_rifts:summoning_background_layer
    var int1 = ((int0 * 100) / 2000);
    var int2 = 0;
    if ((varbitplayer_31010 == 2000)) {
        IF_SETSIZE(int0, 0, 0, 1, comp(1751, 9));  // trh89_rc_summoning_rifts:runecrafting_progress_bar
    } else {
        int2 = ((int1 * varbitplayer_31010) / 100);
        IF_SETSIZE(int2, 21, 0, 0, comp(1751, 9));  // trh89_rc_summoning_rifts:runecrafting_progress_bar
    };
    if ((varbitplayer_31011 == 2000)) {
        IF_SETSIZE(int0, 0, 0, 1, comp(1751, 11));  // trh89_rc_summoning_rifts:summoning_progress_bar
    } else {
        int2 = ((int1 * varbitplayer_31011) / 100);
        IF_SETSIZE(int2, 21, 0, 0, comp(1751, 11));  // trh89_rc_summoning_rifts:summoning_progress_bar
    };
    return;
}