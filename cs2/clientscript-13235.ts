//
function script13235(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    var int5 = comp(-1, 65535);
    var int6 = comp(-1, 65535);
    var int7 = comp(-1, 65535);
    var int8 = comp(-1, 65535);
    switch (int0) {
        case 0: {
            int5 = comp(1845, 32);  // mtxmgt_store_checkout:purchase_button_0_layer
            int6 = comp(1845, 42);  // mtxmgt_store_checkout:purchase_button_0_text
            int7 = comp(1845, 41);  // mtxmgt_store_checkout:purchase_button_0_animation_layer
            int8 = comp(1845, 39);  // mtxmgt_store_checkout:purchase_button_0_disabled_layer
            break;
        }
        case 1: {
            int5 = comp(1845, 31);  // mtxmgt_store_checkout:purchase_button_1_layer
            int6 = comp(1845, 51);  // mtxmgt_store_checkout:purchase_button_1_text
            int7 = comp(1845, 50);  // mtxmgt_store_checkout:purchase_button_1_animation_layer
            int8 = comp(1845, 48);  // mtxmgt_store_checkout:purchase_button_1_disabled_layer
            break;
        }
        case 2: {
            int5 = comp(1845, 30);  // mtxmgt_store_checkout:purchase_button_2_layer
            int6 = comp(1845, 60);  // mtxmgt_store_checkout:purchase_button_2_text
            int7 = comp(1845, 59);  // mtxmgt_store_checkout:purchase_button_2_animation_layer
            int8 = comp(1845, 57);  // mtxmgt_store_checkout:purchase_button_2_disabled_layer
            break;
        }
        case 3: {
            int5 = comp(1845, 29);  // mtxmgt_store_checkout:purchase_button_3_layer
            int6 = comp(1845, 69);  // mtxmgt_store_checkout:purchase_button_3_text
            int7 = comp(1845, 68);  // mtxmgt_store_checkout:purchase_button_3_animation_layer
            int8 = comp(1845, 66);  // mtxmgt_store_checkout:purchase_button_3_disabled_layer
            break;
        }
        case 4: {
            int5 = comp(1845, 28);  // mtxmgt_store_checkout:purchase_button_4_layer
            int6 = comp(1845, 78);  // mtxmgt_store_checkout:purchase_button_4_text
            int7 = comp(1845, 77);  // mtxmgt_store_checkout:purchase_button_4_animation_layer
            int8 = comp(1845, 75);  // mtxmgt_store_checkout:purchase_button_4_disabled_layer
            break;
        }
        case 5: {
            int5 = comp(1845, 27);  // mtxmgt_store_checkout:purchase_button_5_layer
            int6 = comp(1845, 87);  // mtxmgt_store_checkout:purchase_button_5_text
            int7 = comp(1845, 86);  // mtxmgt_store_checkout:purchase_button_5_animation_layer
            int8 = comp(1845, 84);  // mtxmgt_store_checkout:purchase_button_5_disabled_layer
            break;
        }
        case 6: {
            int5 = comp(1845, 26);  // mtxmgt_store_checkout:purchase_button_6_layer
            int6 = comp(1845, 96);  // mtxmgt_store_checkout:purchase_button_6_text
            int7 = comp(1845, 95);  // mtxmgt_store_checkout:purchase_button_6_animation_layer
            int8 = comp(1845, 93);  // mtxmgt_store_checkout:purchase_button_6_disabled_layer
            break;
        }
        case 7: {
            int5 = comp(1845, 25);  // mtxmgt_store_checkout:purchase_button_7_layer
            int6 = comp(1845, 105);  // mtxmgt_store_checkout:purchase_button_7_text
            int7 = comp(1845, 104);  // mtxmgt_store_checkout:purchase_button_7_animation_layer
            int8 = comp(1845, 102);  // mtxmgt_store_checkout:purchase_button_7_disabled_layer
            break;
        }
        case 8: {
            int5 = comp(1845, 24);  // mtxmgt_store_checkout:purchase_button_8_layer
            int6 = comp(1845, 114);  // mtxmgt_store_checkout:purchase_button_8_text
            int7 = comp(1845, 113);  // mtxmgt_store_checkout:purchase_button_8_animation_layer
            int8 = comp(1845, 111);  // mtxmgt_store_checkout:purchase_button_8_disabled_layer
            break;
        }
        case 9: {
            int5 = comp(1845, 23);  // mtxmgt_store_checkout:purchase_button_9_layer
            int6 = comp(1845, 123);  // mtxmgt_store_checkout:purchase_button_9_text
            int7 = comp(1845, 122);  // mtxmgt_store_checkout:purchase_button_9_animation_layer
            int8 = comp(1845, 120);  // mtxmgt_store_checkout:purchase_button_9_disabled_layer
            break;
        }
        case 10: {
            int5 = comp(1845, 22);  // mtxmgt_store_checkout:purchase_button_10_layer
            int6 = comp(1845, 132);  // mtxmgt_store_checkout:purchase_button_10_text
            int7 = comp(1845, 131);  // mtxmgt_store_checkout:purchase_button_10_animation_layer
            int8 = comp(1845, 129);  // mtxmgt_store_checkout:purchase_button_10_disabled_layer
            break;
        }
        default: {
            return;
        }
    };
    CC_DELETEALL(int7);
    CC_CREATE(int7, 5, IF_GETNEXTSUBID(int7));
    CC_SETGRAPHIC(18967 as graphic);
    CC_SETSIZE((IF_GETHEIGHT(int5) - (2 * 2)), (IF_GETHEIGHT(int5) - (2 * 2)), 0, 0);
    CC_SETONTIMER(callback(script12631, -2147483645, -2147483643));
    cc_setparam(5836, 2);
    CC_SETPOSITION(6, 2, 0, 0);
    CC_SENDTOFRONT();
    CC_SETHIDE(int3);
    IF_SETHIDE(int1, int5);
    if ((int1 == true)) {
        return;
    };
    if ((int2 == 1)) {
        IF_SETTEXT("Claim", int6);
    } else {
        IF_SETTEXT("Purchase", int6);
    };
    IF_SETPOSITION(IF_GETX(int5), (int4 + 2), 0, 0, int5);
    IF_SETHIDE(int3, int8);
    return;
}