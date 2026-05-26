//
function script393(): void {
    IF_SETHIDE(true, comp(1010, 8));
    IF_SETTEXT("Command Options", comp(1010, 11));
    IF_SETPOSITION(0, 133, 0, 0, comp(1010, 29));
    IF_SETSIZE(190, 116, 0, 0, comp(1010, 29));
    IF_SETTEXT("Comm Orb Recharging", comp(1010, 30));
    IF_SETPOSITION(0, 133, 0, 0, comp(1010, 30));
    IF_SETSIZE(190, 116, 0, 0, comp(1010, 30));
    IF_SETTEXTALIGN(1, 1, 0, comp(1010, 30));
    IF_SETPOSITION(30, 152, 0, 0, comp(1010, 9));
    IF_SETTEXT("Recharge", comp(1010, 78));
    IF_SETOP(1, "Recharge", comp(1010, 78));
    IF_SETHIDE(true, comp(1010, 25));
    IF_SETHIDE(true, comp(1019, 3));
    IF_SETTEXT("Retreat", comp(1019, 0));
    IF_SETHIDE(true, comp(1019, 1));
    IF_SETTEXT("Retreat", comp(1019, 40));
    IF_SETOP(1, "Retreat", comp(1019, 37));
    IF_SETPOSITION(30, 0, 0, 1, comp(1019, 5));
    IF_SETPOSITION(0, 50, 0, 1, comp(1019, 7));
    IF_SETTEXT("Force Savant to teleport you to safety and order your remaining troops to fall back.", comp(1019, 7));
    return;
}