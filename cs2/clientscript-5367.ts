//
function script5367(int0: number, int1: number): void {
    if ((CC_FIND(62324760, int0) == 1)) {
        switch (int1) {
            case 0: {
                CC_SETHIDE(1);
                CC_SETONTIMER(callback());
                break;
            }
            case 1: {
                CC_SETHIDE(0);
                CC_SETONTIMER(callback(script5368, -2147483643));
                break;
            }
            case 2: {
                CC_SETHIDE(0);
                CC_SETONTIMER(callback());
                CC_SETTRANS(0);
                break;
            }
        };
    };
    return;
}