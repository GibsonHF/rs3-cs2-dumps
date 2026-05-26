//
function script407(): void {
    if ((varclient_1362 < 1)) {
        return;
    };
    var int0 = ((varclient_1362 * 6) / 10);
    var int1 = 0;
    var int2 = 0;
    var string0 = "";
    if ((int0 < 60)) {
        int1 = int0;
    } else {
        int1 = MODULO(int0, 60);
        int2 = (int0 / 60);
    };
    if ((int1 < 10)) {
        string0 = strconcat("0", inttostring(int1, 10));
        if (((int2 == 0) && (varclient_1389 == 0))) {
            varclient_1389 = 1;
            if ((varbitplayer_5387 == 1)) {
                SOUND_VORBIS_VOLUME(3434 as vorbis, 1, 0, 255);
            };
        };
    } else {
        string0 = inttostring(int1, 10);
    };
    IF_SETTEXT(`Turn Time Left<br>${inttostring(int2, 10)}:${string0}`, comp(1010, 20));
    IF_SETTEXT(`${inttostring(int2, 10)}:${string0}`, comp(1013, 24));
    return;
}