//
function script12990(): void {
    switch (varbitplayer_34641) {
        case 0: {
            IF_SETHIDE(true, comp(1820, 78));  // quest_endgame_replay:saradomin_checkbox_selected_layer
            IF_SETHIDE(true, comp(1820, 80));  // quest_endgame_replay:zamorak_checkbox_selected_layer
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(1820, 78));  // quest_endgame_replay:saradomin_checkbox_selected_layer
            IF_SETHIDE(true, comp(1820, 80));  // quest_endgame_replay:zamorak_checkbox_selected_layer
            break;
        }
        case 2: {
            IF_SETHIDE(true, comp(1820, 78));  // quest_endgame_replay:saradomin_checkbox_selected_layer
            IF_SETHIDE(false, comp(1820, 80));  // quest_endgame_replay:zamorak_checkbox_selected_layer
            break;
        }
    };
    return;
}