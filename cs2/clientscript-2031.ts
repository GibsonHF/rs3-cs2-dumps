//
function script2031(int0: component): void {
    if ((TESTBIT(varplayer_2105, 29) == 1)) {
        IF_SETMODELANGLE(0, 0, 512, 1024, 0, 1000, int0);
    } else if ((TESTBIT(varplayer_2105, 30) == 1)) {
        IF_SETMODELANGLE(0, 0, 512, 1536, 0, 1000, int0);
    } else if ((TESTBIT(varplayer_2105, 31) == 1)) {
        IF_SETMODELANGLE(0, 0, 512, 0, 0, 1000, int0);
    };
    return;
}