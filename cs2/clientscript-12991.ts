//
function script12991(): void {
    switch (varbitplayer_34642) {
        case 0: {
            IF_SETHIDE(true, comp(1820, 82));  // quest_endgame_replay:armadyl_checkbox_selected_layer
            IF_SETHIDE(true, comp(1820, 84));  // quest_endgame_replay:bandos_checkbox_selected_layer
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1820, 82));  // quest_endgame_replay:armadyl_checkbox_selected_layer
            IF_SETHIDE(true, comp(1820, 84));  // quest_endgame_replay:bandos_checkbox_selected_layer
            break;
        }
        case 4: {
            IF_SETHIDE(true, comp(1820, 82));  // quest_endgame_replay:armadyl_checkbox_selected_layer
            IF_SETHIDE(false, comp(1820, 84));  // quest_endgame_replay:bandos_checkbox_selected_layer
            break;
        }
    };
    return;
}