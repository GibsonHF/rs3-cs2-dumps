//
function script16583(int0: struct, int1: unknown_int): string {
    if (((int0 == -1 as struct) || (int1 == 0))) {
        return "null";
    };
    switch (int0) {
        case 50082: {
        }
        default: {
            script12478("Item set effect has param: [combatv2_ability_info_has_scripted_text] but no scripted text.");
            return "null";
        }
    };
    return script19021(int1);
}