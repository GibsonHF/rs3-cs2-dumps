//
function script10325(int0: unknown_int, int1: unknown_int, string0: string): void {
    var string1 = REMOVETAGS(string0);
    switch (int1) {
        case 1: {
            script8512(varclient_2231, string0);
            break;
        }
        case 4: {
            break;
        }
        case 5: {
            break;
        }
        case 6: {
            break;
        }
        case 7: {
            break;
        }
        case 8: {
            break;
        }
        case 9: {
            if ((FRIEND_TEST(string0) == 1)) {
                script10278(`Attempting to remove ${string0} from your Friends List`);
                varclient_3936 = string1;
                script2018(8);
            } else if ((IGNORE_TEST(string0) == 1)) {
                script10278(`Attempting to remove ${string0} from your Ignore List.`);
                IGNORE_DEL(string1);
            } else {
                script10278(`Attempting to add ${string0} to your Friends List.`);
                FRIEND_ADD(string1);
            };
            break;
        }
        case 10: {
            script10278(`Attempting to add ${string0} to your Ignore List.`);
            IGNORE_ADD(string1);
            break;
        }
    };
    return;
}