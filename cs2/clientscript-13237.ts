//
function script13237(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    var string0 = "null";
    switch (int0) {
        case 0: {
            int4 = comp(1845, 15);  // mtxmgt_store_checkout:revert_button_0_layer
            int5 = comp(1845, 145);  // mtxmgt_store_checkout:revert_button_0_active_layer
            break;
        }
        case 1: {
            int4 = comp(1845, 14);  // mtxmgt_store_checkout:revert_button_1_layer
            int5 = comp(1845, 151);  // mtxmgt_store_checkout:revert_button_1_active_layer
            break;
        }
        case 2: {
            int4 = comp(1845, 13);  // mtxmgt_store_checkout:revert_button_2_layer
            int5 = comp(1845, 157);  // mtxmgt_store_checkout:revert_button_2_active_layer
            break;
        }
        case 3: {
            int4 = comp(1845, 12);  // mtxmgt_store_checkout:revert_button_3_layer
            int5 = comp(1845, 163);  // mtxmgt_store_checkout:revert_button_3_active_layer
            break;
        }
        case 4: {
            int4 = comp(1845, 11);  // mtxmgt_store_checkout:revert_button_4_layer
            int5 = comp(1845, 169);  // mtxmgt_store_checkout:revert_button_4_active_layer
            break;
        }
        case 5: {
            int4 = comp(1845, 10);  // mtxmgt_store_checkout:revert_button_5_layer
            int5 = comp(1845, 175);  // mtxmgt_store_checkout:revert_button_5_active_layer
            break;
        }
        case 6: {
            int4 = comp(1845, 9);  // mtxmgt_store_checkout:revert_button_6_layer
            int5 = comp(1845, 181);  // mtxmgt_store_checkout:revert_button_6_active_layer
            break;
        }
        case 7: {
            int4 = comp(1845, 8);  // mtxmgt_store_checkout:revert_button_7_layer
            int5 = comp(1845, 187);  // mtxmgt_store_checkout:revert_button_7_active_layer
            break;
        }
        case 8: {
            int4 = comp(1845, 7);  // mtxmgt_store_checkout:revert_button_8_layer
            int5 = comp(1845, 193);  // mtxmgt_store_checkout:revert_button_8_active_layer
            break;
        }
        case 9: {
            int4 = comp(1845, 6);  // mtxmgt_store_checkout:revert_button_9_layer
            int5 = comp(1845, 199);  // mtxmgt_store_checkout:revert_button_9_active_layer
            break;
        }
        case 10: {
            int4 = comp(1845, 5);  // mtxmgt_store_checkout:revert_button_10_layer
            int5 = comp(1845, 205);  // mtxmgt_store_checkout:revert_button_10_active_layer
            break;
        }
        default: {
            return;
        }
    };
    IF_SETHIDE(int1, int4);
    IF_SETPOSITION(IF_GETX(int4), (int3 + 2), 0, 0, int4);
    if ((int2 == 2)) {
        string0 = "Redo change";
    } else if ((int2 == 1)) {
        string0 = "Undo change";
    } else {
        return;
    };
    IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int5);
    return;
}