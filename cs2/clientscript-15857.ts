//
function script15857(int0: number): void {
    var int1 = -1 as graphic;
    var int2 = -1 as graphic;
    var int3 = -1 as graphic;
    var int4 = -1 as graphic;
    [int1, int2, int3, int4] = dbrow_getfield(int0, 557104, 0);
    if (((((int1 == -1 as graphic) || (int2 == -1 as graphic)) || (int3 == -1 as graphic)) || (int4 == -1 as graphic))) {
        IF_SETHIDE(true, comp(857, 20));
        return;
    };
    IF_SETGRAPHIC(14719 as graphic, comp(857, 23));
    IF_SETGRAPHIC(-1 as graphic, comp(857, 25));
    IF_SETGRAPHIC(14719 as graphic, comp(857, 26));
    IF_SETGRAPHIC(-1 as graphic, comp(857, 27));
    var string0 = IF_GETTEXT(comp(857, 18));
    IF_SETOPBASE(string0, comp(857, 22));
    IF_SETOPBASE(strconcat(string0, " List"), comp(857, 24));
    if ((varclient_6910 == 0)) {
        IF_SETGRAPHIC(14720 as graphic, comp(857, 23));
        IF_SETGRAPHIC(int2, comp(857, 25));
        IF_SETTEXT("Channel", comp(857, 19));
        IF_SETGRAPHIC(int3, comp(857, 27));
        IF_SENDTOFRONT(comp(857, 22));
    } else {
        IF_SETGRAPHIC(14720 as graphic, comp(857, 26));
        IF_SETGRAPHIC(int4, comp(857, 27));
        IF_SETTEXT("List", comp(857, 19));
        IF_SETGRAPHIC(int1, comp(857, 25));
        IF_SENDTOFRONT(comp(857, 24));
    };
    return;
}