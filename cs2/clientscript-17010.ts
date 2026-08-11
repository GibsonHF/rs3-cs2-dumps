//
function script17010(int0: number): void {
    if ((int0 == -1)) {
        return;
    };
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    [int1, int2, int3, int4] = dbrow_getfield(int0, 851968, 0);
    switch (MAP_LANG()) {
        case 0: {
            IF_SETGRAPHIC(int1, comp(1253, 7));  // wheel_of_fortune:splash_screen_graphic
            break;
        }
        case 1: {
            IF_SETGRAPHIC(int2, comp(1253, 7));  // wheel_of_fortune:splash_screen_graphic
            break;
        }
        case 2: {
            IF_SETGRAPHIC(int3, comp(1253, 7));  // wheel_of_fortune:splash_screen_graphic
            break;
        }
        case 3: {
            IF_SETGRAPHIC(int4, comp(1253, 7));  // wheel_of_fortune:splash_screen_graphic
            break;
        }
    };
    IF_SETHIDE(false, comp(1253, 459));  // wheel_of_fortune:splash_screen
    IF_SETHIDE(false, comp(1253, 7));  // wheel_of_fortune:splash_screen_graphic
    IF_SETHIDE(true, comp(1253, 68));  // wheel_of_fortune:countdown_layer
    IF_SETHIDE(true, comp(1253, 8));  // wheel_of_fortune:chests_layer
    IF_SETHIDE(true, comp(1253, 35));  // wheel_of_fortune:banner_layer
    script16198(0, 82117067);
    if ((struct_getparam(script16161(), 8712) == false)) {
        IF_SETHIDE(true, comp(1253, 171));  // wheel_of_fortune:ticker_tape_viewport
    };
    return;
}