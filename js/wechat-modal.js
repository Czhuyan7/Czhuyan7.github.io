document.addEventListener('DOMContentLoaded', function() {
    const wechatLinks = document.querySelectorAll('a[href="javascript:void(0);"]');
    wechatLinks.forEach(link => {
      if (link.querySelector('.fa-weixin')) {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          Swal.fire({
            title: ' 添加我的微信',
            html: `
              <div style="text-align:center;">
                <img src="/img/好友二维码/微信好友二维码.jpg" alt="微信二维码" 
                     style="max-width:280px;border-radius:12px;margin:15px 0;border:2px solid #f0f0f0;">
                <p style="margin:10px 0;font-size:18px;color:#333;">微信号: <strong style="color:#49B1F5;">19127679667</strong></p>
                <p style="color:#666;margin-bottom:10px;">请使用微信扫描二维码添加好友</p>
                <p style="color:#999;font-size:14px;">或者搜索微信号添加</p>
              </div>
            `,
            showCloseButton: true,
            showConfirmButton: false,
            width: '420px',
            background: '#fff',
            padding: '25px',
            borderRadius: '15px'
          });
        });
      }
    });
  });