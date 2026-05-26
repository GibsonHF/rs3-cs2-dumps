//
function script4659(int0: number): void {
    var int1 = SCALE(varplayer_1562, 3200, 100);
    script4542(int1, 1441856, 1441861);
    IF_SETTEXT(inttostring(varplayer_1562, 10), int0);
    if ((varplayer_1562 <= 1000)) {
        IF_SETMODELANIM(9777 as seq, comp(22, 70));
    } else {
        IF_SETMODELANIM(9804 as seq, comp(22, 70));
    };
    return;
}