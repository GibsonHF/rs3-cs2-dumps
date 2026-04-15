//
function script5052(int0: component, int1: unknown_int): void {
    if ((CC_FIND(int0, 3) == 1)) {
        if ((int1 == 1)) {
            CC_DRAGPICKUP(0, (CC_GETHEIGHT() / 2));
        } else {
            CC_DRAGPICKUP((CC_GETWIDTH() / 2), 0);
        };
    };
    return;
}