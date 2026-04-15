//
function script18396(int0: component, int1: seq, int2: seq, int3: unknown_int, int4: int, int5: seq, int6: int): void {
    var int7 = int1;
    if (((CLIENTCLOCK() >= int6) && (int3 == 0))) {
        if ((RANDOM(2) == 0)) {
            int7 = int2;
        };
        IF_SETMODELANIM(int7, int0);
        IF_SETONTIMER(callback(script18396, int0, int1, int2, 1, (CLIENTCLOCK() + SEQLENGTH(int7)), int5, 0), int0);
    } else if (((int3 == 1) && (CLIENTCLOCK() >= int4))) {
        IF_SETMODELANIM(int5, int0);
        IF_SETONTIMER(callback(script18396, int0, int1, int2, 0, 0, int5, ((CLIENTCLOCK() + 500) + RANDOMINC(500))), int0);
    };
    return;
}