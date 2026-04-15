//
function script15965(int0: unknown_int, int1: boolean, int2: boolean): void {
    var int3 = comp(862, 8);
    CC_DELETEALL(int3);
    if ((int0 == -1)) {
        script2995(int3, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2100 as dbrow, "Use the dropdown to select a component type.<br><br>This will use a db_find() to find any interface_skin tables with a template_type column matching the chosen type.<br><br>Use the name of the stylesheet this outputs in the appropriate ~cc_add_ wrapper script, the cc_set_stylesheet command or stylesheet_set onload in interface editor.");
        return;
    };
    if ((int0 == 24)) {
        IF_SETTEXT("Fill mode", comp(862, 6));
    } else {
        IF_SETTEXT("Show disabled", comp(862, 6));
    };
    var int4 = 1;
    if ((int2 == true)) {
        IF_SETTEXT("Skin mode. Now: Mobile", comp(862, 7));
        int4 = 2;
    } else {
        IF_SETTEXT("Skin mode. Now: Legacy", comp(862, 7));
    };
    var int1 = script12585(int1);
    var int5 = 0;
    switch (int0) {
        case 4: {
            int5 = db_find_with_count(1409040, int0, 0);
            script20492(int3, int0, int1, int4, int5);
            break;
        }
        default: {
            int5 = db_find_with_count(540688, int0, 0);
            script20492(int3, int0, int1, int4, int5);
            break;
        }
    };
    return;
}