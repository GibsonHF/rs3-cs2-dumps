//
function script7165(int0: number): number {
    if ((OC_CATEGORY(int0) != 149)) {
        script12478("tried to get total runes of a non-rune object");
        return 0;
    };
    switch (int0) {
        case 17780: {
            if ((INV_TOTALPARAM(94, 972) > 0)) {
                return -1;
            };
            return (INV_TOTAL(93, 17780) + INV_TOTAL(93, 16091));
        }
        case 17781: {
            if ((INV_TOTALPARAM(94, 973) > 0)) {
                return -1;
            };
            return (INV_TOTAL(93, 17781) + INV_TOTAL(93, 16092));
        }
        case 17783: {
            if ((INV_TOTALPARAM(94, 975) > 0)) {
                return -1;
            };
            return (INV_TOTAL(93, 17783) + INV_TOTAL(93, 16094));
        }
        case 17782: {
            if ((INV_TOTALPARAM(94, 974) > 0)) {
                return -1;
            };
            return (INV_TOTAL(93, 17782) + INV_TOTAL(93, 16093));
        }
        case 17784: {
            return (INV_TOTAL(93, 17784) + INV_TOTAL(93, 16095));
        }
        case 17788: {
            return (INV_TOTAL(93, 17788) + INV_TOTAL(93, 16099));
        }
        case 17785: {
            return (INV_TOTAL(93, 17785) + INV_TOTAL(93, 16096));
        }
        case 17786: {
            return (INV_TOTAL(93, 17786) + INV_TOTAL(93, 16097));
        }
        case 17787: {
            return (INV_TOTAL(93, 17787) + INV_TOTAL(93, 16098));
        }
        case 17793: {
            return (INV_TOTAL(93, 17793) + INV_TOTAL(93, 16104));
        }
        case 17789: {
            return (INV_TOTAL(93, 17789) + INV_TOTAL(93, 16100));
        }
        case 17791: {
            return (INV_TOTAL(93, 17791) + INV_TOTAL(93, 16102));
        }
        case 17790: {
            return (INV_TOTAL(93, 17790) + INV_TOTAL(93, 16101));
        }
        case 17792: {
            return (INV_TOTAL(93, 17792) + INV_TOTAL(93, 16103));
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
    return INV_TOTAL(93, int0);
}