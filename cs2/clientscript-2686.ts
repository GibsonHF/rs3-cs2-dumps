//
function script2686(): void {
    var int0 = 0;
    IF_SETSCROLLSIZE(332, 1803, comp(402, 36));  // poh_room_creation_menu:poh_roommenu
    IF_SETSCROLLSIZE(332, 1803, comp(402, 63));  // poh_room_creation_menu:poh_dummy_scroll_bar_layer
    script31(26345536, 26345508, 792, 789, 790, 791, 773, 788);
    IF_SETONSCROLLWHEEL(callback(), comp(402, 36));  // poh_room_creation_menu:poh_roommenu
    IF_SETONSCROLLWHEEL(callback(script36, 26345536, 26345508, -2147483646), comp(402, 63));  // poh_room_creation_menu:poh_dummy_scroll_bar_layer
    return;
}