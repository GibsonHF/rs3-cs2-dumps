//
function script10411(int0: component): void {
    if (((varclient_4241 == 2) && (varclient_4242 != 1))) {
        IF_SETTEXT("", int0);
        return;
    };
    var int1 = 0;
    var int2 = 0;
    [int1, int2] = script8461(comp(-1, 65535));
    if ((varbitplayer_27168 == 1)) {
        IF_SETTEXT(`Main-Hand Damage: ${inttostring(int2, 10)}`, int0);
    } else {
        IF_SETTEXT(`Ability Damage: ${inttostring(int1, 10)}`, int0);
    };
    return;
}