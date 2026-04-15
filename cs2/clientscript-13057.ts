//
function script13057(int0: unknown_int, int1: component, int2: unknown_int): void {
    IF_SETOP(1, "Confirm", int1);
    IF_SETONOP(callback(script6044), int1);
    IF_SETONVARTRANSMIT(callback(script13058, int0, int1, int2, 6791, 6792, 2), int0);
    IF_SETONRESIZE(callback(script13058, int0, int1, int2), int0);
    script13059(int0, int1, int2);
    return;
}