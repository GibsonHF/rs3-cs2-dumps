//
function script20375(int0: unknown_int): [obj, int] {
    var int1 = script15513();
    if ((int1 == 47942 as struct)) {
        if ((varbitplayer_60008 == 1)) {
            return script20365(int0);
        };
        return script20364(int0);
    };
    if ((int1 == 45877 as struct)) {
        if ((varbitplayer_60008 == 1)) {
            return script20368(int0);
        };
        return script20367(int0);
    };
    if ((int1 == 11563 as struct)) {
        return script20366(int0);
    };
    script12478("Unknown promotion when finding milestone reward for halloween reward track");
    return [-1 as obj, 0];
}