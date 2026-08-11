//
function script11010(int0: number): void {
    var int1 = script11011(varbitplayer_673, varbitplayer_675, varbitplayer_674);
    switch (int0) {
        case 3: {
            if ((varbitplayer_674 != 1023)) {
                if ((struct_getparam(int1, 2532) != 1)) {
                    IF_SETHIDE(false, comp(1311, 560));  // mtxmgt:appearance_buttons
                };
            } else {
                IF_SETHIDE(false, comp(1311, 518));  // mtxmgt:pet_options
                IF_SETHIDE(false, comp(1311, 560));  // mtxmgt:appearance_buttons
                IF_SETHIDE(true, comp(1311, 573));  // mtxmgt:manager_options
                IF_SETHIDE(true, comp(1311, 580));  // mtxmgt:disabled_dropdown_layer
            };
            break;
        }
        case 4: {
            if ((varbitplayer_674 != 1023)) {
                if ((struct_getparam(int1, 2532) != 1)) {
                    IF_SETHIDE(true, comp(1311, 560));  // mtxmgt:appearance_buttons
                };
            } else {
                IF_SETHIDE(false, comp(1311, 573));  // mtxmgt:manager_options
                IF_SETHIDE(false, comp(1311, 580));  // mtxmgt:disabled_dropdown_layer
                IF_SETHIDE(false, comp(1311, 380));  // mtxmgt:pet_panel
                IF_SETHIDE(true, comp(1311, 518));  // mtxmgt:pet_options
                IF_SETHIDE(true, comp(1311, 560));  // mtxmgt:appearance_buttons
                IF_SETHIDE(true, comp(1311, 418));  // mtxmgt:accept_decline_change
                IF_SETHIDE(true, comp(1311, 402));  // mtxmgt:pet_food_bonus
                IF_SETHIDE(true, comp(1311, 519));  // mtxmgt:legendary_pet_info_button
                IF_SETHIDE(true, comp(1311, 408));  // mtxmgt:pet_benefits
                IF_SETHIDE(false, comp(1311, 419));  // mtxmgt:accept_button
            };
            break;
        }
        case 5: {
            if ((varbitplayer_674 != 1023)) {
            } else {
                IF_SETHIDE(false, comp(1311, 419));  // mtxmgt:accept_button
                IF_SETHIDE(false, comp(1311, 418));  // mtxmgt:accept_decline_change
                IF_SETHIDE(false, comp(1311, 402));  // mtxmgt:pet_food_bonus
                IF_SETHIDE(false, comp(1311, 519));  // mtxmgt:legendary_pet_info_button
                IF_SETHIDE(false, comp(1311, 408));  // mtxmgt:pet_benefits
                IF_SETHIDE(true, comp(1311, 380));  // mtxmgt:pet_panel
            };
            break;
        }
        default: {
            return;
        }
    };
    return;
}