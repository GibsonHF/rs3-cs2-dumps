//
function script4757(int0: component): void {
    var int1 = SCALE(16384, 5000, varplayer_2123);
    int1 = MIN(MAX(int1, 0), 16384);
    IF_SETSIZE(int1, 0, 2, 1, comp(642, 123));
    IF_SETTEXT(inttostring(varplayer_2123, 10), int0);
    if ((varplayer_2123 <= 1000)) {
        IF_SETCOLOUR(16720486, comp(642, 124));
        IF_SETCOLOUR(16720486, comp(642, 126));
        IF_SETCOLOUR(16720486, comp(642, 125));
        IF_SETMODELANIM(2601 as seq, comp(642, 104));
    } else {
        IF_SETCOLOUR(16777215, comp(642, 124));
        IF_SETCOLOUR(16777215, comp(642, 126));
        IF_SETCOLOUR(16777215, comp(642, 125));
        IF_SETMODELANIM(9804 as seq, comp(642, 104));
    };
    return;
}