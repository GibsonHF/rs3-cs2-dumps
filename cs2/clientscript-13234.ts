//
function script13234(int0: number): void {
    IF_SETHIDE(true, comp(1845, 212));  // mtxmgt_store_checkout:apply_button_disabled_layer
    var int1 = 0;
    var int2 = 0;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = -1;
    var int11 = IF_GETSCROLLY(comp(1845, 17));  // mtxmgt_store_checkout:checkout_layer
    var int12 = comp(1845, 2);  // mtxmgt_store_checkout:checkout_text_layer
    CC_DELETEALL(int0);
    CC_DELETEALL(comp(1845, 17));  // mtxmgt_store_checkout:checkout_layer
    CC_DELETEALL(comp(1845, 0));  // mtxmgt_store_checkout:checkout_scrollbar_layer
    CC_DELETEALL(int12);
    CC_DELETEALL(comp(1845, 18));  // mtxmgt_store_checkout:checkout_checkmark_layer
    while ((int1 < 11)) {
        script13235(int1, 1, 0, 1, int8);
        script13237(int1, 1, -1, int8);
        int1 = (int1 + 1);
    };
    var int13 = -1;
    var int14 = 0;
    int1 = 0;
    while ((int1 < 11)) {
        if ((int7 == 0)) {
            [int10, int3, int4] = script13113(int1);
            if ((int10 == -1)) {
                int7 = 1;
            };
            if ((int7 == 0)) {
                script13237(int1, 0, 0, int8);
                script13238(int1, 0);
                [int8, int9] = script13239(int1, int10, int0, int12, int8, int3, int9, 0, 0);
                int2 = (int2 + 1);
            };
            int1 = (int1 + 1);
        };
        var int15 = -1;
        if ((int8 < IF_GETHEIGHT(comp(1845, 17)))) {  // mtxmgt_store_checkout:checkout_layer
            IF_SETSCROLLSIZE(0, 0, comp(1845, 17));  // mtxmgt_store_checkout:checkout_layer
            IF_SETSCROLLPOS(0, 0, comp(1845, 17));  // mtxmgt_store_checkout:checkout_layer
            IF_SETPOSITION(0, IF_GETY(comp(1845, 18)), 2, 0, comp(1845, 18));  // mtxmgt_store_checkout:checkout_checkmark_layer
            int15 = 0;
        } else {
            IF_SETSCROLLSIZE(0, int8, comp(1845, 17));  // mtxmgt_store_checkout:checkout_layer
            IF_SETSCROLLPOS(0, int11, comp(1845, 17));  // mtxmgt_store_checkout:checkout_layer
            script7791(120913920, 120913937);
            IF_SETPOSITION(18, IF_GETY(comp(1845, 18)), 2, 0, comp(1845, 18));  // mtxmgt_store_checkout:checkout_checkmark_layer
            int15 = 1;
        };
        while ((int2 < 11)) {
            [int8, int9] = script13239(int1, int10, int0, int12, int8, int3, int9, 1, int4);
            int2 = (int2 + 1);
        };
        int1 = 0;
        while ((int1 < 11)) {
            script13236(int1, int15);
            int1 = (int1 + 1);
        };
        return;
    };
    int15 = -1;
    if ((int8 < IF_GETHEIGHT(comp(1845, 17)))) {  // mtxmgt_store_checkout:checkout_layer
        IF_SETSCROLLSIZE(0, 0, comp(1845, 17));  // mtxmgt_store_checkout:checkout_layer
        IF_SETSCROLLPOS(0, 0, comp(1845, 17));  // mtxmgt_store_checkout:checkout_layer
        IF_SETPOSITION(0, IF_GETY(comp(1845, 18)), 2, 0, comp(1845, 18));  // mtxmgt_store_checkout:checkout_checkmark_layer
        int15 = 0;
    } else {
        IF_SETSCROLLSIZE(0, int8, comp(1845, 17));  // mtxmgt_store_checkout:checkout_layer
        IF_SETSCROLLPOS(0, int11, comp(1845, 17));  // mtxmgt_store_checkout:checkout_layer
        script7791(120913920, 120913937);
        IF_SETPOSITION(18, IF_GETY(comp(1845, 18)), 2, 0, comp(1845, 18));  // mtxmgt_store_checkout:checkout_checkmark_layer
        int15 = 1;
    };
    while ((int2 < 11)) {
        [int8, int9] = script13239(int1, int10, int0, int12, int8, int3, int9, 1, int4);
        int2 = (int2 + 1);
    };
    int1 = 0;
    while ((int1 < 11)) {
        script13236(int1, int15);
        int1 = (int1 + 1);
    };
    return;
}