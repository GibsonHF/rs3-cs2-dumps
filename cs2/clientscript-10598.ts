//
function script10598(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = script10599(varbitplayer_25158);
    var int5 = script10599(varbitplayer_25159);
    if ((int4 == -1)) {
        IF_SETHIDE(1, int0);
    } else {
        IF_SETGRAPHIC(int4, int1);
        IF_SETHIDE(0, int0);
    };
    if ((int5 == -1)) {
        IF_SETHIDE(1, int2);
    } else {
        IF_SETGRAPHIC(int5, int3);
        IF_SETHIDE(0, int2);
    };
    return;
}