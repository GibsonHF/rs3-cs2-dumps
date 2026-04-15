//
function script15506(int0: component, int1: unknown_int): string {
    var int2 = enum_getvalue(9, 0, 16178 as cs2enum, int0);
    var int3 = -1 as obj;
    var int4 = -1;
    switch (int0) {
        case 50462901:
        case 50462860:
        case 50462855:
        case 50462850:
        case 50462845:
        case 50462840:
        case 50462835:
        case 50462830:
        case 50462825:
        case 50462820: {
            int3 = script15472(int2);
            if (((int3 != -1 as obj) && (script15468(int2) == false))) {
                return `Select ${OC_NAME(int3)}`;
            };
            return "Select Gem (Already claimed)";
        }
        case 50462896:
        case 50462895:
        case 50462889:
        case 50462883:
        case 50462877:
        case 50462871:
        case 50462865: {
            if ((script15476(int2) == 1)) {
                return "View reward (Already claimed)";
            };
            return "View reward";
        }
        case 50462973:
        case 50462935: {
            return "Refresh prizes";
        }
        case 50462931:
        case 50462934:
        case 50462916: {
            return "Cancel refresh";
        }
        case 50462784:
        case 50462781:
        case 50462778:
        case 50462775:
        case 50462772:
        case 50462765:
        case 50462758:
        case 50462751:
        case 50462744:
        case 50462737: {
            if ((script15473((int2 - 1)) == 1)) {
                return "View reward (Already claimed)";
            };
            return "View reward";
        }
    };
    return "";
}