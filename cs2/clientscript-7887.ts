//
function script7887(int0: int): void {
    if ((CLIENTCLOCK() < int0)) {
        return;
    };
    varclient_3684 = 1;
    LOBBY_LEAVELOBBY();
    script1174(9);
    IF_SETONTIMER(callback(), comp(1420, 10));
    return;
}