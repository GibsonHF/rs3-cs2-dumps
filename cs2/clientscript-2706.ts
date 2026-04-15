//
function script2706(int0: obj): string {
    if ((script926(int0) == 0)) {
        if ((script14404(int0) == 0)) {
            if ((strcmp(OC_IOP(int0, 2), "Wield") == 0)) {
                return "You do not meet the requirements to use or wield this item.<br>";
            };
            return "You do not meet the requirements to use or wear this item.<br>";
        };
        if ((strcmp(OC_IOP(int0, 2), "Wield") == 0)) {
            return "You can wield this item but not use it.<br>";
        };
        if ((strcmp(OC_IOP(int0, 2), "Wear") == 0)) {
            return "You can wear this item but not use it.<br>";
        };
        return "You do not meet the requirements to use this item.<br>";
    };
    if ((script928(int0) == 1)) {
        if ((script14404(int0) == 0)) {
            if ((strcmp(OC_IOP(int0, 2), "Wield") == 0)) {
                return "You can use this item but not wield it.<br>";
            };
            return "You can use this item but not wear it.<br>";
        };
    } else if ((script14404(int0) == 0)) {
        if ((strcmp(OC_IOP(int0, 2), "Wield") == 0)) {
            return "You do not meet the requirements to wield this item.<br>";
        };
        return "You do not meet the requirements to wear this item.<br>";
    };
    return "";
}