//
function script11563(): void {
    if ((varbitplayer_28194 < 60)) {
        varbitplayer_28194 = (varbitplayer_28194 + 1);
    } else {
        IF_SETHIDE(1, 106889279);
        IF_SETHIDE(1, 106889280);
        IF_SETHIDE(1, 106889281);
        IF_SETHIDE(1, 106889282);
        IF_SETONTIMER(callback(), 106889282);
    };
    return;
}