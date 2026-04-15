//
function script3108(int0: struct): string {
    if (((struct_getparam(int0, 2806) == 4) && (struct_getparam(int0, 2880) != 5))) {
        if ((struct_getparam(int0, 9409) == 1)) {
            return "Hex Spell<br>";
        };
        switch (struct_getparam(int0, 2873)) {
            case 1: {
                return "Air Spell<br>";
            }
            case 2: {
                return "Water Spell<br>";
            }
            case 3: {
                return "Earth Spell<br>";
            }
            case 4: {
                return "Fire Spell<br>";
            }
        };
        return "Spell<br>";
    };
    if ((struct_getparam(int0, 2806) == 7)) {
        if ((struct_getparam(int0, 2947) == 1)) {
            return "Curse<br>";
        };
        return "Prayer<br>";
    };
    if ((((((((struct_getparam(int0, 2806) != 1) && (struct_getparam(int0, 2806) != 2)) && (struct_getparam(int0, 2806) != 5)) && (struct_getparam(int0, 2806) != 6)) && (struct_getparam(int0, 2806) != 3)) && (struct_getparam(int0, 2806) != 4)) && (struct_getparam(int0, 2806) != 29))) {
        return "";
    };
    return "Basic Ability<br>";
}