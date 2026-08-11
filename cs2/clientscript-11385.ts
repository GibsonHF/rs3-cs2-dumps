//
function script11385(): void {
    if ((varbitclient_27911 < 100)) {
        varbitclient_27911 = (varbitclient_27911 + 1);
        return;
    };
    varbitclient_27911 = 0;
    IF_SETHIDE(true, comp(1620, 5));  // trh54_guaranteed_quality:yellow_particles
    IF_SETHIDE(true, comp(1620, 7));  // trh54_guaranteed_quality:orange_particles
    IF_SETHIDE(true, comp(1620, 12));  // trh54_guaranteed_quality:red_particles
    IF_SETONTIMER(callback(), comp(1620, 20));  // trh54_guaranteed_quality:content_layer
    return;
}