//
function script12817(int0: number, int1: number): void {
    var int2 = IF_GETWIDTH(comp(1796, 17));  // trh100_herbs_vs_zombies:farming_background_layer
    var int3 = ((int2 * 100) / 800);
    var int4 = ((int3 * MIN(int0, 800)) / 100);
    IF_SETSIZE(int4, 21, 0, 0, int1);
    return;
}