//
function script20547(int0: int, int1: graphic, int2: int, int3: boolean, string0: string, string1: string, string2: string): void {
    script9525(comp(1495, 19), 3, -1);
    script20604(-1 as struct, 0, int1, 0, -1, 1);
    script9554(comp(1495, 6), comp(1495, 20), comp(1495, 7), string0, 1006 as struct);
    var string3 = "";
    var int4 = -1 as graphic;
    if (((int0 == 1) && (STRING_LENGTH(string1) == 0))) {
        var string1 = "Purchase";
    };
    IF_SETTEXT(string1, comp(1495, 49));
    string3 = script20609(int2, int0);
    if ((STRING_LENGTH(string3) > 0)) {
        IF_SETTEXT(string3, comp(1495, 50));
        IF_SETPOSITION(0, 10, 1, 1, comp(1495, 51));
    };
    int4 = script20620(int0);
    if ((int4 != -1 as graphic)) {
        stack(script20620(int0));
        stack(97976368);
        IF_SETGRAPHIC();
    } else {
        IF_SETPOSITION(0, 0, 1, 1, comp(1495, 49));
        IF_SETTEXTALIGN(1, 1, 0, comp(1495, 49));
    };
    script20607(-1 as struct, 0, int0, string2, 0);
    if ((int3 == true)) {
        IF_SETHIDE(false, comp(1495, 23));
    } else {
        IF_SETHIDE(true, comp(1495, 23));
    };
    return;
}