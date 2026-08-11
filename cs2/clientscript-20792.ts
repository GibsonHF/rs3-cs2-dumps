//
function script20792(int0: number, int1: number): void {
    script16257();
    varclient_8427 = int0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 300;
    var int5 = 0;
    [int2, int3] = script11980("", 53299);
    if ((IF_HASSUBOVERLAY(comp(1477, 788), 1514 as overlayinterface) == 0)) {  // toplevel_v2:context_menu_content_layer
        script16569(1514);
    };
    if ((CC_FIND(int0, int1) == 1)) {
        int5 = script20794(((int4 - int2) - (4 * 2)));
        script13536(int4, (int5 + int3), int0, int1, 2, 0, 0, 50, CC_GETWIDTH());
    };
    return;
}