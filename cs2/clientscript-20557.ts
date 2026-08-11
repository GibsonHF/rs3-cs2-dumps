//
function script20557(int0: number, int1: number): void {
    if ((int0 > 0)) {
        IF_SETHIDE(false, comp(853, 50));  // mtx_front_end_bonds:fade_top
    } else {
        IF_SETHIDE(true, comp(853, 50));  // mtx_front_end_bonds:fade_top
    };
    if ((int0 >= int1)) {
        IF_SETHIDE(true, comp(853, 51));  // mtx_front_end_bonds:fade_bottom
    } else {
        IF_SETHIDE(false, comp(853, 51));  // mtx_front_end_bonds:fade_bottom
    };
    return;
}