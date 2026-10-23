//
function script15561(): void {
    var int0 = comp(1420, 175);  // acc_create:mobile_mute_audio_cross
    if ((CLIENTOPTION_GET(23) > 0)) {
        IF_SETHIDE(true, int0);
    } else {
        IF_SETHIDE(false, int0);
    };
    return;
}