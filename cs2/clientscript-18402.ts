//
function script18402(): number {
    if ((KEYHELD_CTRL() == true)) {
        return 0;
    };
    if ((KEYHELD_ALT() == true)) {
        return 0;
    };
    if ((KEYHELD_SHIFT() == true)) {
        return 1;
    };
    return 0;
}