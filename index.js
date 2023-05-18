function sendEmail() {
    let name = document.getElementById("account_name").value;
    let phone = document.getElementById("account_phone").value;
    let regisBranch = document.getElementById("nganh_dang_ky").value;
    if (name === '' || phone === '' || regisBranch === 'none') {
        alert("Vui lòng điền đầy đủ thông tin")
        return
    }
    let email = 'trananhhaonuce@gmail.com'
    let subject = name + " đã để lại thông tin. Tư vấn miễn phí theo các thông tin dưới đây";
    let body = "Họ và tên: " + name + "\n" +
                "Số điện thoại: " + phone + "\n" +
                "Ngành đăng ký: " + regisBranch
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://be-neu-elearning.onrender.com/send-email');
    xhr.setRequestHeader('Content-Type', 'application/json')
    alert("Chúng tôi đã tiếp nhận thông tin. Chúng tôi sẽ liên lạc với bạn trong giây lát")
    xhr.onload = () => {
        if (xhr.status !== 200) {
            alert('Error sending email')
        }
    }

    xhr.send(JSON.stringify({name, email, subject, body} ))
}
