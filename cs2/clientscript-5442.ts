//
function script5442(): void {
    SOUND_VORBIS_VOLUME(6185 as vorbis, 1, 0, 255);
    IF_SETHIDE(true, comp(1168, 10));  // dom_free:boss_info_layer
    IF_SETHIDE(false, comp(1168, 11));  // dom_free:handicaps_info_layer
    IF_SETHIDE(false, comp(1168, 12));  // dom_free:scroll_layer_handicaps
    IF_SETHIDE(true, comp(1168, 13));  // dom_free:scroll_layer_boss_info
    IF_SETCOLOUR(16101953, comp(1168, 79));  // dom_free:boss_details_tab_text
    IF_SETCOLOUR(16777215, comp(1168, 78));  // dom_free:handicaps_tab_text
    varclient_1682 = 1;
    return;
}