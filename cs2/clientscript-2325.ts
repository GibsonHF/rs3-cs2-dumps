//
function script2325(): void {
    if (((varclient_766 == 1) || (varclient_766 == 2))) {
        printmessage("You can't do that right now.");
        return;
    };
    SOUND_SYNTH(35680, 1, 0);
    if (((IF_GETX(20054023) >= IF_GETX(20054035)) && (IF_GETX(20054023) < (IF_GETX(20054035) + IF_GETWIDTH(20054035))))) {
        varclient_765 = 1;
        script2326(varclient_761);
    };
    if (((IF_GETX(20054024) >= IF_GETX(20054035)) && (IF_GETX(20054024) < (IF_GETX(20054035) + IF_GETWIDTH(20054035))))) {
        varclient_765 = 2;
        script2326(varclient_762);
    };
    if (((IF_GETX(20054025) >= IF_GETX(20054035)) && (IF_GETX(20054025) < (IF_GETX(20054035) + IF_GETWIDTH(20054035))))) {
        varclient_765 = 3;
        script2326(varclient_763);
    };
    if (((IF_GETX(20054026) >= IF_GETX(20054035)) && (IF_GETX(20054026) < (IF_GETX(20054035) + IF_GETWIDTH(20054035))))) {
        varclient_765 = 4;
        script2326(varclient_764);
    };
    varclient_766 = 1;
    IF_SETONTIMER(callback(script2328, -2147483645), 20054027);
    return;
}