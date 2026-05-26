//
function script20550(int0: number): void {
    if ((int0 == 1)) {
        script20618(55902210, 0, "Redeem");
        CC_SETONOP(callback(script20552, 0));
        script20551(0);
        script20618(55902210, 1, "Convert");
        CC_SETONOP(callback(script20552, 1));
        script20551(1);
    } else {
        if ((CC_FIND(55902210, 0) == 1)) {
            script20551(0);
        };
        if ((CC_FIND(55902210, 1) == 1)) {
            script20551(1);
        };
    };
    return;
}