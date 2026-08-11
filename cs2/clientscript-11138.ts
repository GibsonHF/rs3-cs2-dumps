//
function script11138(int0: number): void {
    IF_SETHIDE(false, comp(1600, 19));  // easter15_hatching:complete_layer
    IF_SETHIDE(true, comp(1600, 17));  // easter15_hatching:distraction_layer
    IF_SETHIDE(true, comp(1600, 7));  // easter15_hatching:game_components
    IF_SETHIDE(true, comp(1600, 18));  // easter15_hatching:help_layer
    IF_SETHIDE(true, comp(1600, 32));  // easter15_hatching:start_game_layer
    IF_SETMODELANIM(26223 as seq, comp(1600, 23));  // easter15_hatching:complete_jadinko_model
    IF_SETMODELANIM(26226 as seq, comp(1600, 24));  // easter15_hatching:complete_egg_model
    IF_SETTEXT(`Your time: ${inttostring(int0, 10)}s`, comp(1600, 25));  // easter15_hatching:score_text
    return;
}