//
function script2600(int0: number): void {
    if ((int0 == 0)) {
        IF_SETHIDE(false, comp(37, 5));  // ms_smithing_makex:upgrade_button_wrapper
        IF_SETPOSITION(0, 69, 0, 0, comp(37, 30));  // ms_smithing_makex:ingredients_wrapper
        script8421(2424850, 2424873, 2424851, 2424874, "Smithing", 21218, -1, 1, -1, -1);
    } else {
        IF_SETHIDE(true, comp(37, 5));  // ms_smithing_makex:upgrade_button_wrapper
        IF_SETPOSITION(0, 39, 0, 0, comp(37, 30));  // ms_smithing_makex:ingredients_wrapper
        script8421(2424850, 2424873, 2424851, 2424874, "Smelting", 21218, -1, 1, -1, -1);
    };
    return;
}