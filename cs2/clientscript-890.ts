//
function script890(int0: number): void {
    IF_SETHIDE(true, comp(1402, 23));  // combatv2_teleother:teleother_on_selected
    IF_SETHIDE(true, comp(1402, 27));  // combatv2_teleother:teleother_friend_selected
    IF_SETHIDE(true, comp(1402, 31));  // combatv2_teleother:teleother_off_selected
    switch (int0) {
        case 0: {
            IF_SETHIDE(false, comp(1402, 23));  // combatv2_teleother:teleother_on_selected
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(1402, 27));  // combatv2_teleother:teleother_friend_selected
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1402, 31));  // combatv2_teleother:teleother_off_selected
            break;
        }
    };
    return;
}