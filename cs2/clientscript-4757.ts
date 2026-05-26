//
function script4757(int0: number): void {
    var int1 = SCALE(16384, 5000, varplayer_2123);
    int1 = MIN(MAX(int1, 0), 16384);
    IF_SETSIZE(int1, 0, 2, 1, 42074235);
    IF_SETTEXT(inttostring(varplayer_2123, 10), int0);
    if ((varplayer_2123 <= 1000)) {
        IF_SETCOLOUR(16720486, 42074236);
        IF_SETCOLOUR(16720486, 42074238);
        IF_SETCOLOUR(16720486, 42074237);
        IF_SETMODELANIM(2601, 42074216);
    } else {
        IF_SETCOLOUR(16777215, 42074236);
        IF_SETCOLOUR(16777215, 42074238);
        IF_SETCOLOUR(16777215, 42074237);
        IF_SETMODELANIM(9804, 42074216);
    };
    return;
}