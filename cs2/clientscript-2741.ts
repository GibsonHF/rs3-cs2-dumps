//
function script2741(): void {
    IF_SETHIDE(true, comp(1050, 1));  // fremsaga_thok2_ending_montage:image_graphic
    IF_SETHIDE(true, comp(1050, 2));  // fremsaga_thok2_ending_montage:text_description
    IF_SETHIDE(true, comp(1050, 7));  // fremsaga_thok2_ending_montage:top_horz_1
    IF_SETHIDE(true, comp(1050, 8));  // fremsaga_thok2_ending_montage:top_horz_2
    IF_SETHIDE(true, comp(1050, 9));  // fremsaga_thok2_ending_montage:top_horz_3
    IF_SETHIDE(true, comp(1050, 10));  // fremsaga_thok2_ending_montage:top_horz_4
    IF_SETHIDE(true, comp(1050, 11));  // fremsaga_thok2_ending_montage:top_horz_5
    IF_SETHIDE(true, comp(1050, 12));  // fremsaga_thok2_ending_montage:top_vert_1
    IF_SETHIDE(true, comp(1050, 13));  // fremsaga_thok2_ending_montage:top_vert_2
    IF_SETHIDE(true, comp(1050, 14));  // fremsaga_thok2_ending_montage:top_vert_3
    IF_SETHIDE(true, comp(1050, 15));  // fremsaga_thok2_ending_montage:top_vert_4
    IF_SETHIDE(true, comp(1050, 16));  // fremsaga_thok2_ending_montage:top_vert_5
    IF_SETTRANS(255, comp(1050, 17));  // fremsaga_thok2_ending_montage:fade_rect
    IF_SETTRANS(255, comp(1050, 4));  // fremsaga_thok2_ending_montage:bg_rect
    IF_SETONTIMER(callback(script3965, -2147483645), comp(1050, 4));  // fremsaga_thok2_ending_montage:bg_rect
    varclient_1885 = 0;
    return;
}