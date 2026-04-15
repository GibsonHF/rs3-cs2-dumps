//
function script17017(): [int, int] {
    var int0 = MODULO((1440 - varbitplayer_20736), 60);
    if ((int0 < 5)) {
        return [0, (5 - int0)];
    };
    return [2, (60 - int0)];
}