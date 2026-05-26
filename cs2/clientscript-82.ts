//
function script82(int0: number, int1: number, int2: number, int3: number, int4: number, string0: string): void {
    if ((((int1 == -1) || (int2 == -1)) || (int3 == -1))) {
        return;
    };
    var string0 = REMOVETAGS(string0);
    if ((STRING_INDEXOF_CHAR(string0, 42, 0) == 0)) {
        string0 = SUBSTRING(string0, 1, STRING_LENGTH(string0));
    };
    IF_SETTEXT(string0, 97648661);
    var int5 = 0;
    if ((int0 > 0)) {
        IF_SETTEXT(inttostring(int0, 10), 97648657);
        int5 = (COMLEVEL_ACTIVE() - int0);
    } else {
        IF_SETTEXT("-", 97648657);
    };
    if ((int5 >= 0)) {
        IF_SETCOLOUR(script693((255 - SCALE(int5, COMLEVEL_ACTIVE(), 255)), 255, 0), 97648657);
    } else {
        IF_SETCOLOUR(script693(255, (255 + MAX(SCALE(int5, MAX(int0, 200), 255), -255)), 0), 97648657);
    };
    IF_SETGRAPHIC(int1, 97648667);
    var string1 = "Weakness: ";
    switch (int1) {
        case 197: {
            string1 = strconcat(string1, "Melee");
            break;
        }
        case 202: {
            string1 = strconcat(string1, "Magic");
            break;
        }
        case 200: {
            string1 = strconcat(string1, "Ranged");
            break;
        }
        case 9286: {
            string1 = strconcat(string1, "None");
            break;
        }
        case 14364: {
            string1 = strconcat(string1, "Air Spells");
            break;
        }
        case 14365: {
            string1 = strconcat(string1, "Water Spells");
            break;
        }
        case 14366: {
            string1 = strconcat(string1, "Earth Spells");
            break;
        }
        case 14367: {
            string1 = strconcat(string1, "Fire Spells");
            break;
        }
        case 240: {
            string1 = strconcat(string1, "Stab");
            break;
        }
        case 234: {
            string1 = strconcat(string1, "Slash");
            break;
        }
        case 256: {
            string1 = strconcat(string1, "Crush");
            break;
        }
        case 14405: {
            string1 = strconcat(string1, "Arrows");
            break;
        }
        case 14370: {
            string1 = strconcat(string1, "Bolts");
            break;
        }
        case 251: {
            string1 = strconcat(string1, "Thrown");
            break;
        }
        case 13201: {
            string1 = strconcat(string1, "Thieving");
            break;
        }
        case 13214: {
            string1 = strconcat(string1, "Slayer");
            break;
        }
        case 13202: {
            string1 = strconcat(string1, "Hunter");
            break;
        }
        case 13217: {
            string1 = strconcat(string1, "Agility");
            break;
        }
        case 13215: {
            string1 = strconcat(string1, "Dungeoneering");
            break;
        }
        case 10784: {
            string1 = strconcat(string1, "Archaeology");
            break;
        }
        case 30934: {
            string1 = strconcat(string1, "Necromancy");
            break;
        }
    };
    IF_SETPARAM_STRING(4277, string1, 97648655);
    IF_SETPARAM_INT(7540, 2, 97648655);
    IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643), 97648667);
    varclient_7158 = -1;
    IF_SETTEXT("-", 97648715);
    IF_SETCOLOUR(16777215, 97648715);
    script3536("Last known hit chance", 97648715, -1);
    script91();
    return;
}