//
function script9423(int0: number): void {
    IF_SETHIDE(true, comp(711, 124));  // 6awe2_rewards:armour_button_selected_layer
    IF_SETHIDE(true, comp(711, 114));  // 6awe2_rewards:emotes_button_selected_layer
    IF_SETHIDE(true, comp(711, 104));  // 6awe2_rewards:xp_button_selected_layer
    IF_SETHIDE(true, comp(711, 94));  // 6awe2_rewards:abilities_button_selected_layer
    switch (int0) {
        case 1: {
            IF_SETHIDE(false, comp(711, 124));  // 6awe2_rewards:armour_button_selected_layer
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(711, 114));  // 6awe2_rewards:emotes_button_selected_layer
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(711, 104));  // 6awe2_rewards:xp_button_selected_layer
            break;
        }
        case 4: {
            IF_SETHIDE(false, comp(711, 94));  // 6awe2_rewards:abilities_button_selected_layer
            break;
        }
    };
    return;
}