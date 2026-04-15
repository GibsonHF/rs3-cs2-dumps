//
function script16094(int0: cs2enum): string {
    var int1 = 0;
    while ((int1 < ENUM_GETOUTPUTCOUNT(int0))) {
        if ((script13488((enum_getvalue(0, 0, int0, int1) - 1)) == 0)) {
            return "You have not yet claimed this creature's soul";
        };
        int1 = (int1 + 1);
    };
    return "";
}