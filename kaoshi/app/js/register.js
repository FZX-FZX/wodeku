var register = (function () {
    var obj, $p, reg;
    return {
        init(ele) { //设置一个形参
            obj = document.querySelector(ele);//通用查找节点
            $password = obj.querySelector('#password');
            $passwords = obj.querySelector('#passwords');
            $tel = obj.querySelector('#tel');
            $submit = obj.querySelector('.btn');
            $pAll = obj.querySelectorAll('p');
            this.event();
        },
        event() {
            const _this = this;
            $password.onblur = function () {
                $p = this.nextElementSibling;
                if (this.value == '') {
                    $p.innerHTML = "内容不能为空！";
                    $p.className = 'p2';
                    return;
                }
                reg = /^\w{6,10}$/
                if (reg.test(this.value)) {
                    $p.innerHTML = '验证成功';
                    $p.className = 'p1';
                } else {
                    $p.innerHTML = '格式错误';
                    $p.className = 'p2';
                }
                $passwords.onblur();
            }
            $passwords.onblur = function () {
                $p = this.nextElementSibling;
                if (this.value == '') {
                    $p.innerHTML = "内容不能为空！";
                    $p.className = 'p2';
                    return;
                }
                if (this.value == $password.value) {
                    $p.innerHTML = '验证成功';
                    $p.className = 'p1';
                } else {
                    $p.innerHTML = '两次输入的密码不一致！';
                    $p.className = 'p2';
                }
            }
            $tel.onblur = function () {
                $p = this.nextElementSibling;
                if (this.value == '') {
                    $p.innerHTML = "内容不能为空！";
                    $p.className = 'p2';
                    return;
                }
                reg = /^1[35789]\d{9}$/
                if (reg.test(this.value)) {
                    $p.innerHTML = '验证成功';
                    $p.className = 'p1';
                } else {
                    $p.innerHTML = '格式错误';
                    $p.className = 'p2';
                }
            }
            $submit.onclick = function () {
               for(let i=0;i<$Allp.length;i++){
                  if($Allp[i].className != 'p1'){
                    $Allp[i].previousElementSibling.focus();
                    return;
                  }
               }
               alert("注册成功！");
            }
        }
    }
}())
register.init('.conent');//传入最大的盒子作为实参