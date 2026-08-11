//
function script263(): void {
    var string0 = "Bait: None";
    script13995(60489741, -1, 28556, "", 0);
    script13995(60489743, -1, 28556, "", 0);
    script13995(60489745, -1, 28556, "", 0);
    script13995(60489747, -1, 28556, "", 0);
    script13995(60489749, -1, 28556, "", 0);
    script13995(60489751, -1, 28556, "", 0);
    script13995(60489753, -1, 28556, "", 0);
    script13995(60489755, -1, 28556, "", 0);
    switch (varclient_1109) {
        case 1: {
            string0 = "Bait: worm";
            script13995(60489741, -1, 28556, "", 1);
            break;
        }
        case 2: {
            string0 = "Bait: maggot";
            script13995(60489743, -1, 28556, "", 1);
            break;
        }
        case 4: {
            string0 = "Bait: locust";
            script13995(60489745, -1, 28556, "", 1);
            break;
        }
        case 3: {
            string0 = "Bait: cricket";
            script13995(60489747, -1, 28556, "", 1);
            break;
        }
        case 5: {
            string0 = "Bait: cray";
            script13995(60489749, -1, 28556, "", 1);
            break;
        }
        case 6: {
            string0 = "Bait: shrimp";
            script13995(60489751, -1, 28556, "", 1);
            break;
        }
        case 7: {
            string0 = "Bait: green moth";
            script13995(60489753, -1, 28556, "", 1);
            break;
        }
        case 8: {
            string0 = "Bait: grey moth";
            script13995(60489755, -1, 28556, "", 1);
            break;
        }
    };
    IF_SETTEXT(string0, comp(923, 76));  // fishcomp_side:bait_heading_txt
    return;
}