//
function script20553(): void {
    switch (varclient_8375) {
        case 0: {
            IF_SETHIDE(false, comp(853, 6));  // mtx_front_end_bonds:redeem
            IF_SETHIDE(false, comp(853, 4));  // mtx_front_end_bonds:scrollbar
            IF_SETHIDE(true, comp(853, 12));  // mtx_front_end_bonds:convert
            break;
        }
        case 1: {
            IF_SETHIDE(true, comp(853, 6));  // mtx_front_end_bonds:redeem
            IF_SETHIDE(true, comp(853, 4));  // mtx_front_end_bonds:scrollbar
            IF_SETHIDE(false, comp(853, 12));  // mtx_front_end_bonds:convert
            break;
        }
    };
    return;
}