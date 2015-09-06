var swipe = function(option) {
    this.effect = option.effect || 'fade';
    this.pagination = option.pagination || null;
    this.buttonPrev = option.buttonPrev || null;
    this.buttonNext = option.buttonNext || null;
    this.container =  option.container || null;
    this.slides = option.slides || '.swipe-slides';
    this.start = option.start || 1;
    this.activeSlide = this.start;

    this.prev = function() {
      console.log('click prev');
      if ( this.activeSlide > 1 ) {
        //顯示下一張
        $(this.container + '>' + this.slides + '> .swipe-slide:nth-child(' + (this.activeSlide - 1) + ')')
          .transition('slide right');

        //隱藏目前的
        $(this.container + '>' + this.slides + '> .swipe-slide:nth-child(' + (this.activeSlide - 1) + ')')
          .transition('slide left');

        //update activeSlide
        this.activeSlide++;
      }
    }

    this.next = function() {
      console.log('click next');
      if( this.activeSlide < slides.length ) {
        //顯示前一張
        $(this.container + '>' + this.slides + '> .swipe-slide:nth-child(' + (this.activeSlide - 1) + ')')
          .transition('slide left');

        //隱藏目前的
        $(this.container + '>' + this.slides + '> .swipe-slide:nth-child(' + (this.activeSlide - 1) + ')')
          .transition('slide ');

        //update activeSlide
        this.activeSlide--;
      }
    }

    //抓slide 出來
    var slides = $(this.container + '>' + this.slides + '> .swipe-slide');

    //設定slide狀態 隱藏 / 顯示
    slides.addClass('hidden');

    //抓出起始頁
    var start = $(this.container + '>' + this.slides + '> .swipe-slide:nth-child(' + this.start + ')')
    start.removeClass('hidden');


    //button
    var prev = $(this.buttonPrev);
    prev.append('<a href="#"><i class="chevron left icon" /></a>')

    var next = $(this.buttonNext);
    next.append('<a href="#"><i class="chevron right icon" /></a>')

    prev.first().click(this.prev());

    next.first().click(this.next());


}
