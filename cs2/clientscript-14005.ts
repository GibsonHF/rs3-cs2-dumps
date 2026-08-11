//
function script14005(): void {
    if ((varbitplayer_39432 == 1)) {
        IF_SETSIZE(0, 140, 1, 1, comp(1621, 11));  // poh_costume_room:set_area
        IF_SETHIDE(false, comp(1621, 12));  // poh_costume_room:bank_container
    } else {
        IF_SETSIZE(0, 85, 1, 1, comp(1621, 11));  // poh_costume_room:set_area
        IF_SETHIDE(true, comp(1621, 12));  // poh_costume_room:bank_container
    };
    return;
}