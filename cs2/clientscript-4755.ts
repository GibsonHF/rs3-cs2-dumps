//
function script4755(int0: number): void {
    var int1 = SCALE(16384, 5000, varplayer_2121);
    int1 = MIN(MAX(int1, 0), 16384);
    IF_SETSIZE(int1, 0, 2, 1, 42074178);
    IF_SETTEXT(inttostring(varplayer_2121, 10), int0);
    if ((varplayer_2121 >= 3000)) {
        IF_SETCOLOUR(16777215, 42074179);
        IF_SETCOLOUR(16777215, 42074181);
        IF_SETCOLOUR(16777215, 42074180);
        IF_SETMODELANIM(2602, 42074150);
    } else if ((varplayer_2121 <= 1500)) {
        IF_SETCOLOUR(16720486, 42074179);
        IF_SETCOLOUR(16720486, 42074181);
        IF_SETCOLOUR(16720486, 42074180);
        IF_SETMODELANIM(2601, 42074150);
    } else {
        IF_SETCOLOUR(16777215, 42074179);
        IF_SETCOLOUR(16777215, 42074181);
        IF_SETCOLOUR(16777215, 42074180);
        IF_SETMODELANIM(9804, 42074150);
    };
    return;
}