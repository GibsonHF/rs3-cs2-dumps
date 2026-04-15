//
function script6125(int0: unknown_int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int): void {
    varclient_1894 = int1;
    varclient_1895 = int2;
    varclient_1896 = int3;
    varclient_1897 = int4;
    varclient_1898 = int5;
    varclient_1899 = int6;
    script6138(0);
    script6137(int1, int2, int3, int4, int5, int6);
    script6130();
    script6127(int0);
    varclient_1893 = 0;
    switch (RANDOM(6)) {
        case 0: {
            varclient_1900 = 4;
            varclient_1901 = 8;
            varclient_1902 = 12;
            break;
        }
        case 1: {
            varclient_1900 = 4;
            varclient_1901 = 12;
            varclient_1902 = 8;
            break;
        }
        case 2: {
            varclient_1900 = 8;
            varclient_1901 = 4;
            varclient_1902 = 12;
            break;
        }
        case 3: {
            varclient_1900 = 8;
            varclient_1901 = 12;
            varclient_1902 = 4;
            break;
        }
        case 4: {
            varclient_1900 = 12;
            varclient_1901 = 4;
            varclient_1902 = 8;
            break;
        }
        case 5: {
            varclient_1900 = 12;
            varclient_1901 = 8;
            varclient_1902 = 4;
            break;
        }
    };
    return;
}