//
function script14309(int0: number): void {
    script13972(73793600, 73793601, 28595, "Noticeboard", script9670(int0, 1));
    script13972(73793603, 73793604, 28595, "Rewards", script9670(int0, 2));
    var int1 = 0;
    if ((int0 == 1)) {
        IF_SETHIDE(0, 73793558);
        IF_SETHIDE(0, 73793576);
        IF_SETHIDE(1, 73793556);
        IF_SETHIDE(1, 73793584);
        IF_SETHIDE(1, 73793575);
        script14311(varbitplayer_4125);
    } else if ((int0 == 2)) {
        int1 = script6034();
        IF_SETCOLOUR(script9054(int1, 100, 6610020, 14443620), 73793607);
        IF_SETCOLOUR(script9054(int1, 200, 6610020, 14443620), 73793610);
        IF_SETCOLOUR(script9054(int1, 300, 6610020, 14443620), 73793613);
        IF_SETCOLOUR(script9054(int1, 400, 6610020, 14443620), 73793616);
        IF_SETCOLOUR(script9054(int1, 500, 6610020, 14443620), 73793619);
        IF_SETCOLOUR(script9054(int1, 594, 6610020, 14443620), 73793622);
        IF_SETHIDE(1, 73793558);
        IF_SETHIDE(1, 73793576);
        IF_SETHIDE(1, 73793575);
        IF_SETHIDE(0, 73793556);
        IF_SETHIDE(0, 73793584);
        IF_SETHIDE(0, 73793538);
        IF_SETTEXT("", 73793537);
    };
    return;
}