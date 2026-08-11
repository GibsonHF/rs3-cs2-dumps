//
function script393(): void {
    IF_SETHIDE(true, comp(1010, 8));  // conq_side_turn:time_left_layer
    IF_SETTEXT("Command Options", comp(1010, 11));  // conq_side_turn:main_title_text
    IF_SETPOSITION(0, 133, 0, 0, comp(1010, 29));  // conq_side_turn:gery_rectangle
    IF_SETSIZE(190, 116, 0, 0, comp(1010, 29));  // conq_side_turn:gery_rectangle
    IF_SETTEXT("Comm Orb Recharging", comp(1010, 30));  // conq_side_turn:opponents_turn_text
    IF_SETPOSITION(0, 133, 0, 0, comp(1010, 30));  // conq_side_turn:opponents_turn_text
    IF_SETSIZE(190, 116, 0, 0, comp(1010, 30));  // conq_side_turn:opponents_turn_text
    IF_SETTEXTALIGN(1, 1, 0, comp(1010, 30));  // conq_side_turn:opponents_turn_text
    IF_SETPOSITION(30, 152, 0, 0, comp(1010, 9));  // conq_side_turn:turn_control_layer
    IF_SETTEXT("Recharge", comp(1010, 78));  // conq_side_turn:neutral_button_text_1
    IF_SETOP(1, "Recharge", comp(1010, 78));  // conq_side_turn:neutral_button_text_1
    IF_SETHIDE(true, comp(1010, 25));  // conq_side_turn:opponents_turn_layer
    IF_SETHIDE(true, comp(1019, 3));  // conq_side_diplomacy:ignore_truce_layer
    IF_SETTEXT("Retreat", comp(1019, 0));  // conq_side_diplomacy:main_title_text
    IF_SETHIDE(true, comp(1019, 1));  // conq_side_diplomacy:offer_truce_button_layer
    IF_SETTEXT("Retreat", comp(1019, 40));  // conq_side_diplomacy:resign_text
    IF_SETOP(1, "Retreat", comp(1019, 37));  // conq_side_diplomacy:resign_button
    IF_SETPOSITION(30, 0, 0, 1, comp(1019, 5));  // conq_side_diplomacy:negative_button_layer
    IF_SETPOSITION(0, 50, 0, 1, comp(1019, 7));  // conq_side_diplomacy:resign_instructions
    IF_SETTEXT("Force Savant to teleport you to safety and order your remaining troops to fall back.", comp(1019, 7));  // conq_side_diplomacy:resign_instructions
    return;
}