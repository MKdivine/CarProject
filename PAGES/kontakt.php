<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $nachricht = strip_tags(trim($_POST["nachricht"]));

    $empfaenger = "FahrzeugTechnikUlbricht@gmail.com"; // Deine Zieladresse
    $betreff = "Neue Nachricht von der Website";
    $inhalt = "Name: $name\nE-Mail: $email\n\nNachricht:\n$nachricht";
    $header = "From: $email";

    if (mail($empfaenger, $betreff, $inhalt, $header)) {
        echo "<h2 style='text-align:center;color:green;margin-top:50px;'>Vielen Dank! Ihre Nachricht wurde gesendet.</h2>";
    } else {
        echo "<h2 style='text-align:center;color:red;margin-top:50px;'>Fehler beim Senden der Nachricht.</h2>";
    }
} else {
    echo "Ungültige Anfrage.";
}
?>
