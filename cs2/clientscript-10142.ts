//
function script10142(int0: number): void {
    if ((varbitclient_23079 == 1)) {
        printmessage("You can't change that while your broadcast is active.");
        return;
    };
    if ((CLIENTCLOCK() > (int0 + 50))) {
        IF_SETONTIMER(callback(), comp(232, 66));  // toplevel_v2_parent_suboverlay_twitch:autosetup
        script10141(1);
    };
    return;
}