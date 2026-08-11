//
function script19026(): void {
    if ((IF_GETHIDE(comp(1082, 33)) == false)) {  // trh189_overlay:skin_select
        return;
    };
    var int0 = script6953();
    var int1 = dbrow_getfield(int0, 1179728, 0);
    IF_SETGRAPHIC(int1, comp(1253, 5));  // wheel_of_fortune:background
    IF_SETGRAPHIC(int1, comp(1082, 1));  // trh189_overlay:splash_screen_bg_graphic
    return;
}