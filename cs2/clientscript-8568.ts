//
function script8568(int0: number): void {
    if ((int0 == 0)) {
        IF_SETHIDE(1, 123863064);
        IF_SETHIDE(0, 123863065);
        IF_SETHIDE(0, 123863066);
        IF_SETHIDE(1, 123863067);
    } else {
        if ((MAP_MEMBERS() == 0)) {
            printmessage("You can only create curse presets on a members world.");
            return;
        };
        if ((script20179() == 0)) {
            printmessage("You need to complete The Temple at Senntisten before you can access the curse prayer book.");
            return;
        };
        IF_SETHIDE(1, 123863066);
        IF_SETHIDE(0, 123863067);
        IF_SETHIDE(0, 123863064);
        IF_SETHIDE(1, 123863065);
    };
    return;
}