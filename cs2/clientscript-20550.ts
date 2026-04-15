//
function script20550(int0: unknown_int): void {
    if ((int0 == 1)) {
        script20618(comp(853, 2), 0, "Redeem");
        CC_SETONOP(callback(script20552, 0));
        script20551(0);
        script20618(55902210, 1, "Convert");
        CC_SETONOP(callback(script20552, 1));
        script20551(1);
    } else {
        if ((CC_FIND(comp(853, 2), 0) == 1)) {
            script20551(0);
        };
        if ((CC_FIND(comp(853, 2), 1) == 1)) {
            script20551(1);
        };
    };
    return;
}