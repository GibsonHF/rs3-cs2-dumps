//
function script1137(): void {
    if ((varbitplayer_17461 <= 0)) {
        script13960(83623979, 28693, 1, 0);
        script13960(83624001, 28693, 1, 0);
        script13960(83624023, 28693, 1, 0);
    } else {
        script13960(83623979, 28693, 0, 0);
        script13960(83624001, 28693, 0, 0);
        script13960(83624023, 28693, 0, 0);
    };
    if ((varbitplayer_17422 <= 0)) {
        script13960(83623971, 28693, 1, 0);
    } else {
        script13960(83623971, 28693, 0, 0);
    };
    if (((varbitplayer_17420 < 1) || (varbitplayer_17461 > 10))) {
        IF_SETHIDE(0, 83624042);
    } else {
        IF_SETHIDE(1, 83624042);
    };
    return;
}