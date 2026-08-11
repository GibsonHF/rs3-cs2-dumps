//
function script11539(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    IF_SETHIDE(false, comp(891, 18));  // mtx_front_end_confirm:preview_pane
    IF_SETHIDE(false, comp(891, 10));  // mtx_front_end_confirm:preview_background_wrapper
    IF_SETHIDE(false, comp(891, 36));  // mtx_front_end_confirm:load_preview
    IF_SETHIDE(true, comp(891, 32));  // mtx_front_end_confirm:ragdoll_model
    IF_SETHIDE(true, comp(891, 20));  // mtx_front_end_confirm:pet_model
    IF_SETHIDE(true, comp(891, 33));  // mtx_front_end_confirm:other_model
    IF_SETHIDE(true, comp(891, 34));  // mtx_front_end_confirm:other_graphic
    IF_SETHIDE(true, comp(891, 19));  // mtx_front_end_confirm:anim_layer
    if ((struct_getparam(int0, 8979) == true)) {
        IF_SETHIDE(true, comp(891, 29));  // mtx_front_end_confirm:soft_currency_wrapper
        IF_SETHIDE(false, comp(891, 28));  // mtx_front_end_confirm:cash_buy_text
    };
    IF_SETSIZE(450, 324, 0, 0, comp(891, 12));  // mtx_front_end_confirm:item_description_wrapper
    IF_SETSIZE(305, 30, 0, 1, comp(891, 16));  // mtx_front_end_confirm:item_description_scroll_layer
    IF_SETPOSITION((305 - 20), 30, 0, 0, comp(891, 15));  // mtx_front_end_confirm:item_description_scrollbar
    IF_SETSIZE(524, 30, 0, 0, comp(891, 11));  // mtx_front_end_confirm:cannot_buy_text
    switch (int1) {
        case 2: {
            script11542(int0, int2, -1);
            break;
        }
        case 5: {
            script11543(int0);
            break;
        }
        case 4: {
            script11615(int0);
            break;
        }
        case 3: {
            script11541(int0);
            break;
        }
        default: {
            script17927();
            switch (int0) {
                case 45676: {
                    script11543(int0);
                    break;
                }
                case 46488:
                case 48786: {
                    script11542(int0, int2, -1);
                    break;
                }
                case 47484:
                case 45624:
                case 47197:
                case 49309:
                case 49310:
                case 50204:
                case 2960:
                case 51464:
                case 52270: {
                    script11542(int0, int2, -1);
                    IF_SETTEXT("View Offer", comp(891, 28));  // mtx_front_end_confirm:cash_buy_text
                    break;
                }
                case 46:
                case 47:
                case 48: {
                    script11615(int0);
                    break;
                }
                case 51189: {
                    script11540(int0, 59871);
                    IF_SETTEXT("View Offer", comp(891, 28));  // mtx_front_end_confirm:cash_buy_text
                    break;
                }
                case 51832:
                case 51833:
                case 51834:
                case 51829:
                case 51830:
                case 51831: {
                    script11540(int0, int2);
                    IF_SETTEXT("View Offer", comp(891, 28));  // mtx_front_end_confirm:cash_buy_text
                    break;
                }
                default: {
                    if ((int2 != -1)) {
                        script11540(int0, int2);
                    } else {
                        IF_SETHIDE(true, comp(891, 18));  // mtx_front_end_confirm:preview_pane
                        IF_SETHIDE(true, comp(891, 10));  // mtx_front_end_confirm:preview_background_wrapper
                        IF_SETSIZE(524, 324, 0, 0, comp(891, 12));  // mtx_front_end_confirm:item_description_wrapper
                        IF_SETSIZE(524, 30, 0, 1, comp(891, 16));  // mtx_front_end_confirm:item_description_scroll_layer
                        IF_SETPOSITION((524 - 20), 30, 0, 0, comp(891, 15));  // mtx_front_end_confirm:item_description_scrollbar
                    };
                    break;
                }
            };
            break;
        }
    };
    if ((int3 == 1)) {
        IF_SETONVARTRANSMIT(callback(script15406, int0, int1, int2, 0, int4, 9883, 1), comp(891, 2));  // mtx_front_end_confirm:footer_listener
    };
    script19654(1, int4);
    return;
}