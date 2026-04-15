//
function script5368(int0: int): void {
    varclient_1658 = (varclient_1658 + 1);
    var int1 = ((varclient_1658 * 255) / varclient_1656);
    int1 = MIN(255, MAX(0, int1));
    if ((CC_FIND(comp(951, 24), int0) == 1)) {
        CC_SETTRANS(int1);
    };
    return;
}