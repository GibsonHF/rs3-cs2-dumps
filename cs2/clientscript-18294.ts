//
function script18294(int0: struct): unknown_int {
    if ((int0 == -1 as struct)) {
        return 0;
    };
    if ((script18287(int0) == 1)) {
        return 0;
    };
    if ((script17694(int0) > CLIENTCLOCK())) {
        return 0;
    };
    return 1;
}