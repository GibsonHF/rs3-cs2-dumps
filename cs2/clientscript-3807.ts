//
function script3807(): void {
    var int1 = enum_getvalue(33, 33, 6004 as cs2enum, int0);
    if ((int1 == -1 as obj)) {
        stack("This item cannot be converted using a Forsaken dye kit.");
        return;
    };
    stack(`Converts into ${OC_NAME(int1)} using one Forsaken dye kit.<br><br>The standard item must be fully repaired and unaugmented, and you must meet its equipment requirements and those of the Forsaken item. The conversion is permanent and consumes the kit. If lost or destroyed, the Forsaken item must be crafted again.`);
    return;
}