//
function script4756(int0: number): void {
    var int1 = SCALE(16384, 5000, varplayer_2122);
    int1 = MIN(MAX(int1, 0), 16384);
    IF_SETSIZE(int1, 0, 2, 1, 42074202);
    IF_SETTEXT(inttostring(varplayer_2122, 10), int0);
    if ((varplayer_2122 >= 3000)) {
        IF_SETCOLOUR(16777215, 42074203);
        IF_SETCOLOUR(16777215, 42074205);
        IF_SETCOLOUR(16777215, 42074204);
        IF_SETMODELANIM(2602, 42074208);
    } else if ((varplayer_2122 <= 1500)) {
        IF_SETCOLOUR(16720486, 42074203);
        IF_SETCOLOUR(16720486, 42074205);
        IF_SETCOLOUR(16720486, 42074204);
        IF_SETMODELANIM(2601, 42074208);
    } else {
        IF_SETCOLOUR(16777215, 42074203);
        IF_SETCOLOUR(16777215, 42074205);
        IF_SETCOLOUR(16777215, 42074204);
        IF_SETMODELANIM(9804, 42074208);
    };
    return;
}