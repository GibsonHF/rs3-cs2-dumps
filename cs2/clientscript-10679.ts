//
function script10679(): void {
    script10680(varbitplayer_25485, 29178, 101187641, 101187603, 101187638, 101187639);
    script10680(varbitplayer_25495, 29176, 101187631, 101187601, 101187628, 101187629);
    script10680(varbitplayer_25487, 29181, 101187626, 101187602, 101187624, 101187623);
    script10680(varbitplayer_25489, 29177, 101187644, 101187600, 101187642, 101187617);
    script10680(varbitplayer_25486, 29179, 101187636, 101187598, 101187633, 101187634);
    script10680(varbitplayer_25488, 29180, 101187645, 101187599, 101187620, 101187619);
    IF_SETTEXT(TOSTRING_LOCALISED(INV_TOTAL(93 as inv, 32440 as obj), 1), comp(1544, 64));  // trh31_costume:total_cloth
    IF_SETHIDE(false, comp(1544, 23));  // trh31_costume:main_layer
    IF_SETHIDE(true, comp(1544, 25));  // trh31_costume:preview_layer
    IF_SETHIDE(true, comp(1544, 27));  // trh31_costume:info_layer
    IF_SETONOP(callback(script10682, 0), comp(1544, 29));  // trh31_costume:help_button
    return;
}