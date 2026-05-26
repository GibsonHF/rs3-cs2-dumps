//
function script4658(int0: number): void {
    var int1 = SCALE(varplayer_1561, 3200, 100);
    IF_SETTEXT(inttostring(varplayer_1561, 10), int0);
    script4542(int1, 1441832, 1441837);
    if ((varplayer_1561 <= 1000)) {
        IF_SETMODELANIM(9777, 1441794);
    } else {
        IF_SETMODELANIM(9804, 1441794);
    };
    return;
}