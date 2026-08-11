//
function script11126(): void {
    IF_SETONVARTRANSMIT(callback(script11133, 5171, 1), comp(1600, 2));  // easter15_hatching:egg_graphic
    IF_SETONVARTRANSMIT(callback(script11134, -2147483645, 5171, 5171, 2), comp(1600, 12));  // easter15_hatching:status_text
    IF_SETHIDE(true, comp(1600, 18));  // easter15_hatching:help_layer
    IF_SETHIDE(true, comp(1600, 32));  // easter15_hatching:start_game_layer
    IF_SETHIDE(false, comp(1600, 7));  // easter15_hatching:game_components
    IF_SETHIDE(false, comp(1600, 17));  // easter15_hatching:distraction_layer
    IF_SETHIDE(true, comp(1600, 19));  // easter15_hatching:complete_layer
    return;
}