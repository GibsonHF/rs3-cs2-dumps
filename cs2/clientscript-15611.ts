//
function script15611(): void {
    switch (TOGGLEBIT()) {
        case 2: {
            return;
        }
    };
    IF_SETONTIMER(callback(), comp(906, 8));  // lobbyscreen:pending_transaction_timer
    script3097();
    return;
}