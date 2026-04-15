//
function script2524(int0: struct, int1: int): int {
    switch (int0) {
        case 41497:
        case 41498:
        case 41499:
        case 41500:
        case 41501:
        case 41502: {
            if ((script2525(int1, int0) == 1)) {
                return script2526(int0);
            };
            break;
        }
        case 41513:
        case 41514:
        case 41515:
        case 41516:
        case 41517:
        case 41518:
        case 41519:
        case 41520:
        case 41521:
        case 41522:
        case 42725:
        case 42726:
        case 42728:
        case 38946:
        case 39247:
        case 47994:
        case 47995:
        case 47996:
        case 42729:
        case 42730:
        case 42774:
        case 42775:
        case 42776:
        case 42777:
        case 42778:
        case 42779:
        case 42780:
        case 42781:
        case 42782:
        case 42783:
        case 42784:
        case 39403:
        case 39404:
        case 47997:
        case 47998:
        case 47999:
        case 42785:
        case 42786:
        case 42787:
        case 42788:
        case 42789:
        case 42790:
        case 42791:
        case 42792:
        case 42793:
        case 42794:
        case 42795:
        case 42796:
        case 42797:
        case 39405:
        case 39406:
        case 48000:
        case 48001:
        case 48002: {
            if ((script8036(int0, int1) == 1)) {
                return script2526(int0);
            };
            break;
        }
    };
    if (((varbitplayer_27168 == 1) && (struct_getparam(int0, 7531) == false))) {
        return script2526(int0);
    };
    if (((varbitplayer_27169 == 1) && (struct_getparam(int0, 7532) == false))) {
        return script2526(int0);
    };
    var int2 = 0;
    var int3 = struct_getparam(int0, 7514);
    if (((script13749() == true) && (struct_getparam(int0, 8051) != -1 as cs2enum))) {
        int3 = struct_getparam(int0, 8051);
    };
    switch (struct_getparam(int0, 7513)) {
        case 6:
        case 7:
        case 8: {
            int2 = struct_getparam(int0, 7519);
            if (((int1 < int2) || (int1 > (int2 + struct_getparam(int0, 7520))))) {
                return script2526(int0);
            };
            break;
        }
        case 4:
        case 5: {
            int2 = struct_getparam(int0, 7517);
            if ((int2 == -1)) {
                int2 = ENUM_GETOUTPUTCOUNT(int3);
            };
            if ((int1 > int2)) {
                return script2526(int0);
            };
            break;
        }
        case 3: {
            if (((int1 > 1) || (int1 < 0))) {
                return script2526(int0);
            };
            break;
        }
    };
    return script2975(int0, int1);
}