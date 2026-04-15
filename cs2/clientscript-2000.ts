//
function script2000(int0: unknown_int, int1: unknown_int, int2: unknown_int): void {
    var int3 = INV_STOCKBASE(int0, int1);
    if ((int3 == int2)) {
        MES_TYPED(0, 0, "Passed inventory test");
    } else {
        MES_TYPED(0, 0, "Failed inventory test");
    };
    return;
}