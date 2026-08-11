//
function script14263(): void {
    var int0 = MAX(1, varbitplayer_5388);
    script13995(66519081, -1, 28556, script483(varbitplayer_5396), script9670(1, int0));
    script13995(66519082, -1, 28556, script483(varbitplayer_5397), script9670(2, int0));
    script13995(66519083, -1, 28556, script483(varbitplayer_5402), script9670(3, int0));
    script13995(66519084, -1, 28556, script483(varbitplayer_5403), script9670(4, int0));
    script13995(66519085, -1, 28556, script483(varbitplayer_5406), script9670(5, int0));
    script13995(66519086, -1, 28556, script483(varbitplayer_5407), script9670(6, int0));
    script13995(66519087, -1, 28556, script483(varbitplayer_5408), script9670(7, int0));
    script13995(66519088, -1, 28556, script483(varbitplayer_5409), script9670(8, int0));
    script13995(66519089, -1, 28556, script483(varbitplayer_5410), script9670(9, int0));
    script13995(66519090, -1, 28556, script483(varbitplayer_5411), script9670(10, int0));
    var int1 = script14265(varbitplayer_5388);
    script14264(int1);
    var int2 = script486(int1);
    IF_SETHIDE(true, comp(1015, 81));  // conq_buy_army:select_a_unit_text
    IF_SETHIDE(false, comp(1015, 79));  // conq_buy_army:purchase_replace_details_layer
    if ((int2 == -1)) {
        IF_SETHIDE(false, comp(1015, 38));  // conq_buy_army:no_unit_selected_text
        IF_SETTEXT("No Troop", comp(1015, 38));  // conq_buy_army:no_unit_selected_text
        IF_SETHIDE(true, comp(1015, 78));  // conq_buy_army:purchase_current_details_layer
    } else {
        IF_SETHIDE(true, comp(1015, 38));  // conq_buy_army:no_unit_selected_text
        IF_SETHIDE(false, comp(1015, 78));  // conq_buy_army:purchase_current_details_layer
        IF_SETTEXT(npc_getparam(int2, 1139), comp(1015, 57));  // conq_buy_army:unit_type_text
        IF_SETGRAPHIC(npc_getparam(int2, 1148), comp(1015, 59));  // conq_buy_army:current_unit_image
        IF_SETTEXT(`Movement: <col=ffffff>${inttostring(npc_getparam(int2, 1134), 10)}`, comp(1015, 83));  // conq_buy_army:unit_movement_text
        IF_SETTEXT(`Damage: <col=ffffff>${inttostring((npc_getparam(int2, 1135) * 100), 10)}`, comp(1015, 84));  // conq_buy_army:unit_damage_text
        IF_SETTEXT(`Health: <col=ffffff>${inttostring((npc_getparam(int2, 1136) * 100), 10)}`, comp(1015, 85));  // conq_buy_army:unit_health_text
        IF_SETTEXT(`Range: <col=ffffff>${inttostring(npc_getparam(int2, 1137), 10)}`, comp(1015, 86));  // conq_buy_army:unit_range_text
        IF_SETTEXT(`Cost: <col=ffffff>${inttostring(npc_getparam(int2, 1138), 10)}`, comp(1015, 87));  // conq_buy_army:unit_cost_text
    };
    return;
}