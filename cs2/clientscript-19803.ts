//
function script19803(): void {
    IF_SETHIDE(false, comp(1320, 51));  // trh205_overlay:prize_select_layer
    IF_SETHIDE(true, comp(1320, 2));  // trh205_overlay:main_container
    var int0 = script16161();
    IF_SETGRAPHIC(dbrow_getfield(14845 as dbrow, 1105984, 0), comp(1253, 5));  // wheel_of_fortune:background
    script19805();
    return;
}