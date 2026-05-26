//
function script16801(int0: number, int1: number): void {
    var int2 = varbitplayer_51671;
    var int3 = 941;
    if ((int2 == 1)) {
        IF_SETHIDE(0, int0);
        IF_SETGRAPHIC(942, int1);
        IF_SETONCLICK(callback(script44, int1, int3), int0);
    } else {
        IF_SETHIDE(0, int0);
        IF_SETGRAPHIC(941, int1);
        int3 = 942;
        IF_SETONCLICK(callback(script44, int1, int3), int0);
    };
    return;
}