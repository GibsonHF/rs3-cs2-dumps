//
function script10909(int0: number, int1: number): void {
    var int2 = (int1 - int0);
    var int3 = (CLIENTCLOCK() - int0);
    var int4 = MIN(100, SCALE(int3, int2, 100));
    if ((int4 < 10)) {
        IF_SETTEXTFONT(26 as fontmetrics, comp(1579, 23));  // thedrop:text_answer1
        IF_SETTEXTFONT(26 as fontmetrics, comp(1579, 42));  // thedrop:text_answer2
        IF_SETTEXTFONT(26 as fontmetrics, comp(1579, 50));  // thedrop:text_answer3
        IF_SETTEXTFONT(26 as fontmetrics, comp(1579, 58));  // thedrop:text_answer4
        IF_SETTEXTFONT(26 as fontmetrics, comp(1579, 66));  // thedrop:text_answer5
    };
    var int5 = SCALE(320, 100, int4);
    var int6 = IF_GETWIDTH(comp(1579, 26));  // thedrop:progress_bar
    if ((int6 < int5)) {
        IF_SETSIZE((int6 + 1), 5, 0, 0, comp(1579, 26));  // thedrop:progress_bar
    };
    if ((int4 == 100)) {
        IF_SETONTIMER(callback(), comp(1579, 12));  // thedrop:progress_bar_layer
    };
    return;
}