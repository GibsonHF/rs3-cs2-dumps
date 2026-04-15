//
function script5279(int0: component): void {
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
        IF_SETONOP(callback(script5293, -2147483644, 1, 0), 25428067);
        IF_SETONOP(callback(script5293, -2147483644, 2, 0), 25428080);
        IF_SETONOP(callback(script5293, -2147483644, 3, 0), 25428094);
        IF_SETONOP(callback(script5293, -2147483644, 4, 0), 25428108);
        IF_SETONOP(callback(script5293, -2147483644, 5, 0), 25428122);
        IF_SETONOP(callback(script5293, -2147483644, 6, 0), 25428136);
        IF_SETONOP(callback(script5293, -2147483644, 7, 0), 25428150);
        IF_SETONOP(callback(script5293, -2147483644, 8, 0), 25428164);
        IF_SETONOP(callback(script5293, -2147483644, 1, 1), 25427982);
        IF_SETONOP(callback(script5293, -2147483644, 2, 1), 25427995);
        IF_SETONOP(callback(script5293, -2147483644, 3, 1), 25428008);
        IF_SETONOP(callback(script5293, -2147483644, 4, 1), 25428021);
        IF_SETONOP(callback(script5293, -2147483644, 5, 1), 25428034);
    } else {
        if (((varbitplayer_6355 == 0) || (varbitplayer_6364 == 0))) {
            IF_SETTEXT("Waiting on technician to select options...", int0);
        } else {
            IF_SETTEXT("Waiting on technician to unlock theatre...", int0);
        };
        IF_SETONOP(callback(), comp(388, 99));
        IF_SETONOP(callback(), 25428080);
        IF_SETONOP(callback(), 25428094);
        IF_SETONOP(callback(), 25428108);
        IF_SETONOP(callback(), 25428122);
        IF_SETONOP(callback(), 25428136);
        IF_SETONOP(callback(), 25428150);
        IF_SETONOP(callback(), 25428164);
        IF_SETONOP(callback(), 25427982);
        IF_SETONOP(callback(), 25427995);
        IF_SETONOP(callback(), 25428008);
        IF_SETONOP(callback(), 25428021);
        IF_SETONOP(callback(), 25428034);
    };
    script4532(int0);
    return;
}