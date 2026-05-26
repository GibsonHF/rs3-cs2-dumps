//
function script19248(): void {
    var int0 = script10495(2);
    var int1 = script10495(21);
    IF_BUTTON_SETTOGGLED(0, 84475923);
    IF_BUTTON_SETTOGGLED(1, 84475925);
    IF_BUTTON_SETTOGGLED(0, 84475927);
    IF_BUTTON_SETTOGGLED(0, 84475929);
    IF_SETTEXT("Rewards", 84475913);
    IF_SETHIDE(0, 84475915);
    IF_SETHIDE(1, 84475917);
    IF_SETHIDE(1, 84475919);
    IF_SETHIDE(1, 84475918);
    IF_SETHIDE(1, 84475916);
    stack(PUSH_CONSTANT_INT[16]("<col=", int1));
    IF_SETTEXT(`${stack()}${inttostring()}>The Spirit of Harvest`, 84475914);
    stack(PUSH_CONSTANT_INT[16]("<col=", int0));
    IF_SETTEXT(`${stack()}${inttostring()}>A rare reward from clan ceremonies on members' worlds. Hand in confections (up to 100) to improve your odds!`, 84475921);
    stack(34383);
    stack(84475915);
    IF_SETGRAPHIC();
    return;
}