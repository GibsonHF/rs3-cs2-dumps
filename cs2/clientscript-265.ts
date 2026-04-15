//
function script265(): void {
    script13995(comp(923, 1), comp(-1, 65535), 28556 as struct, "", 0);
    script13995(comp(923, 3), comp(-1, 65535), 28556 as struct, "", 0);
    script13995(comp(923, 5), comp(-1, 65535), 28556 as struct, "", 0);
    script13995(comp(923, 7), comp(-1, 65535), 28556 as struct, "", 0);
    script13995(comp(923, 9), comp(-1, 65535), 28556 as struct, "", 0);
    script13995(comp(923, 11), comp(-1, 65535), 28556 as struct, "", 0);
    var string0 = "Hook: None";
    switch (varclient_1110) {
        case 2: {
            string0 = "Hook: slim";
            script13995(comp(923, 3), comp(-1, 65535), 28556 as struct, "", 1);
            break;
        }
        case 1: {
            string0 = "Hook: standard";
            script13995(comp(923, 1), comp(-1, 65535), 28556 as struct, "", 1);
            break;
        }
        case 3: {
            string0 = "Hook: large";
            script13995(comp(923, 5), comp(-1, 65535), 28556 as struct, "", 1);
            break;
        }
        case 6: {
            string0 = "Hook: double";
            script13995(comp(923, 7), comp(-1, 65535), 28556 as struct, "", 1);
            break;
        }
        case 4: {
            string0 = "Hook: bone";
            script13995(comp(923, 9), comp(-1, 65535), 28556 as struct, "", 1);
            break;
        }
        case 5: {
            string0 = "Hook: wooden";
            script13995(comp(923, 11), comp(-1, 65535), 28556 as struct, "", 1);
            break;
        }
    };
    IF_SETTEXT(string0, comp(923, 67));
    return;
}