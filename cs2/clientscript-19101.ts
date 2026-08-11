//
function script19101(int0: number): void {
    if ((int0 == 1)) {
        IF_SETHIDE(true, comp(1147, 151));  // trh199_overlay:claim_rewards_disabled_graphic
        IF_SETHIDE(false, comp(1147, 150));  // trh199_overlay:claim_rewards_graphic
    } else {
        IF_SETHIDE(false, comp(1147, 151));  // trh199_overlay:claim_rewards_disabled_graphic
        IF_SETHIDE(true, comp(1147, 150));  // trh199_overlay:claim_rewards_graphic
    };
    return;
}