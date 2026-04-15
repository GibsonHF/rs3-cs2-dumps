//
function script18159(): [unknown_int, unknown_int, unknown_int, unknown_int, unknown_int] {
    var int0 = script16317();
    define_array((int0 + 1));
    var int1 = 1;
    if ((varbitplayer_16590 > 0)) {
        pop_array(int1, 5);
        int1 = (int1 + 1);
    };
    if ((varbitplayer_16586 > 0)) {
        pop_array(int1, 4);
        int1 = (int1 + 1);
    };
    if ((varbitplayer_16582 > 0)) {
        pop_array(int1, 3);
        int1 = (int1 + 1);
    };
    if ((varbitplayer_16578 > 0)) {
        pop_array(int1, 2);
        int1 = (int1 + 1);
    };
    if ((varbitplayer_16574 > 0)) {
        pop_array(int1, 1);
        int1 = (int1 + 1);
    };
    return [push_array(1), push_array(2), push_array(3), push_array(4), push_array(5)];
}