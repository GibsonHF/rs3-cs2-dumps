//
function script4329(int0: component): void {
    if (branch_not_long[4](varclansettings_2, -1n as clanforumqfc)) {
        IF_SETTEXT(strconcat(CLANFORUMQFC_TOSTRING("<u=A0B6C0>", varclansettings_2)), int0);
        IF_SETCOLOUR(10532544, int0);
        IF_SETONMOUSEOVER(callback(script12224, int0), int0);
        IF_SETONMOUSELEAVE(callback(script12225, int0), int0);
        IF_SETMOUSEOVERCURSOR(175, int0);
        IF_SETONCLICK(callback(script4330, varclansettings_2), int0);
        IF_SETOPBASE("Visit Clan Forum", int0);
    } else {
        IF_SETTEXT("", int0);
    };
    return;
}