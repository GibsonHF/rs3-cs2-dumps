//
function script15857(int0: number): void {
    var int1 = -1 as graphic;
    var int2 = -1 as graphic;
    var int3 = -1 as graphic;
    var int4 = -1 as graphic;
    [int1, int2, int3, int4] = dbrow_getfield(int0, 557104, 0);
    if (((((int1 == -1 as graphic) || (int2 == -1 as graphic)) || (int3 == -1 as graphic)) || (int4 == -1 as graphic))) {
        IF_SETHIDE(1, 56164372);
        return;
    };
    IF_SETGRAPHIC(14719 as graphic, 56164375);
    IF_SETGRAPHIC(-1 as graphic, 56164377);
    IF_SETGRAPHIC(14719 as graphic, 56164378);
    IF_SETGRAPHIC(-1 as graphic, 56164379);
    var string0 = IF_GETTEXT(56164370);
    IF_SETOPBASE(string0, 56164374);
    IF_SETOPBASE(strconcat(string0, " List"), 56164376);
    if ((varclient_6910 == 0)) {
        IF_SETGRAPHIC(14720 as graphic, 56164375);
        IF_SETGRAPHIC(int2, 56164377);
        IF_SETTEXT("Channel", 56164371);
        IF_SETGRAPHIC(int3, 56164379);
        IF_SENDTOFRONT(56164374);
    } else {
        IF_SETGRAPHIC(14720 as graphic, 56164378);
        IF_SETGRAPHIC(int4, 56164379);
        IF_SETTEXT("List", 56164371);
        IF_SETGRAPHIC(int1, 56164377);
        IF_SENDTOFRONT(56164376);
    };
    return;
}