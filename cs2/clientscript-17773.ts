//
function script17773(): number {
    var int0 = comp(1223, 9);  // necro_ritual_information:glyph_layer
    var int1 = comp(1223, 22);  // necro_ritual_information:glyph_holding_layer
    var int2 = comp(1223, 21);  // necro_ritual_information:glyph_title_layer
    var int3 = 18;
    var int4 = ((IF_GETWIDTH(int0) - IF_GETWIDTH(int2)) - (8 * 2));
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    if ((IF_GETWIDTH(comp(1223, 9)) < (201 + (8 * 2)))) {  // necro_ritual_information:glyph_layer
        int4 = (IF_GETWIDTH(comp(1223, 9)) - (8 * 2));  // necro_ritual_information:glyph_layer
        IF_SETPOSITION(8, (int3 + (8 * 2)), 0, 0, int1);
        int5 = (int5 + int3);
        int7 = 2;
    } else {
        IF_SETPOSITION((IF_GETWIDTH(int2) + (8 * 2)), 8, 0, 0, int1);
    };
    IF_SETSIZE(int4, int3, 0, 0, int1);
    int6 = (int6 + script17774(int6, varbitplayer_53850, varbitplayer_53853, varplayer_11175, varplayer_11178));
    if ((varbitplayer_53854 > 0)) {
        int6 = (int6 + script17774(int6, varbitplayer_53851, varbitplayer_53854, varplayer_11176, varplayer_11179));
    };
    if ((varbitplayer_53855 > 0)) {
        int6 = (int6 + script17774(int6, varbitplayer_53852, varbitplayer_53855, varplayer_11177, varplayer_11180));
    };
    IF_SETSIZE((IF_GETWIDTH(comp(1223, 2)) - IF_GETWIDTH(int0)), (int6 + (8 * (3 + int7))), 1, 0, int0);  // necro_ritual_information:content_layer
    IF_SETSIZE(int4, (int5 + int6), 0, 0, int1);
    return ((int5 + int6) + (8 * 4));
}