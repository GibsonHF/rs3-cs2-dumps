//[clientscript,clan_invite_button]
function script4429(int0: number, int1: number, int2: number): void {
    var int3 = comp(1110, 161);
    if ((int2 == 94371845)) {
        int3 = comp(1440, 131);
    } else if ((int2 == 96403508)) {
        int3 = comp(1440, 131);
    };
    IF_SETHIDE(false, int3);
    IF_SETGRAPHIC(6244 as graphic, int1);
    IF_SETONTARGETLEAVE(callback(script4430, int0, int1, int2), int0);
    return;
}