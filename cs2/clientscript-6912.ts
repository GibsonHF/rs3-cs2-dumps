//
function script6912(int0: number): void {
    if ((varclient_545 == true)) {
        IF_SETHIDE(false, int0);
        IF_SETHIDE(false, comp(1367, 73));  // duel3_options:stake_showinv
        IF_SETHIDE(false, comp(1367, 74));  // duel3_options:stake_showworn
        IF_SETSIZE(69, 24, 1, 1, comp(1367, 72));  // duel3_options:output
    } else {
        IF_SETHIDE(true, int0);
        IF_SETHIDE(true, comp(1367, 73));  // duel3_options:stake_showinv
        IF_SETHIDE(true, comp(1367, 74));  // duel3_options:stake_showworn
        IF_SETSIZE(0, 24, 1, 1, comp(1367, 72));  // duel3_options:output
    };
    return;
}