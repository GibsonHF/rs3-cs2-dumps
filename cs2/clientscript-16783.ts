//
function script16783(int0: number): void {
    if ((int0 != 0)) {
        var int0 = (int0 - 1);
        IF_SETONTIMER(callback(script16783, int0), comp(1023, 17));  // trh187_overlay:bonus_chest_layer
        return;
    };
    IF_SETHIDE(false, comp(1023, 96));  // trh187_overlay:prize_claim_overlay
    IF_SETONTIMER(callback(), comp(1023, 17));  // trh187_overlay:bonus_chest_layer
    return;
}