//
function script1647(): void {
    if ((varbitplayer_21620 == 1)) {
        IF_SETTRANS(200, comp(1034, 3));  // wof65_valentines_shop:love_emote_icon
    };
    if ((varbitplayer_21621 == 1)) {
        IF_SETTRANS(200, comp(1034, 94));  // wof65_valentines_shop:hate_emote_icon
    };
    if ((varbitplayer_21618 == 1)) {
        IF_SETTRANS(200, comp(1034, 70));  // wof65_valentines_shop:love_crown_icon
    };
    if ((varbitplayer_21619 == 1)) {
        IF_SETTRANS(200, comp(1034, 78));  // wof65_valentines_shop:hate_crown_icon
    };
    if ((MAP_MEMBERS() == 0)) {
        IF_SETTRANS(200, comp(1034, 62));  // wof65_valentines_shop:love_weapon_icon
        IF_SETTRANS(200, comp(1034, 86));  // wof65_valentines_shop:hate_weapon_icon
    };
    return;
}