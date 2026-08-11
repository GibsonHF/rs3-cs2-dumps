//
function script9907(int0: number): void {
    if ((varplayer_12314 > 0)) {
        IF_SETHIDE(false, comp(1920, 35));  // toplevel_v2_minimap_legacy:league_button
        IF_SETGRAPHIC(script20126(), comp(1920, 35));  // toplevel_v2_minimap_legacy:league_button
    } else {
        IF_SETHIDE(true, comp(1920, 35));  // toplevel_v2_minimap_legacy:league_button
    };
    if ((int0 == 1)) {
        IF_SETHIDE(false, comp(1920, 10));  // toplevel_v2_minimap_legacy:money_pouch_contents
    } else {
        IF_SETHIDE(true, comp(1920, 10));  // toplevel_v2_minimap_legacy:money_pouch_contents
        IF_SETHIDE(true, comp(1920, 13));  // toplevel_v2_minimap_legacy:money_pouch_anim_layer
    };
    return;
}