//
function script18346(): void {
    varbitplayer_54764 = MAX(1, varbitplayer_54764);
    var int0 = -1 as graphic;
    if ((varbitplayer_54764 < 2)) {
        IF_SETHIDE(true, comp(1271, 23));  // trh195:potion_multiplier_1
        IF_SETHIDE(true, comp(1271, 32));  // trh195:potion_multiplier_2
        IF_SETHIDE(true, comp(1271, 41));  // trh195:potion_multiplier_3
    } else {
        int0 = script10980(varbitplayer_54764);
        IF_SETGRAPHIC(int0, comp(1271, 23));  // trh195:potion_multiplier_1
        IF_SETGRAPHIC(int0, comp(1271, 32));  // trh195:potion_multiplier_2
        IF_SETGRAPHIC(int0, comp(1271, 41));  // trh195:potion_multiplier_3
        IF_SETHIDE(false, comp(1271, 23));  // trh195:potion_multiplier_1
        IF_SETHIDE(false, comp(1271, 32));  // trh195:potion_multiplier_2
        IF_SETHIDE(false, comp(1271, 41));  // trh195:potion_multiplier_3
    };
    return;
}