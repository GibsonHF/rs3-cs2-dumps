//
function script408(int0: number): void {
    if ((varclient_1363 == int0)) {
        return;
    };
    IF_SETONVARCTRANSMIT(callback(script408, varclient_1363, 1363, 1), comp(1013, 1));  // conq_scroll_overlay:turn_control_layer
    varclient_1389 = 0;
    if ((varclient_1363 == varbitplayer_5386)) {
        IF_SETHIDE(false, comp(1010, 26));  // conq_side_turn:your_turn_layer
        IF_SETHIDE(true, comp(1010, 25));  // conq_side_turn:opponents_turn_layer
        IF_SETHIDE(true, comp(1010, 22));  // conq_side_turn:confirm_end_layer
        IF_SETTEXT("Your Turn", comp(1013, 26));  // conq_scroll_overlay:whose_turn_text
        SOUND_VORBIS_VOLUME(3439 as vorbis, 1, 0, 255);
    } else {
        IF_SETHIDE(true, comp(1010, 26));  // conq_side_turn:your_turn_layer
        IF_SETHIDE(true, comp(1010, 22));  // conq_side_turn:confirm_end_layer
        IF_SETTEXT("Opponent's Turn", comp(1013, 26));  // conq_scroll_overlay:whose_turn_text
        if ((IF_GETHIDE(comp(1010, 7)) == true)) {  // conq_side_turn:commorb_layer
            IF_SETHIDE(false, comp(1010, 25));  // conq_side_turn:opponents_turn_layer
        };
    };
    return;
}