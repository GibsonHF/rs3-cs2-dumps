//
function script20278(): void {
    varclient_8332 = varplayer_12323;
    if ((STRING_LENGTH(varclient_8333) > 0)) {
        IF_SETTEXT(varclient_8333, 96927757);
    };
    IF_SETPARAM_INT(9340, 0, comp(1479, 20));
    CC_DELETEALL(comp(1361, 17));
    IF_SETTRANS(255, comp(1361, 14));
    IF_SETTRANS(255, comp(1361, 15));
    IF_SETTRANS(255, comp(1361, 16));
    unk10992("Search...", -1701144064, 255, 96927757);
    script20291();
    script20321();
    return;
}