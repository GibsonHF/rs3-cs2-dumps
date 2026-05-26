//
function script18402(): number {
    if ((KEYHELD_CTRL() == 1)) {
        return 0;
    };
    if ((KEYHELD_ALT() == 1)) {
        return 0;
    };
    if ((KEYHELD_SHIFT() == 1)) {
        return 1;
    };
    return 0;
}