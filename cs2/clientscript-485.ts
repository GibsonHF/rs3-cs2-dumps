//
function script485(int0: number): void {
    var int1 = -1;
    var int2 = 0;
    IF_SETCOLOUR(16750623, int0);
    switch (varbitplayer_5388) {
        case 1: {
            int1 = script486(varbitplayer_5396);
            break;
        }
        case 2: {
            int1 = script486(varbitplayer_5397);
            break;
        }
        case 3: {
            int1 = script486(varbitplayer_5402);
            break;
        }
        case 4: {
            int1 = script486(varbitplayer_5403);
            break;
        }
        case 5: {
            int1 = script486(varbitplayer_5406);
            break;
        }
        case 6: {
            int1 = script486(varbitplayer_5407);
            break;
        }
        case 7: {
            int1 = script486(varbitplayer_5408);
            break;
        }
        case 8: {
            int1 = script486(varbitplayer_5409);
            break;
        }
        case 9: {
            int1 = script486(varbitplayer_5410);
            break;
        }
        case 10: {
            int1 = script486(varbitplayer_5411);
            break;
        }
        default: {
            return;
        }
    };
    if ((int1 == -1)) {
        IF_SETHIDE(false, comp(1015, 38));  // conq_buy_army:no_unit_selected_text
        IF_SETHIDE(true, comp(1015, 78));  // conq_buy_army:purchase_current_details_layer
    } else {
        IF_SETGRAPHIC(npc_getparam(int1, 1148), comp(1015, 59));  // conq_buy_army:current_unit_image
        IF_SETTEXT(npc_getparam(int1, 1139), comp(1015, 57));  // conq_buy_army:unit_type_text
        IF_SETTEXT(`Movement: <col=ffffff>${inttostring(npc_getparam(int1, 1134), 10)}`, comp(1015, 83));  // conq_buy_army:unit_movement_text
        IF_SETTEXT(`Damage: <col=ffffff>${inttostring((npc_getparam(int1, 1135) * 100), 10)}`, comp(1015, 84));  // conq_buy_army:unit_damage_text
        IF_SETTEXT(`Health: <col=ffffff>${inttostring((npc_getparam(int1, 1136) * 100), 10)}`, comp(1015, 85));  // conq_buy_army:unit_health_text
        IF_SETTEXT(`Range: <col=ffffff>${inttostring(npc_getparam(int1, 1137), 10)}`, comp(1015, 86));  // conq_buy_army:unit_range_text
        IF_SETTEXT(`Cost: <col=ffffff>${inttostring(npc_getparam(int1, 1138), 10)}`, comp(1015, 87));  // conq_buy_army:unit_cost_text
    };
    return;
}