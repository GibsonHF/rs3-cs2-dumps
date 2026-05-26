//
function script12226(int0: number): void {
    IF_SETCOLOUR(10532544, int0);
    IF_SETONMOUSEOVER(callback(script12224, int0), int0);
    IF_SETONMOUSELEAVE(callback(script12225, int0), int0);
    IF_SETMOUSEOVERCURSOR(175, int0);
    IF_SETONCLICK(callback(script12227, ACTIVECLANSETTINGS_GETCLANNAME()), int0);
    IF_SETOPBASE("Visit Clan Home Page", int0);
    return;
}