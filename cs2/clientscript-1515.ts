//[clientscript,player_kit_body_colourbutton]
function script1515(int0: unknown_int, int1: int, int2: unknown_int): void {
    if ((int0 != 1)) {
        return;
    };
    if ((int2 == 1)) {
        BASECOLOUR(1, int1);
        varclient_1016 = int1;
    } else if ((int2 == 2)) {
        BASECOLOUR(2, int1);
        varclient_1017 = int1;
    };
    script1513();
    return;
}