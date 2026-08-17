//
function script20741(int0: number): void {
    if ((varbitclient_61229 == 1)) {
        return;
    };
    if ((int0 == -1)) {
        var int0 = SCALE(IF_GETWIDTH(comp(1477, 26)), 100, 33);  // toplevel_v2:background_colour
    };
    var int1 = script20789(int0, 0, 1);
    IF_SETSIZE(int1, SCALE(16384, 100, 66), 0, 2, comp(1512, 8));  // house_furniture_catalogue:mainmodal_window_background
    script20742(int1);
    script20790(99090442, 99090454, 99090445, 99090443, 99090455, 99090444, 99090456, -1, -1, 0);
    script20791(99090443);
    stack(99090444);
    script20801(varbitclient_61226, varbitclient_61227, 99090447, 99090452, 99090448, 99090449, 99090450, 99090451, -1);
    stack(99090447);
    script20806(99090452, 99090448, 99090449, 99090450, 99090451, varbitclient_61228, -1, 1);
    IF_SETONRESIZE(callback(), comp(1512, 10));  // house_furniture_catalogue:filters
    return;
}