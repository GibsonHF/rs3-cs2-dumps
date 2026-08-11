//
function script17769(int0: number): void {
    var int1 = (18 * 2);
    var int2 = comp(1223, 2);  // necro_ritual_information:content_layer
    var int3 = comp(1223, 9);  // necro_ritual_information:glyph_layer
    var int4 = comp(1223, 22);  // necro_ritual_information:glyph_holding_layer
    var int5 = comp(1223, 14);  // necro_ritual_information:output_layer
    var int6 = comp(1223, 26);  // necro_ritual_information:output_holding_layer
    IF_SETTEXT("No ritual selected", comp(1223, 0));  // necro_ritual_information:name_title_text
    IF_SETSIZE((IF_GETWIDTH(int2) - IF_GETWIDTH(int3)), int1, 1, 0, int3);
    IF_SETSIZE((IF_GETWIDTH(int3) - IF_GETWIDTH(int4)), int1, 1, 0, int4);
    IF_SETSIZE((IF_GETWIDTH(int2) - IF_GETWIDTH(int5)), int1, 1, 0, int5);
    IF_SETSIZE((IF_GETWIDTH(int5) - IF_GETWIDTH(int6)), int1, 1, 0, int6);
    var int0 = (int0 + ((int1 * 3) + (8 * 2)));
    IF_SETPOSITION(0, int0, 1, 0, int5);
    int0 = (int0 + (int1 + 8));
    IF_SETPOSITION(0, int0, 1, 0, comp(1223, 15));  // necro_ritual_information:options_layer
    IF_SETHIDE(true, comp(1223, 27));  // necro_ritual_information:output_scrollbar_layer
    IF_SETSCROLLSIZE(0, 0, int4);
    IF_SETSCROLLSIZE(0, 0, int6);
    return;
}