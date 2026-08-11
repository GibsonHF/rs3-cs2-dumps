//
function script7423(): void {
    var int0 = 0;
    var int1 = IF_GETY(comp(1311, 384));  // mtxmgt:dash_component
    var int2 = 34;
    var int3 = 0;
    var int4 = (STRINGWIDTH(IF_GETTEXT(comp(1311, 385)), 28 as fontmetrics) + 10);  // mtxmgt:pet_name
    var int5 = 0;
    if ((STRINGWIDTH(IF_GETTEXT(comp(1311, 383)), 28 as fontmetrics) > 0)) {  // mtxmgt:pet_stage
        int3 = (STRINGWIDTH(IF_GETTEXT(comp(1311, 383)), 28 as fontmetrics) + 10);  // mtxmgt:pet_stage
        int0 = (STRINGWIDTH("-", 28 as fontmetrics) + 10);
        IF_SETTEXT("-", comp(1311, 384));  // mtxmgt:dash_component
        int5 = (((int4 + int0) + int3) + 20);
        IF_SETSIZE(int5, IF_GETHEIGHT(comp(1311, 381)), 0, 0, comp(1311, 381));  // mtxmgt:pets_name_layer
    } else {
        IF_SETSIZE(int4, IF_GETHEIGHT(comp(1311, 381)), 0, 0, comp(1311, 381));  // mtxmgt:pets_name_layer
    };
    IF_SETSIZE(int3, 0, 0, 1, comp(1311, 383));  // mtxmgt:pet_stage
    IF_SETSIZE(int0, 0, 0, 1, comp(1311, 384));  // mtxmgt:dash_component
    IF_SETSIZE(int4, 0, 0, 1, comp(1311, 385));  // mtxmgt:pet_name
    if ((STRINGWIDTH(IF_GETTEXT(comp(1311, 383)), 28 as fontmetrics) > 0)) {  // mtxmgt:pet_stage
        IF_SETPOSITION(IF_GETX(comp(1311, 382) /*mtxmgt:pet_name_background*/), int1, 0, 0, comp(1311, 383) /*mtxmgt:pet_stage*/);
        IF_SETPOSITION(((IF_GETX(comp(1311, 383) /*mtxmgt:pet_stage*/) + IF_GETWIDTH(comp(1311, 383) /*mtxmgt:pet_stage*/)) + 15), int1, 0, 0, comp(1311, 384) /*mtxmgt:dash_component*/);
        IF_SETPOSITION(((IF_GETX(comp(1311, 384) /*mtxmgt:dash_component*/) + IF_GETWIDTH(comp(1311, 384) /*mtxmgt:dash_component*/)) + 5), int1, 0, 0, comp(1311, 385) /*mtxmgt:pet_name*/);
    } else {
        IF_SETPOSITION(0, 0, 1, 1, comp(1311, 385));  // mtxmgt:pet_name
    };
    return;
}