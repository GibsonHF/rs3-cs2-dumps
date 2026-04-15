//
function script13192(int0: component, int1: int, string0: string): void {
    if (((int1 < 0) || (int1 >= 28))) {
        return;
    };
    var int2 = INV_GETOBJ(93 as inv, int1);
    if ((int2 == -1 as obj)) {
        return;
    };
    if ((strcmp(string0, OC_NAME(int2)) == 0)) {
        script13189(IF_GETLAYER(int0), 93 as inv, int1, int2, INV_GETNUM(93 as inv, int1));
    } else {
        printmessage("Adding item to the Keepsake Box failed, please try again.");
    };
    return;
}