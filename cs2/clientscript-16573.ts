//
function script16573(int0: int): void {
    if ((int0 != 0)) {
        var int0 = (int0 - 1);
        IF_SETONTIMER(callback(script16573, int0), comp(485, 11));
        return;
    };
    IF_SETONTIMER(callback(script16582, 120), comp(485, 11));
    var int1 = -1;
    while ((++int1 < 5)) {
        script16201(varbitplayer_27092, 4, comp(485, 0), (25 + (int1 * 150)), (-75 - RANDOM(20)), int1, 1, 0);
    };
    return;
}