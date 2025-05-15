<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    $to = "FahrzeugTechnikUlbricht@gmail.com";
    $subject = "Neue Nachricht von $name";
    $body = "Name: $name\nEmail: $email\n\nNachricht:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        // ✅ Erfolgreich: weiterleiten zur Dankeseite
        header("Location: danke.html");
        exit;
    } else {
        echo "Fehler beim Senden der E-Mail.";
    }
}
?>
