//
function script359(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, int11: number, int12: number, int13: number, int14: number, int15: number, int16: number, int17: number, string0: string, string1: string, string2: string, string3: string, string4: string, string5: string, string6: string, string7: string, string8: string): void {
    var int18 = SCALE(int5, 100, 106);
    var int19 = SCALE(int6, 100, 106);
    var int20 = 0;
    var int21 = 0;
    var int22 = 0;
    var int23 = 0;
    var int24 = 0;
    var int25 = script2646(int1);
    var int26 = 334;
    var int27 = 512;
    var int28 = INV_GETOBJ(int1, int2);
    IF_SETSIZE(int27, int26, 0, 0, comp(90, 0));  // pof_animal:container_layer
    script15450(int6, int5, int15, int16, int17);
    switch (int14) {
        case 0: {
            IF_SETHIDE(true, comp(90, 4));  // pof_animal:add_remove_layer
            IF_SETHIDE(false, comp(90, 69));  // pof_animal:check_data_layer
            IF_SETHIDE(true, comp(90, 3));  // pof_animal:add_remove_farmhands_layer
            script13972(5898307, 5898308, 28595, "Check Animals", 1);
            script13969(5898304, 5898305, 28595, "Add/Remove Animals");
            script13969(5898389, 5898390, 28595, "Farmhands");
            if (((int28 != -1 as obj) || (OC_HASVAROBJ(int28) == 1))) {
                if ((INV_GETVAR(int1, int2, 48837) == 1)) {
                    IF_SETGRAPHIC(15217 as graphic, comp(90, 81));  // pof_animal:favourite_icon
                } else {
                    IF_SETGRAPHIC(15218 as graphic, comp(90, 81));  // pof_animal:favourite_icon
                };
            };
            if ((script13749() == 0)) {
                IF_CLEAROPS(comp(90, 107));  // pof_animal:health_bar
                IF_CLEAROPS(comp(90, 99));  // pof_animal:happiness_bar
            };
            varclient_6489 = 0;
            varclient_6490 = 0;
            varclient_6491 = 0;
            script3695(int1);
            if ((int0 == 1)) {
                IF_SETHIDE(true, comp(90, 61));  // pof_animal:tab_layer
                IF_SETPOSITION(0, 0, 0, 0, comp(90, 69));  // pof_animal:check_data_layer
                int26 = (int26 - 23);
            };
            if ((int25 != -1)) {
                script3692(5898312, 5898313, "Cure Disease", script915(int4));
                script3692(5898318, 5898319, "Gather Produce", script915(int7));
            } else if ((int1 == 93 as inv)) {
                IF_SETHIDE(true, comp(90, 70));  // pof_animal:button_layer
                int26 = (int26 - 42);
            } else if ((int1 == 859 as inv)) {
                IF_SETHIDE(true, comp(90, 72));  // pof_animal:cure_build
                IF_SETHIDE(true, comp(90, 73));  // pof_animal:cure_click
                IF_SETHIDE(true, comp(90, 78));  // pof_animal:harvest_build
                IF_SETHIDE(true, comp(90, 79));  // pof_animal:harvest_click
            };
            IF_SETSIZE(int27, int26, 0, 0, comp(90, 0));  // pof_animal:container_layer
            if ((int8 == -1)) {
                script13994(5898382, -1, 28556, "", 1);
            } else {
                script13993(5898382, -1, 28556, "");
            };
            if ((int9 == -1)) {
                script13994(5898378, -1, 28556, "", 1);
            } else {
                script13993(5898378, -1, 28556, "");
            };
            if ((int10 == -1)) {
                script13994(5898385, -1, 28556, "", 1);
            } else {
                script13993(5898385, -1, 28556, "");
            };
            IF_SETSIZE(int18, IF_GETHEIGHT(comp(90, 104)), 0, 0, comp(90, 104));  // pof_animal:happinessbar
            IF_SETTEXT(`${inttostring(int5, 10)}%`, comp(90, 105));  // pof_animal:happiness_percentage
            IF_SETSIZE(int19, IF_GETHEIGHT(comp(90, 112)), 0, 0, comp(90, 112));  // pof_animal:healthbar
            IF_SETTEXT(`${inttostring(int6, 10)}%`, comp(90, 113));  // pof_animal:health_percentage
            IF_SETTEXT(string1, comp(90, 131));  // pof_animal:breed
            IF_SETTEXT(string2, comp(90, 106));  // pof_animal:growth_stage
            IF_SETTEXT(string3, comp(90, 129));  // pof_animal:weight
            IF_SETTEXT(string4, comp(90, 130));  // pof_animal:speed
            IF_SETTEXT(string5, comp(90, 128));  // pof_animal:attractiveness
            IF_SETTEXT(string7, comp(90, 116));  // pof_animal:fluff_text
            IF_SETTEXT(string0, comp(90, 117));  // pof_animal:name
            IF_SETTEXT(string6, comp(90, 98));  // pof_animal:food_info
            IF_SETTEXT(string8, comp(90, 132));  // pof_animal:paddock_size
            if ((int8 == -1)) {
                IF_SETHIDE(true, comp(90, 141));  // pof_animal:trait1_layer
                IF_SETHIDE(false, comp(90, 136));  // pof_animal:notraittext
            } else {
                IF_SETHIDE(false, comp(90, 137));  // pof_animal:trait2_layer
                IF_SETHIDE(false, comp(90, 144));  // pof_animal:trait3_layer
                IF_SETHIDE(true, comp(90, 136));  // pof_animal:notraittext
                IF_SETHIDE(false, comp(90, 141));  // pof_animal:trait1_layer
                IF_SETTEXT(struct_getparam(int8, 7456), comp(90, 143));  // pof_animal:trait1
                if ((int9 != -1)) {
                    IF_SETTEXT(struct_getparam(int9, 7456), 5898379);
                } else {
                    IF_SETTEXT("No Trait", comp(90, 139));  // pof_animal:trait2
                };
                if ((int10 != -1)) {
                    IF_SETTEXT(struct_getparam(int10, 7456), 5898386);
                } else {
                    IF_SETTEXT("No Trait", comp(90, 146));  // pof_animal:trait3
                };
            };
            IF_SETNPCMODEL(int11, comp(90, 94));  // pof_animal:model
            IF_SETMODELANIM(BAS_GETANIM_READY(int13), comp(90, 94));  // pof_animal:model
            IF_SETMODELANGLE(0, 0, npc_getparam(int11, 3864), npc_getparam(int11, 3865), 0, int12, comp(90, 94));  // pof_animal:model
            if ((int11 == 14886)) {
                IF_SETPOSITION(39, 18, 0, 0, comp(90, 94));  // pof_animal:model
            };
            if ((int12 > 200)) {
                IF_SETMODELZOOM(int12, comp(90, 94));  // pof_animal:model
            };
            break;
        }
        case 1: {
            if ((int25 != -1)) {
                script3696(int25);
            };
            break;
        }
        case 2: {
            if ((int25 != -1)) {
                IF_SETHIDE(true, comp(90, 4));  // pof_animal:add_remove_layer
                IF_SETHIDE(true, comp(90, 69));  // pof_animal:check_data_layer
                IF_SETHIDE(false, comp(90, 3));  // pof_animal:add_remove_farmhands_layer
                script13969(5898307, 5898308, 28595, "Check Animals");
                script13969(5898304, 5898305, 28595, "Add/Remove Animals");
                script13972(5898389, 5898390, 28595, "Farmhands", 1);
                script4197(int25);
            };
            break;
        }
    };
    if ((dbrow_getfield(int25, 159760, 0) == 2)) {
        IF_SETHIDE(true, comp(90, 62));  // pof_animal:farmhands_tab
    } else {
        IF_SETHIDE(false, comp(90, 62));  // pof_animal:farmhands_tab
    };
    return;
}