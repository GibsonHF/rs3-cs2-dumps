//
function script20547(int0: number, int1: number, int2: number, int3: number, string0: string, string1: string, string2: string): void {
    script9525(97976339, 3, -1);
    script20604(-1, 0, int1, 0, -1, 1);
    script9554(97976326, 97976340, 97976327, string0, 1006);
    var string3 = "";
    var int4 = -1;
    if (((int0 == 1) && (STRING_LENGTH(string1) == 0))) {
        var string1 = "Purchase";
    };
    IF_SETTEXT(string1, 97976369);
    string3 = script20609(int2, int0);
    if ((STRING_LENGTH(string3) > 0)) {
        IF_SETTEXT(string3, 97976370);
        IF_SETPOSITION(0, 10, 1, 1, 97976371);
    };
    int4 = script20620(int0);
    if ((int4 != -1)) {
        stack(script20620(int0));
        stack(97976368);
        IF_SETGRAPHIC();
    } else {
        IF_SETPOSITION(0, 0, 1, 1, 97976369);
        IF_SETTEXTALIGN(1, 1, 0, 97976369);
    };
    script20607(-1, 0, int0, string2, 0, 0);
    if ((int3 == 1)) {
        IF_SETHIDE(0, 97976343);
    } else {
        IF_SETHIDE(1, 97976343);
    };
    return;
}