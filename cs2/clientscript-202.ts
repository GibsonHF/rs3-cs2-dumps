//[clientscript,friendschat_list_op]
function script202(int0: unknown_int, int1: unknown_int, string0: string, string1: string): void {
    switch (int0) {
        case 5: {
            if ((FRIEND_TEST(string1) == 1)) {
                script8512(varclient_2231, string0);
                return;
            };
            FRIEND_ADD(string0);
            break;
        }
        case 6: {
            IGNORE_ADD(string0);
            break;
        }
        case 7: {
            varclient_3936 = string0;
            script2018(8);
            break;
        }
        case 8: {
            IGNORE_DEL(string0);
            break;
        }
        case 9: {
            script1633(string0);
            break;
        }
    };
    return;
}