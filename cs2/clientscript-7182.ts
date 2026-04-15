//
function script7182(int0: int, string0: string): void {
    if ((MODULO(CLIENTCLOCK(), 2) == 0)) {
        script7183(string0, MAX(0, MIN(STRING_LENGTH(string0), int0)));
        IF_SETONTIMER(callback(script7182, string0, MAX(0, MIN(STRING_LENGTH(string0), (int0 + 1)))), comp(1372, 0));
    };
    script7191();
    return;
}