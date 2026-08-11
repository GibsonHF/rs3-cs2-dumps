//
function script1643(): void {
    switch (MAP_LANG()) {
        case 0: {
            IF_SETGRAPHIC(20713 as graphic, comp(1034, 8));  // wof65_valentines_shop:background_heart
            break;
        }
        case 1: {
            IF_SETGRAPHIC(20712 as graphic, comp(1034, 8));  // wof65_valentines_shop:background_heart
            break;
        }
        case 2: {
            IF_SETGRAPHIC(20715 as graphic, comp(1034, 8));  // wof65_valentines_shop:background_heart
            break;
        }
        case 3: {
            IF_SETGRAPHIC(20716 as graphic, comp(1034, 8));  // wof65_valentines_shop:background_heart
            break;
        }
        case 6: {
            IF_SETGRAPHIC(20714 as graphic, comp(1034, 8));  // wof65_valentines_shop:background_heart
            break;
        }
    };
    IF_SETTEXT(TOSTRING_LOCALISED(1750, 1), comp(1034, 10));  // wof65_valentines_shop:love_emote_cost
    IF_SETTEXT(TOSTRING_LOCALISED(1000, 1), comp(1034, 12));  // wof65_valentines_shop:love_weapon_cost
    IF_SETTEXT(TOSTRING_LOCALISED(800, 1), comp(1034, 14));  // wof65_valentines_shop:love_crown_cost
    IF_SETTEXT(TOSTRING_LOCALISED(1750, 1), comp(1034, 11));  // wof65_valentines_shop:hate_emote_cost
    IF_SETTEXT(TOSTRING_LOCALISED(1000, 1), comp(1034, 13));  // wof65_valentines_shop:hate_weapon_cost
    IF_SETTEXT(TOSTRING_LOCALISED(800, 1), comp(1034, 15));  // wof65_valentines_shop:hate_crown_cost
    IF_SETTEXT(TOSTRING_LOCALISED(50, 1), comp(1034, 16));  // wof65_valentines_shop:random_chocolate_cost
    script1647();
    IF_SETHIDE(true, comp(1034, 23));  // wof65_valentines_shop:popup_layer
    varbitplayer_21623 = 0;
    return;
}