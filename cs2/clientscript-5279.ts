//
function script5279(int0: number): void {
    var int1 = script734(varbitplayer_7088);
    IF_SETHIDE(int1, comp(388, 17));
    IF_SETHIDE(int1, comp(388, 30));
    IF_SETHIDE(int1, comp(388, 43));
    IF_SETHIDE(int1, comp(388, 56));
    IF_SETHIDE(int1, comp(388, 69));
    IF_SETHIDE(int1, comp(388, 102));
    IF_SETHIDE(int1, comp(388, 116));
    IF_SETHIDE(int1, comp(388, 130));
    IF_SETHIDE(int1, comp(388, 143));
    IF_SETHIDE(int1, comp(388, 158));
    IF_SETHIDE(int1, comp(388, 172));
    IF_SETHIDE(int1, comp(388, 186));
    IF_SETHIDE(int1, comp(388, 200));
    IF_SETHIDE(int1, comp(388, 84));
    if ((int1 == true)) {
        IF_SETTEXT("Theatre Options", int0);
        IF_SETONOP(callback(script5293, -2147483644, 1, 0), comp(388, 99));
        IF_SETONOP(callback(script5293, -2147483644, 2, 0), comp(388, 112));
        IF_SETONOP(callback(script5293, -2147483644, 3, 0), comp(388, 126));
        IF_SETONOP(callback(script5293, -2147483644, 4, 0), comp(388, 140));
        IF_SETONOP(callback(script5293, -2147483644, 5, 0), comp(388, 154));
        IF_SETONOP(callback(script5293, -2147483644, 6, 0), comp(388, 168));
        IF_SETONOP(callback(script5293, -2147483644, 7, 0), comp(388, 182));
        IF_SETONOP(callback(script5293, -2147483644, 8, 0), comp(388, 196));
        IF_SETONOP(callback(script5293, -2147483644, 1, 1), comp(388, 14));
        IF_SETONOP(callback(script5293, -2147483644, 2, 1), comp(388, 27));
        IF_SETONOP(callback(script5293, -2147483644, 3, 1), comp(388, 40));
        IF_SETONOP(callback(script5293, -2147483644, 4, 1), comp(388, 53));
        IF_SETONOP(callback(script5293, -2147483644, 5, 1), comp(388, 66));
    } else {
        if (((varbitplayer_6355 == 0) || (varbitplayer_6364 == 0))) {
            IF_SETTEXT("Waiting on technician to select options...", int0);
        } else {
            IF_SETTEXT("Waiting on technician to unlock theatre...", int0);
        };
        IF_SETONOP(callback(), comp(388, 99));
        IF_SETONOP(callback(), comp(388, 112));
        IF_SETONOP(callback(), comp(388, 126));
        IF_SETONOP(callback(), comp(388, 140));
        IF_SETONOP(callback(), comp(388, 154));
        IF_SETONOP(callback(), comp(388, 168));
        IF_SETONOP(callback(), comp(388, 182));
        IF_SETONOP(callback(), comp(388, 196));
        IF_SETONOP(callback(), comp(388, 14));
        IF_SETONOP(callback(), comp(388, 27));
        IF_SETONOP(callback(), comp(388, 40));
        IF_SETONOP(callback(), comp(388, 53));
        IF_SETONOP(callback(), comp(388, 66));
    };
    script4532(int0);
    return;
}