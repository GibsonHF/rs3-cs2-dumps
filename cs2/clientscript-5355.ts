//
function script5355(int0: number): string {
    switch (int0) {
        case 3:
        case 4:
        case 5: {
            if ((STAT_BASE(24 as stat) < 10)) {
                return `This slot is unlocked at level ${inttostring(10, 10)} Dungeoneering.`;
            };
            break;
        }
        case 6:
        case 7:
        case 8: {
            if ((STAT_BASE(24 as stat) < 40)) {
                return `This slot is unlocked at level ${inttostring(40, 10)} Dungeoneering.`;
            };
            break;
        }
        case 9:
        case 10:
        case 11: {
            if ((STAT_BASE(24 as stat) < 80)) {
                return `This slot is unlocked at level ${inttostring(80, 10)} Dungeoneering.`;
            };
            break;
        }
        case 12:
        case 13:
        case 14: {
            if ((STAT_BASE(24 as stat) < 110)) {
                return `This slot is unlocked at level ${inttostring(110, 10)} Dungeoneering.`;
            };
            break;
        }
    };
    return "This slot is unlocked at a higher Dungeoneering level.";
}