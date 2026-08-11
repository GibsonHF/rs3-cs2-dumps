//
function script19397(int0: number): void {
    IF_SETHIDE(true, comp(1298, 10));  // group_ironman_achievements:tab_1_selected
    IF_SETHIDE(true, comp(1298, 29));  // group_ironman_achievements:tab_2_selected
    IF_SETHIDE(true, comp(1298, 19));  // group_ironman_achievements:tab_3_selected
    IF_SETHIDE(true, comp(1298, 38));  // group_ironman_achievements:tab_4_selected
    switch (int0) {
        case 1: {
            IF_SETHIDE(false, comp(1298, 10));  // group_ironman_achievements:tab_1_selected
            script19396(5137, 85065761, 85065762);
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1298, 29));  // group_ironman_achievements:tab_2_selected
            script19396(14122, 85065761, 85065762);
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1298, 19));  // group_ironman_achievements:tab_3_selected
            script19396(14130, 85065761, 85065762);
            break;
        }
        case 4: {
            IF_SETHIDE(false, comp(1298, 38));  // group_ironman_achievements:tab_4_selected
            script19396(14131, 85065761, 85065762);
            break;
        }
    };
    return;
}