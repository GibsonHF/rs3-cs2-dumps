//
function script4755(int0: component): void {
    var int1 = SCALE(16384, 5000, varplayer_2121);
    int1 = MIN(MAX(int1, 0), 16384);
    IF_SETSIZE(int1, 0, 2, 1, comp(642, 66));
    IF_SETTEXT(inttostring(varplayer_2121, 10), int0);
    if ((varplayer_2121 >= 3000)) {
        IF_SETCOLOUR(16777215, comp(642, 67));
        IF_SETCOLOUR(16777215, comp(642, 69));
        IF_SETCOLOUR(16777215, comp(642, 68));
        IF_SETMODELANIM(2602 as seq, comp(642, 38));
    } else if ((varplayer_2121 <= 1500)) {
        IF_SETCOLOUR(16720486, comp(642, 67));
        IF_SETCOLOUR(16720486, comp(642, 69));
        IF_SETCOLOUR(16720486, comp(642, 68));
        IF_SETMODELANIM(2601 as seq, comp(642, 38));
    } else {
        IF_SETCOLOUR(16777215, comp(642, 67));
        IF_SETCOLOUR(16777215, comp(642, 69));
        IF_SETCOLOUR(16777215, comp(642, 68));
        IF_SETMODELANIM(9804 as seq, comp(642, 38));
    };
    return;
}