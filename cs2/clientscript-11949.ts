//
function script11949(): void {
    if ((script6431() == 1)) {
        IF_SETPOSITION((50 + 250), 0, 2, 0, comp(942, 3));  // rand_dungeon_map:wrapper
        IF_SETTRANS(160, comp(942, 0));  // rand_dungeon_map:back_graphic
        IF_SETHIDE(true, comp(942, 2));  // rand_dungeon_map:close_button
    };
    return;
}