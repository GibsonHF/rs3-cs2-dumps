//
function script14275(int0: number): void {
    var int1 = script14274(int0);
    var int2 = script488(int1);
    IF_SETHIDE(true, comp(1015, 66));  // conq_buy_army:no_ability_selected_layer
    IF_SETHIDE(false, comp(1015, 76));  // conq_buy_army:replacement_abilities_layer
    IF_SETHIDE(false, comp(1015, 69));  // conq_buy_army:active_ability_layer
    if ((int2 == -1)) {
        IF_SETHIDE(false, comp(1015, 71));  // conq_buy_army:no_ability_text
        IF_SETHIDE(true, comp(1015, 70));  // conq_buy_army:command_details_icon
        IF_SETHIDE(true, comp(1015, 72));  // conq_buy_army:command_details_name
        IF_SETHIDE(true, comp(1015, 73));  // conq_buy_army:command_details_desc
        IF_SETHIDE(true, comp(1015, 74));  // conq_buy_army:command_details_cooldown
        IF_SETHIDE(true, comp(1015, 75));  // conq_buy_army:command_details_cost
    } else {
        IF_SETHIDE(true, comp(1015, 71));  // conq_buy_army:no_ability_text
        IF_SETHIDE(false, comp(1015, 70));  // conq_buy_army:command_details_icon
        IF_SETHIDE(false, comp(1015, 72));  // conq_buy_army:command_details_name
        IF_SETHIDE(false, comp(1015, 73));  // conq_buy_army:command_details_desc
        IF_SETHIDE(false, comp(1015, 74));  // conq_buy_army:command_details_cooldown
        IF_SETHIDE(false, comp(1015, 75));  // conq_buy_army:command_details_cost
        IF_SETTEXT(struct_getparam(int2, 1150), comp(1015, 72));  // conq_buy_army:command_details_name
        IF_SETGRAPHIC(struct_getparam(int2, 1153), comp(1015, 70));  // conq_buy_army:command_details_icon
        IF_SETTEXT(struct_getparam(int2, 1151), 66519113);
        IF_SETTEXT(`Cooldown: <col=ffffff>${inttostring(struct_getparam(int2, 1155), 10)}`, comp(1015, 74));  // conq_buy_army:command_details_cooldown
        IF_SETTEXT(`Cost: <col=ffffff>${inttostring(struct_getparam(int2, 1154), 10)}`, comp(1015, 75));  // conq_buy_army:command_details_cost
    };
    return;
}