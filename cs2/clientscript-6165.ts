//
function script6165(int0: unknown_int): void {
    IF_SETTEXT("0", comp(1273, 67));
    CC_DELETEALL(comp(1273, 13));
    CC_DELETEALL(comp(1273, 14));
    CC_DELETEALL(comp(1273, 15));
    CC_DELETEALL(comp(1273, 16));
    varclient_1911 = -1;
    IF_SETHIDE(true, comp(1273, 14));
    IF_SETHIDE(true, comp(1273, 15));
    IF_SETHIDE(true, comp(1273, 16));
    switch (int0) {
        case 0: {
            script6166();
            break;
        }
        case 1: {
            script6168();
            break;
        }
        case 2: {
            script6169();
            break;
        }
    };
    return;
}