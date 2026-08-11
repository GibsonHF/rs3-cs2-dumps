//
function script2354(): void {
    switch (varbitplayer_16464) {
        case 1: {
            IF_SETHIDE(true, comp(906, 148));  // lobbyscreen:email_validation
            IF_SETHIDE(true, comp(906, 99));  // lobbyscreen:input
            IF_SETONVARTRANSMIT(callback(), comp(906, 0));  // lobbyscreen:base
            break;
        }
        case 2: {
            script5940();
            break;
        }
        default: {
            return;
        }
    };
    return;
}