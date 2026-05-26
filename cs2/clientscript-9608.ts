//
function script9608(int0: number): void {
    if ((int0 == 0)) {
        script9609(script9051(varplayer_7987));
        IF_SETONTIMER(callback(), 27459587);
    } else {
        IF_SETONTIMER(callback(script9608, (int0 - 1)), 27459587);
    };
    return;
}