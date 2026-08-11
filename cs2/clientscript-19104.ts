//
function script19104(int0: number): void {
    IF_SETHIDE(true, comp(1147, 106));  // trh199_overlay:splash_page_1
    IF_SETHIDE(true, comp(1147, 105));  // trh199_overlay:splash_page_2
    IF_SETHIDE(true, comp(1147, 99));  // trh199_overlay:splash_page_3
    switch (int0) {
        case 3: {
            IF_SETHIDE(false, comp(1147, 99));  // trh199_overlay:splash_page_3
            break;
        }
        case 2: {
            IF_SETHIDE(false, comp(1147, 105));  // trh199_overlay:splash_page_2
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(1147, 106));  // trh199_overlay:splash_page_1
            break;
        }
    };
    return;
}