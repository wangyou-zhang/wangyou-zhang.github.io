$(document).ready(function () {

  $(".paper-tag-badge.paper-year").on("click", function () {
    var year = $(this).text();
    $(".paper-tag-badge.paper-year").each(function () {
      if ($(this).text() !== year) {
        $(this).parent().addClass("paper-year-hide");
      } else {
        $(this).parent().removeClass("paper-year-hide");
      }
    });
    var badgeContainer;
    if ($(".page__title").find(".paper-tag-badge-container").length > 0) {
      badgeContainer = $(".page__title").find(".paper-tag-badge-container");
    } else {
      badgeContainer = $("<span class='paper-tag-badge-container'></span>");
      $(".page__title").append(badgeContainer);
    }
    if (badgeContainer.find(".paper-tag-badge-item[data-badge='year']").length > 0) {
      return; // If the button already exists, do nothing
    }
    var badgeItem = $("<span class='paper-tag-badge-item' data-badge='year'></span>");
    badgeContainer.append(badgeItem);
    var yearButton = $(this).clone();
    badgeItem.append(yearButton);
    var closeButton = $("<img class='close-button'></img>");
    closeButton.on("click", function (e) {
      e.stopPropagation(); // Prevent the click event from bubbling up to the year button
      $(".paper-tag-badge.paper-year").each(function () {
        $(this).parent().removeClass("paper-year-hide");
      });
      badgeItem.remove();
    });
    badgeItem.append(closeButton);
  });

  $(".paper-tag-badge.paper-pub").on("click", function () {
    var pub = $(this).text();
    $(".paper-tag-badge.paper-pub").each(function () {
      if ($(this).text() !== pub) {
        $(this).parent().addClass("paper-pub-hide");
      } else {
        $(this).parent().removeClass("paper-pub-hide");
      }
    });

    if ($(".page__title").find(".paper-tag-badge-container").length > 0) {
      badgeContainer = $(".page__title").find(".paper-tag-badge-container");
    } else {
      badgeContainer = $("<span class='paper-tag-badge-container'></span>");
      $(".page__title").append(badgeContainer);
    }
    if (badgeContainer.find(".paper-tag-badge-item[data-badge='pub']").length > 0) {
      return; // If the button already exists, do nothing
    }
    var badgeItem = $("<span class='paper-tag-badge-item' data-badge='pub'></span>");
    badgeContainer.append(badgeItem);
    var pubButton = $(this).clone();
    badgeItem.append(pubButton);
    var closeButton = $("<img class='close-button'></img>");
    closeButton.on("click", function (e) {
      e.stopPropagation(); // Prevent the click event from bubbling up to the pub button
      $(".paper-tag-badge.paper-pub").each(function () {
        $(this).parent().removeClass("paper-pub-hide");
      });
      badgeItem.remove();
    });
    badgeItem.append(closeButton);
  });
});
