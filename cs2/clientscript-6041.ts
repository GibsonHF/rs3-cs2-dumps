//
function script6041(int0: unknown_int, int1: component, int2: unknown_int): void {
    IF_SETOP(1, "Confirm", int1);
    IF_SETONOP(callback(script6044), int1);
    IF_SETONVARCTRANSMIT(callback(script6042, int0, int1, int2, 1796, 1797, 1799, 3), int0);
    IF_SETONVARTRANSMIT(callback(script6042, int0, int1, int2, 8356, 1), int0);
    IF_SETONSTATTRANSMIT(callback(script6042, int0, int1, int2), int0);
    IF_SETONRESIZE(callback(script6042, int0, int1, int2), int0);
    script6043(int0, int1, int2);
    return;
}