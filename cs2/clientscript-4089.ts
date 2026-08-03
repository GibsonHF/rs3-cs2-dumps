//
function script4089(): void {
    if ((script13749() == 1)) {
        SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 120);
        SSO_LOGOUT();
        script4142(16);
    } else if ((PLATFORMTYPE() == 5)) {
        script426("To change the account you are logged in to please close the game client and change account in the Jagex Launcher.", 48758873, -1, 0);
    };
    return;
}