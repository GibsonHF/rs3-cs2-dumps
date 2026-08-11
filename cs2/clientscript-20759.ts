//
function script20759(int0: number): void {
    if ((int0 == 1)) {
        IF_SETONKEY(callback(script20760, -2147483640), comp(1516, 23));  // house_furniture_makex:make_button
        script8844(1, 84, 0, 99352581, -1);
    } else {
        IF_SETOPKEY(1, 0, 0, comp(1516, 34));  // house_furniture_makex:mainmodal_window_close_button
        IF_SETONKEY(callback(), comp(1516, 23));  // house_furniture_makex:make_button
        IF_SETOPKEY(1, 0, 0, comp(1516, 5));  // house_furniture_makex:search_trigger
    };
    return;
}