function myFunction() {
  var x = document.getElementById("nav_bar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const $bigB = document.querySelector('.big');
const $smallB = document.querySelector('.small');
const $hoverables1 = document.querySelectorAll('a');
const $hoverables2 = document.querySelectorAll('.note');

document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables1.length; i++) {
  $hoverables1[i].addEventListener('mouseenter', onMouseHover);
  $hoverables1[i].addEventListener('mouseleave', onMouseHoverOut);
}

for (let i = 0; i < $hoverables2.length; i++) {
  $hoverables2[i].addEventListener('mouseenter', onMouseHover);
  $hoverables2[i].addEventListener('mouseleave', onMouseHoverOut);
}

function onMouseMove(e) {
  TweenMax.to($bigB, .4, {
    x: e.clientX - 23,
    y: e.clientY - 15
  })
  TweenMax.to($smallB, .1, {
    x: e.clientX - 3,
    y: e.clientY - 2
  })
}

function onMouseHover() {
  TweenMax.to($bigB, .3, {
    scale: 0.001
  })
}

function onMouseHoverOut() {
  TweenMax.to($bigB, .3, {
    scale: 1
  })
}


function footnote1() {
  var popup = document.getElementById("foot1");
  popup.classList.toggle("show");
}

function footnote2() {
  var popup = document.getElementById("foot2");
  popup.classList.toggle("show");
}

function footnote3() {
  var popup = document.getElementById("foot3");
  popup.classList.toggle("show");
}

function footnote4() {
  var popup = document.getElementById("foot4");
  popup.classList.toggle("show");
}

function footnote5() {
  var popup = document.getElementById("foot5");
  popup.classList.toggle("show");
}

function footnote6() {
  var popup = document.getElementById("foot6");
  popup.classList.toggle("show");
}

function quote() {
  var popup = document.getElementById("quote");
  popup.classList.toggle("show");
}


let mybutton = document.getElementById("top");

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.addEventListener('click', e => {
  const t = e.target;
  if (t.matches('.clickable[data-target]')) {
    const targetSelector = t.getAttribute('data-target');
    const targetEl = document.querySelector(targetSelector);
    if (!targetEl) return;

    const parentContainer = t.closest('.branch-children') || document.getElementById('root');

    // Hide all shown elements
    parentContainer.querySelectorAll('.branch-children.fade.showing').forEach(el => {
      el.classList.remove('showing', 'visible');
      el.offsetHeight;
      el.style.display = 'none';
    });

    parentContainer.querySelectorAll('.clickable.active').forEach(el => {
      el.classList.remove('active');
    });

    targetEl.style.display = 'block';
    targetEl.classList.add('showing');
    requestAnimationFrame(() => {
      targetEl.classList.add('visible');
    });

    t.classList.add('active');
    updateHash();
  }
});


function updateHash() {
  const activeIds = Array.from(document.querySelectorAll('.clickable.active')).map(el => el.id);
  window.location.hash = activeIds.join('');
}

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.hash.length > 1) {
    const ids = window.location.hash.substring(1).split('');
    ids.forEach(id => {
      const trigger = document.getElementById(id);
      if (trigger && trigger.matches('.clickable[data-target]')) {
        const targetSelector = trigger.getAttribute('data-target');
        const targetEl = document.querySelector(targetSelector);
        if (!targetEl) return;

        const parentContainer = trigger.closest('.branch-children') || document.getElementById('root');

        // Remove any old visible/showing states
        parentContainer.querySelectorAll('.branch-children.fade.showing, .branch-children.fade.visible').forEach(el => {
          el.classList.remove('showing', 'visible');
          el.style.display = 'none';
        });

        parentContainer.querySelectorAll('.clickable.active').forEach(el => {
          el.classList.remove('active');
        });

        // Start the fade-in flow
        targetEl.style.display = 'block';
        targetEl.classList.add('showing');
        requestAnimationFrame(() => {
          targetEl.classList.add('visible');
        });

        trigger.classList.add('active');
      }
    });
  }
});