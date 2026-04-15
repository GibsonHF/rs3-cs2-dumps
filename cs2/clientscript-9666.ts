//
function script9666(): unknown_int {
    if ((TARGETMODE_ACTIVE() == 1)) {
        TARGETMODE_CANCEL();
        return 1;
    };
    return 0;
}