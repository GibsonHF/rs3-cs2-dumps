//
function script13437(): void {
    var int0 = comp(1875, 5);
    CC_DELETEALL(int0);
    var string0 = "Increase the standing you have within any of the four factions to unlock city rewards.<br><br>All faction reputation contributes to your overall city ranking and gives you access to additional content.";
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(120, 400, 0, 0);
    CC_SETPOSITION(40, 20, 0, 0);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXTALIGN(0, 0, 0);
    CC_SETCOLOUR(0);
    CC_SETTEXT(string0);
    return;
}