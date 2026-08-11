//
function script13236(int0: number, int1: number): void {
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    switch (int0) {
        case 0: {
            int2 = comp(1845, 32);  // mtxmgt_store_checkout:purchase_button_0_layer
            int3 = comp(1845, 15);  // mtxmgt_store_checkout:revert_button_0_layer
            break;
        }
        case 1: {
            int2 = comp(1845, 31);  // mtxmgt_store_checkout:purchase_button_1_layer
            int3 = comp(1845, 14);  // mtxmgt_store_checkout:revert_button_1_layer
            break;
        }
        case 2: {
            int2 = comp(1845, 30);  // mtxmgt_store_checkout:purchase_button_2_layer
            int3 = comp(1845, 13);  // mtxmgt_store_checkout:revert_button_2_layer
            break;
        }
        case 3: {
            int2 = comp(1845, 29);  // mtxmgt_store_checkout:purchase_button_3_layer
            int3 = comp(1845, 12);  // mtxmgt_store_checkout:revert_button_3_layer
            break;
        }
        case 4: {
            int2 = comp(1845, 28);  // mtxmgt_store_checkout:purchase_button_4_layer
            int3 = comp(1845, 11);  // mtxmgt_store_checkout:revert_button_4_layer
            break;
        }
        case 5: {
            int2 = comp(1845, 27);  // mtxmgt_store_checkout:purchase_button_5_layer
            int3 = comp(1845, 10);  // mtxmgt_store_checkout:revert_button_5_layer
            break;
        }
        case 6: {
            int2 = comp(1845, 26);  // mtxmgt_store_checkout:purchase_button_6_layer
            int3 = comp(1845, 9);  // mtxmgt_store_checkout:revert_button_6_layer
            break;
        }
        case 7: {
            int2 = comp(1845, 25);  // mtxmgt_store_checkout:purchase_button_7_layer
            int3 = comp(1845, 8);  // mtxmgt_store_checkout:revert_button_7_layer
            break;
        }
        case 8: {
            int2 = comp(1845, 24);  // mtxmgt_store_checkout:purchase_button_8_layer
            int3 = comp(1845, 7);  // mtxmgt_store_checkout:revert_button_8_layer
            break;
        }
        case 9: {
            int2 = comp(1845, 23);  // mtxmgt_store_checkout:purchase_button_9_layer
            int3 = comp(1845, 6);  // mtxmgt_store_checkout:revert_button_9_layer
            break;
        }
        case 10: {
            int2 = comp(1845, 22);  // mtxmgt_store_checkout:purchase_button_10_layer
            int3 = comp(1845, 5);  // mtxmgt_store_checkout:revert_button_10_layer
            break;
        }
        default: {
            return;
        }
    };
    if ((int1 == 1)) {
        IF_SETSIZE(145, 27, 0, 0, int2);
        IF_SETPOSITION(47, IF_GETY(int2), 2, 0, int2);
        IF_SETPOSITION(18, IF_GETY(int3), 2, 0, int3);
    } else {
        IF_SETSIZE(163, 27, 0, 0, int2);
        IF_SETPOSITION(29, IF_GETY(int2), 2, 0, int2);
        IF_SETPOSITION(0, IF_GETY(int3), 2, 0, int3);
    };
    return;
}