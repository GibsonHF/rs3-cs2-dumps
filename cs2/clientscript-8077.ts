//
function script8077(int0: unknown_int, int1: int): void {
    var int2 = comp(-1, 65535);
    var int3 = script734(int1);
    if ((int0 == -1)) {
        IF_SETHIDE(int3, script8875(0));
        IF_SETHIDE(int3, script8875(1));
        IF_SETHIDE(int3, script8875(2));
        IF_SETHIDE(int3, script8875(3));
        IF_SETHIDE(int3, script8875(4));
        IF_SETHIDE(int3, script8875(5));
        IF_SETHIDE(int3, script8875(7));
        IF_SETHIDE(int3, script8875(6));
    } else {
        int2 = script8875(int0);
        if ((int2 != comp(-1, 65535))) {
            IF_SETHIDE(int3, int2);
        };
    };
    return;
}