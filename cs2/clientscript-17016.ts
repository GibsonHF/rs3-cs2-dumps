//
function script17016(): string {
    var int0 = MODULO((1440 - varbitplayer_20736), 60);
    if ((int0 < 5)) {
        return "A flash event is currently active in the wilderness.";
    };
    return "A flash event will start at the beginning of the next hour.";
}