//
function script20815(int0: number): string {
    var int1 = dbrow_getfield(int0, 1515584, 0);
    var string0 = "<br>";
    var string1 = `Ingredients:<br>${script12104(int1, 1, string0)}`;
    return string1;
}