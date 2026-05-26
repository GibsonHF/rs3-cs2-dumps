//
function script265(): void {
    script13995(60489729, -1, 28556, "", 0);
    script13995(60489731, -1, 28556, "", 0);
    script13995(60489733, -1, 28556, "", 0);
    script13995(60489735, -1, 28556, "", 0);
    script13995(60489737, -1, 28556, "", 0);
    script13995(60489739, -1, 28556, "", 0);
    var string0 = "Hook: None";
    switch (varclient_1110) {
        case 2: {
            string0 = "Hook: slim";
            script13995(60489731, -1, 28556, "", 1);
            break;
        }
        case 1: {
            string0 = "Hook: standard";
            script13995(60489729, -1, 28556, "", 1);
            break;
        }
        case 3: {
            string0 = "Hook: large";
            script13995(60489733, -1, 28556, "", 1);
            break;
        }
        case 6: {
            string0 = "Hook: double";
            script13995(60489735, -1, 28556, "", 1);
            break;
        }
        case 4: {
            string0 = "Hook: bone";
            script13995(60489737, -1, 28556, "", 1);
            break;
        }
        case 5: {
            string0 = "Hook: wooden";
            script13995(60489739, -1, 28556, "", 1);
            break;
        }
    };
    IF_SETTEXT(string0, comp(923, 67));
    return;
}