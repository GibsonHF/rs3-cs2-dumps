//
function script10202(int0: component, int1: cs2enum): void {
    var int2 = 0;
    var int3 = 0;
    [int2, int3] = script10203(int1);
    IF_SETTEXT(`${inttostring(int2, 10)}/${inttostring(int3, 10)}`, int0);
    return;
}