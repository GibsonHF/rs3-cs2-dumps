//
function script3447(int0: component): void {
    var int1 = IF_GETNEXTSUBID(int0);
    var int2 = script3436(varplayer_3079);
    if ((int2 == -1)) {
        return;
    };
    CC_CREATE(int0, 4, int1);
    CC_SETSIZE(IF_GETWIDTH(int0), IF_GETHEIGHT(int0), 0, 0);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETTEXTALIGN(1, 0, 0);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTFONT(28 as fontmetrics);
    CC_SETTEXTSHADOW(true);
    if ((int2 == 5)) {
        CC_SETTEXT("Together we have so far kept Draynor intact, but a new dark force emerges from the rift... Lucien! Gather your arms and join forces with the Riders to end this madness before Gielinor is destroyed!");
    } else {
        CC_SETTEXT("A mysterious energy rift has materialised outside Death's office, and is causing havoc. Death's pillars are key to stabilising it for now, but it grows stronger. He needs your help! It cannot be allowed to destroy Gielinor!");
    };
    return;
}