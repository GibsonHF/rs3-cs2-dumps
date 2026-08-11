//
function script410(int0: number): void {
    if ((varclient_1361 == int0)) {
        return;
    };
    IF_SETONVARCTRANSMIT(callback(script410, varclient_1361, 1361, 1), comp(1010, 5));  // conq_side_turn:phase_check_layer
    if ((varclient_1363 == varbitplayer_5386)) {
        IF_SETHIDE(false, comp(1010, 26));  // conq_side_turn:your_turn_layer
        IF_SETHIDE(true, comp(1010, 22));  // conq_side_turn:confirm_end_layer
    };
    IF_SETHIDE(true, comp(1010, 31));  // conq_side_turn:checkbox_selected_layer
    IF_SETHIDE(true, comp(1010, 35));  // conq_side_turn:checkbox_selected_layer_1
    IF_SETHIDE(true, comp(1010, 39));  // conq_side_turn:checkbox_selected_layer_2
    IF_SETHIDE(true, comp(1010, 43));  // conq_side_turn:checkbox_selected_layer_3
    IF_SETHIDE(true, comp(1010, 33));  // conq_side_turn:checkbox_deselected_layer
    IF_SETHIDE(true, comp(1010, 37));  // conq_side_turn:checkbox_deselected_layer_1
    IF_SETHIDE(true, comp(1010, 41));  // conq_side_turn:checkbox_deselected_layer_2
    IF_SETHIDE(true, comp(1010, 45));  // conq_side_turn:checkbox_deselected_layer_3
    if ((varclient_1361 == 0)) {
        IF_SETHIDE(false, comp(1010, 31));  // conq_side_turn:checkbox_selected_layer
        IF_SETHIDE(false, comp(1010, 37));  // conq_side_turn:checkbox_deselected_layer_1
        IF_SETHIDE(false, comp(1010, 41));  // conq_side_turn:checkbox_deselected_layer_2
        IF_SETHIDE(false, comp(1010, 45));  // conq_side_turn:checkbox_deselected_layer_3
    } else if ((varclient_1361 == 1)) {
        if ((varbitplayer_5387 == 1)) {
            if ((RANDOM(2) == 0)) {
                SOUND_VORBIS_VOLUME(3436 as vorbis, 1, 0, 255);
            } else {
                SOUND_VORBIS_VOLUME(3438 as vorbis, 1, 0, 255);
            };
        };
        IF_SETHIDE(false, comp(1010, 31));  // conq_side_turn:checkbox_selected_layer
        IF_SETHIDE(false, comp(1010, 35));  // conq_side_turn:checkbox_selected_layer_1
        IF_SETHIDE(false, comp(1010, 41));  // conq_side_turn:checkbox_deselected_layer_2
    } else if ((varclient_1361 == 2)) {
        if ((varbitplayer_5387 == 1)) {
            SOUND_VORBIS_VOLUME(3437 as vorbis, 1, 0, 255);
        };
        IF_SETHIDE(false, comp(1010, 31));  // conq_side_turn:checkbox_selected_layer
        IF_SETHIDE(false, comp(1010, 35));  // conq_side_turn:checkbox_selected_layer_1
        IF_SETHIDE(false, comp(1010, 39));  // conq_side_turn:checkbox_selected_layer_2
        IF_SETHIDE(false, comp(1010, 45));  // conq_side_turn:checkbox_deselected_layer_3
    } else {
        if ((varbitplayer_5387 == 1)) {
            SOUND_VORBIS_VOLUME(3441 as vorbis, 1, 0, 255);
        };
        IF_SETHIDE(false, comp(1010, 31));  // conq_side_turn:checkbox_selected_layer
        IF_SETHIDE(false, comp(1010, 35));  // conq_side_turn:checkbox_selected_layer_1
        IF_SETHIDE(false, comp(1010, 39));  // conq_side_turn:checkbox_selected_layer_2
        IF_SETHIDE(false, comp(1010, 43));  // conq_side_turn:checkbox_selected_layer_3
    };
    return;
}