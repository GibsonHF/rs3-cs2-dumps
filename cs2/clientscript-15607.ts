//
function script15607(): void {
    LOBBY_ENTERGAME(varclient_4192, varclient_4193);
    var int0 = 59375697;
    stack(3063);
    stack(int0);
    stack(MAP_WORLD());
    DETAILGET_SOUNDVOL();
    DETAILGET_MUSICVOL();
    DETAILGET_BGSOUNDVOL();
    DETAILGET_SPEECHVOL();
    IF_SETONTIMER(callback(script-1, DETAILGET_LOGINVOL()), int0);
    return;
}