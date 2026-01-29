<?php
// This version uses PHPMailer for SMTP
// Install PHPMailer: composer require phpmailer/phpmailer

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Make sure you have PHPMailer installed via Composer

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

// Validate required fields
if (empty($data['name']) || empty($data['email']) || empty($data['message'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'All fields are required']);
    exit();
}

// Sanitize inputs
$name = htmlspecialchars(strip_tags($data['name']));
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars(strip_tags($data['phone'] ?? ''));
$message = htmlspecialchars(strip_tags($data['message']));

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit();
}

// Create PHPMailer instance
$mail = new PHPMailer(true);

try {
    // SMTP Configuration
    $mail->isSMTP();
    $mail->Host       = 'smtp.yourdomain.com';  
    $mail->SMTPAuth   = true;
    $mail->Username   = 'info@yourdomain.com';  
    $mail->Password   = 'your-smtp-password';  
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; 
    $mail->Port       = 587;                    
    $mail->CharSet    = 'UTF-8';

    // Recipients
    $mail->setFrom('info@yourdomain.com', 'ДОБРОсофт Website');
    $mail->addAddress('info@yourdomain.com', 'ДОБРОсофт'); 
    $mail->addReplyTo($email, $name);

    // Content
    $mail->isHTML(true);
    $mail->Subject = "Новая заявка с сайта ДОБРОсофт от " . $name;
    
    $mail->Body = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #2563eb; color: white; padding: 20px; text-align: center; }
            .content { background: #f9fafb; padding: 20px; margin: 20px 0; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1f2937; }
            .value { color: #4b5563; }
            .footer { text-align: center; color: #6b7280; font-size: 12px; margin-top: 20px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>Новая заявка с сайта</h2>
            </div>
            <div class='content'>
                <div class='field'>
                    <span class='label'>Имя:</span><br>
                    <span class='value'>{$name}</span>
                </div>
                <div class='field'>
                    <span class='label'>Email:</span><br>
                    <span class='value'>{$email}</span>
                </div>
                <div class='field'>
                    <span class='label'>Телефон:</span><br>
                    <span class='value'>{$phone}</span>
                </div>
                <div class='field'>
                    <span class='label'>Сообщение:</span><br>
                    <span class='value'>{$message}</span>
                </div>
            </div>
            <div class='footer'>
                <p>Это письмо отправлено с формы обратной связи на сайте ДОБРОсофт</p>
            </div>
        </div>
    </body>
    </html>
    ";

    $mail->AltBody = "Имя: {$name}\nEmail: {$email}\nТелефон: {$phone}\nСообщение: {$message}";

    $mail->send();
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Mailer Error: ' . $mail->ErrorInfo]);
}
?>
