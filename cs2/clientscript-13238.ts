//
function script13238(int0: number, int1: number): void {
    var int2 = comp(-1, 65535);
    var string0 = "Item unavailable. Clicking apply will undo this change.";
    switch (int0) {
        case 0: {
            int2 = comp(1845, 146);  // mtxmgt_store_checkout:revert_button_0_disabled_layer
            break;
        }
        case 1: {
            int2 = comp(1845, 152);  // mtxmgt_store_checkout:revert_button_1_disabled_layer
            break;
        }
        case 2: {
            int2 = comp(1845, 158);  // mtxmgt_store_checkout:revert_button_2_disabled_layer
            break;
        }
        case 3: {
            int2 = comp(1845, 164);  // mtxmgt_store_checkout:revert_button_3_disabled_layer
            break;
        }
        case 4: {
            int2 = comp(1845, 170);  // mtxmgt_store_checkout:revert_button_4_disabled_layer
            break;
        }
        case 5: {
            int2 = comp(1845, 176);  // mtxmgt_store_checkout:revert_button_5_disabled_layer
            break;
        }
        case 6: {
            int2 = comp(1845, 182);  // mtxmgt_store_checkout:revert_button_6_disabled_layer
            break;
        }
        case 7: {
            int2 = comp(1845, 188);  // mtxmgt_store_checkout:revert_button_7_disabled_layer
            break;
        }
        case 8: {
            int2 = comp(1845, 194);  // mtxmgt_store_checkout:revert_button_8_disabled_layer
            break;
        }
        case 9: {
            int2 = comp(1845, 200);  // mtxmgt_store_checkout:revert_button_9_disabled_layer
            break;
        }
        case 10: {
            int2 = comp(1845, 206);  // mtxmgt_store_checkout:revert_button_10_disabled_layer
            break;
        }
        default: {
            return;
        }
    };
    IF_SETHIDE(int1, int2);
    if ((int1 == false)) {
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int2);
    };
    return;
}