//
function script11003(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    if ((int0 == 22)) {
        var int0 = struct_getparam(int1, 2532);
    };
    IF_SETHIDE(false, comp(1311, 518));  // mtxmgt:pet_options
    IF_SETHIDE(false, comp(1311, 588));  // mtxmgt:menagerie_layer
    IF_SETHIDE(false, comp(1311, 593));  // mtxmgt:familiar_override_layer
    IF_SETHIDE(false, comp(1311, 380));  // mtxmgt:pet_panel
    IF_SETHIDE(true, comp(1311, 560));  // mtxmgt:appearance_buttons
    IF_SETHIDE(true, comp(1311, 557));  // mtxmgt:multi_appearance_buttons
    IF_SETHIDE(true, comp(1311, 541));  // mtxmgt:modular_pet_buttons_armour_sets
    IF_SETHIDE(true, comp(1311, 533));  // mtxmgt:modular_pet_slot_arrows
    if ((int0 != 1)) {
        IF_SETHIDE(true, comp(1311, 386));  // mtxmgt:pet_age_layer
        IF_SETHIDE(true, comp(1311, 383));  // mtxmgt:pet_stage
        IF_SETHIDE(true, comp(1311, 384));  // mtxmgt:dash_component
        IF_SETPOSITION(0, 0, 1, 1, comp(1311, 385));  // mtxmgt:pet_name
        IF_SETHIDE(false, comp(1311, 603));  // mtxmgt:pet_cycle_layer
    } else {
        IF_SETHIDE(false, comp(1311, 383));  // mtxmgt:pet_stage
        IF_SETHIDE(false, comp(1311, 384));  // mtxmgt:dash_component
        IF_SETHIDE(false, comp(1311, 386));  // mtxmgt:pet_age_layer
        IF_SETPOSITION(((IF_GETX(comp(1311, 384) /*mtxmgt:dash_component*/) + IF_GETWIDTH(comp(1311, 384) /*mtxmgt:dash_component*/)) + 5), 0, 0, 0, comp(1311, 385) /*mtxmgt:pet_name*/);
        IF_SETHIDE(true, comp(1311, 603));  // mtxmgt:pet_cycle_layer
    };
    if ((int0 != 3)) {
        if (((struct_getparam(int1, 477) == 0) || (struct_getparam(int1, 477) == -1))) {
            IF_SETHIDE(false, comp(1311, 363));  // mtxmgt:recolour_layer
        } else {
            IF_SETHIDE(true, comp(1311, 363));  // mtxmgt:recolour_layer
        };
    } else {
        IF_SETHIDE(true, comp(1311, 363));  // mtxmgt:recolour_layer
    };
    IF_SETHIDE(false, comp(1311, 580));  // mtxmgt:disabled_dropdown_layer
    if (((struct_getparam(int1, 4420) == 0) || (script6488(int1) == 0))) {
        IF_SETHIDE(false, comp(1311, 582));  // mtxmgt:disabled_rename
    } else {
        IF_SETHIDE(true, comp(1311, 582));  // mtxmgt:disabled_rename
    };
    var int6 = 0;
    var int7 = -1;
    var int8 = 0;
    var int9 = 1;
    var int10 = 0;
    var int11 = -1 as cs2enum;
    var int12 = -1 as cs2enum;
    if ((int1 == 6865)) {
        if ((int5 == 0)) {
            IF_SETHIDE(false, comp(1311, 520));  // mtxmgt:felix_claim_layer
        } else {
            IF_SETHIDE(true, comp(1311, 520));  // mtxmgt:felix_claim_layer
        };
    } else {
        IF_SETHIDE(true, comp(1311, 520));  // mtxmgt:felix_claim_layer
    };
    if ((struct_getparam(int1, 3847) == 1)) {
        IF_SETHIDE(false, comp(1311, 530));  // mtxmgt:modular_pet_buttons_slots
        IF_SETHIDE(false, comp(1311, 554));  // mtxmgt:modular_pet_buttons_texture
    } else {
        IF_SETHIDE(true, comp(1311, 530));  // mtxmgt:modular_pet_buttons_slots
        IF_SETHIDE(true, comp(1311, 554));  // mtxmgt:modular_pet_buttons_texture
    };
    if (((((int0 == 2) || (int0 == 3)) || (int0 == 5)) || (int0 == 4))) {
        IF_SETHIDE(true, comp(1311, 560));  // mtxmgt:appearance_buttons
        IF_SETHIDE(false, comp(1311, 581));  // mtxmgt:disabled_food
        if ((struct_getparam(int1, 7494) == 1)) {
            int11 = struct_getparam(int1, 8212);
            int12 = struct_getparam(int1, 8213);
            if ((int12 == -1 as cs2enum)) {
                return;
            };
            IF_SETHIDE(false, comp(1311, 557));  // mtxmgt:multi_appearance_buttons
            CC_DELETEALL(comp(1311, 558));  // mtxmgt:multi_appearance_build
            CC_DELETEALL(comp(1311, 559));  // mtxmgt:multi_appearance_control
            int10 = ENUM_GETOUTPUTCOUNT(struct_getparam(int1, 8210));
            int7 = (int7 + 1);
            while ((int7 < int10)) {
                script11605(85918254, 85918255, 28749, 0, ((24 + 5) * int7), int7, 1, "Select", "Unselect", enum_getvalue(0, 36, int12, int7));
                if ((CC_FIND(comp(1311, 559), int7) == 1)) {  // mtxmgt:multi_appearance_control
                    CC_SETOPCURSOR(1, 46);
                };
                if ((int11 != -1)) {
                    script4512(85918254, 24, 24, 0, ((24 + 5) * int7), enum_getvalue(0, 23, int11, int7));
                } else {
                    script152(85918254, 24, 24, 0, ((24 + 5) * int7), 26, inttostring((int7 + 1), 10), 16777215);
                    CC_SETTEXTALIGN(1, 1, 0);
                };
            };
        } else if ((struct_getparam(int1, 3847) == 1)) {
            script3836(int1, int2, int3, int4);
        };
    } else if ((int0 == 1)) {
        if ((struct_getparam(int1, 8705) == 0)) {
            IF_SETHIDE(false, comp(1311, 560));  // mtxmgt:appearance_buttons
        };
        if (((script6488(int1) == 0) || (script11005(int1) == 24000))) {
            IF_SETHIDE(false, comp(1311, 581));  // mtxmgt:disabled_food
        } else {
            IF_SETHIDE(true, comp(1311, 581));  // mtxmgt:disabled_food
        };
        if ((script6488(int1) == 1)) {
            IF_SETHIDE(false, comp(1311, 386));  // mtxmgt:pet_age_layer
        } else {
            IF_SETHIDE(true, comp(1311, 386));  // mtxmgt:pet_age_layer
        };
    };
    return;
}