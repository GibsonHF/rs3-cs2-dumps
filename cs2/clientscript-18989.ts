//
function script18989(): unknown_int {
    if ((script18991() == 1)) {
        if ((varbitplayer_55644 == 7)) {
            return 1;
        };
        script12478(`24/25 bits set, but cat13 is not unlocked, state: ${inttostring(varbitplayer_55644, 10)}, correcting`);
        script19001();
        return 1;
    };
    if ((varbitplayer_55644 == 7)) {
        script12478(`${inttostring(BITCOUNT(GETBIT_RANGE(varplayer_11751, 0, 24)), 10)}/25 bits sets, but cat13 is UNLOCKED`);
    };
    return 0;
}