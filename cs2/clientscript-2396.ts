//
function script2396(int0: int, int1: component, int2: int): void {
    if ((varbitplayer_27169 == 1)) {
        return;
    };
    var int3 = script2385(int0, 1);
    var int4 = -1;
    if ((int3 == -1)) {
        int4 = script2385(-1, 1);
        if ((int4 == -1)) {
            printmessage("There are no free slots on the bar.");
            return;
        };
        if (((script6431() == true) && (script2387(1) >= 8))) {
            script426(`A maximum of ${inttostring(8, 10)} icons can be visible at once. Remove an icon before adding another.`, int1, int2, 1);
            return;
        };
    } else if ((script13863(int0, int4, int1, int2) == 0)) {
        return;
    };
    script2393(int0, int4);
    script13862();
    varbitclient_49616 = 1;
    return;
}