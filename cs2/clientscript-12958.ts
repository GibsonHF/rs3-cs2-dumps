//
function script12958(int0: component): void {
    if ((script12950() == true)) {
        IF_SETTEXT("This weekend you can reset the Mazcab raid once every 24 hours instead of every 48 hours.<br>Ensure you wish to reset your progress before you continue!", int0);
    } else {
        IF_SETTEXT("You can only reset the Mazcab raid once every 48 hours.<br>Ensure you wish to reset your progress before you continue!", int0);
    };
    return;
}