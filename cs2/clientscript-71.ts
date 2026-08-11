//
function script71(): void {
    if ((varbitplayer_34637 == 1)) {
        IF_SETHIDE(false, comp(1820, 88));  // quest_endgame_replay:saradomin_wand_checkbox_selected_layer
    } else {
        IF_SETHIDE(true, comp(1820, 88));  // quest_endgame_replay:saradomin_wand_checkbox_selected_layer
    };
    if ((varbitplayer_34643 == 2)) {
        IF_SETHIDE(false, comp(1820, 2));  // quest_endgame_replay:zaros_helped_checkbox_selected_layer
    } else {
        IF_SETHIDE(true, comp(1820, 2));  // quest_endgame_replay:zaros_helped_checkbox_selected_layer
    };
    if ((varbitplayer_34636 == 1)) {
        IF_SETHIDE(false, comp(1820, 90));  // quest_endgame_replay:zamorak_betrayed_checkbox_selected_layer
    } else {
        IF_SETHIDE(true, comp(1820, 90));  // quest_endgame_replay:zamorak_betrayed_checkbox_selected_layer
    };
    if ((varbitplayer_34640 == 1)) {
        IF_SETHIDE(false, comp(1820, 92));  // quest_endgame_replay:eluned_sacrifice_checkbox_selected_layer
    } else {
        IF_SETHIDE(true, comp(1820, 92));  // quest_endgame_replay:eluned_sacrifice_checkbox_selected_layer
    };
    if ((varbitplayer_34639 == 1)) {
        IF_SETHIDE(false, comp(1820, 94));  // quest_endgame_replay:seren_dark_checkbox_selected_layer
    } else {
        IF_SETHIDE(true, comp(1820, 94));  // quest_endgame_replay:seren_dark_checkbox_selected_layer
    };
    if ((varbitplayer_34638 == 1)) {
        IF_SETHIDE(false, comp(1820, 86));  // quest_endgame_replay:death_checkbox_selected_layer
    } else {
        IF_SETHIDE(true, comp(1820, 86));  // quest_endgame_replay:death_checkbox_selected_layer
    };
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
    IF_SETONVARTRANSMIT(callback(script12992, 6699, 1), comp(1820, 35));  // quest_endgame_replay:saradomin_wand_checkbox_layer
    IF_SETONVARTRANSMIT(callback(script12993, 6699, 1), comp(1820, 37));  // quest_endgame_replay:zaros_helped_checkbox_layer
    IF_SETONVARTRANSMIT(callback(script12994, 6699, 1), comp(1820, 39));  // quest_endgame_replay:zamorak_betrayed_checkbox_layer
    IF_SETONVARTRANSMIT(callback(script12995, 6699, 1), comp(1820, 41));  // quest_endgame_replay:eluned_sacrifice_checkbox_layer
    IF_SETONVARTRANSMIT(callback(script12996, 6699, 1), comp(1820, 43));  // quest_endgame_replay:seren_dark_checkbox_layer
    IF_SETONVARTRANSMIT(callback(script12997, 6699, 1), comp(1820, 45));  // quest_endgame_replay:death_checkbox_layer
    IF_SETONVARTRANSMIT(callback(script12990, 6699, 1), comp(1820, 49));  // quest_endgame_replay:saradomin_checkbox_layer
    IF_SETONVARTRANSMIT(callback(script12991, 6699, 1), comp(1820, 54));  // quest_endgame_replay:armadyl_checkbox_layer
    return;
}