//
function script7546(): void {
    switch (MAP_LANG()) {
        case 0: {
            IF_SETGRAPHIC(16414 as graphic, comp(222, 16));  // wof33_valentines_shop:background_heart
            break;
        }
        case 1: {
            IF_SETGRAPHIC(16413 as graphic, comp(222, 16));  // wof33_valentines_shop:background_heart
            break;
        }
        case 2: {
            IF_SETGRAPHIC(16415 as graphic, comp(222, 16));  // wof33_valentines_shop:background_heart
            break;
        }
        case 3: {
            IF_SETGRAPHIC(16416 as graphic, comp(222, 16));  // wof33_valentines_shop:background_heart
            break;
        }
    };
    IF_SETTEXT(TOSTRING_LOCALISED(1750, 1), comp(222, 18));  // wof33_valentines_shop:love_emote_cost
    IF_SETTEXT(TOSTRING_LOCALISED(1000, 1), comp(222, 20));  // wof33_valentines_shop:love_weapon_cost
    IF_SETTEXT(TOSTRING_LOCALISED(750, 1), comp(222, 22));  // wof33_valentines_shop:love_pendant_cost
    IF_SETTEXT(TOSTRING_LOCALISED(1750, 1), comp(222, 19));  // wof33_valentines_shop:hate_emote_cost
    IF_SETTEXT(TOSTRING_LOCALISED(1000, 1), comp(222, 21));  // wof33_valentines_shop:hate_weapon_cost
    IF_SETTEXT(TOSTRING_LOCALISED(750, 1), comp(222, 23));  // wof33_valentines_shop:hate_pendant_cost
    IF_SETTEXT(TOSTRING_LOCALISED(50, 1), comp(222, 24));  // wof33_valentines_shop:random_choccy_cost
    script7548();
    IF_SETHIDE(true, comp(222, 27));  // wof33_valentines_shop:tooltip_box
    IF_SETHIDE(true, comp(222, 28));  // wof33_valentines_shop:popup_layer
    varbitplayer_17987 = 0;
    return;
}