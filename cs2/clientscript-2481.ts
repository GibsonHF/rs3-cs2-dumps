//
function script2481(int0: component): void {
    var int1 = varbitplayer_1668;
    if ((varbitplayer_27168 == 1)) {
        if ((int1 >= 10)) {
            int1 = (int1 / 10);
        } else if ((int1 > 0)) {
            int1 = 1;
        } else {
            int1 = 0;
        };
    };
    IF_SETTEXT(inttostring(int1, 10), int0);
    return;
}