//
function script7574(): void {
    var int0 = IF_GETTRANS(10682369);
    if ((int0 <= 30)) {
        IF_SETTRANS(20, 10682369);
        IF_SETONTIMER(callback(), 10682370);
        IF_SETHIDE(0, 10682368);
    } else {
        IF_SETTRANS(--int0, 10682369);
    };
    return;
}