//
function script11506(int0: number, int1: number): void {
    IF_SETHIDE(false, int0);
    IF_SETHIDE(false, int1);
    if ((int0 != comp(925, 118))) {  // fishcomp_rewards_shop:box_tab_selected_layer
        IF_SETHIDE(true, comp(925, 118));  // fishcomp_rewards_shop:box_tab_selected_layer
    };
    if ((int0 != comp(925, 127))) {  // fishcomp_rewards_shop:reset_tab_selected_layer
        IF_SETHIDE(true, comp(925, 127));  // fishcomp_rewards_shop:reset_tab_selected_layer
    };
    if ((int1 != comp(925, 89))) {  // fishcomp_rewards_shop:tackle_box_layer
        IF_SETHIDE(true, comp(925, 89));  // fishcomp_rewards_shop:tackle_box_layer
    };
    if ((int1 != comp(925, 101))) {  // fishcomp_rewards_shop:tackle_box_reset_layer
        IF_SETHIDE(true, comp(925, 101));  // fishcomp_rewards_shop:tackle_box_reset_layer
    };
    switch (int0) {
        case 60620918: {
            varclient_4886 = 0;
            break;
        }
        case 60620927: {
            varclient_4886 = 1;
            break;
        }
    };
    return;
}