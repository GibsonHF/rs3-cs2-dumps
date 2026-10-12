//
function script21125(): void {
    var int0 = script10495(2);
    var int1 = script10495(21);
    IF_BUTTON_SETTOGGLED(0, comp(1289, 94));
    IF_BUTTON_SETTOGGLED(0, comp(1289, 96));
    IF_BUTTON_SETTOGGLED(0, comp(1289, 98));
    IF_BUTTON_SETTOGGLED(1, comp(1289, 100));
    IF_SETTEXT("New rewards", comp(1289, 84));
    IF_SETHIDE(true, comp(1289, 88));
    IF_SETHIDE(true, comp(1289, 89));
    IF_SETHIDE(true, comp(1289, 90));
    IF_SETHIDE(false, comp(1289, 87));
    IF_SETHIDE(false, comp(1289, 86));
    IF_SETTEXT(`${inttostring(PUSH_CONSTANT_INT[16]("<col=", int1))}>Soul Dye`, comp(1289, 85));
    var string0 = `${inttostring(PUSH_CONSTANT_INT[16]("<col=", int0))}>Complete Clue Scrolls during Hallowe'en to get Spooky Caskets with a chance to contain a Soul dye!`;
    IF_SETTEXT(string0, comp(1289, 92));
    return;
}