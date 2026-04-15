//
function script193(int0: unknown_int): void {
    varclient_3474 = 1;
    if ((((script8699(8) != 1) && (varbitplayer_27169 == 0)) && (varbitplayer_38842 == 0))) {
        if ((((int0 == 0) && (varplayer_3812 <= 0)) && (varbitplayer_19923 <= 0))) {
            IF_SETONVARTRANSMIT(callback(script192, 3812, 1), comp(1477, 26));
            return;
        };
        IF_SETONVARTRANSMIT(callback(), comp(1477, 26));
        if ((varclient_6300 == 1)) {
            if ((script15532(0) == 1)) {
                script8702(11, 8);
            } else {
                script8702(14, 8);
            };
        } else if ((varplayer_3812 != 2)) {
            script8702(15, 8);
        } else if ((script15532(0) == 1)) {
            script8702(11, 8);
        } else {
            script8702(1, 8);
        };
    } else {
        IF_SETONVARTRANSMIT(callback(), comp(1477, 26));
    };
    script8702(8, 10);
    IF_SETONRESIZE(callback(script8882), comp(1477, 26));
    script8884(varclient_4108);
    return;
}