//[clientscript,graphics_options_setwindowmode]
function script2698(int0: int, int1: int, int2: int, int3: unknown_int): void {
    if ((int0 == GETWINDOWMODE())) {
        return;
    };
    if ((AUTOSETUP_GETLEVEL() != 0)) {
        AUTOSETUP_SETCUSTOM();
    };
    if ((int0 != 3)) {
        var int0 = 2;
        SETWINDOWMODE(2);
        stack(2);
        SETDEFAULTWINDOWMODE();
        if (((varclient_4108 != 5) && (varclient_4108 != -1))) {
            script709(varclient_4108, int0);
            script8885(varclient_4108);
        };
        script2596(2, int1, int2, int3);
        varclient_994 = 2;
        AUTOSETUP_SETCUSTOM();
        return;
    };
    if (((FULLSCREEN_MODECOUNT() > varclient_178) && (FULLSCREEN_ENTER(FULLSCREEN_GETMODE(varclient_178)) == 1))) {
        script2596(int0, int1, int2, int3);
        return;
    };
    if ((int3 == 1)) {
        printmessage("Unable to enter fullscreen mode at that resolution.");
    };
    script2596(int0, int1, int2, int3);
    return;
}