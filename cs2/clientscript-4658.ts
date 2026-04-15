//
function script4658(int0: component): void {
    var int1 = SCALE(varplayer_1561, 3200, 100);
    IF_SETTEXT(inttostring(varplayer_1561, 10), int0);
    script4542(int1, comp(22, 40), comp(22, 45));
    if ((varplayer_1561 <= 1000)) {
        IF_SETMODELANIM(9777 as seq, comp(22, 2));
    } else {
        IF_SETMODELANIM(9804 as seq, comp(22, 2));
    };
    return;
}