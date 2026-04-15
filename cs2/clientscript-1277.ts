//[clientscript,draughts_inv_init]
function script1277(int0: component, int1: inv, int2: int, int3: int): void {
    script1279(int0, int1, int2, int3);
    IF_SETONINVTRANSMIT(callback(script1278, int0, int1, int2, int3, int1, 1), int0);
    return;
}