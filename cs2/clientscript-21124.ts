//
function script21124(): void {
    var int0 = script10495(2);
    var int1 = script10495(21);
    IF_BUTTON_SETTOGGLED(0, comp(1289, 94));
    IF_BUTTON_SETTOGGLED(0, comp(1289, 96));
    IF_BUTTON_SETTOGGLED(1, comp(1289, 98));
    IF_BUTTON_SETTOGGLED(0, comp(1289, 100));
    IF_SETTEXT("New rewards", comp(1289, 84));
    IF_SETNPCMODEL(32922 as npc, comp(1289, 89));
    IF_SETHIDE(true, comp(1289, 88));
    IF_SETHIDE(false, comp(1289, 89));
    IF_SETHIDE(true, comp(1289, 90));
    IF_SETHIDE(true, comp(1289, 87));
    IF_SETHIDE(false, comp(1289, 86));
    IF_SETTEXT(`${inttostring(PUSH_CONSTANT_INT[16]("<col=", int1))}>Soul Dyed Hallowe'en mask`, comp(1289, 85));
    var string0 = `${inttostring(PUSH_CONSTANT_INT[16]("<col=", int0))}>A rare reward from horseclan ceremonies on members' worlds. Hand in confections to improve your odds!`;
    IF_SETTEXT(string0, comp(1289, 92));
    return;
}