//
function script6439(): void {
    SOUND_VORBIS_VOLUME(5262 as vorbis, 1, 0, 100);
    varclient_1968 = MODULO((MAX(0, varclient_1968) + 1), 2);
    script6443(0, 0, 10, 200, 1, 1);
    if ((CC_FIND(comp(1311, 343), 0) == 1)) {
        cc_setparam(6373, varclient_1968);
    };
    return;
}