//[proc,login_hop_abort]
function script3235(): void {
    var int0 = comp(744, 134);
    if ((varclient_200 > 0)) {
        IF_SETONCLICK(callback(script2944), int0);
        IF_SETONTIMER(callback(), int0);
        LOGIN_RESETREPLY();
        script2954(1);
    };
    return;
}