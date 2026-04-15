//
function script12817(int0: int, int1: component): void {
    var int2 = IF_GETWIDTH(comp(1796, 17));
    var int3 = ((int2 * 100) / 800);
    var int4 = ((int3 * MIN(int0, 800)) / 100);
    IF_SETSIZE(int4, 21, 0, 0, int1);
    return;
}