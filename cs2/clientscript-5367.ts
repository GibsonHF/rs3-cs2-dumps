//
function script5367(int0: int, int1: unknown_int): void {
    if ((CC_FIND(comp(951, 24), int0) == 1)) {
        switch (int1) {
            case 0: {
                CC_SETHIDE(true);
                CC_SETONTIMER(callback());
                break;
            }
            case 1: {
                CC_SETHIDE(false);
                CC_SETONTIMER(callback(script5368, -2147483643));
                break;
            }
            case 2: {
                CC_SETHIDE(false);
                CC_SETONTIMER(callback());
                CC_SETTRANS(0);
                break;
            }
        };
    };
    return;
}