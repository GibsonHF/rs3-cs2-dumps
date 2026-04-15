//
function script11129(int0: component): void {
    var int1 = 0;
    while ((int1 < 3)) {
        if (((CC_FIND(int0, int1) == 1) && (CC_GETHIDE() == false))) {
            script11131();
        };
        int1 = (int1 + 1);
    };
    return;
}