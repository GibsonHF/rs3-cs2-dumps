//
function script4681(): void {
    var int0 = BITCOUNT(varplayer_2128);
    if ((int0 == 26)) {
        IF_SETTEXT("Final wreck to loot!", comp(314, 5));
    } else {
        IF_SETTEXT(`Wrecks looted: ${inttostring(int0, 10)}/27`, comp(314, 5));
    };
    return;
}