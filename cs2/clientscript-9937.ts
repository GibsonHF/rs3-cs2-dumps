//
function script9937(int0: unknown_int): void {
    var int1 = script9941(int0);
    if ((int1 == comp(-1, 65535))) {
        return;
    };
    IF_SETONTIMER(callback(script9939, int1, int0), int1);
    return;
}