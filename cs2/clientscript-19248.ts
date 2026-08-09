//
function script19248(): void {
    var int0 = script10495(2);
    var int1 = script10495(21);
    IF_BUTTON_SETTOGGLED(0, comp(1289, 19));
    IF_BUTTON_SETTOGGLED(1, comp(1289, 21));
    IF_BUTTON_SETTOGGLED(0, comp(1289, 23));
    IF_BUTTON_SETTOGGLED(0, comp(1289, 25));
    IF_SETTEXT("Rewards", comp(1289, 9));
    IF_SETHIDE(false, comp(1289, 11));
    IF_SETHIDE(true, comp(1289, 13));
    IF_SETHIDE(true, comp(1289, 15));
    IF_SETHIDE(true, comp(1289, 14));
    IF_SETHIDE(true, comp(1289, 12));
    IF_SETTEXT(`${inttostring(PUSH_CONSTANT_INT[16]("<col=", int1))}>The Spirit of Harvest`, comp(1289, 10));
    IF_SETTEXT(`${inttostring(PUSH_CONSTANT_INT[16]("<col=", int0))}>A rare reward from clan ceremonies on members' worlds. Hand in confections (up to 100) to improve your odds!`, comp(1289, 17));
    IF_SETGRAPHIC(34383 as graphic, comp(1289, 11));
    return;
}