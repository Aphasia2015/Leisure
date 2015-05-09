function change(e, val) {
    e.addEventListener('focus', function() {
        if (this.value === val) {
            this.value = '';
        }
    }, false);

    e.addEventListener('blur', function() {
        if (this.value === '') {
            this.value = val;
        }
    }, false);
}

function sbar() {
    var sbar = document.getElementsByName('s');

    for (var i = 0; i < sbar.length; i++) {
        change(sbar[i], '搜索');
    }
}

function ie() {
    var form = document.getElementById('comment-form');

    if (form) {
        var input = form.getElementsByTagName('input');

        if (input[0] && !('placeholder' in input[0])) {
            for (var i = 0; i < input.length; i++) {
                var pla = input[i].getAttribute('placeholder');

                input[i].value = pla;
                change(input[i], pla);
            }
        }
    }
}

function key() {
    var event = window.event || arguments.callee.caller.arguments[0],
        sub = document.getElementById('submit');

    if ((event.metaKey && event.keyCode == 13) || (event.ctrlKey && event.keyCode == 13)) {
        sub.click();
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }
}

function comment() {
    var area = document.getElementById('textarea');

    if (area) {
        area.addEventListener('keydown', function() {
            key();
        }, false);
    }
}

function toggle(e) {
    var _arguments = arguments;

    (function(count) {
        e.addEventListener('click', function() {
            count >= _arguments.length && (count = 1);
            _arguments[count++ % _arguments.length].call(e);
        }, false)
    })(1);
}

function menu(e) {
    var link = e.getElementsByTagName('a'),
        mh = link.length * 51;

    e.style.height = mh + 'px';
}

function show() {
    var btn = document.getElementById('toggle'),
        nav = document.getElementById('nav');

    toggle(btn, function() {
        btn.className = 'show-btn';
        menu(nav);
    }, function() {
        btn.className = '';
        nav.style.height = 0;
    });
}

function addLoadEvent(func) {
    var oldonload = window.onload;

    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

addLoadEvent(sbar());
addLoadEvent(comment());
addLoadEvent(show());
addLoadEvent(ie());
