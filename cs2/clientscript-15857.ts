//
function script15857(int0: dbrow): void {
    var int1 = -1 as graphic;
    var int2 = -1 as graphic;
    var int3 = -1 as graphic;
    var int4 = -1 as graphic;
    [int1, int2, int3, int4] = dbrow_getfield(int0, 557104, 0);
    if (((((int1 == -1 as graphic) || (int2 == -1 as graphic)) || (int3 == -1 as graphic)) || (int4 == -1 as graphic))) {
        IF_SETHIDE(true, comp(857, 20));
        return;
    };
    stack(14719);
    stack(56164375);
    IF_SETGRAPHIC();
    stack(-1);
    stack(56164377);
    IF_SETGRAPHIC();
    stack(14719);
    stack(56164378);
    IF_SETGRAPHIC();
    stack(-1);
    stack(56164379);
    IF_SETGRAPHIC();
    var string0 = IF_GETTEXT(56164370);
    IF_SETOPBASE(string0, 56164374);
    IF_SETOPBASE(strconcat(string0, " List"), 56164376);
    if ((varclient_6910 == 0)) {
        stack(14720);
        stack(56164375);
        IF_SETGRAPHIC();
        stack(int2);
        stack(56164377);
        IF_SETGRAPHIC();
        IF_SETTEXT("Channel", 56164371);
        stack(int3);
        stack(56164379);
        IF_SETGRAPHIC();
        IF_SENDTOFRONT(56164374);
    } else {
        stack(14720);
        stack(56164378);
        IF_SETGRAPHIC();
        stack(int4);
        stack(56164379);
        IF_SETGRAPHIC();
        IF_SETTEXT("List", 56164371);
        stack(int1);
        stack(56164377);
        IF_SETGRAPHIC();
        IF_SENDTOFRONT(56164376);
    };
    return;
}