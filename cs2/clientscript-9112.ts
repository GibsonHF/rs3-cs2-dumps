//
function script9112(int0: component): void {
    var string0 = "";
    if (((2147483647 / 5) < varclient_3764)) {
        string0 = "Over $2 Bil";
    } else {
        string0 = `$${TOSTRING_LOCALISED(SCALE(500, 100, varclient_3764), 1)}`;
    };
    var int1 = (varclient_3763 / 3);
    script8800(`Total charity donation:<br>$${TOSTRING_LOCALISED(int1, 1)} US$ from coins<br>${string0} US$ from Bonds`, int0, -1);
    return;
}