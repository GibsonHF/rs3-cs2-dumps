//
function script20418(int0: dbrow, int1: int): string {
    if ((DATE_RUNEDAY() < int1)) {
        return `Time Until Start: ${script3354((int1 - 1), 1, "")}`;
    };
    if ((script11205(int0) == true)) {
        return `Time Remaining: ${script3354(((int1 + 7) - 1), 1, "")}`;
    };
    return "Week has ended!";
}