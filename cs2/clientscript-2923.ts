//[clientscript,settings_init]
function script2923(): void {
    if ((script19316() == true)) {
        IF_SETONCLANSETTINGSTRANSMIT(callback(script2929), 23920646);
    };
    IF_SETSIZE(0, 0, 1, 1, comp(365, 6));
    varclient_6501 = 0;
    varclient_7769 = "";
    IF_SETTEXT("", comp(365, 2));
    unk10992("Search...", 10132122, 0, 23920642);
    if ((script6431() == true)) {
        if ((CLIENTTYPE() == 8)) {
            IF_SETHIDE(true, comp(365, 1));
            IF_SETSIZE(220, 0, 0, 1, comp(365, 3));
        } else {
            IF_SETPOSITION(0, 0, 0, 0, comp(365, 1));
            IF_SETPOSITION(0, 0, 0, 2, comp(365, 3));
        };
    } else {
        IF_SETPOSITION(0, 0, 0, 0, comp(365, 1));
        IF_SETPOSITION(0, 0, 0, 2, comp(365, 3));
    };
    script2957(script20385(), script20386(), 1);
    return;
}