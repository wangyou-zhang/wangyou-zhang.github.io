/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function () {
  // Set the theme on page load
  var setTheme = function (theme) {
    const use_theme = theme || localStorage.getItem("theme") || $("html").attr("data-theme");
    if (use_theme === "dark") {
      $("html").attr("data-theme", "dark");
      $("#theme-icon").removeClass("fa-sun").addClass("fa-moon");
    } else if (use_theme === "light") {
      $("html").removeAttr("data-theme");
      $("#theme-icon").removeClass("fa-moon").addClass("fa-sun");
    }
  }
  setTheme();

  // Toggle the theme
  var toggleTheme = function () {
    const current_theme = $("html").attr("data-theme");
    const new_theme = current_theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", new_theme);
    setTheme(new_theme);
  }
  $('#theme-toggle').on('click', function () {
    toggleTheme();
  });

  // Set the locale on page load
  var setLocale = function (locale) {
    const use_locale = locale || localStorage.getItem("mylocale") || $("html").attr("data-locale");
    if (use_locale === "en") {
      $("html").attr("data-locale", "en");
      $("#locale-icon").attr("src", "/images/english-to-chinese.svg");
      $("#locale-icon").attr("title", "Toggle locale (→ zh-CN)");
    } else if (use_locale === "zh-CN") {
      $("html").attr("data-locale", "zh-CN");
      $("#locale-icon").attr("src", "/images/chinese-to-english.svg");
      $("#locale-icon").attr("title", "Toggle locale (→ en)");
    }
  }
  setLocale();

  // Switch the locale
  var switchLocale = function () {
    const current_locale = $("html").attr("data-locale");
    const new_locale = current_locale === "en" ? "zh-CN" : "en";
    localStorage.setItem("mylocale", new_locale);
    setLocale(new_locale);
    // if current url is not in the same locale, redirect it
    const current_url = window.location.href;
    const current_path = window.location.pathname;
    const current_locale_path = current_path.replace(/\/(en|zh-CN)/, `/${new_locale}`);
    const new_url = current_url.replace(current_path, current_locale_path);
    $(location).prop('href', new_url);
  }
  $('#locale-toggle').on('click', function () {
    switchLocale();
  });

  // These should be the same as the settings in _variables.scss
  const scssLarge = 925; // pixels

  // Sticky footer
  var bumpIt = function () {
    $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
  },
    didResize = false;

  bumpIt();

  $(window).resize(function () {
    didResize = true;
  });
  setInterval(function () {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);

  // FitVids init
  fitvids();

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function () {
    $(".author__urls").fadeToggle("fast", function () { });
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // Restore the follow menu if toggled on a window resize
  jQuery(window).on('resize', function () {
    if ($('.author__urls.social-icons').css('display') == 'none' && $(window).width() >= scssLarge) {
      $(".author__urls").css('display', 'block')
    }
  });

  // init smooth scroll, this needs to be slightly more than then fixed masthead height
  $("a").smoothScroll({ offset: -65 });

  // add lightbox class to all image links
  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function () {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

});
