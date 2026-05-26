//
function script9496(): void {
    var int0 = IF_GETHEIGHT(49086527);
    var int1 = IF_GETWIDTH(49086527);
    var int2 = 26;
    var int3 = (24 + STRINGWIDTH(IF_GETTEXT(49086534), IF_GETFONTMETRICS(49086534)));
    if (((int0 <= int2) && (int1 <= int3))) {
        IF_SETONTIMER(callback(), 49086527);
        IF_SETSIZE(int3, int2, 0, 0, 49086527);
    } else {
        int0 = (int0 - 5);
        int1 = (int1 - 5);
        if ((int0 < int2)) {
            int0 = int2;
        };
        if ((int1 < int3)) {
            int1 = int3;
        };
        IF_SETSIZE(int1, int0, 0, 0, 49086527);
    };
    return;
}