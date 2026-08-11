//
function script12434(): void {
    IF_SETTEXT(`Current charges: ${TOSTRING_LOCALISED(varbitplayer_31033, 1)}`, comp(1754, 15));  // trh84_amulet_effects:current_charges
    IF_SETCOLOUR(16777215, comp(1754, 6));  // trh84_amulet_effects:ability_name1
    IF_SETCOLOUR(16777215, comp(1754, 7));  // trh84_amulet_effects:ability_desc1
    if ((varbitplayer_31032 >= 2)) {
        IF_SETHIDE(true, comp(1754, 18));  // trh84_amulet_effects:ability_lock2
        IF_SETCOLOUR(16777215, comp(1754, 19));  // trh84_amulet_effects:ability_name2
        IF_SETCOLOUR(16777215, comp(1754, 20));  // trh84_amulet_effects:ability_desc2
    };
    if ((varbitplayer_31032 >= 3)) {
        IF_SETHIDE(true, comp(1754, 21));  // trh84_amulet_effects:ability_lock3
        IF_SETCOLOUR(16777215, comp(1754, 22));  // trh84_amulet_effects:ability_name3
        IF_SETCOLOUR(16777215, comp(1754, 23));  // trh84_amulet_effects:ability_desc3
    };
    if ((varbitplayer_31032 >= 4)) {
        IF_SETHIDE(true, comp(1754, 24));  // trh84_amulet_effects:ability_lock4
        IF_SETCOLOUR(16777215, comp(1754, 25));  // trh84_amulet_effects:ability_name4
        IF_SETCOLOUR(16777215, comp(1754, 26));  // trh84_amulet_effects:ability_desc4
    };
    return;
}