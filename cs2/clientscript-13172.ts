//
function script13172(int0: number, int1: number): void {
    var int2 = 0;
    if (((IF_FIND(comp(1843, 183) /*mtxmgt_store:items_layer*/) == 1) && (IF_FIND[1](comp(1843, 261) /*mtxmgt_store:ragdolls_scrollsize_layer*/) == 1))) {
        if ((cc_getparam(6359) > 0)) {
            int2 = cc_getparam(6359);
        };
        CC_SETSCROLLPOS[1](int2, 0);
        if ((int0 <= 8)) {
            CC_SETSCROLLSIZE[1](0, 0);
            CC_DELETEALL(comp(1843, 262));  // mtxmgt_store:ragdolls_scrollbar_layer
            IF_SETONSCROLLWHEEL(callback(), comp(1843, 251));  // mtxmgt_store:ragdolls_layer
        } else if (((CC_GETSCROLLWIDTH[1]() != int0) || (int1 == 1))) {
            CC_SETSCROLLSIZE[1](int0, 0);
            script11147(120783110, 120783109);
            IF_SETONSCROLLWHEEL(callback(), comp(1843, 261));  // mtxmgt_store:ragdolls_scrollsize_layer
            IF_SETONSCROLLWHEEL(callback(script1701, 120783110, 120783109, -2147483646), comp(1843, 251));  // mtxmgt_store:ragdolls_layer
            script14180();
        };
    };
    return;
}