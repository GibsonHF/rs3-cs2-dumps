//
function script3805(): void {
    if ((varbitplayer_20806 == 1)) {
        IF_SETHIDE(true, comp(641, 9));  // xmas2019_advent:free_key_panel
    };
    if ((script13749() == 1)) {
        script8179();
        IF_SETHIDE(true, comp(641, 132));  // xmas2019_advent:close_button_desktop_layer
        IF_SETSIZE(0, 0, 1, 1, comp(641, 0));  // xmas2019_advent:bespoke_window_layer
        script3856(42008705, 42008605, 42008611, script2956());
    } else {
        IF_SETHIDE(true, comp(641, 35));  // xmas2019_advent:back
        IF_SETHIDE(true, comp(641, 131));  // xmas2019_advent:back_arrow_bounding
    };
    script8841(88, 1);
    script12794();
    script16663(7010, 60003, 1);
    IF_SETOPCURSOR(1, 56, comp(641, 22));  // xmas2019_advent:reward_mouseover_layer_f2p
    IF_SETOPCURSOR(1, 56, comp(641, 23));  // xmas2019_advent:reward_mouseover_layer_members
    script19649(0, 0);
    script19649(1, 0);
    return;
}