//
function script12964(int0: number): void {
    IF_SETHIDE(true, comp(1815, 23));  // ironman_achievements:skill_99_layer
    IF_SETHIDE(true, comp(1815, 10));  // ironman_achievements:skill99_tab_selected
    IF_SETHIDE(true, comp(1815, 26));  // ironman_achievements:skill_120_layer
    IF_SETHIDE(true, comp(1815, 37));  // ironman_achievements:skill120_tab_selected
    IF_SETHIDE(true, comp(1815, 29));  // ironman_achievements:misc_layer
    IF_SETHIDE(true, comp(1815, 18));  // ironman_achievements:misc_tab_selected
    switch (int0) {
        case 1: {
            IF_SETHIDE(false, comp(1815, 23));  // ironman_achievements:skill_99_layer
            IF_SETHIDE(false, comp(1815, 10));  // ironman_achievements:skill99_tab_selected
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1815, 26));  // ironman_achievements:skill_120_layer
            IF_SETHIDE(false, comp(1815, 37));  // ironman_achievements:skill120_tab_selected
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1815, 29));  // ironman_achievements:misc_layer
            IF_SETHIDE(false, comp(1815, 18));  // ironman_achievements:misc_tab_selected
            break;
        }
    };
    return;
}