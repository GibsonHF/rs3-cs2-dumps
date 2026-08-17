//
function script20742(int0: number): void {
    if ((varbitclient_61229 == 1)) {
        IF_SETPOSITION((-3 - int0), 1639, 0, 3, comp(1512, 8));  // house_furniture_catalogue:mainmodal_window_background
        IF_SETPOSITION(((-3 - int0) + IF_GETWIDTH(comp(1512, 8) /*house_furniture_catalogue:mainmodal_window_background*/)), 1639, 0, 3, comp(1512, 26) /*house_furniture_catalogue:toggle_button*/);
    } else {
        IF_SETPOSITION(-3, 1639, 0, 3, comp(1512, 8));  // house_furniture_catalogue:mainmodal_window_background
        IF_SETPOSITION(((-3 + IF_GETWIDTH(comp(1512, 8) /*house_furniture_catalogue:mainmodal_window_background*/)) - 4), 1639, 0, 3, comp(1512, 26) /*house_furniture_catalogue:toggle_button*/);
    };
    return;
}