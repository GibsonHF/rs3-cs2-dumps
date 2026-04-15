//
function script1618(): void {
    var int0 = -1 as inv;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    IF_SETHIDE(false, comp(287, 4));
    if ((varclient_1032 == 1)) {
        int0 = 221 as inv;
    } else {
        int0 = 222 as inv;
    };
    int1 = INV_SIZE(int0);
    if ((int1 != (5 * 5))) {
        printmessage("Nothing happens, as if something is wrong.");
        return;
    };
    while ((int4 < int1)) {
        script1619(int2, int3, INV_GETOBJ(int0, int4));
        if ((++int2 >= 5)) {
            int2 = 0;
            int3 = (int3 + 1);
        };
        int4 = (int4 + 1);
    };
    return;
}