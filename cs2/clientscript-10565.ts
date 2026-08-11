//
function script10565(): void {
    IF_SETTEXT(TOSTRING_LOCALISED(INV_TOTAL(93 as inv, 32094 as obj), 1), comp(1533, 9));  // trh29_pirate_coins_shop:doubloons_text
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 3000)) {
        IF_SETTEXT(`<col=990000>${TOSTRING_LOCALISED(3000, 1)}</col>`, comp(1533, 10));  // trh29_pirate_coins_shop:pirate_sheep_cost
    } else {
        IF_SETTEXT(TOSTRING_LOCALISED(3000, 1), comp(1533, 10));  // trh29_pirate_coins_shop:pirate_sheep_cost
    };
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 3000)) {
        IF_SETTEXT(`<col=990000>${TOSTRING_LOCALISED(3000, 1)}</col>`, comp(1533, 11));  // trh29_pirate_coins_shop:emote_cost
    } else {
        IF_SETTEXT(TOSTRING_LOCALISED(3000, 1), comp(1533, 11));  // trh29_pirate_coins_shop:emote_cost
    };
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 2000)) {
        IF_SETTEXT(`<col=990000>${TOSTRING_LOCALISED(2000, 1)}</col>`, comp(1533, 12));  // trh29_pirate_coins_shop:jolly_roger_cost
    } else {
        IF_SETTEXT(TOSTRING_LOCALISED(2000, 1), comp(1533, 12));  // trh29_pirate_coins_shop:jolly_roger_cost
    };
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 1500)) {
        IF_SETTEXT(`<col=990000>${TOSTRING_LOCALISED(1500, 1)}</col>`, comp(1533, 13));  // trh29_pirate_coins_shop:wheel_shield_cost
    } else {
        IF_SETTEXT(TOSTRING_LOCALISED(1500, 1), comp(1533, 13));  // trh29_pirate_coins_shop:wheel_shield_cost
    };
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 1500)) {
        IF_SETTEXT(`<col=990000>${TOSTRING_LOCALISED(1500, 1)}</col>`, comp(1533, 18));  // trh29_pirate_coins_shop:swordfish_cost
    } else {
        IF_SETTEXT(TOSTRING_LOCALISED(1500, 1), comp(1533, 18));  // trh29_pirate_coins_shop:swordfish_cost
    };
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 1000)) {
        IF_SETTEXT(`<col=990000>${TOSTRING_LOCALISED(1000, 1)}</col>`, comp(1533, 14));  // trh29_pirate_coins_shop:peglegs_cost
    } else {
        IF_SETTEXT(TOSTRING_LOCALISED(1000, 1), comp(1533, 14));  // trh29_pirate_coins_shop:peglegs_cost
    };
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 500)) {
        IF_SETTEXT(`<col=990000>${TOSTRING_LOCALISED(500, 1)}</col>`, comp(1533, 15));  // trh29_pirate_coins_shop:titles1_cost
    } else {
        IF_SETTEXT(TOSTRING_LOCALISED(500, 1), comp(1533, 15));  // trh29_pirate_coins_shop:titles1_cost
    };
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 500)) {
        IF_SETTEXT(`<col=990000>${TOSTRING_LOCALISED(500, 1)}</col>`, comp(1533, 16));  // trh29_pirate_coins_shop:titles2_cost
    } else {
        IF_SETTEXT(TOSTRING_LOCALISED(500, 1), comp(1533, 16));  // trh29_pirate_coins_shop:titles2_cost
    };
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 500)) {
        IF_SETTEXT(`<col=990000>${TOSTRING_LOCALISED(500, 1)}</col>`, comp(1533, 17));  // trh29_pirate_coins_shop:beards_cost
    } else {
        IF_SETTEXT(TOSTRING_LOCALISED(500, 1), comp(1533, 17));  // trh29_pirate_coins_shop:beards_cost
    };
    if ((INV_TOTAL(93 as inv, 32094 as obj) < 100)) {
        IF_SETTEXT(`<col=990000>${TOSTRING_LOCALISED(100, 1)}</col>`, comp(1533, 19));  // trh29_pirate_coins_shop:biscuit_cost
    } else {
        IF_SETTEXT(TOSTRING_LOCALISED(100, 1), comp(1533, 19));  // trh29_pirate_coins_shop:biscuit_cost
    };
    script10577();
    IF_SETHIDE(true, comp(1533, 29));  // trh29_pirate_coins_shop:popup_layer
    varbitplayer_24852 = 0;
    return;
}