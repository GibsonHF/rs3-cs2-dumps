//
function script11163(int0: number): void {
    IF_SETHIDE(true, comp(1082, 9));  // trh189_overlay:splash_page_1
    IF_SETHIDE(true, comp(1082, 8));  // trh189_overlay:splash_page_2
    IF_SETHIDE(true, comp(1082, 7));  // trh189_overlay:splash_page_3
    IF_SETHIDE(true, comp(1082, 4));  // trh189_overlay:splash_page_4
    IF_SETHIDE(true, comp(1082, 3));  // trh189_overlay:splash_page_5
    IF_SETHIDE(true, comp(1082, 11));  // trh189_overlay:splash_right_shadow
    IF_SETHIDE(true, comp(1082, 142));  // trh189_overlay:splash_1_desc
    IF_SETHIDE(true, comp(1082, 146));  // trh189_overlay:splash_1_text
    IF_SETHIDE(true, comp(1082, 13));  // trh189_overlay:splash_1_next
    IF_SETHIDE(true, comp(1082, 10));  // trh189_overlay:splash_left_shadow
    IF_SETHIDE(true, comp(1082, 23));  // trh189_overlay:splash_2_desc
    IF_SETHIDE(true, comp(1082, 31));  // trh189_overlay:splash_2_text
    IF_SETHIDE(true, comp(1082, 12));  // trh189_overlay:splash_2_next
    switch (int0) {
        case 5: {
            IF_SETHIDE(false, comp(1082, 3));  // trh189_overlay:splash_page_5
            break;
        }
        case 4: {
            IF_SETHIDE(false, comp(1082, 4));  // trh189_overlay:splash_page_4
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1082, 7));  // trh189_overlay:splash_page_3
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1082, 8));  // trh189_overlay:splash_page_2
            IF_SETHIDE(false, comp(1082, 9));  // trh189_overlay:splash_page_1
            IF_SETHIDE(false, comp(1082, 10));  // trh189_overlay:splash_left_shadow
            IF_SETHIDE(false, comp(1082, 23));  // trh189_overlay:splash_2_desc
            IF_SETHIDE(false, comp(1082, 31));  // trh189_overlay:splash_2_text
            IF_SETHIDE(false, comp(1082, 12));  // trh189_overlay:splash_2_next
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(1082, 9));  // trh189_overlay:splash_page_1
            IF_SETHIDE(false, comp(1082, 8));  // trh189_overlay:splash_page_2
            IF_SETHIDE(false, comp(1082, 11));  // trh189_overlay:splash_right_shadow
            IF_SETHIDE(false, comp(1082, 142));  // trh189_overlay:splash_1_desc
            IF_SETHIDE(false, comp(1082, 146));  // trh189_overlay:splash_1_text
            IF_SETHIDE(false, comp(1082, 13));  // trh189_overlay:splash_1_next
            break;
        }
    };
    return;
}