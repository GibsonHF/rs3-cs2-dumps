//[proc,lobby_hop_abort]
function script1873(): void {
    if ((varclient_200 > 0)) {
        if ((varclient_1745 == true)) {
            VIDEO_ADVERT_FORCE_REMOVE();
            varclient_1745 = false;
        };
        script3064(true);
        IF_SETONTIMER(callback(), comp(906, 81));
        script3097();
    };
    return;
}