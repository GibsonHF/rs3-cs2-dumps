//
function script17768(): void {
    var int0 = comp(1223, 3);  // necro_ritual_information:durability_layer
    var int1 = comp(1223, 8);  // necro_ritual_information:light_source_layer
    var int2 = comp(1223, 9);  // necro_ritual_information:glyph_layer
    var int3 = comp(1223, 14);  // necro_ritual_information:output_layer
    var int4 = comp(1223, 6);  // necro_ritual_information:durability_title_layer
    var int5 = comp(1223, 12);  // necro_ritual_information:light_source_title_layer
    var int6 = comp(1223, 21);  // necro_ritual_information:glyph_title_layer
    var int7 = comp(1223, 25);  // necro_ritual_information:output_title_layer
    var int8 = comp(1223, 7);  // necro_ritual_information:durability_holding_layer
    var int9 = comp(1223, 13);  // necro_ritual_information:light_source_holding_layer
    var int10 = comp(1223, 22);  // necro_ritual_information:glyph_holding_layer
    var int11 = comp(1223, 26);  // necro_ritual_information:output_holding_layer
    script2995(int4, IF_GETNEXTSUBID(int4), 0, 0, 0, 0, PARAWIDTH("Durability: ", IF_GETWIDTH(int4), 207 as fontmetrics), 16, 0, 0, 2100, "Durability: ");
    script2731(int4, CC_GETID(), 2);
    IF_SETSIZE(CC_GETWIDTH(), 16, 0, 0, int4);
    script2995(int5, IF_GETNEXTSUBID(int5), 0, 0, 0, 0, PARAWIDTH("Light sources: ", IF_GETWIDTH(int5), 207 as fontmetrics), 16, 0, 0, 2100, "Light sources: ");
    script2731(int5, CC_GETID(), 2);
    IF_SETSIZE(CC_GETWIDTH(), 16, 0, 0, int5);
    script2995(int6, IF_GETNEXTSUBID(int6), 0, 0, 0, 0, PARAWIDTH("Glyphs: ", IF_GETWIDTH(int6), 207 as fontmetrics), 16, 0, 0, 2100, "Glyphs: ");
    script2731(int6, CC_GETID(), 2);
    IF_SETSIZE(CC_GETWIDTH(), 16, 0, 0, int6);
    script2995(int7, IF_GETNEXTSUBID(int7), 0, 0, 0, 0, PARAWIDTH("Output: ", IF_GETWIDTH(int7), 207 as fontmetrics), 16, 0, 0, 2100, "Output: ");
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