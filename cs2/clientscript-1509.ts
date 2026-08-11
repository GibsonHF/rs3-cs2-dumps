//[clientscript,player_kit_body_initialise]
function script1509(): void {
    CC_DELETEALL(comp(729, 15));  // player_kit_tailor:menu_graphics
    script7794(47775759, 21361);
    CC_DELETEALL(comp(729, 3));  // player_kit_tailor:player_container
    script1516(47775747, 380, 100);
    CC_DELETEALL(comp(729, 18));  // player_kit_tailor:colours_graphics
    script7794(47775762, 21361);
    varclient_778 = varbitplayer_481;
    script1513();
    IF_SETONVARTRANSMIT(callback(script1510, 172, 1), comp(729, 6));  // player_kit_tailor:universe
    IF_SETONVARCTRANSMIT(callback(script1511, 1010, 1011, 1012, 1013, 1016, 1017, 6), comp(729, 6));  // player_kit_tailor:universe
    IF_SETONOP(callback(script1512, -2147483644, 0), comp(729, 11));  // player_kit_tailor:torso_tab
    IF_SETONOP(callback(script1512, -2147483644, 1), comp(729, 12));  // player_kit_tailor:arms_tab
    IF_SETONOP(callback(script1512, -2147483644, 2), comp(729, 13));  // player_kit_tailor:hands_tab
    IF_SETONOP(callback(script1512, -2147483644, 3), comp(729, 14));  // player_kit_tailor:legs_tab
    var string0 = "Choose a top";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(729, 11));  // player_kit_tailor:torso_tab
    string0 = "Choose some sleeves";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(729, 12));  // player_kit_tailor:arms_tab
    string0 = "Decorate your wrists";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(729, 13));  // player_kit_tailor:hands_tab
    string0 = "Choose some leggings";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(729, 14));  // player_kit_tailor:legs_tab
    return;
}