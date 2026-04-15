//
function script6542(int0: unknown_int): void {
    define_array[9](3);
    pop_array(0, 34209806);
    pop_array(1, 34209807);
    pop_array(2, 34209808);
    define_array[65545](3);
    pop_array[1](0, 34209810);
    pop_array[1](1, 34209815);
    pop_array[1](2, 34209819);
    var int1 = 0;
    while ((int1 < 3)) {
        if ((push_array(int1) == int0)) {
            IF_SETHIDE(false, push_array[1](int1));
        } else {
            IF_SETHIDE(true, push_array[1](int1));
        };
        int1 = (int1 + 1);
    };
    return;
}