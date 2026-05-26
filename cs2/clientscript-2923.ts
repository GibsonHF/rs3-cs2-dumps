//[clientscript,settings_init]
function script2923(): void {
    if ((script19316() == 1)) {
        IF_SETONCLANSETTINGSTRANSMIT(callback(script2929), 23920646);
    };
    IF_SETSIZE(0, 0, 1, 1, 23920646);
    varclient_6501 = 0;
    varclient_7769 = "";
    IF_SETTEXT("", 23920642);
    unk10992("Search...", -1701144064, 255, 23920642);
    if ((script6431() == 1)) {
        if ((CLIENTTYPE() == 8)) {
            IF_SETHIDE(1, 23920641);
            IF_SETSIZE(220, 0, 0, 1, 23920643);
        } else {
            IF_SETPOSITION(0, 0, 0, 0, 23920641);
            IF_SETPOSITION(0, 0, 0, 2, 23920643);
        };
    } else {
        IF_SETPOSITION(0, 0, 0, 0, 23920641);
        IF_SETPOSITION(0, 0, 0, 2, 23920643);
    };
    script2957(script20385(), script20386(), 1);
    return;
}