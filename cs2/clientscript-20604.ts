//
function script20604(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    var int7 = comp(1495, 20);  // marketplace_preview:load_preview
    var int8 = 97976339;
    var int9 = comp(1495, 15);  // marketplace_preview:ragdoll_model
    var int10 = comp(1495, 13);  // marketplace_preview:preview_panel_main_layer
    var int11 = comp(1495, 16);  // marketplace_preview:pet_layer
    var int12 = comp(1495, 17);  // marketplace_preview:construction_layer
    var int13 = comp(1495, 18);  // marketplace_preview:preview_anim_layer
    var int14 = comp(1495, 14);  // marketplace_preview:preview_graphic
    var int15 = comp(1495, 26);  // marketplace_preview:recolour_button_layer
    var int16 = comp(1495, 29);  // marketplace_preview:recolour_panel
    var int17 = comp(1495, 25);  // marketplace_preview:variant_buttons_layer
    IF_SETONTIMER(callback(), int10);
    IF_SETHIDE(false, int7);
    IF_SETHIDE(true, int9);
    IF_SETHIDE(true, int11);
    IF_SETHIDE(true, int12);
    IF_SETHIDE(true, int13);
    IF_SETHIDE(true, int14);
    if ((int5 == 1)) {
        IF_SETHIDE(true, int15);
        IF_SETHIDE(true, int16);
    };
    IF_SETHIDE(true, int17);
    IF_SETONTIMER(callback(), comp(1495, 15));  // marketplace_preview:ragdoll_model
    var int18 = -1;
    var int19 = -1 as dbrow;
    var int20 = 170;
    var int21 = 170;
    var int22 = 0;
    var int23 = 30;
    if ((int0 != -1)) {
        int19 = struct_getparam(int0, 9254);
        if (((struct_getparam(int0, 1331) == true) && (int5 == 1))) {
            IF_SETHIDE(false, int15);
            script18910(11063, 97976352, 97976351, 28, 30, 5);
        };
    };
    switch (int1) {
        case 2: {
            script17960(int0, -1, -1, int7, int8, int9, int10, int7, int19);
            if (((int0 != -1) && (struct_getparam(int0, 3234) != -1 as dbrow))) {
                script19714(2, int0, int19, struct_getparam(int0, 5166));
            };
            break;
        }
        case 5: {
            int18 = script17962(int0);
            script17958(int0, int18, script17961(int18, int0), int7, int8, int11, int10, int7, 50, int19);
            if (((int0 != -1) && (struct_getparam(int0, 1331) == true))) {
                script19031(int4, int11);
            };
            break;
        }
        case 4: {
            script18695(int0, int7, int8, int13, int10, int7, 0, int19, 0);
            if (((int0 != -1) && (struct_getparam(int0, 5166) != -1 as cs2enum))) {
                script19714(4, int0, int19, struct_getparam(int0, 5166));
            };
            break;
        }
        case 7: {
            stack(int7);
            script616(int8, int12, int10, struct_getparam(int0, 9457), int19, struct_getparam(int0, 4267), struct_getparam(int0, 9426));
            break;
        }
        default: {
            script11620(int8);
            IF_SETHIDE(true, int7);
            if ((int2 != -1 as graphic)) {
                IF_SETGRAPHIC(int2, int14);
                if ((int6 != -1)) {
                    int20 = dbrow_getfield(int6, 1597440, 0);
                    int21 = dbrow_getfield(int6, 1597456, 0);
                    int22 = dbrow_getfield(int6, 1597472, 0);
                    int23 = dbrow_getfield(int6, 1597488, 0);
                };
                IF_SETSIZE(int20, int21, 0, 0, int14);
                IF_SETPOSITION(int22, int23, 1, 1, int14);
                IF_SETHIDE(false, int14);
            } else {
                IF_SETHIDE(true, int10);
                IF_SETSIZE(0, 0, 1, 1, comp(1495, 37));  // marketplace_preview:right_panel_holder
            };
            break;
        }
    };
    var string0 = "";
    if ((int0 != -1)) {
        string0 = struct_getparam(int0, 2533);
    };
    if ((int3 == 1)) {
        if ((STRING_LENGTH(string0) > 0)) {
            IF_SETTEXT(string0, comp(1495, 33));  // marketplace_preview:preview_panel_item_name
            IF_SETHIDE(false, comp(1495, 33));  // marketplace_preview:preview_panel_item_name
        } else {
            IF_SETHIDE(true, comp(1495, 33));  // marketplace_preview:preview_panel_item_name
        };
    } else {
        IF_SETHIDE(true, comp(1495, 33));  // marketplace_preview:preview_panel_item_name
    };
    return;
}