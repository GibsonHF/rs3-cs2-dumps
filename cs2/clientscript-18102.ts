//
function script18102(): void {
    var int0 = script17853();
    if ((varplayer_11339 != int0)) {
        script12478("Opening Buffs on a pass which isn't the current.");
        return;
    };
    if ((script4148() == true)) {
        script12478("Opening Buffs on an ironman account.");
        return;
    };
    script18104(int0);
    script18111(int0);
    IF_SETONVARTRANSMIT(callback(script18110, int0, 11439, 11440, 11441, 11442, 11443, 11444, 6), comp(403, 24));
    return;
}