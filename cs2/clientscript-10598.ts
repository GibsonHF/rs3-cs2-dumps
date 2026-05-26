//
function script10598(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = script10599(varbitplayer_25158);
    var int5 = script10599(varbitplayer_25159);
    if ((int4 == -1 as graphic)) {
        IF_SETHIDE(true, int0);
    } else {
        IF_SETGRAPHIC(int4, int1);
        IF_SETHIDE(false, int0);
    };
    if ((int5 == -1 as graphic)) {
        IF_SETHIDE(true, int2);
    } else {
        IF_SETGRAPHIC(int5, int3);
        IF_SETHIDE(false, int2);
    };
    return;
}