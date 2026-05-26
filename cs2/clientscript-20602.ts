//
function script20602(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, string0: string, string1: string): void {
    script9525(97976339, 3, -1);
    var int9 = -1;
    if (((int0 != -1) && (struct_getparam(int0, 1331) == true))) {
        int9 = struct_getparam(int0, 2274);
    };
    script20604(int0, int1, int6, 0, int9, 1);
    script20605(int0);
    script9554(97976326, 97976340, 97976327, string0, 1006);
    var string2 = "";
    var string3 = "";
    var int10 = -1 as graphic;
    var int11 = 0;
    var int12 = 0;
    if (((int2 == 0) && (int3 != 1))) {
        int12 = 1;
    };
    string2 = script20466(int2, int4, int3);
    if ((int12 == 1)) {
        string2 = "Free";
    };
    IF_SETTEXT(string2, comp(1495, 49));
    int11 = (int11 + PARAWIDTH(string2, IF_GETWIDTH(comp(1495, 47)), 29 as fontmetrics));
    IF_SETSIZE(int11, IF_GETHEIGHT(comp(1495, 49)), 0, 0, comp(1495, 49));
    string3 = script20609(int2, int3);
    if (((STRING_LENGTH(string3) > 0) && (int12 == 0))) {
        IF_SETTEXT(string3, comp(1495, 50));
        int11 = (int11 + (PARAWIDTH(string3, IF_GETWIDTH(comp(1495, 50)), 28 as fontmetrics) + 10));
        IF_SETSIZE(PARAWIDTH(string3, IF_GETWIDTH(comp(1495, 47)), 28 as fontmetrics), IF_GETHEIGHT(comp(1495, 50)), 0, 0, comp(1495, 50));
    };
    int10 = script20620(int3);
    if (((int10 != -1 as graphic) && (int12 == 0))) {
        IF_SETGRAPHIC(script20620(int3), comp(1495, 48));
        int11 = (int11 + 27);
    } else {
        IF_SETPOSITION(0, 0, 1, 1, comp(1495, 49));
        IF_SETTEXTALIGN(1, 1, 0, comp(1495, 49));
    };
    IF_SETSIZE(int11, IF_GETHEIGHT(comp(1495, 47)), 0, 0, comp(1495, 47));
    if ((int5 == 0)) {
        IF_SETENABLED(false, comp(1495, 52));
    };
    if ((int12 == 1)) {
        IF_SETTEXT("Claim", comp(1495, 52));
    } else {
        IF_SETTEXT("Buy", comp(1495, 52));
    };
    script20607(int0, int1, int3, string1, int7, int8);
    return;
}