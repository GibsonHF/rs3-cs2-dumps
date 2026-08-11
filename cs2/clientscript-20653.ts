//
function script20653(): void {
    var int0 = (varplayer_3870 * varplayer_3869);
    var int1 = (INV_TOTAL(93 as inv, 29494 as obj) + varbitplayer_23016);
    IF_SETTEXT(script17372(script17400(), 9, 0), comp(853, 39));  // mtx_front_end_bonds:manage_coins_count
    IF_SETTEXT(inttostring(int1, 10), comp(853, 24));  // mtx_front_end_bonds:manage_bonds_count
    IF_SETTEXT(inttostring(varbitplayer_23015, 10), comp(853, 46));  // mtx_front_end_bonds:manage_tradeable_bonds_count
    IF_SETTEXT(inttostring(varplayer_3870, 10), comp(853, 36));  // mtx_front_end_bonds:conversion_amount
    IF_SETTEXT(TOSTRING_LOCALISED(int0, 1), comp(853, 42));  // mtx_front_end_bonds:conversion_cost
    IF_SETONVARTRANSMIT(callback(script15377, 3870, 3869, 2), comp(853, 12));  // mtx_front_end_bonds:convert
    return;
}