//
function script11504(int0: number, int1: number): void {
    IF_SETHIDE(false, int0);
    IF_SETHIDE(false, int1);
    if ((int0 != comp(925, 80))) {  // fishcomp_rewards_shop:fish_tab_selected_layer
        IF_SETHIDE(true, comp(925, 80));  // fishcomp_rewards_shop:fish_tab_selected_layer
    };
    if ((int0 != comp(925, 71))) {  // fishcomp_rewards_shop:buff_tab_selected_layer
        IF_SETHIDE(true, comp(925, 71));  // fishcomp_rewards_shop:buff_tab_selected_layer
    };
    if ((int1 != comp(925, 48))) {  // fishcomp_rewards_shop:raw_fish_outer_layer
        IF_SETHIDE(true, comp(925, 48));  // fishcomp_rewards_shop:raw_fish_outer_layer
    };
    if ((int1 != comp(925, 34))) {  // fishcomp_rewards_shop:buff_outer_layer
        IF_SETHIDE(true, comp(925, 34));  // fishcomp_rewards_shop:buff_outer_layer
    };
    switch (int0) {
        case 60620880: {
            varclient_4885 = 0;
            break;
        }
        case 60620871: {
            varclient_4885 = 1;
            break;
        }
    };
    return;
}