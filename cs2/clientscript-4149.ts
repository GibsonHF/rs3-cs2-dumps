//
function script4149(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = script18541(int0, int1);
    if (((int4 != comp(-1, 65535)) && (script15721() == 0))) {
        script7794(int4, 28303);
        IF_SETONTIMER(callback(script18551, -2147483645, CLIENTCLOCK()), int4);
    };
    var int5 = -1;
    var int6 = -1;
    [int5, int6] = script11773(script11786(int2), script7980(int2));
    if ((int5 == -1)) {
        if ((IF_FIND(int2) == 1)) {
            CC_SETOPKEYIGNOREHELD(int3);
            CC_SETOPKEYRATE(int3, 0, 0);
        };
        return;
    } else if (((int6 != 10) && (int6 != 14))) {
        if ((IF_FIND(int2) == 1)) {
            CC_SETOPKEYIGNOREHELD(int3);
            CC_SETOPKEYRATE(int3, 0, 0);
        };
        return;
    };
    return;
}