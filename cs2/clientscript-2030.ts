//
function script2030(int0: component): void {
    if ((TESTBIT(varplayer_2105, 26) == 1)) {
        IF_SETMODELANGLE(0, 0, 512, 1024, 0, 1000, int0);
    } else if ((TESTBIT(varplayer_2105, 27) == 1)) {
        IF_SETMODELANGLE(0, 0, 512, 1536, 0, 1000, int0);
    } else if ((TESTBIT(varplayer_2105, 28) == 1)) {
        IF_SETMODELANGLE(0, 0, 512, 0, 0, 1000, int0);
    };
    return;
}