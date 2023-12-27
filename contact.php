<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];

    // Validate email (you can add more validation if needed)
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
    } else {
        $to = "vioricapetrov8@gmail.com"; // Replace with your email address
        $subject = "New Contact Form Submission";
        $message = "Email: $email";

        // Send email
        mail($to, $subject, $message);

        echo "Email sent successfully";
    }
}
?>
