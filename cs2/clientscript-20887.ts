//
function script20887(): void {
    var int0 = script20888();
    if ((int0 == 0)) {
        IF_SETENABLED(false, comp(651, 1));  // stockmarket_collectall:send_to_bank_layer ?
        IF_SETENABLED(false, comp(651, 0));  // stockmarket_collectall:send_to_inv_layer ?
        IF_SETONVARTRANSMIT(callback(), comp(651, 1));  // stockmarket_collectall:send_to_bank_layer ?
        IF_SETONVARTRANSMIT(callback(), comp(651, 0));  // stockmarket_collectall:send_to_inv_layer ?
        stack(script10495(25));
        stack(0);
        stack(42663936);
        unk11189();
        stack(script10495(26));
        stack(0);
        stack(42663937);
        unk11189();
    } else {
        IF_SETENABLED(true, comp(651, 1));  // stockmarket_collectall:send_to_bank_layer ?
        IF_SETENABLED(true, comp(651, 0));  // stockmarket_collectall:send_to_inv_layer ?
        stack(script10495(22));
        stack(0);
        stack(42663936);
        unk11189();
        stack(script10495(23));
        stack(0);
        stack(42663937);
        unk11189();
    };
    return;
}