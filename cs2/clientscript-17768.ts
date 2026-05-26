//
function script17768(): void {
    var int0 = 80150531;
    var int1 = 80150536;
    var int2 = 80150537;
    var int3 = 80150542;
    var int4 = 80150534;
    var int5 = 80150540;
    var int6 = 80150549;
    var int7 = 80150553;
    var int8 = 80150535;
    var int9 = 80150541;
    var int10 = 80150550;
    var int11 = 80150554;
    script2995(int4, IF_GETNEXTSUBID(int4), 0, 0, 0, 0, PARAWIDTH("Durability: ", IF_GETWIDTH(int4), 207), 16, 0, 0, 2100, "Durability: ");
    script2731(int4, CC_GETID(), 2);
    IF_SETSIZE(CC_GETWIDTH(), 16, 0, 0, int4);
    script2995(int5, IF_GETNEXTSUBID(int5), 0, 0, 0, 0, PARAWIDTH("Light sources: ", IF_GETWIDTH(int5), 207), 16, 0, 0, 2100, "Light sources: ");
    script2731(int5, CC_GETID(), 2);
    IF_SETSIZE(CC_GETWIDTH(), 16, 0, 0, int5);
    script2995(int6, IF_GETNEXTSUBID(int6), 0, 0, 0, 0, PARAWIDTH("Glyphs: ", IF_GETWIDTH(int6), 207), 16, 0, 0, 2100, "Glyphs: ");
    script2731(int6, CC_GETID(), 2);
    IF_SETSIZE(CC_GETWIDTH(), 16, 0, 0, int6);
    script2995(int7, IF_GETNEXTSUBID(int7), 0, 0, 0, 0, PARAWIDTH("Output: ", IF_GETWIDTH(int7), 207), 16, 0, 0, 2100, "Output: ");
    script2731(int7, CC_GETID(), 2);
    IF_SETSIZE(CC_GETWIDTH(), 16, 0, 0, int7);
    IF_SETSIZE(((IF_GETWIDTH(int0) - IF_GETWIDTH(int4)) - (8 * 3)), 16, 0, 0, int8);
    IF_SETPOSITION((IF_GETWIDTH(int4) + (8 * 2)), 8, 0, 0, int8);
    IF_SETSIZE(((IF_GETWIDTH(int1) - IF_GETWIDTH(int5)) - (8 * 3)), 16, 0, 0, int9);
    IF_SETPOSITION((IF_GETWIDTH(int5) + (8 * 2)), 8, 0, 0, int9);
    IF_SETSIZE(((IF_GETWIDTH(int2) - IF_GETWIDTH(int6)) - (8 * 3)), 16, 0, 0, int10);
    IF_SETPOSITION((IF_GETWIDTH(int6) + (8 * 2)), 8, 0, 0, int10);
    IF_SETSIZE(((IF_GETWIDTH(int3) - IF_GETWIDTH(int7)) - (8 * 4)), 16, 0, 0, int11);
    IF_SETPOSITION((IF_GETWIDTH(int7) + (8 * 2)), 8, 0, 0, int11);
    return;
}