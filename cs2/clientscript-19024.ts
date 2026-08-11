//
function script19024(): void {
    if ((varbitplayer_52413 <= 0)) {
        IF_SETHIDE(true, comp(994, 4));  // toplevel_v2_status_effects:ring_of_death_graphic
        IF_SETTRANS(255, comp(994, 4));  // toplevel_v2_status_effects:ring_of_death_graphic
        return;
    };
    IF_SETGRAPHIC(20925 as graphic, comp(994, 4));  // toplevel_v2_status_effects:ring_of_death_graphic
    IF_SETHIDE(false, comp(994, 4));  // toplevel_v2_status_effects:ring_of_death_graphic
    IF_SETTRANS(38, comp(994, 4));  // toplevel_v2_status_effects:ring_of_death_graphic
    return;
}