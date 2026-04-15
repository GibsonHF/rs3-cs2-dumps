//
function script17257(): unknown_int {
    var int0 = 0;
    var int1 = DEEPLINK_COUNT();
    while ((int0 < int1)) {
        if ((DEEPLINK_GET(int0) != -1)) {
            return 1;
        };
        int0 = (int0 + 1);
    };
    return 0;
}