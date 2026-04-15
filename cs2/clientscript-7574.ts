//
function script7574(): void {
    var int0 = IF_GETTRANS(comp(163, 1));
    if ((int0 <= 30)) {
        IF_SETTRANS(20, comp(163, 1));
        IF_SETONTIMER(callback(), comp(163, 2));
        IF_SETHIDE(0, 10682368);
    } else {
        IF_SETTRANS(--int0, comp(163, 1));
    };
    return;
}