//
function script6295(): void {
    IF_SETHIDE(false, comp(237, 14));  // sliske1_riddle:sliske1_shadow_button
    IF_SETOBJECT(29743 as obj, 1, comp(237, 14));  // sliske1_riddle:sliske1_shadow_button
    IF_SETHIDE(false, comp(237, 15));  // sliske1_riddle:sliske1_sand_button
    IF_SETOBJECT(29744 as obj, 1, comp(237, 15));  // sliske1_riddle:sliske1_sand_button
    IF_SETHIDE(false, comp(237, 16));  // sliske1_riddle:sliske1_fire_button
    IF_SETOBJECT(29745 as obj, 1, comp(237, 16));  // sliske1_riddle:sliske1_fire_button
    IF_SETHIDE(false, comp(237, 17));  // sliske1_riddle:sliske1_time_button
    IF_SETOBJECT(29746 as obj, 1, comp(237, 17));  // sliske1_riddle:sliske1_time_button
    IF_SETHIDE(false, comp(237, 18));  // sliske1_riddle:sliske1_water_button
    IF_SETOBJECT(29747 as obj, 1, comp(237, 18));  // sliske1_riddle:sliske1_water_button
    IF_SETHIDE(false, comp(237, 19));  // sliske1_riddle:sliske1_life_button
    IF_SETOBJECT(29748 as obj, 1, comp(237, 19));  // sliske1_riddle:sliske1_life_button
    IF_SETHIDE(false, comp(237, 20));  // sliske1_riddle:sliske1_death_button
    IF_SETOBJECT(29749 as obj, 1, comp(237, 20));  // sliske1_riddle:sliske1_death_button
    IF_SETHIDE(false, comp(237, 21));  // sliske1_riddle:sliske1_light_button
    IF_SETOBJECT(29750 as obj, 1, comp(237, 21));  // sliske1_riddle:sliske1_light_button
    if ((INV_TOTAL(93 as inv, 29743 as obj) == 0)) {
        IF_SETHIDE(true, comp(237, 14));  // sliske1_riddle:sliske1_shadow_button
    };
    if ((INV_TOTAL(93 as inv, 29744 as obj) == 0)) {
        IF_SETHIDE(true, comp(237, 15));  // sliske1_riddle:sliske1_sand_button
    };
    if ((INV_TOTAL(93 as inv, 29745 as obj) == 0)) {
        IF_SETHIDE(true, comp(237, 16));  // sliske1_riddle:sliske1_fire_button
    };
    if ((INV_TOTAL(93 as inv, 29746 as obj) == 0)) {
        IF_SETHIDE(true, comp(237, 17));  // sliske1_riddle:sliske1_time_button
    };
    if ((INV_TOTAL(93 as inv, 29747 as obj) == 0)) {
        IF_SETHIDE(true, comp(237, 18));  // sliske1_riddle:sliske1_water_button
    };
    if ((INV_TOTAL(93 as inv, 29748 as obj) == 0)) {
        IF_SETHIDE(true, comp(237, 19));  // sliske1_riddle:sliske1_life_button
    };
    if ((INV_TOTAL(93 as inv, 29749 as obj) == 0)) {
        IF_SETHIDE(true, comp(237, 20));  // sliske1_riddle:sliske1_death_button
    };
    if ((INV_TOTAL(93 as inv, 29750 as obj) == 0)) {
        IF_SETHIDE(true, comp(237, 21));  // sliske1_riddle:sliske1_light_button
    };
    return;
}