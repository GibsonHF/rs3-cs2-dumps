//
function script13150(int0: number): void {
    script2731(int0, -1, 3);
    if ((STRING_LENGTH(varclient_4670) > 0)) {
        IF_SETTEXT(`Your personal message is currently set to:<br>${REMOVETAGS(varclient_4670)}`, int0);
        IF_SETHIDE(1, 102301736);
    } else {
        IF_SETTEXT("You currently have no personal message set.", int0);
        IF_SETHIDE(0, 102301736);
    };
    return;
}