//[clientscript,clansettings_onload]
function script4289(): void {
    if ((varclient_1516 == -1)) {
        varclient_1516 = 0;
    };
    if ((unk10986(0) == 1)) {
        script4291();
    } else {
        IF_SETONCLANSETTINGSTRANSMIT(callback(script4290), 71827458);
        return;
    };
    script4295();
    return;
}