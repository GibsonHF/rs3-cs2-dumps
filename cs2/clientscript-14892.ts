//
function script14892(int0: cs2enum): void {
    var int1 = comp(-1, 65535);
    var int2 = comp(693, 73);
    switch (int0) {
        case 14093: {
            script13972(comp(693, 75), comp(-1, 65535), 28595 as struct, "General Research", 1);
            script13972(comp(693, 76), comp(-1, 65535), 28595 as struct, "Special Research", 0);
            IF_SETHIDE(false, comp(693, 69));
            IF_SETHIDE(true, comp(693, 72));
            int1 = comp(693, 69);
            break;
        }
        case 14094: {
            script13972(comp(693, 75), comp(-1, 65535), 28595 as struct, "General Research", 0);
            script13972(comp(693, 76), comp(-1, 65535), 28595 as struct, "Special Research", 1);
            IF_SETHIDE(true, comp(693, 69));
            IF_SETHIDE(false, comp(693, 72));
            int1 = comp(693, 72);
            break;
        }
    };
    script14871(int1, int2);
    return;
}