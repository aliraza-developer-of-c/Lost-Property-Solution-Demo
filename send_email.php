<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'] ?? 'Not provided';
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    // Email recipient (change to your email)
    $to = "your-email@example.com";
    
    // Email subject
    $email_subject = "New Contact Form Submission: " . htmlspecialchars($subject);
    
    // Email body
    $email_body = "You have received a new message from your website contact form.\n\n";
    $email_body .= "Name: " . htmlspecialchars($name) . "\n";
    $email_body .= "Email: " . htmlspecialchars($email) . "\n";
    $email_body .= "Phone: " . htmlspecialchars($phone) . "\n";
    $email_body .= "Subject: " . htmlspecialchars($subject) . "\n\n";
    $email_body .= "Message:\n" . htmlspecialchars($message) . "\n";
    
    // Email headers
    $headers = "From: " . htmlspecialchars($email) . "\r\n";
    $headers .= "Reply-To: " . htmlspecialchars($email) . "\r\n";
    
    // Send email
    if (mail($to, $email_subject, $email_body, $headers)) {
        // Success - redirect to thank you page
        header('Location: thank-you.html');
        exit;
    } else {
        // Error
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    // Not a POST request
    header("Location: contact.html");
    exit;
}