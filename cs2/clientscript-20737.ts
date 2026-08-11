//
function script20737(): void {
    var int0 = IF_GETX(comp(1512, 7));  // house_furniture_catalogue:mainmodal_window
    var int1 = IF_GETWIDTH(comp(1512, 7));  // house_furniture_catalogue:mainmodal_window
    var int2 = (0 - 3);
    if ((varbitclient_61229 == 1)) {
        int2 = ((0 - 3) - IF_GETWIDTH(comp(1512, 7)));  // house_furniture_catalogue:mainmodal_window
    };
    if ((int0 > int2)) {
        int0 = MAX(int2, (int0 - 10));
    } else {
        int0 = MIN(int2, (int0 + 10));
    };
    IF_SETPOSITION(int0, 1639, 0, 3, comp(1512, 7));  // house_furniture_catalogue:mainmodal_window
    IF_SETPOSITION((int0 + int1), 1639, 0, 3, comp(1512, 24));  // house_furniture_catalogue:toggle_button_align
    if ((int2 == int0)) {
        script20742(int1);
        IF_SETONTIMER(callback(), comp(1512, 24));  // house_furniture_catalogue:toggle_button_align
    };
    return;
}