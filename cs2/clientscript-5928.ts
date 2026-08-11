//
function script5928(): void {
    script8841(59, 1);
    if ((script4186() < 2)) {
        IF_SETHIDE(true, comp(916, 319));  // pop_ship:next_layer
        IF_SETHIDE(true, comp(916, 317));  // pop_ship:prev_layer
    } else {
        IF_SETHIDE(false, comp(916, 319));  // pop_ship:next_layer
        IF_SETHIDE(false, comp(916, 317));  // pop_ship:prev_layer
        IF_SETOPKEY(1, 96, 0, comp(916, 317));  // pop_ship:prev_layer
        IF_SETOPKEY(1, 97, 0, comp(916, 319));  // pop_ship:next_layer
    };
    IF_SETOPKEY(1, 13, 0, comp(916, 344));  // pop_ship:close_button
    script5815();
    if ((varbitplayer_17495 < 63)) {
        IF_SETHIDE(true, comp(916, 206));  // pop_ship:crew_button
    } else {
        IF_SETHIDE(false, comp(916, 206));  // pop_ship:crew_button
    };
    if ((script6431() == 0)) {
        IF_SETHIDE(true, comp(916, 163));  // pop_ship:hover_crew_dragable_hint
    };
    return;
}