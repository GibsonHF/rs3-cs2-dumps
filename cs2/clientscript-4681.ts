//
function script4681(): void {
    var int0 = BITCOUNT(varplayer_2128);
    if ((int0 == 26)) {
        IF_SETTEXT("Final wreck to loot!", 20578309);
    } else {
        IF_SETTEXT(`Wrecks looted: ${inttostring(int0, 10)}/27`, 20578309);
    };
    return;
}