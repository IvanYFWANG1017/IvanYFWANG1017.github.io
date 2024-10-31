<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 获取表单字段
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $message = htmlspecialchars(trim($_POST['message']));
    
    // 指定接收邮件的邮箱地址
    $to = "729713324@qq.com";  // 替换为目标邮箱地址
    $subject = "公司网页留言";
    
    // 邮件内容
    $body = "姓名: $name\n";
    $body .= "邮箱: $email\n";
    $body .= "电话: $phone\n";
    $body .= "留言:\n$message\n";
    
    // 邮件头信息
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    // 发送邮件
    if (mail($to, $subject, $body, $headers)) {
        echo "感谢您的留言！我们会尽快联系您。";
    } else {
        echo "邮件发送失败，请稍后重试。";
    }
}
?>
