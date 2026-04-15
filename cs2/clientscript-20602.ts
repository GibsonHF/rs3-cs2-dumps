//
function script20602(int0: struct, int1: unknown_int, int2: int, int3: int, int4: dbrow, int5: unknown_int, int6: graphic, int7: unknown_int, string0: string, string1: string): void {
    script9525(comp(1495, 19), 3, -1);
    var int8 = -1;
    if (((int0 != -1 as struct) && (struct_getparam(int0, 1331) == true))) {
        int8 = struct_getparam(int0, 2274);
    };
    script20604(int0, int1, int6, 0, int8, 1);
    script20605(int0);
    script9554(comp(1495, 6), comp(1495, 20), comp(1495, 7), string0, 1006 as struct);
    var string2 = "";
    var string3 = "";
    var int9 = -1 as graphic;
    var int10 = 0;
    var int11 = 0;
    if (((int2 == 0) && (int3 != 1))) {
        int11 = 1;
    };
    string2 = script20466(int2, int4, int3);
    if ((int11 == 1)) {
        string2 = "Free";
    };
    IF_SETTEXT(string2, comp(1495, 49));
    int10 = (int10 + PARAWIDTH(string2, IF_GETWIDTH(comp(1495, 47)), 29 as fontmetrics));
    IF_SETSIZE(int10, IF_GETHEIGHT(comp(1495, 49)), 0, 0, comp(1495, 49));
    string3 = script20609(int2, int3);
    if (((STRING_LENGTH(string3) > 0) && (int11 == 0))) {
        IF_SETTEXT(string3, comp(1495, 50));
        int10 = (int10 + (PARAWIDTH(string3, IF_GETWIDTH(comp(1495, 50)), 28 as fontmetrics) + 10));
        IF_SETSIZE(PARAWIDTH(string3, IF_GETWIDTH(comp(1495, 47)), 28 as fontmetrics), IF_GETHEIGHT(comp(1495, 50)), 0, 0, comp(1495, 50));
    };
    int9 = script20620(int3);
    if (((int9 != -1 as graphic) && (int11 == 0))) {
        stack(script20620(int3));
        stack(97976368);
        IF_SETGRAPHIC();
        int10 = (int10 + 27);
    } else {
        IF_SETPOSITION(0, 0, 1, 1, comp(1495, 49));
        IF_SETTEXTALIGN(1, 1, 0, comp(1495, 49));
    };
    IF_SETSIZE(int10, IF_GETHEIGHT(comp(1495, 47)), 0, 0, comp(1495, 47));
    if ((int5 == 0)) {
        IF_SETENABLED(false, comp(1495, 52));
    };
    if ((int11 == 1)) {
        IF_SETTEXT("Claim", comp(1495, 52));
    } else {
        IF_SETTEXT("Buy", comp(1495, 52));
    };
    script20607(int0, int1, int3, string1, int7);
    return;
}