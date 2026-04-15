//
function script8568(int0: int): void {
    if ((int0 == 0)) {
        IF_SETHIDE(true, comp(1890, 24));
        IF_SETHIDE(false, comp(1890, 25));
        IF_SETHIDE(false, comp(1890, 26));
        IF_SETHIDE(true, comp(1890, 27));
    } else {
        if ((MAP_MEMBERS() == 0)) {
            printmessage("You can only create curse presets on a members world.");
            return;
        };
        if ((script20179() == 0)) {
            printmessage("You need to complete The Temple at Senntisten before you can access the curse prayer book.");
            return;
        };
        IF_SETHIDE(true, comp(1890, 26));
        IF_SETHIDE(false, comp(1890, 27));
        IF_SETHIDE(false, comp(1890, 24));
        IF_SETHIDE(true, comp(1890, 25));
    };
    return;
}