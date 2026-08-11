//
function script19005(): void {
    if ((CC_FIND(comp(1870, 22), 2) == 1)) {  // trh119_buried_treasure_overlay:bonus_prize_claim
        if ((CC_GETHIDE() == true)) {
            script19006();
        } else {
            IF_TRIGGEROP(comp(1253, 556), 0, 2);  // wheel_of_fortune:fake_op
        };
    };
    return;
}