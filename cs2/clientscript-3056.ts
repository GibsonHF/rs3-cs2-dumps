//
function script3056(int0: unknown_int, int1: int, string0: string, string1: string): void {
    switch (int0) {
        case 1: {
            if ((FRIEND_TEST(REMOVETAGS(string1)) == 0)) {
                FRIEND_ADD(REMOVETAGS(string1));
            };
            break;
        }
        case 2: {
            if ((FRIEND_TEST(REMOVETAGS(string1)) == 0)) {
                IGNORE_ADD(REMOVETAGS(string1));
            };
            break;
        }
        case 3: {
            script3015(`Send message to ${string0}`, "", 0, string1, "");
            break;
        }
        case 5: {
            varclient_2481 = REMOVETAGS(string0);
            script3190();
            break;
        }
        case 6: {
            script15232(1, int1);
            break;
        }
    };
    return;
}