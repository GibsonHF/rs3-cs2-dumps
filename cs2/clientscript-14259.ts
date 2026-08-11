//
function script14259(int0: number): void {
    var int1 = script9670(int0, 1);
    var int2 = script6427(int1);
    script13972(66519137, 66519138, 28595, "Select Troops", int1);
    IF_SETHIDE(int2, comp(1015, 51));  // conq_buy_army:troop_contents
    IF_SETHIDE(int2, comp(1015, 39));  // conq_buy_army:reset_units_button
    int1 = script9670(int0, 2);
    int2 = script6427(int1);
    script13972(66519140, 66519141, 28595, "Select Commands", int1);
    IF_SETHIDE(int2, comp(1015, 52));  // conq_buy_army:command_contents
    IF_SETHIDE(int2, comp(1015, 40));  // conq_buy_army:reset_abilities_button
    return;
}