//
function script16959(): void {
    var int0 = script438(60);
    var int1 = comp(-1, 65535);
    var int2 = 0;
    while ((++int2 <= 6)) {
        int1 = script10947(int2);
        if ((script10948(int2) == 1)) {
            IF_SETHIDE(true, int1);
        } else {
            IF_SETHIDE(false, int1);
        };
        IF_SETOPCURSOR(1, 201 as cursor, int1);
        script2690(int1, int0);
    };
    return;
}