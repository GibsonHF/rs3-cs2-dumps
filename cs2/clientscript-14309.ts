//
function script14309(int0: int): void {
    script13972(comp(1126, 64), comp(1126, 65), 28595 as struct, "Noticeboard", script9670(int0, 1));
    script13972(comp(1126, 67), comp(1126, 68), 28595 as struct, "Rewards", script9670(int0, 2));
    var int1 = 0;
    if ((int0 == 1)) {
        IF_SETHIDE(false, comp(1126, 22));
        IF_SETHIDE(false, comp(1126, 40));
        IF_SETHIDE(true, comp(1126, 20));
        IF_SETHIDE(true, comp(1126, 48));
        IF_SETHIDE(true, comp(1126, 39));
        script14311(varbitplayer_4125);
    } else if ((int0 == 2)) {
        int1 = script6034();
        IF_SETCOLOUR(script9054(int1, 100, 6610020, 14443620), comp(1126, 71));
        IF_SETCOLOUR(script9054(int1, 200, 6610020, 14443620), comp(1126, 74));
        IF_SETCOLOUR(script9054(int1, 300, 6610020, 14443620), comp(1126, 77));
        IF_SETCOLOUR(script9054(int1, 400, 6610020, 14443620), comp(1126, 80));
        IF_SETCOLOUR(script9054(int1, 500, 6610020, 14443620), comp(1126, 83));
        IF_SETCOLOUR(script9054(int1, 594, 6610020, 14443620), comp(1126, 86));
        IF_SETHIDE(true, comp(1126, 22));
        IF_SETHIDE(true, comp(1126, 40));
        IF_SETHIDE(true, comp(1126, 39));
        IF_SETHIDE(false, comp(1126, 20));
        IF_SETHIDE(false, comp(1126, 48));
        IF_SETHIDE(false, comp(1126, 2));
        IF_SETTEXT("", comp(1126, 1));
    };
    return;
}