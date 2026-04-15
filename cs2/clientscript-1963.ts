//[clientscript,pest_mouseover]
function script1963(int0: component, int1: int): void {
    if ((varplayer_593 != int1)) {
        IF_SETTEXT(`<col=ff981f>${REMOVETAGS(IF_GETTEXT(int0))}</col>`, int0);
    } else {
        IF_SETTEXT(REMOVETAGS(IF_GETTEXT(int0)), int0);
    };
    return;
}