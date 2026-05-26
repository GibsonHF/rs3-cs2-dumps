//
function script7887(int0: number): void {
    if ((CLIENTCLOCK() < int0)) {
        return;
    };
    varclient_3684 = 1;
    LOBBY_LEAVELOBBY();
    script1174(9);
    IF_SETONTIMER(callback(), 93061130);
    return;
}