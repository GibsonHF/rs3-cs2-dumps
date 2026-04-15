//
function script4756(int0: component): void {
    var int1 = SCALE(16384, 5000, varplayer_2122);
    int1 = MIN(MAX(int1, 0), 16384);
    IF_SETSIZE(int1, 0, 2, 1, comp(642, 90));
    IF_SETTEXT(inttostring(varplayer_2122, 10), int0);
    if ((varplayer_2122 >= 3000)) {
        IF_SETCOLOUR(16777215, comp(642, 91));
        IF_SETCOLOUR(16777215, comp(642, 93));
        IF_SETCOLOUR(16777215, comp(642, 92));
        IF_SETMODELANIM(2602 as seq, comp(642, 96));
    } else if ((varplayer_2122 <= 1500)) {
        IF_SETCOLOUR(16720486, comp(642, 91));
        IF_SETCOLOUR(16720486, comp(642, 93));
        IF_SETCOLOUR(16720486, comp(642, 92));
        IF_SETMODELANIM(2601 as seq, comp(642, 96));
    } else {
        IF_SETCOLOUR(16777215, comp(642, 91));
        IF_SETCOLOUR(16777215, comp(642, 93));
        IF_SETCOLOUR(16777215, comp(642, 92));
        IF_SETMODELANIM(9804 as seq, comp(642, 96));
    };
    return;
}