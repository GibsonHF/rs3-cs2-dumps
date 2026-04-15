//
function script18017(int0: int): int {
    if ((script14335(varplayer_11339) == 1)) {
        if ((int0 <= 99)) {
            return int0;
        };
        if ((int0 == 100)) {
            return script18018(1);
        };
        if ((int0 <= 121)) {
            return (int0 - 1);
        };
        if ((int0 == 122)) {
            return script18018(2);
        };
    } else {
        if ((int0 <= 120)) {
            return int0;
        };
        if ((int0 == 121)) {
            return script18018(2);
        };
    };
    script12478("Drawing more tiles than expected.");
    return int0;
}