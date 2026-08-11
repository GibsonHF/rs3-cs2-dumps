//
function script7182(int0: number, string0: string): void {
    if ((MODULO(CLIENTCLOCK(), 2) == 0)) {
        script7183(string0, MAX(0, MIN(STRING_LENGTH(string0), int0)));
        IF_SETONTIMER(callback(script7182, string0, MAX(0, MIN(STRING_LENGTH(string0), (int0 + 1)))), comp(1372, 0));  // cutscene_subtitle_panel:main_layer
    };
    script7191();
    return;
}