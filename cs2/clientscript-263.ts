//
function script263(): void {
    var string0 = "Bait: None";
    script13995(comp(923, 13), comp(-1, 65535), 28556 as struct, "", 0);
    script13995(comp(923, 15), comp(-1, 65535), 28556 as struct, "", 0);
    script13995(comp(923, 17), comp(-1, 65535), 28556 as struct, "", 0);
    script13995(comp(923, 19), comp(-1, 65535), 28556 as struct, "", 0);
    script13995(comp(923, 21), comp(-1, 65535), 28556 as struct, "", 0);
    script13995(comp(923, 23), comp(-1, 65535), 28556 as struct, "", 0);
    script13995(comp(923, 25), comp(-1, 65535), 28556 as struct, "", 0);
    script13995(comp(923, 27), comp(-1, 65535), 28556 as struct, "", 0);
    switch (varclient_1109) {
        case 1: {
            string0 = "Bait: worm";
            script13995(comp(923, 13), comp(-1, 65535), 28556 as struct, "", 1);
            break;
        }
        case 2: {
            string0 = "Bait: maggot";
            script13995(comp(923, 15), comp(-1, 65535), 28556 as struct, "", 1);
            break;
        }
        case 4: {
            string0 = "Bait: locust";
            script13995(comp(923, 17), comp(-1, 65535), 28556 as struct, "", 1);
            break;
        }
        case 3: {
            string0 = "Bait: cricket";
            script13995(comp(923, 19), comp(-1, 65535), 28556 as struct, "", 1);
            break;
        }
        case 5: {
            string0 = "Bait: cray";
            script13995(comp(923, 21), comp(-1, 65535), 28556 as struct, "", 1);
            break;
        }
        case 6: {
            string0 = "Bait: shrimp";
            script13995(comp(923, 23), comp(-1, 65535), 28556 as struct, "", 1);
            break;
        }
        case 7: {
            string0 = "Bait: green moth";
            script13995(comp(923, 25), comp(-1, 65535), 28556 as struct, "", 1);
            break;
        }
        case 8: {
            string0 = "Bait: grey moth";
            script13995(comp(923, 27), comp(-1, 65535), 28556 as struct, "", 1);
            break;
        }
    };
    IF_SETTEXT(string0, comp(923, 76));
    return;
}