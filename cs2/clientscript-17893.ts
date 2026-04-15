//
function script17893(int0: dbrow): int {
    if ((int0 == -1 as dbrow)) {
        script12478("Invalid Pass.");
        return 0;
    };
    var int1 = script17872(int0);
    if ((int1 == -1)) {
        return 0;
    };
    return (script17862(int0) - (script17890(int0) + int1));
}