//
function script6165(int0: number): void {
    IF_SETTEXT("0", 83427395);
    CC_DELETEALL(83427341);
    CC_DELETEALL(83427342);
    CC_DELETEALL(83427343);
    CC_DELETEALL(83427344);
    varclient_1911 = -1;
    IF_SETHIDE(1, 83427342);
    IF_SETHIDE(1, 83427343);
    IF_SETHIDE(1, 83427344);
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