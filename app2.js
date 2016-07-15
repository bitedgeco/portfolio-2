var projects = [];

function Repos (opts) {
  this.title = opts.title;
  this.author = opts.author;
  this.authorUrl = opts.authorUrl;
  this.publishedOn = opts.publishedOn;
}

Repos.prototype.toHtml = function () {
  var source = $('#repos-template').html();
  var template = Handlebars.compile(source);
  // var $newProject = $('article.template').clone();
  // $newProject.attr('id', this.title);
  // $newProject.find('h1.project-title').text(this.title);
  // $newProject.find('a.author-url').text(this.author);
  // $newProject.find('a.author-url').attr('href', this.authorUrl);
  // $newProject.find('time').attr('pubdate', this.publishedOn);
  // $newProject.find('time[pubdate]').attr('title', this.publishedOn);
  // $newProject.find('time').html('about ' + parseInt((new Date() - new
  // Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  //
  // $newProject.removeClass('template');
  // return $newProject;
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000);
  this.publishTime = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';

  return template(this);
};

ourLocalData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

ourLocalData.forEach(function(ele) {
  projects.push(new Repos(ele));
});

projects.forEach(function(a) {
  $('#repos').append(a.toHtml());
});



var portfolioView = {};

portfolioView.handleMainNav = function() {
  $('section.tab-content section').hide();
  $('.main-nav').on('click', '.tab', function(){
    var a = $('section#repos').css('display');
    var b = $('section#about').css('display');
    if((a === 'none') && (b === 'none')) {
      console.log(a,b);
      var $dataContent = $(this).attr('data-content');
      $('section.tab-content section').hide();
      $('section#' + $dataContent).show();
    } else {
      $('section#repos').hide();
      $('section#about').hide();
    }

  });
};
portfolioView.handleMainNav();
