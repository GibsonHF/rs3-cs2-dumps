//
function script5652(): void {
    IF_SETTEXT(TOSTRING_LOCALISED(10, 1), comp(1584, 5));  // trh44_valentines15_shop:fallthrough_cost
    IF_SETTEXT(TOSTRING_LOCALISED(INV_TOTAL(93 as inv, 33968 as obj), 1), comp(1584, 29));  // trh44_valentines15_shop:petals
    if ((varbitplayer_17982 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(450, 1), comp(1584, 57));  // trh44_valentines15_shop:retro_13_emote_price_love
    } else {
        IF_SETTEXT("Unlocked!", comp(1584, 57));  // trh44_valentines15_shop:retro_13_emote_price_love
        IF_SETTRANS(150, comp(1584, 68));  // trh44_valentines15_shop:13_emote_love_icon
        IF_SETHIDE(false, comp(1584, 66));  // trh44_valentines15_shop:resizable_3x3_button_disabled_layer_13_emote_love
    };
    if ((varbitplayer_17983 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(450, 1), comp(1584, 37));  // trh44_valentines15_shop:retro_13_emote_price_hate
    } else {
        IF_SETTEXT("Unlocked!", comp(1584, 37));  // trh44_valentines15_shop:retro_13_emote_price_hate
        IF_SETTRANS(150, comp(1584, 116));  // trh44_valentines15_shop:13_emote_hate_icon
        IF_SETHIDE(false, comp(1584, 114));  // trh44_valentines15_shop:resizable_3x3_button_disabled_layer_13_emote_hate
    };
    if ((varbitplayer_21620 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(400, 1), comp(1584, 55));  // trh44_valentines15_shop:retro_14_emote_price_love
    } else {
        IF_SETTEXT("Unlocked!", comp(1584, 55));  // trh44_valentines15_shop:retro_14_emote_price_love
        IF_SETTRANS(150, comp(1584, 84));  // trh44_valentines15_shop:14_emote_love_icon
        IF_SETHIDE(false, comp(1584, 82));  // trh44_valentines15_shop:resizable_3x3_button_disabled_layer_14_emote_love
    };
    if ((varbitplayer_21621 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(400, 1), comp(1584, 35));  // trh44_valentines15_shop:retro_14_emote_price_hate
    } else {
        IF_SETTEXT("Unlocked!", comp(1584, 35));  // trh44_valentines15_shop:retro_14_emote_price_hate
        IF_SETTRANS(150, comp(1584, 124));  // trh44_valentines15_shop:14_emote_hate_icon
        IF_SETHIDE(false, comp(1584, 122));  // trh44_valentines15_shop:resizable_3x3_button_disabled_layer_14_emote_hate
    };
    if ((varbitplayer_18233 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(225, 1), comp(1584, 53));  // trh44_valentines15_shop:retro_13_weapon_price_love
    } else {
        IF_SETTEXT("Unlocked!", comp(1584, 53));  // trh44_valentines15_shop:retro_13_weapon_price_love
        IF_SETTRANS(150, comp(1584, 76));  // trh44_valentines15_shop:13_weapon_love_icon
        IF_SETHIDE(false, comp(1584, 74));  // trh44_valentines15_shop:resizable_3x3_button_disabled_layer_13_weapon_love
    };
    if ((varbitplayer_18234 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(225, 1), comp(1584, 41));  // trh44_valentines15_shop:retro_13_weapon_price_hate
    } else {
        IF_SETTEXT("Unlocked!", comp(1584, 41));  // trh44_valentines15_shop:retro_13_weapon_price_hate
        IF_SETTRANS(150, comp(1584, 132));  // trh44_valentines15_shop:13_weapon_hate_icon
        IF_SETHIDE(false, comp(1584, 130));  // trh44_valentines15_shop:resizable_3x3_button_disabled_layer_13_weapon_hate
    };
    if ((varbitplayer_21625 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(200, 1), comp(1584, 51));  // trh44_valentines15_shop:retro_14_weapon_price_love
    } else {
        IF_SETTEXT("Unlocked!", comp(1584, 51));  // trh44_valentines15_shop:retro_14_weapon_price_love
        IF_SETTRANS(150, comp(1584, 92));  // trh44_valentines15_shop:14_weapon_love_icon
        IF_SETHIDE(false, comp(1584, 90));  // trh44_valentines15_shop:resizable_3x3_button_disabled_layer_14_weapon_love
    };
    if ((varbitplayer_21626 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(200, 1), comp(1584, 39));  // trh44_valentines15_shop:retro_14_weapon_price_hate
    } else {
        IF_SETTEXT("Unlocked!", comp(1584, 39));  // trh44_valentines15_shop:retro_14_weapon_price_hate
        IF_SETTRANS(150, comp(1584, 140));  // trh44_valentines15_shop:14_weapon_hate_icon
        IF_SETHIDE(false, comp(1584, 138));  // trh44_valentines15_shop:resizable_3x3_button_disabled_layer_14_weapon_hate
    };
    if ((varbitplayer_17980 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(150, 1), comp(1584, 49));  // trh44_valentines15_shop:retro_13_necklace_price_love
    } else {
        IF_SETTEXT("Unlocked!", comp(1584, 49));  // trh44_valentines15_shop:retro_13_necklace_price_love
        IF_SETTRANS(150, comp(1584, 100));  // trh44_valentines15_shop:13_necklace_love_icon
        IF_SETHIDE(false, comp(1584, 98));  // trh44_valentines15_shop:resizable_3x3_button_disabled_layer_13_necklace_love
    };
    if ((varbitplayer_17981 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(150, 1), comp(1584, 45));  // trh44_valentines15_shop:retro_13_necklace_price_hate
    } else {
        IF_SETTEXT("Unlocked!", comp(1584, 45));  // trh44_valentines15_shop:retro_13_necklace_price_hate
        IF_SETTRANS(150, comp(1584, 148));  // trh44_valentines15_shop:13_necklace_hate_icon
        IF_SETHIDE(false, comp(1584, 146));  // trh44_valentines15_shop:resizable_3x3_button_disabled_layer_13_necklace_hate
    };
    if ((varbitplayer_21618 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(125, 1), comp(1584, 47));  // trh44_valentines15_shop:retro_14_head_price_love
    } else {
        IF_SETTEXT("Unlocked!", comp(1584, 47));  // trh44_valentines15_shop:retro_14_head_price_love
        IF_SETTRANS(150, comp(1584, 108));  // trh44_valentines15_shop:14_head_love_icon
        IF_SETHIDE(false, comp(1584, 106));  // trh44_valentines15_shop:resizable_3x3_button_disabled_layer_14_head_love
    };
    if ((varbitplayer_21619 == 0)) {
        IF_SETTEXT(TOSTRING_LOCALISED(125, 1), comp(1584, 43));  // trh44_valentines15_shop:retro_14_head_price_hate
    } else {
        IF_SETTEXT("Unlocked!", comp(1584, 43));  // trh44_valentines15_shop:retro_14_head_price_hate
        IF_SETTRANS(150, comp(1584, 156));  // trh44_valentines15_shop:14_head_hate_icon
        IF_SETHIDE(false, comp(1584, 154));  // trh44_valentines15_shop:resizable_3x3_button_disabled_layer_14_head_hate
    };
    return;
}