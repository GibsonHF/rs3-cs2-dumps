//
function script15694(int0: component): void {
    IF_OPENSUBCLIENT(int0, 827);
    if ((CLIENTTYPE() == 7)) {
        IF_SETHIDE(false, comp(827, 8));
    } else {
        IF_SETHIDE(true, comp(827, 8));
    };
    return;
}