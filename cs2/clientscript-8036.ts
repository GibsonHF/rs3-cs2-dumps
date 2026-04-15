//
function script8036(int0: struct, int1: int): unknown_int {
    if ((int0 == -1 as struct)) {
        return 0;
    };
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = script8033(int0);
    [int2, int3, int4] = script8029(int5);
    switch (int0) {
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
        case 47996: {
            return script8037(int5, int1, int3, int4, 3);
        }
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
        case 47999: {
            return script8037(int5, int2, int1, int4, 1);
        }
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
            return script8037(int5, int2, int3, int1, 2);
        }
    };
    return 0;
}