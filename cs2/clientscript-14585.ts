//
function script14585(int0: dbrow): string {
    if ((script14588(int0) == 1)) {
        return "I have solved this mystery.";
    };
    var int1 = script14584(int0);
    switch (int1) {
        case 0: {
            return "I have yet to discover any information on this mystery.";
        }
        case 1: {
            return "I am currently looking into this mystery.";
        }
        case 3: {
            return "I should talk to the site manager about this mystery.";
        }
    };
    script12478(`Invalid mystery state: ${inttostring(int1, 10)}`);
    return "";
}