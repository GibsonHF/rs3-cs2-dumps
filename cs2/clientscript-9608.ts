//
function script9608(int0: int): void {
    if ((int0 == 0)) {
        script9609(script9051(varplayer_7987));
        IF_SETONTIMER(callback(), comp(419, 3));
    } else {
        IF_SETONTIMER(callback(script9608, (int0 - 1)), comp(419, 3));
    };
    return;
}