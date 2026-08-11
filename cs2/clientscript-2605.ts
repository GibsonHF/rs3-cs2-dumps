//
function script2605(int0: number): void {
    if ((int0 == -1 as obj)) {
        IF_SETHIDE(true, comp(37, 31));  // ms_smithing_makex:info_scrollbar
        return;
    };
    IF_SETHIDE(false, comp(37, 31));  // ms_smithing_makex:info_scrollbar
    var int1 = item_getparam(int0, 2989);
    if ((int1 == -1 as obj)) {
        int1 = int0;
    };
    IF_SETSIZE(0, 50, 1, 0, comp(37, 1));  // ms_smithing_makex:info_requirements
    IF_SETSIZE(0, 90, 1, 0, comp(37, 2));  // ms_smithing_makex:info_materials
    script7126(2424832, int0);
    var int2 = ((IF_GETY(comp(37, 0)) + IF_GETHEIGHT(comp(37, 0))) + 2);  // ms_smithing_makex:info_value
    var int3 = 0;
    var int4 = ((IF_GETY(comp(37, 164)) + IF_GETHEIGHT(comp(37, 164))) + 2);  // ms_smithing_makex:info_requirements_header
    IF_SETPOSITION(IF_GETX(comp(37, 1)), int2, 0, 0, comp(37, 1));  // ms_smithing_makex:info_requirements
    int3 = script7127(int0, int4, 2424833);
    if ((int3 > int4)) {
        IF_SETHIDE(false, comp(37, 1));  // ms_smithing_makex:info_requirements
        int2 = ((int2 + int3) + 2);
    } else {
        IF_SETHIDE(true, comp(37, 1));  // ms_smithing_makex:info_requirements
    };
    IF_SETPOSITION(IF_GETX(comp(37, 2)), int2, 0, 0, comp(37, 2));  // ms_smithing_makex:info_materials
    int4 = ((IF_GETY(comp(37, 165)) + IF_GETHEIGHT(comp(37, 165))) + 2);  // ms_smithing_makex:info_materials_header
    int3 = script7129(int0, int4, 2424834);
    if ((int3 > int4)) {
        IF_SETHIDE(false, comp(37, 2));  // ms_smithing_makex:info_materials
        int2 = (int2 + int3);
    } else {
        IF_SETHIDE(true, comp(37, 2));  // ms_smithing_makex:info_materials
    };
    if ((IF_GETHEIGHT(comp(37, 32)) < int2)) {  // ms_smithing_makex:info_ingredients_layer
        IF_SETSCROLLSIZE(IF_GETWIDTH(comp(37, 32)), int2, comp(37, 32));  // ms_smithing_makex:info_ingredients_layer
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(37, 32));  // ms_smithing_makex:info_ingredients_layer
    };
    IF_SETSCROLLPOS(0, 0, comp(37, 32));  // ms_smithing_makex:info_ingredients_layer
    script31(2424863, 2424864, 4343, 4340, 4341, 4342, 4337, 4336);
    return;
}