//
function script3976(int0: int, int1: component): void {
    if ((int0 == 0)) {
        script15230(2516);
        IF_SETONOP(callback(), int1);
    };
    if ((++int0 >= 50)) {
        IF_SETONTIMER(callback(), int1);
        LOBBY_LEAVELOBBY();
    } else {
        IF_SETONTIMER(callback(script3976, int0, int1), int1);
    };
    return;
}