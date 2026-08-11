//
function script15610(): void {
    script3097();
    IF_SETONTIMER(callback(script15611), comp(906, 8));  // lobbyscreen:pending_transaction_timer
    SHOP_APPLYPENDINGTRANSACTIONS();
    return;
}