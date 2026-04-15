//
function script2780(int0: int, int1: component): void {
    if ((int0 > 250)) {
        IF_SETONTIMER(callback(), int1);
        IF_SETTEXT("", int1);
        return;
    };
    if ((varplayer_3591 == 1)) {
        IF_SETTEXT("There are not enough players on each team (5v5) to reward gold tickets; only silver tickets", int1);
    } else {
        IF_SETTEXT("There are enough players to award Gold Tickets", int1);
    };
    IF_SETONTIMER(callback(script2780, (int0 + 1), int1), int1);
    return;
}