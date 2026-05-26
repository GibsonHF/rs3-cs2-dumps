//
function script5279(int0: number): void {
    var int1 = script734(varbitplayer_7088);
    IF_SETHIDE(int1, 25427985);
    IF_SETHIDE(int1, 25427998);
    IF_SETHIDE(int1, 25428011);
    IF_SETHIDE(int1, 25428024);
    IF_SETHIDE(int1, 25428037);
    IF_SETHIDE(int1, 25428070);
    IF_SETHIDE(int1, 25428084);
    IF_SETHIDE(int1, 25428098);
    IF_SETHIDE(int1, 25428111);
    IF_SETHIDE(int1, 25428126);
    IF_SETHIDE(int1, 25428140);
    IF_SETHIDE(int1, 25428154);
    IF_SETHIDE(int1, 25428168);
    IF_SETHIDE(int1, 25428052);
    if ((int1 == 1)) {
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
        IF_SETONOP(callback(), 25428067);
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