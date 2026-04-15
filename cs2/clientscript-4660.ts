//
function script4660(int0: component): void {
    var int1 = SCALE(varplayer_1563, 3200, 100);
    IF_SETTEXT(inttostring(varplayer_1563, 10), int0);
    script4542(int1, comp(22, 96), comp(22, 101));
    if ((varplayer_1563 <= 1000)) {
        IF_SETMODELANIM(9777 as seq, comp(22, 0));
    } else {
        IF_SETMODELANIM(9804 as seq, comp(22, 0));
    };
    return;
}