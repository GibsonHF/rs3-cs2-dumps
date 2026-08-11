//
function script9044(int0: number, int1: number): void {
    var int2 = (int0 + 1);
    if ((int2 >= int1)) {
        IF_SETONTIMER(callback(), comp(1253, 0));  // wheel_of_fortune:main_layer
        script9046();
    } else {
        IF_SETONTIMER(callback(script9044, int2, int1), comp(1253, 0));  // wheel_of_fortune:main_layer
    };
    return;
}