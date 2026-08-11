//
function script1009(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, string0: string, string1: string): void {
    var string2 = "You can only remove this animal from the 'Check Animals' tab while it has produce to gather.";
    if ((int6 > 1)) {
        if ((strcmp(IF_GETTEXT(comp(90, 54)), string0) == 0)) {  // pof_animal:showstats_name
            IF_SETHIDE(true, comp(90, 43));  // pof_animal:showstats_layer
        };
        return;
    };
    if ((int7 == 1)) {
        script426(string2, 5898250, int2, 0);
        printmessage(string2);
        return;
    };
    var int8 = INV_GETOBJ(int1, int2);
    if ((int8 == -1 as obj)) {
        return;
    };
    var int9 = item_getparam(int8, 7452);
    if ((int9 == -1 as dbrow)) {
        return;
    };
    var string3 = OC_NAME(int8);
    var string4 = "Gender: Female";
    if ((int3 == 0)) {
        string4 = "Gender: Male";
    };
    var int10 = -1 as struct;
    var int11 = -1 as struct;
    var int12 = -1 as struct;
    var string5 = "";
    var string6 = "";
    var string7 = "";
    int10 = enum_getvalue(0, 73, 14342 as cs2enum, INV_GETVAR(int1, int2, 41807));
    if ((INV_GETVAR(int1, int2, 41808) > 0)) {
        int11 = enum_getvalue(0, 73, 14343 as cs2enum, INV_GETVAR(int1, int2, 41808));
    };
    if ((INV_GETVAR(int1, int2, 41809) > 0)) {
        int12 = enum_getvalue(0, 73, 14344 as cs2enum, INV_GETVAR(int1, int2, 41809));
    };
    [int10, int11, int12] = script2640(int10, int11, int12, int9);
    if ((int10 != -1 as struct)) {
        string5 = struct_getparam(int10, 7456);
    };
    if ((int11 != -1 as struct)) {
        string6 = struct_getparam(int11, 7456);
    };
    if ((int12 != -1 as struct)) {
        string7 = struct_getparam(int12, 7456);
    };
    IF_SETHIDE(false, comp(90, 43));  // pof_animal:showstats_layer
    IF_SETNPCMODEL(int0, comp(90, 45));  // pof_animal:showstats_model
    IF_SETMODELANIM(BAS_GETANIM_READY(npc_getparam(int0, 3857)), comp(90, 45));  // pof_animal:showstats_model
    IF_SETMODELZOOM(int4, comp(90, 45));  // pof_animal:showstats_model
    IF_SETMODELANGLE(0, 0, npc_getparam(int0, 3864), npc_getparam(int0, 3865), 0, int4, comp(90, 45));  // pof_animal:showstats_model
    IF_SETTEXT(string0, comp(90, 54));  // pof_animal:showstats_name
    IF_SETTEXT(string1, comp(90, 55));  // pof_animal:showstats_growthstage
    IF_SETTEXT(string3, comp(90, 57));  // pof_animal:showstats_breed
    IF_SETTEXT(string4, comp(90, 56));  // pof_animal:showstats_gender
    IF_SETTEXT(string5, comp(90, 48));  // pof_animal:showstats_trait1
    IF_SETTEXT(string6, comp(90, 49));  // pof_animal:showstats_trait2
    IF_SETTEXT(string7, comp(90, 50));  // pof_animal:showstats_trait3
    if ((INV_GETVAR(int1, int2, 48837) == 1)) {
        IF_SETGRAPHIC(15217 as graphic, comp(90, 181));  // pof_animal:showstats_favourite_pen_icon
        IF_SETGRAPHIC(15217 as graphic, comp(90, 182));  // pof_animal:showstats_favourite_inv_icon
    } else {
        IF_SETGRAPHIC(15218 as graphic, comp(90, 181));  // pof_animal:showstats_favourite_pen_icon
        IF_SETGRAPHIC(15218 as graphic, comp(90, 182));  // pof_animal:showstats_favourite_inv_icon
    };
    if ((int5 == 1)) {
        IF_SETHIDE(false, comp(90, 60));  // pof_animal:showstats_add_button
        IF_SETHIDE(true, comp(90, 59));  // pof_animal:showstats_remove_button
        IF_SETHIDE(true, comp(90, 51));  // pof_animal:showstats_favourite_pen_layer
        IF_SETHIDE(false, comp(90, 52));  // pof_animal:showstats_favourite_inv_layer
    } else {
        IF_SETHIDE(true, comp(90, 60));  // pof_animal:showstats_add_button
        IF_SETHIDE(false, comp(90, 59));  // pof_animal:showstats_remove_button
        IF_SETHIDE(false, comp(90, 51));  // pof_animal:showstats_favourite_pen_layer
        IF_SETHIDE(true, comp(90, 52));  // pof_animal:showstats_favourite_inv_layer
    };
    return;
}