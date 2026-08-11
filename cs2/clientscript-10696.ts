//
function script10696(): void {
    if ((varbitplayer_25550 == 0)) {
        IF_SETHIDE(false, comp(1545, 0));  // divdnd_overlay:memories1
        IF_SETHIDE(false, comp(1545, 2));  // divdnd_overlay:memories2
        IF_SETHIDE(true, comp(1545, 4));  // divdnd_overlay:robots1
        IF_SETHIDE(true, comp(1545, 7));  // divdnd_overlay:robots2
    } else {
        IF_SETHIDE(true, comp(1545, 0));  // divdnd_overlay:memories1
        IF_SETHIDE(true, comp(1545, 2));  // divdnd_overlay:memories2
        IF_SETHIDE(false, comp(1545, 4));  // divdnd_overlay:robots1
        IF_SETHIDE(false, comp(1545, 7));  // divdnd_overlay:robots2
    };
    return;
}