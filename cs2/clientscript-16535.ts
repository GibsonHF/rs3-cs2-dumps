//
function script16535(int0: number): void {
    if ((int0 <= 0)) {
        IF_SETONTIMER(callback(), comp(970, 15));  // trh180_overlay:bonus_prize_model
        IF_SETMODELANIM(-1 as seq, comp(970, 15));  // trh180_overlay:bonus_prize_model
        script16536();
    } else {
        stack(16535);
        var int0 = (int0 - 1);
        stack(int0);
        IF_SETONTIMER("i", comp(970, 15));  // trh180_overlay:bonus_prize_model
    };
    return;
}