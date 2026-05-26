//
function script19874(): void {
    IF_SETHIDE(false, comp(1288, 0));
    IF_SETHIDE(true, comp(1288, 1));
    IF_SETHIDE(true, comp(1288, 151));
    IF_SETHIDE(false, comp(1288, 153));
    script4170(84410521, 34838, 34839, 34840, 34841);
    IF_SETPOSITION(0, 75, 1, 0, comp(1288, 152));
    IF_SETSIZE(325, 200, 0, 0, comp(1288, 152));
    IF_SETTEXTFONT(209 as fontmetrics, comp(1288, 152));
    IF_SETPOSITION(0, 0, 1, 0, comp(1288, 149));
    IF_SETSIZE(325, 450, 0, 0, comp(1288, 149));
    IF_SETTEXT("Beat different encounters to increase your mage's level!<br><br>Reach level milestones to unlock<br>new <col=3366FF>Saradominist</col> and <col=E80404>Zamorakian <col=F0BE79>themed capes, amulets,</col> and <col=F0BE79>combat overrides</col>!", comp(1288, 152));
    IF_SETGRAPHIC(34828 as graphic, comp(1288, 85));
    IF_SETPOSITION(0, 4, 1, 2, comp(1288, 85));
    IF_SETNPCMODEL(31650 as npc, comp(1288, 162));
    IF_SETPOSITION(-29, -3, 1, 1, comp(1288, 162));
    IF_SETPOSITION(-29, -3, 1, 1, comp(1288, 161));
    IF_SETNPCMODEL(31651 as npc, comp(1288, 163));
    IF_SETPOSITION(29, -3, 1, 1, comp(1288, 163));
    IF_SETPOSITION(29, -3, 1, 1, comp(1288, 147));
    IF_SETHIDE(false, comp(1288, 155));
    IF_SETOPBASE("<col=FF00>Amulets", comp(1288, 164));
    IF_SETOPBASE("<col=FF00>Concentrated Blast", comp(1288, 168));
    IF_SETOPBASE("<col=FF00>Chain", comp(1288, 171));
    IF_SETOPBASE("<col=FF00>Wild Magic", comp(1288, 172));
    IF_SETOPBASE("<col=FF00>Capes", comp(1288, 173));
    script19876(1);
    return;
}