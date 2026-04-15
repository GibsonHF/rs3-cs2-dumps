//
function script14804(int0: component): void {
    var int1 = 0;
    var string0 = "View";
    var string1 = "";
    switch (int0) {
        case 44892166: {
            int1 = 0;
            string0 = "View overview";
            string1 = "An overview of your archaeological journey.";
            break;
        }
        case 44892168: {
            int1 = 2;
            string0 = "View mystery notes";
            string1 = "Notes on uncovered mysteries.";
            break;
        }
        case 44892167: {
            int1 = 1;
            string0 = "View artefact notes";
            string1 = "Notes on archaeological artefacts.";
            break;
        }
        case 44892169: {
            int1 = 3;
            string0 = "View research notes";
            string1 = "Notes on field research.";
            break;
        }
    };
    IF_SETOP(1, string0, int0);
    IF_SETOPCURSOR(1, 46 as cursor, int0);
    IF_SETONOP(callback(script14805, int1), int0);
    IF_SETONMOUSEREPEAT(callback(script3876, string1, int0, -1), int0);
    return;
}