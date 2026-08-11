//
function script7548(): void {
    if ((varbitplayer_17982 == 1)) {
        IF_SETTRANS(200, comp(222, 75));  // wof33_valentines_shop:love_emote_icon
    };
    if ((varbitplayer_17983 == 1)) {
        IF_SETTRANS(200, comp(222, 67));  // wof33_valentines_shop:hate_emote_icon
    };
    if ((varbitplayer_17980 == 1)) {
        IF_SETTRANS(200, comp(222, 13));  // wof33_valentines_shop:love_pendant_icon
    };
    if ((varbitplayer_17981 == 1)) {
        IF_SETTRANS(200, comp(222, 73));  // wof33_valentines_shop:hate_pendant_icon
    };
    if ((MAP_MEMBERS() == 0)) {
        IF_SETTRANS(200, comp(222, 13));  // wof33_valentines_shop:love_pendant_icon
        IF_SETTRANS(200, comp(222, 73));  // wof33_valentines_shop:hate_pendant_icon
        IF_SETTRANS(200, comp(222, 78));  // wof33_valentines_shop:love_weapon_icon
        IF_SETTRANS(200, comp(222, 70));  // wof33_valentines_shop:hate_weapon_icon
    };
    return;
}