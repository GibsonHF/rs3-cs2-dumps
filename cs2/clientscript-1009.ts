//
function script1009(int0: npc, int1: inv, int2: int, int3: unknown_int, int4: int, int5: unknown_int, int6: unknown_int, int7: unknown_int, string0: string, string1: string): void {
    var string2 = "You can only remove this animal from the 'Check Animals' tab while it has produce to gather.";
    if ((int6 > 1)) {
        if ((strcmp(IF_GETTEXT(comp(90, 54)), string0) == 0)) {
            IF_SETHIDE(true, comp(90, 43));
        };
        return;
    };
    if ((int7 == 1)) {
        script426(string2, comp(90, 10), int2, 0);
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
    IF_SETHIDE(false, comp(90, 43));
    IF_SETNPCMODEL(int0, comp(90, 45));
    IF_SETMODELANIM(BAS_GETANIM_READY(npc_getparam(int0, 3857)), comp(90, 45));
    IF_SETMODELZOOM(int4, comp(90, 45));
    IF_SETMODELANGLE(0, 0, npc_getparam(int0, 3864), npc_getparam(int0, 3865), 0, int4, comp(90, 45));
    IF_SETTEXT(string0, comp(90, 54));
    IF_SETTEXT(string1, comp(90, 55));
    IF_SETTEXT(string3, comp(90, 57));
    IF_SETTEXT(string4, comp(90, 56));
    IF_SETTEXT(string5, comp(90, 48));
    IF_SETTEXT(string6, comp(90, 49));
    IF_SETTEXT(string7, comp(90, 50));
    if ((INV_GETVAR(int1, int2, 48837) == 1)) {
        stack(15217);
        stack(5898421);
        IF_SETGRAPHIC();
        stack(15217);
        stack(5898422);
        IF_SETGRAPHIC();
    } else {
        stack(15218);
        stack(5898421);
        IF_SETGRAPHIC();
        stack(15218);
        stack(5898422);
        IF_SETGRAPHIC();
    };
    if ((int5 == 1)) {
        IF_SETHIDE(false, comp(90, 60));
        IF_SETHIDE(true, comp(90, 59));
        IF_SETHIDE(true, comp(90, 51));
        IF_SETHIDE(false, comp(90, 52));
    } else {
        IF_SETHIDE(true, comp(90, 60));
        IF_SETHIDE(false, comp(90, 59));
        IF_SETHIDE(false, comp(90, 51));
        IF_SETHIDE(true, comp(90, 52));
    };
    return;
}