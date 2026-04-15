//[clientscript,love_puzzle_side_init]
function script3486(int0: component, int1: component, int2: component): void {
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    CC_CREATE(int0, 6, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETMODELANGLE(0, 0, 0, 0, 0, 2600);
    CC_SETNPCHEAD(2567 as npc);
    CC_SETMODELANIM(9804 as seq);
    CC_CREATE(int1, 4, IF_GETNEXTSUBID(int1));
    CC_SETTEXTFONT(66 as fontmetrics);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTSHADOW(true);
    CC_SETTEXTALIGN(0, 1, 0);
    var string0 = "To modify the spell so that it goes to our chosen destination, you must connect the <col=ff0000>start node</col> at the bottom to the <col=ff0000>destination node</col> in the <col=ff0000>upper half</col> of the tablet.<br><br>Drag the <col=ff0000>conduit tiles</col> into the grid to form a path leading upwards. You can click tiles to remove them from the grid.<br><br>The tablet has been damaged slightly by the chipping process, creating <col=ff0000>dead zones</col>. Magic cannot flow through a <col=ff0000>dead zone</col>, so you must route the power around them.";
    CC_SETTEXT(string0);
    if ((((PARAHEIGHT(string0, IF_GETWIDTH(int1), 66 as fontmetrics) * 10) + 5) <= IF_GETHEIGHT(int1))) {
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETPOSITION(0, 0, 1, 1);
        IF_SETSCROLLSIZE(0, 0, int1);
        IF_SETHIDE(true, int2);
        return;
    };
    var int3 = ((PARAHEIGHT(string0, (IF_GETWIDTH(int1) - 17), 66 as fontmetrics) * 10) + 5);
    CC_SETSIZE(17, int3, 1, 0);
    CC_SETPOSITION(0, 0, 0, 1);
    IF_SETSCROLLSIZE(0, int3, int1);
    IF_SETHIDE(false, int2);
    script31(int2, int1, 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
    return;
}