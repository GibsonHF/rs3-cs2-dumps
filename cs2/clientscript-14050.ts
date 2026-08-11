//
function script14050(): void {
    IF_SETTEXT(TOSTRING_LOCALISED(varbitplayer_39864, 1), comp(1938, 2));  // deep_sea_generic_fish_overlay:streak_text
    IF_SETTEXT(`${TOSTRING_LOCALISED(MIN(varbitplayer_42923, (varbitplayer_39864 / MAX(1, varbitplayer_42922))), 1)}%`, comp(1938, 4));  // deep_sea_generic_fish_overlay:bonus_text
    return;
}