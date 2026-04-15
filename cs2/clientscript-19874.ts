//
function script19874(): void {
    IF_SETHIDE(false, comp(1288, 0));
    IF_SETHIDE(true, comp(1288, 1));
    IF_SETHIDE(true, comp(1288, 151));
    IF_SETHIDE(false, comp(1288, 153));
    script4170(84410521, 34838 as graphic, 34839 as graphic, 34840 as graphic, 34841 as graphic);
    IF_SETPOSITION(0, 75, 1, 0, comp(1288, 152));
    IF_SETSIZE(325, 200, 0, 0, comp(1288, 152));
    IF_SETTEXTFONT(209 as fontmetrics, comp(1288, 152));
    IF_SETPOSITION(0, 0, 1, 0, comp(1288, 149));
    IF_SETSIZE(325, 450, 0, 0, comp(1288, 149));
    IF_SETTEXT("Beat different encounters to increase your mage's level!<br><br>Reach level milestones to unlock<br>new <col=3366FF>Saradominist</col> and <col=E80404>Zamorakian <col=F0BE79>themed capes, amulets,</col> and <col=F0BE79>combat overrides</col>!", comp(1288, 152));
    stack(34828);
    stack(84410453);
    IF_SETGRAPHIC();
    IF_SETPOSITION(0, 4, 1, 2, 84410453);
    IF_SETNPCMODEL(31650, 84410530);
    IF_SETPOSITION(-29, -3, 1, 1, 84410530);
    IF_SETPOSITION(-29, -3, 1, 1, 84410529);
    IF_SETNPCMODEL(31651, 84410531);
    IF_SETPOSITION(29, -3, 1, 1, 84410531);
    IF_SETPOSITION(29, -3, 1, 1, 84410515);
    IF_SETHIDE(0, 84410523);
    IF_SETOPBASE("<col=FF00>Amulets", 84410532);
    IF_SETOPBASE("<col=FF00>Concentrated Blast", 84410536);
    IF_SETOPBASE("<col=FF00>Chain", 84410539);
    IF_SETOPBASE("<col=FF00>Wild Magic", 84410540);
    IF_SETOPBASE("<col=FF00>Capes", 84410541);
    script19876(1);
    return;
}