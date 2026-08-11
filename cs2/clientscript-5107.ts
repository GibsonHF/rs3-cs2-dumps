//
function script5107(int0: number): void {
    IF_SETHIDE(true, comp(1116, 114));  // clan_signpost:nemesis_selected_layer
    IF_SETHIDE(true, comp(1116, 121));  // clan_signpost:enemy_selected_layer
    IF_SETHIDE(true, comp(1116, 107));  // clan_signpost:neutral_selected_layer
    IF_SETHIDE(true, comp(1116, 100));  // clan_signpost:friend_selected_layer
    IF_SETHIDE(true, comp(1116, 93));  // clan_signpost:ally_selected_layer
    switch (int0) {
        case -2: {
            IF_SETHIDE(false, comp(1116, 114));  // clan_signpost:nemesis_selected_layer
            break;
        }
        case -1: {
            IF_SETHIDE(false, comp(1116, 121));  // clan_signpost:enemy_selected_layer
            break;
        }
        case 0: {
            IF_SETHIDE(false, comp(1116, 107));  // clan_signpost:neutral_selected_layer
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(1116, 100));  // clan_signpost:friend_selected_layer
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1116, 93));  // clan_signpost:ally_selected_layer
            break;
        }
    };
    return;
}