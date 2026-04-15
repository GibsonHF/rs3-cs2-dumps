//
function script6260(int0: component): void {
    var int1 = comp(-1, 65535);
    if ((WORLDLIST_FETCH() == 1)) {
        int1 = script3099(int0);
        varclient_6542 = CLIENTCLOCK();
        IF_SETONTIMER(callback(), int1);
        script125(int0, varclient_1036);
    };
    return;
}