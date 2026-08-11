//
function script20630(int0: number): void {
    if ((script20612() == 0)) {
        IF_SETHIDE(false, comp(1498, 8));  // marketplace_store:unavailable_layer
        script1106();
        script1115();
        return;
    };
    IF_SETHIDE(true, comp(1498, 8));  // marketplace_store:unavailable_layer
    varclient_8376 = int0;
    script20633(int0);
    return;
}