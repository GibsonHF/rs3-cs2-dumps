//
function script5368(int0: number): void {
    varclient_1658 = (varclient_1658 + 1);
    var int1 = ((varclient_1658 * 255) / varclient_1656);
    int1 = MIN(255, MAX(0, int1));
    if ((CC_FIND(62324760, int0) == 1)) {
        CC_SETTRANS(int1);
    };
    return;
}