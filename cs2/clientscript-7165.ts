//
function script7165(int0: obj): int {
    if ((OC_CATEGORY(int0) != 149 as category)) {
        script12478("tried to get total runes of a non-rune object");
        return 0;
    };
    switch (int0) {
        case 17780: {
            if ((INV_TOTALPARAM(94 as inv, 972) > 0)) {
                return -1;
            };
            return (INV_TOTAL(93 as inv, 17780 as obj) + INV_TOTAL(93 as inv, 16091 as obj));
        }
        case 17781: {
            if ((INV_TOTALPARAM(94 as inv, 973) > 0)) {
                return -1;
            };
            return (INV_TOTAL(93 as inv, 17781 as obj) + INV_TOTAL(93 as inv, 16092 as obj));
        }
        case 17783: {
            if ((INV_TOTALPARAM(94 as inv, 975) > 0)) {
                return -1;
            };
            return (INV_TOTAL(93 as inv, 17783 as obj) + INV_TOTAL(93 as inv, 16094 as obj));
        }
        case 17782: {
            if ((INV_TOTALPARAM(94 as inv, 974) > 0)) {
                return -1;
            };
            return (INV_TOTAL(93 as inv, 17782 as obj) + INV_TOTAL(93 as inv, 16093 as obj));
        }
        case 17784: {
            return (INV_TOTAL(93 as inv, 17784 as obj) + INV_TOTAL(93 as inv, 16095 as obj));
        }
        case 17788: {
            return (INV_TOTAL(93 as inv, 17788 as obj) + INV_TOTAL(93 as inv, 16099 as obj));
        }
        case 17785: {
            return (INV_TOTAL(93 as inv, 17785 as obj) + INV_TOTAL(93 as inv, 16096 as obj));
        }
        case 17786: {
            return (INV_TOTAL(93 as inv, 17786 as obj) + INV_TOTAL(93 as inv, 16097 as obj));
        }
        case 17787: {
            return (INV_TOTAL(93 as inv, 17787 as obj) + INV_TOTAL(93 as inv, 16098 as obj));
        }
        case 17793: {
            return (INV_TOTAL(93 as inv, 17793 as obj) + INV_TOTAL(93 as inv, 16104 as obj));
        }
        case 17789: {
            return (INV_TOTAL(93 as inv, 17789 as obj) + INV_TOTAL(93 as inv, 16100 as obj));
        }
        case 17791: {
            return (INV_TOTAL(93 as inv, 17791 as obj) + INV_TOTAL(93 as inv, 16102 as obj));
        }
        case 17790: {
            return (INV_TOTAL(93 as inv, 17790 as obj) + INV_TOTAL(93 as inv, 16101 as obj));
        }
        case 17792: {
            return (INV_TOTAL(93 as inv, 17792 as obj) + INV_TOTAL(93 as inv, 16103 as obj));
        }
        case 556:
        case 555:
        case 554:
        case 557:
        case 4696:
        case 4698:
        case 4697:
        case 4694:
        case 4695:
        case 4699:
        case 558:
        case 559:
        case 566:
        case 565:
        case 564:
        case 9075:
        case 560:
        case 563:
        case 562:
        case 561:
        case 58450:
        case 21773: {
            return script18406(int0);
        }
    };
    script12478(`unrecognised type of rune when checking rune total in makex2012 - ${OC_NAME(int0)}`);
    return INV_TOTAL(93 as inv, int0);
}