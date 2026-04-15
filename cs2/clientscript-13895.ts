//
function script13895(): void {
    if ((varclient_6343 == varbitplayer_38842)) {
        return;
    };
    varclient_6343 = varbitplayer_38842;
    var int0 = 0;
    var int1 = ENUM_GETOUTPUTCOUNT(7717 as cs2enum);
    while ((int0 < int1)) {
        script8268(enum_getvalue(0, 0, 7717 as cs2enum, int0), 0);
        int0 = (int0 + 1);
    };
    if ((varbitplayer_38842 == 1)) {
        script8884(14);
    } else {
        script8884(8);
    };
    return;
}