//
function script6389(int0: number, string0: string): string {
    var int1 = 0;
    switch (OC_CATEGORY(int0)) {
        case 87: {
            if ((item_getparam(int0, 4763) == 1)) {
                var [int1, string0] = script6393(int1, string0, 0);
            };
            if ((item_getparam(int0, 4764) == 1)) {
                [int1, string0] = script6393(int1, string0, 2);
            };
            if ((item_getparam(int0, 4767) == 1)) {
                [int1, string0] = script6393(int1, string0, 1);
            };
            if ((item_getparam(int0, 4768) == 1)) {
                [int1, string0] = script6393(int1, string0, 3);
            };
            if ((item_getparam(int0, 4765) == 1)) {
                [int1, string0] = script6393(int1, string0, 4);
            };
            if ((item_getparam(int0, 4766) == 1)) {
                [int1, string0] = script6393(int1, string0, 6);
            };
            if ((item_getparam(int0, 4769) == 1)) {
                [int1, string0] = script6393(int1, string0, 5);
            };
            if ((item_getparam(int0, 5557) == 1)) {
                [int1, string0] = script6393(int1, string0, 23);
            };
            if ((item_getparam(int0, 4771) == 1)) {
                [int1, string0] = script6393(int1, string0, 15);
            };
            if ((item_getparam(int0, 4782) == 1)) {
                [int1, string0] = script6393(int1, string0, 18);
            };
            if ((item_getparam(int0, 4770) == 1)) {
                [int1, string0] = script6393(int1, string0, 16);
            };
            if ((item_getparam(int0, 4772) == 1)) {
                [int1, string0] = script6393(int1, string0, 17);
            };
            if ((item_getparam(int0, 4773) == 1)) {
                [int1, string0] = script6393(int1, string0, 12);
            };
            if ((item_getparam(int0, 4774) == 1)) {
                [int1, string0] = script6393(int1, string0, 20);
            };
            if ((item_getparam(int0, 4775) == 1)) {
                [int1, string0] = script6393(int1, string0, 14);
            };
            if ((item_getparam(int0, 4776) == 1)) {
                [int1, string0] = script6393(int1, string0, 13);
            };
            if ((item_getparam(int0, 4777) == 1)) {
                [int1, string0] = script6393(int1, string0, 10);
            };
            if ((item_getparam(int0, 4778) == 1)) {
                [int1, string0] = script6393(int1, string0, 7);
            };
            if ((item_getparam(int0, 4779) == 1)) {
                [int1, string0] = script6393(int1, string0, 11);
            };
            if ((item_getparam(int0, 4780) == 1)) {
                [int1, string0] = script6393(int1, string0, 8);
            };
            if ((item_getparam(int0, 4781) == 1)) {
                [int1, string0] = script6393(int1, string0, 9);
            };
            if ((item_getparam(int0, 4783) == 1)) {
                [int1, string0] = script6393(int1, string0, 19);
            };
            if ((item_getparam(int0, 4784) == 1)) {
                [int1, string0] = script6393(int1, string0, 22);
            };
            if ((item_getparam(int0, 4785) == 1)) {
                [int1, string0] = script6393(int1, string0, 21);
            };
            if ((item_getparam(int0, 4787) == 1)) {
                [int1, string0] = script6393(int1, string0, 24);
            };
            if ((item_getparam(int0, 4788) == 1)) {
                [int1, string0] = script6393(int1, string0, 25);
            };
            if ((item_getparam(int0, 5883) == 1)) {
                [int1, string0] = script6393(int1, string0, 26);
            };
            break;
        }
        case 3142: {
            if ((item_getparam(int0, 4018) == 1)) {
                [int1, string0] = script6393(int1, string0, 0);
            };
            if ((item_getparam(int0, 4019) == 1)) {
                [int1, string0] = script6393(int1, string0, 2);
            };
            if ((item_getparam(int0, 4020) == 1)) {
                [int1, string0] = script6393(int1, string0, 1);
            };
            if ((item_getparam(int0, 4021) == 1)) {
                [int1, string0] = script6393(int1, string0, 3);
            };
            if ((item_getparam(int0, 4022) == 1)) {
                [int1, string0] = script6393(int1, string0, 4);
            };
            if ((item_getparam(int0, 4023) == 1)) {
                [int1, string0] = script6393(int1, string0, 6);
            };
            if ((item_getparam(int0, 4024) == 1)) {
                [int1, string0] = script6393(int1, string0, 5);
            };
            if ((item_getparam(int0, 4025) == 1)) {
                [int1, string0] = script6393(int1, string0, 23);
            };
            if ((item_getparam(int0, 4026) == 1)) {
                [int1, string0] = script6393(int1, string0, 15);
            };
            if ((item_getparam(int0, 4027) == 1)) {
                [int1, string0] = script6393(int1, string0, 18);
            };
            if ((item_getparam(int0, 7946) == 1)) {
                [int1, string0] = script6393(int1, string0, 28);
            };
            break;
        }
        default: {
            string0 = strconcat(string0, enum_getvalue(17, 36, 680 as cs2enum, item_getparam(int0, 4242)));
            break;
        }
    };
    return string0;
}