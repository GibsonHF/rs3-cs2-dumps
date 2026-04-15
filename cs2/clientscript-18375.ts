//
function script18375(int0: unknown_int): [obj, int] {
    var int1 = script19968();
    if ((int1 == 47489 as struct)) {
        return script20401(int0);
    };
    if ((int1 == 47942 as struct)) {
        return script20403(int0);
    };
    if ((int1 == 11563 as struct)) {
        return script20402(int0);
    };
    if ((int1 == 51627 as struct)) {
        if ((varbitplayer_60261 == 1)) {
            return script20405(int0);
        };
        return script20404(int0);
    };
    if ((int1 == 38119 as struct)) {
        if ((varbitplayer_60261 == 1)) {
            return script20407(int0);
        };
        return script20406(int0);
    };
    script12478(`Unknown active promo when trying to get Christmas track rewards. Promo ID = ${inttostring(struct_getparam(int1, 8202), 10)}.`);
    return script20401(int0);
}