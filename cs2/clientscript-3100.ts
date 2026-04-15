//
function script3100(int0: unknown_int): void {
    var int1 = LOBBY_ENTERGAMEREPLY();
    if ((int1 == -3)) {
        return;
    };
    if (((int1 == 21) && (int0 == 13))) {
        script1873();
    } else if ((int0 == 13)) {
        script3097();
    };
    return;
}