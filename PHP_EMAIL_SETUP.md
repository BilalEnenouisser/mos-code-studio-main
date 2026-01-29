# PHP Email Setup Guide

I've created **two PHP files** for you to choose from:

## Option 1: Simple PHP mail() - `send-email.php`
✅ **Use this if:**
- Your server has `mail()` function enabled (most shared hosting does)
- You want the simplest setup

### Setup Steps:
1. Open `public/send-email.php`
2. Change line 38: `$to = "info@yourdomain.com";` to your actual email
3. Upload the file to your web server
4. Done!

---

## Option 2: SMTP with PHPMailer - `send-email-smtp.php`
✅ **Use this if:**
- You have SMTP server credentials
- You want more reliable delivery
- You need to send from a specific domain email

### Setup Steps:
1. Install PHPMailer on your server:
   ```bash
   composer require phpmailer/phpmailer
   ```

2. Open `public/send-email-smtp.php` and update these lines:
   - Line 51: `$mail->Host = 'smtp.yourdomain.com';` (your SMTP server)
   - Line 53: `$mail->Username = 'info@yourdomain.com';` (your SMTP username)
   - Line 54: `$mail->Password = 'your-smtp-password';` (your SMTP password)
   - Line 55: `$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;` (or SMTPS for SSL)
   - Line 56: `$mail->Port = 587;` (587 for TLS, 465 for SSL)
   - Line 60: `$mail->setFrom('info@yourdomain.com', 'ДОБРОсофт Website');`
   - Line 61: `$mail->addAddress('info@yourdomain.com', 'ДОБРОсофт');`

3. Upload the file to your web server
4. Done!

---

## Frontend Configuration

The React form is already configured to send to `/send-email.php`

**For production:** Update line 35 in `src/components/Contact.tsx`:
```typescript
const response = await fetch('https://yourdomain.com/send-email.php', {
```

**For local testing with PHP:**
```typescript
const response = await fetch('http://localhost/send-email.php', {
```

---

## Testing Locally

If you want to test locally:

1. Install XAMPP, WAMP, or MAMP (includes PHP + Apache)
2. Copy the PHP file to your `htdocs` or `www` folder
3. Start Apache server
4. Update the fetch URL to `http://localhost/send-email.php`

---

## Security Notes

- The PHP files include CORS headers for cross-origin requests
- All inputs are sanitized and validated
- Email addresses are validated
- HTML special characters are escaped to prevent XSS

---

## Which file should you use?

- **Use `send-email.php`** if you're on shared hosting (easier)
- **Use `send-email-smtp.php`** if you have SMTP credentials (more professional)

Both files are ready to use - just update the email addresses and upload to your server!
