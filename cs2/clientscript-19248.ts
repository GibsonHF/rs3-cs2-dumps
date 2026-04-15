//
function script19248(): void {
    var int0 = script10495(2);
    var int1 = script10495(21);
    IF_BUTTON_SETTOGGLED(0, 84475923);
    IF_BUTTON_SETTOGGLED(1, 84475925);
    IF_BUTTON_SETTOGGLED(0, 84475927);
    IF_BUTTON_SETTOGGLED(0, 84475929);
    IF_SETTEXT("Rewards", comp(1289, 9));
    IF_SETHIDE(false, comp(1289, 11));
    IF_SETHIDE(true, comp(1289, 13));
    IF_SETHIDE(true, comp(1289, 15));
    IF_SETHIDE(true, comp(1289, 14));
    IF_SETHIDE(true, comp(1289, 12));
    stack(PUSH_CONSTANT_INT[16]("<col=", int1));
    IF_SETTEXT(`${stack()}${inttostring()}>The Spirit of Harvest`, comp(1289, 10));
    stack(PUSH_CONSTANT_INT[16]("<col=", int0));
    IF_SETTEXT(`${stack()}${inttostring()}>A rare reward from clan ceremonies on members' worlds. Hand in confections (up to 100) to improve your odds!`, comp(1289, 17));
    stack(34383);
    stack(84475915);
    IF_SETGRAPHIC();
    return;
}