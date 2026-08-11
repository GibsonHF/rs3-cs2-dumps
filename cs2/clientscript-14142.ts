//
function script14142(int0: number, int1: number, int2: number): void {
    if ((int1 == comp(1843, 261))) {  // mtxmgt_store:ragdolls_scrollsize_layer
        if ((int2 < 0)) {
            var int2 = MAX(int2, -1);
        } else {
            int2 = MIN(int2, 1);
        };
        int2 = (int2 * 8);
        IGNORE_GETNAME_UNFILTERED();
    };
    script1702(int0, int1, (IF_GETSCROLLX(int1) + (int2 * -1)), 0);
    return;
}