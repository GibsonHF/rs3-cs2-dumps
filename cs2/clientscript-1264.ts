//
function script1264(int0: unknown_int, string0: string, string1: string, string2: string, string3: string, string4: string, string5: string, string6: string, string7: string, string8: string): void {
    var string9 = `${string0}<br><col=FFA500>When: </col>${string1}`;
    if ((STRING_LENGTH(string2) > 0)) {
        string9 = `${string9}<br><col=FFA500>What: </col>${string2}`;
    };
    if ((STRING_LENGTH(string3) > 0)) {
        string9 = `${string9}<br>${string3}`;
    };
    if ((STRING_LENGTH(string6) > 0)) {
        string9 = `${string9}<br><col=FFA500>Who: </col>${string6}`;
    };
    if ((STRING_LENGTH(string4) > 0)) {
        string9 = `${string9}<br><col=FFA500>Where: </col>${string4}`;
    };
    if ((STRING_LENGTH(string5) > 0)) {
        string9 = `${string9}<br><col=FFA500>World: </col>${string5}`;
    };
    if ((STRING_LENGTH(string7) > 0)) {
        string9 = `${string9}<br><col=FFA500>FC: </col>${string7}`;
    };
    if ((STRING_LENGTH(string8) > 0)) {
        string9 = `${string9}<br><col=FFA500>Link: </col>${string8}`;
    };
    if ((strcmp(string9, IF_GETTEXT(comp(1465, 35))) == 0)) {
        return;
    };
    IF_SETTEXT(string9, comp(1465, 35));
    IF_SETHIDE(false, comp(1234, 4));
    IF_SETHIDE(false, comp(1465, 29));
    IF_SETONTIMER(callback(), comp(1234, 4));
    IF_SETONTIMER(callback(), 96010269);
    IF_SETONTIMER(callback(script1269, 0, int0, -2147483645), 80871428);
    IF_SETONTIMER(callback(script1269, 0, int0, -2147483645), 96010269);
    return;
}