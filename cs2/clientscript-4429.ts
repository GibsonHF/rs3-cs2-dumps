//[clientscript,clan_invite_button]
function script4429(int0: number, int1: number, int2: number): void {
    var int3 = 72745121;
    if ((int2 == 94371845)) {
        int3 = 94371971;
    } else if ((int2 == 96403508)) {
        int3 = 94371971;
    };
    IF_SETHIDE(0, int3);
    stack(6244);
    stack(int1);
    IF_SETGRAPHIC();
    IF_SETONTARGETLEAVE(callback(script4430, int0, int1, int2), int0);
    return;
}