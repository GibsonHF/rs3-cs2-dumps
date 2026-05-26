//
function script8275(int0: number): void {
    if ((PLAYERMEMBER() == true)) {
        IF_SETTEXT("<col=00ff00>Yes", int0);
    } else {
        IF_SETTEXT("<col=ff0000>No", int0);
    };
    return;
}