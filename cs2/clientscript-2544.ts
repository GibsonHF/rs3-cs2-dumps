//
function script2544(): int {
    var int0 = 20;
    var int1 = 0;
    if (((varbitplayer_43240 <= varbitplayer_43241) || (varbitplayer_43240 < 10))) {
        int1 = varbitplayer_43240;
    } else {
        int1 = MAX(SCALE(varbitplayer_43240, 100, int0), varbitplayer_43241);
    };
    return int1;
}