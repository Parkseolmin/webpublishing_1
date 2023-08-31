// 1. gnb 마우스오버, 포커스시 밑줄 => span.bar
$(function () {
  $('.gnb li a').on('mouseenter focus', function () {
    const bar = $(this).position().left;
    const widNum = $(this).width();
    $('span.bar').css({ left: bar + 'px', width: widNum + 'px', opacity: 1 });
  });
  $('.gnb li a').on('mouseleave focus', function () {
    $('span.bar').css({ left: 0, width: 0, opacity: 0 });
  });
});

// 2. circleBox의 SVG길이 구하기
$(function () {
  $('.svgAni')
    .find('path')
    .each(function (i, path) {
      const length = path.getTotalLength();
      // alert(length);
    });
});

// 3. scrolla - 스크롤애니메이션 설정
$(function () {
  $('.animate').scrolla({
    mobile: true, // 모바일버전 시 활성화
    once: true, // 계속 반복
  });
});

// 4. 배경색 변경
$(window).on('scroll resize', function () {
  const scrollTop = $(document).scrollTop();
  bgColor();
  function bgColor() {
    if (scrollTop > 1400) {
      $('body').addClass('on');
    } else {
      $('body').removeClass('on');
    }
    if (scrollTop > 2700) {
      $('body').removeClass('on');
    }
  }
});
