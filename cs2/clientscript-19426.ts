//
function script19426(int0: number): void {
    script19464();
    if ((unk10993(1) == 1)) {
        if ((unk10986(1) == 1)) {
            IF_SETONTIMER(callback(script19428), comp(1302, 1));
            script19452();
            script19455();
        } else {
            if (LONG_BRANCH_NOT(varplayer_11944, -1n)) {
                IF_SETONTIMER(callback(script19427, int0), comp(1302, 1));
            };
            script19453();
            script19456();
        };
    } else {
        if (LONG_BRANCH_NOT(varplayer_11944, -1n)) {
            IF_SETONTIMER(callback(script19427, int0), comp(1302, 1));
        };
        script19453();
        script19456();
    };
    return;
}