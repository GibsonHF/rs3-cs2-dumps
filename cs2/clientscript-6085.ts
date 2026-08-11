//
function script6085(int0: number): void {
    SOUND_VORBIS_VOLUME(14378 as vorbis, 1, 0, 120);
    if ((int0 == 0)) {
        IF_SETHIDE(false, comp(1265, 40));  // shop_main:buy_tab_selected_layer
        IF_SETHIDE(true, comp(1265, 31));  // shop_main:sell_tab_selected_layer
    } else {
        IF_SETHIDE(true, comp(1265, 40));  // shop_main:buy_tab_selected_layer
        IF_SETHIDE(false, comp(1265, 31));  // shop_main:sell_tab_selected_layer
    };
    script6087(varplayer_304, varplayer_305, int0, varbitplayer_987);
    return;
}